const $ = (id) => document.getElementById(id);

const loginView = $('loginView');
const adminView = $('adminView');
const loginForm = $('loginForm');
const loginError = $('loginError');
const toast = $('toast');

function showToast(message) {
  toast.textContent = message;
  toast.classList.remove('hidden');
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.add('hidden'), 2500);
}

function showAdmin() { loginView.classList.add('hidden'); adminView.classList.remove('hidden'); }
function showLogin() { adminView.classList.add('hidden'); loginView.classList.remove('hidden'); }

async function checkSession() {
  try {
    const res = await fetch('/api/admin/me', { credentials: 'include' });
    if (res.ok) showAdmin(); else showLogin();
  } catch { showLogin(); }
}

loginForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  loginError.classList.add('hidden');
  const password = $('adminPassword').value;
  try {
    const res = await fetch('/api/admin/login', {
      method:'POST', credentials:'include', headers:{'Content-Type':'application/json'},
      body: JSON.stringify({ password })
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || 'No se pudo iniciar sesión.');
    $('adminPassword').value = '';
    showAdmin();
    showToast('Sesión iniciada.');
  } catch (error) {
    loginError.textContent = error.message;
    loginError.classList.remove('hidden');
  }
});

$('logoutBtn').addEventListener('click', async () => {
  await fetch('/api/admin/logout', { credentials:'include' });
  showLogin();
});

document.querySelectorAll('[data-section]').forEach(button => {
  button.addEventListener('click', () => {
    ['codesSection','subscriptionSection'].forEach(id => $(id).classList.add('hidden'));
    $(button.dataset.section).classList.remove('hidden');
    $(button.dataset.section).scrollIntoView({ behavior:'smooth', block:'start' });
  });
});

$('getCodesBtn').addEventListener('click', async () => {
  const raw = $('codePayload').value.trim();
  let payload = {};
  if (raw) {
    try { payload = JSON.parse(raw); }
    catch { showToast('El JSON no es válido.'); return; }
  }
  const button = $('getCodesBtn');
  button.disabled = true;
  button.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Consultando...';
  try {
    const res = await fetch('/api/admin/codes', {
      method:'POST', credentials:'include', headers:{'Content-Type':'application/json'}, body:JSON.stringify(payload)
    });
    const data = await res.json();
    $('codeResult').value = typeof data === 'string' ? data : JSON.stringify(data, null, 2);
    if (!res.ok) showToast(data.error || 'Error al consultar proveedor.');
    else showToast('Respuesta recibida.');
  } catch { showToast('No se pudo consultar el proveedor.'); }
  finally { button.disabled = false; button.innerHTML = '<i class="fas fa-bolt mr-2"></i>Obtener códigos'; }
});

$('copyCodeResult').addEventListener('click', async () => {
  await navigator.clipboard.writeText($('codeResult').value);
  showToast('Respuesta copiada.');
});

const serviceName = $('serviceName');
const startDate = $('startDate');
const profile = $('profile');
const pin = $('pin');
const email = $('email');
const password = $('password');
const homeLink = $('homeLink');

function formatDate(date) {
  const dd = String(date.getDate()).padStart(2,'0');
  const mm = String(date.getMonth()+1).padStart(2,'0');
  const yy = String(date.getFullYear()).slice(-2);
  return `${dd}/${mm}/${yy}`;
}

function add30Days(dateString) {
  const [year, month, day] = dateString.split('-').map(Number);
  const date = new Date(year, month - 1, day);
  date.setDate(date.getDate() + 30);
  return date;
}

function isNetflix() { return serviceName.value.trim().toUpperCase() === 'NETFLIX'; }

function updateServiceUI() {
  const netflix = isNetflix();
  $('netflixBlock').classList.toggle('hidden', !netflix);
  $('profileBlock').classList.toggle('hidden', netflix);
  $('pinBlock').classList.toggle('hidden', netflix);
}

serviceName.addEventListener('input', () => {
  const start = serviceName.selectionStart;
  const end = serviceName.selectionEnd;
  serviceName.value = serviceName.value.toUpperCase();
  try { serviceName.setSelectionRange(start, end); } catch {}
  updateServiceUI();
  updatePreviewHeight();
});

$('createProfileBtn').addEventListener('click', () => {
  profile.value = 'Crear perfil';
  profile.focus();
  profile.setSelectionRange(profile.value.length, profile.value.length);
  showToast('Atajo agregado: Crear perfil.');
});
$('clearProfileBtn').addEventListener('click', () => { profile.value = ''; pin.value = ''; });

function buildMessage() {
  const name = serviceName.value.trim().toUpperCase();
  const start = new Date(startDate.value + 'T00:00:00');
  const end = add30Days(startDate.value);
  const startFormatted = formatDate(start);
  const endFormatted = formatDate(end);
  const terms = ['CONDICIONES DEL SERVICIO:', 'https://mb-streaming.netlify.app/?view=terms'].join('\n');

  if (isNetflix()) {
    const lines = [
      'NETFLIX',
      `✉ Correo: ${email.value.trim()}`,
      `🔐 Contraseña: ${password.value.trim()}`,
      `Fecha inicio: ${startFormatted}`,
      `Fecha vencimiento: ${endFormatted}`,
      homeLink.value.trim() ? `OBTENER CÓDIGOS ACTUALIZAR HOGAR:\n${homeLink.value.trim()}` : ''
    ].filter(Boolean);
    return `${lines.join('\n')}\n\n${terms}`;
  }

  const lines = [
    name,
    `✉ Correo: ${email.value.trim()}`,
    `🔐 Contraseña: ${password.value.trim()}`,
    profile.value.trim() ? `👤 Perfil: ${profile.value.trim()}` : '',
    pin.value.trim() ? `🔢 PIN: ${pin.value.trim()}` : '',
    `Fecha inicio: ${startFormatted}`,
    `Fecha vencimiento: ${endFormatted}`
  ].filter(Boolean);
  return `${lines.join('\n')}\n\n${terms}`;
}

function updatePreviewHeight() {
  const output = $('messageOutput');
  if (!output) return;
  output.style.height = 'auto';
  const min = window.innerWidth <= 640 ? 180 : 260;
  output.style.height = Math.max(min, output.scrollHeight) + 'px';
}

$('subscriptionForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const end = add30Days(startDate.value);
  $('messageOutput').value = buildMessage();
  updatePreviewHeight();
  $('expirationBadge').textContent = `Vencimiento: ${formatDate(end)}`;
  showToast('Mensaje generado.');
});

$('messageOutput').addEventListener('input', updatePreviewHeight);
window.addEventListener('resize', updatePreviewHeight);

startDate.addEventListener('change', () => {
  if (!startDate.value) return;
  $('expirationBadge').textContent = `Vencimiento: ${formatDate(add30Days(startDate.value))}`;
  if ($('messageOutput').value) {
    $('messageOutput').value = buildMessage();
    updatePreviewHeight();
  }
});

$('copyMessage').addEventListener('click', async () => {
  if (!$('messageOutput').value) return showToast('Primero genera el mensaje.');
  await navigator.clipboard.writeText($('messageOutput').value);
  showToast('Mensaje copiado.');
});

// Fecha actual como valor inicial.
const now = new Date();
startDate.value = `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')}`;
serviceName.value = serviceName.value.toUpperCase();
updateServiceUI();
updatePreviewHeight();
checkSession();

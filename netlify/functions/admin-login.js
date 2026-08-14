const { createSession, sessionCookie, json } = require('./_auth');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') return json(405, { error: 'Método no permitido' });

  const configuredPassword = process.env.ADMIN_PASSWORD;
  if (!configuredPassword) return json(500, { error: 'Falta configurar ADMIN_PASSWORD en Netlify.' });

  let body;
  try { body = JSON.parse(event.body || '{}'); } catch { return json(400, { error: 'Solicitud inválida.' }); }

  if (!body.password || body.password !== configuredPassword) {
    return json(401, { error: 'Contraseña incorrecta.' });
  }

  const token = createSession();
  return json(200, { ok: true }, { 'Set-Cookie': sessionCookie(token) });
};

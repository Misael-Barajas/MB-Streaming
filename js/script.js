// --- 1. CONFIGURACIÓN ---
const MY_PHONE_NUMBER = "523511563006"; 

// --- 2. DATOS ---
const products = [
    { id: 1, name: "Netflix Premium 4K", category: "streaming", price: "$120 MXN", description: "Cuenta completa privada o perfil compartido. Disfruta de la mejor calidad Ultra HD 4K.", features: ["1 Pantalla (Perfil)", "Calidad 4K UHD", "Sin anuncios", "Garantía total"], icon: "fa-film", color: "from-red-600 to-red-900" },
    { id: 2, name: "Disney+ & Star+", category: "streaming", price: "$80 MXN", description: "El combo perfecto. Películas de Disney, Marvel, Star Wars y deportes en vivo.", features: ["1 Pantalla", "Contenido 4K", "Deportes en vivo", "Soporte inmediato"], icon: "fa-star", color: "from-blue-600 to-indigo-900" },
    { id: 3, name: "Spotify Individual", category: "music", price: "$60 MXN", description: "Música sin interrupciones. Descarga tus canciones favoritas.", features: ["Cuenta Individual", "Sin publicidad", "Modo Offline", "Renovable"], icon: "fa-music", color: "from-green-500 to-green-800" },
    { id: 4, name: "HBO Max (Max)", category: "streaming", price: "$70 MXN", description: "Las mejores series de HBO. Game of Thrones, The Last of Us y mucho más.", features: ["Perfil Privado", "Calidad HD/4K", "Garantía del mes", "Multi-idioma"], icon: "fa-tv", color: "from-purple-600 to-indigo-800" },
    { id: 5, name: "YouTube Premium", category: "streaming", price: "$50 MXN", description: "Videos sin anuncios, reproducción en segundo plano y YouTube Music.", features: ["Sin anuncios", "YouTube Music", "Segundo plano", "Activación a tu correo"], icon: "fa-play", color: "from-red-500 to-orange-600" },
    { id: 6, name: "Canva Pro", category: "software", price: "$40 MXN", description: "Herramienta de diseño gráfico para no diseñadores. Acceso a millones de fotos.", features: ["Acceso a tu correo", "Plantillas Pro", "Quita fondos", "Duración 1 mes"], icon: "fa-palette", color: "from-cyan-500 to-blue-600" }
];

// --- 3. LÓGICA PRINCIPAL ---
const grid = document.getElementById('productsGrid');
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const emptyState = document.getElementById('emptyState');

function renderProducts(items) {
    grid.innerHTML = '';
    if (items.length === 0) {
        emptyState.classList.remove('hidden');
        return;
    }
    emptyState.classList.add('hidden');

    items.forEach((product, index) => {
        const card = document.createElement('div');
        card.className = `glass-card rounded-2xl overflow-hidden cursor-pointer fade-in`;
        card.style.animationDelay = `${index * 0.1}s`;
        card.onclick = () => openModal(product);

        card.innerHTML = `
            <div class="h-32 bg-gradient-to-br ${product.color} flex items-center justify-center relative group">
                <i class="fas ${product.icon} text-5xl text-white opacity-80 group-hover:scale-110 transition-transform duration-300"></i>
                <div class="absolute bottom-2 right-2 bg-black/40 px-2 py-1 rounded text-xs font-bold text-white uppercase backdrop-blur-sm">
                    ${product.category}
                </div>
            </div>
            <div class="p-5">
                <h3 class="font-bold text-lg text-white mb-1 truncate">${product.name}</h3>
                <p class="text-gray-400 text-sm line-clamp-2 mb-4 h-10">${product.description}</p>
                <div class="flex items-center justify-between border-t border-white/10 pt-4">
                    <span class="text-cyan-400 font-bold text-xl">${product.price}</span>
                    <span class="text-xs text-gray-500 font-medium bg-slate-800 px-2 py-1 rounded hover:bg-slate-700 transition-colors">Ver detalles &rarr;</span>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

function filterProducts() {
    const searchTerm = searchInput.value.toLowerCase();
    const category = categoryFilter.value;
    const filtered = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm) || product.description.toLowerCase().includes(searchTerm);
        const matchesCategory = category === 'all' || product.category === category;
        return matchesSearch && matchesCategory;
    });
    renderProducts(filtered);
}

searchInput.addEventListener('input', filterProducts);
categoryFilter.addEventListener('change', filterProducts);

// --- 4. MODAL ---
const modal = document.getElementById('productModal');
// Elementos del modal
const mTitle = document.getElementById('modalTitle');
const mDesc = document.getElementById('modalDescription');
const mPrice = document.getElementById('modalPrice');
const mFeatures = document.getElementById('modalFeatures');
const mHeader = document.getElementById('modalHeaderColor');
const mBtn = document.getElementById('modalBuyBtn');
const mCat = document.getElementById('modalCategory');

function openModal(product) {
    mTitle.innerText = product.name;
    mDesc.innerText = product.description;
    mPrice.innerText = product.price;
    mCat.innerText = product.category === 'streaming' ? 'Streaming' : product.category === 'music' ? 'Música' : 'Software';
    mHeader.className = `h-32 w-full bg-gradient-to-r ${product.color} flex items-center justify-center`;
    mFeatures.innerHTML = product.features.map(feat => `<li class="flex items-center gap-2"><i class="fas fa-check text-cyan-500 text-xs"></i> ${feat}</li>`).join('');
    
    mBtn.onclick = () => {
        const msg = `Hola MB Streaming 👋, me interesa: *${product.name}* (${product.price}). ¿Info de pago?`;
        window.open(`https://wa.me/${MY_PHONE_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
    };

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// --- 5. LOGICA DEL CHAT FLOTANTE ---
function toggleChat() {
    const widget = document.getElementById('chatWidget');
    const isHidden = widget.classList.contains('chat-hidden');
    const input = document.getElementById('chatInput');

    if (isHidden) {
        widget.classList.remove('hidden');
        setTimeout(() => {
            widget.classList.remove('chat-hidden');
            widget.classList.add('chat-visible');
            input.focus();
        }, 10);
    } else {
        widget.classList.remove('chat-visible');
        widget.classList.add('chat-hidden');
        setTimeout(() => {
            widget.classList.add('hidden');
        }, 300);
    }
}

function sendCustomMessage() {
    const input = document.getElementById('chatInput');
    const text = input.value.trim();
    if (!text) {
        input.classList.add('border-red-500');
        setTimeout(() => input.classList.remove('border-red-500'), 1000);
        return;
    }

    const url = `https://wa.me/${MY_PHONE_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    
    input.value = '';
    toggleChat();
}

// Event Listeners Globales
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
        const widget = document.getElementById('chatWidget');
        if (widget.classList.contains('chat-visible')) toggleChat();
    }
});

// Inicializar
renderProducts(products);

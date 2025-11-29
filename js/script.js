const MY_PHONE_NUMBER = "523511563006";

// --- DATOS ---
// - Si es precio único: usa 'price' y 'variants' null.
// - Si tiene opciones: usa 'variants' (array) y 'price' es el precio "desde" o del primer item.
const products = [
    // === PERFILES STREAMING ===
    { 
        id: 101, 
        name: "Netflix (Perfil)", 
        category: "streaming", 
        price: "$95 MXN", 
        description: "Perfil privado en cuenta compartida. Calidad 4K UHD garantizada.", 
        features: ["1 Pantalla", "Calidad 4K", "Sin anuncios", "Garantía 30 días"], 
        icon: "fa-film", 
        color: "from-red-600 to-red-900" 
    },
    { 
        id: 102, 
        name: "Apple TV+", 
        category: "streaming", 
        price: "$95 MXN", 
        description: "Disfruta de las mejores series originales de Apple.", 
        features: ["Series exclusivas", "Calidad 4K", "Acceso web/app", "Garantía total"], 
        icon: "fa-apple-alt", 
        color: "from-slate-600 to-slate-900" 
    },
    { 
        id: 103, 
        name: "YouTube Premium", 
        category: "streaming", 
        price: "$90 MXN", 
        description: "Videos sin anuncios y YouTube Music incluido.", 
        features: ["Sin publicidad", "YouTube Music", "Segundo plano", "Descargas"], 
        icon: "fa-play", 
        color: "from-red-500 to-orange-600",
        variants: [
            { label: "1 Mes", price: "$90 MXN" },
            { label: "3 Meses", price: "$200 MXN" },
            { label: "4 Meses", price: "$250 MXN" },
            { label: "12 Meses (1 Año)", price: "$650 MXN" }
        ]
    },
    { 
        id: 104, 
        name: "Disney+", 
        category: "streaming", 
        price: "$70 MXN", 
        description: "Tus historias favoritas de Disney, Pixar, Marvel y Star Wars.", 
        features: ["Películas y Series", "Deportes (según plan)", "Descargas", "Multi-dispositivo"], 
        icon: "fa-star", 
        color: "from-blue-600 to-indigo-900",
        variants: [
            { label: "Estándar (con anuncios)", price: "$70 MXN" },
            { label: "Premium (Sin anuncios)", price: "$95 MXN" }
        ]
    },
    { 
        id: 105, 
        name: "Viki Rakuten", 
        category: "streaming", 
        price: "$80 MXN", 
        description: "El mejor entretenimiento asiático. Doramas y más.", 
        features: ["Viki Pass", "HD", "Sin anuncios", "Estrenos"], 
        icon: "fa-heart", 
        color: "from-blue-400 to-blue-600" 
    },
    { 
        id: 106, 
        name: "Prime Video", 
        category: "streaming", 
        price: "$80 MXN", 
        description: "Series Amazon Originals y envíos gratis (consultar).", 
        features: ["Prime Video", "Series exclusivas", "Calidad UHD", "Soporte"], 
        icon: "fa-shopping-cart", 
        color: "from-blue-500 to-cyan-600" 
    },
    { 
        id: 107, 
        name: "HBO Max (Max)", 
        category: "streaming", 
        price: "$80 MXN", 
        description: "Todo HBO, Warner Bros, DC y Cartoon Network.", 
        features: ["Perfil Privado", "4K UHD", "Series top", "Garantía"], 
        icon: "fa-tv", 
        color: "from-purple-600 to-indigo-800" 
    },
    { 
        id: 108, 
        name: "Crunchyroll", 
        category: "streaming", 
        price: "$65 MXN", 
        description: "La colección de anime más grande del mundo.", 
        features: ["Fan Pack", "Sin anuncios", "Simulcast (Estrenos)", "Catálogo completo"], 
        icon: "fa-dragon", 
        color: "from-orange-400 to-orange-600" 
    },
    { 
        id: 109, 
        name: "VIX Premium", 
        category: "streaming", 
        price: "$65 MXN", 
        description: "Telenovelas, series latinas y Liga MX.", 
        features: ["Deportes en vivo", "Sin anuncios", "Originales VIX", "Garantía"], 
        icon: "fa-bullhorn", 
        color: "from-orange-500 to-red-500" 
    },
    { 
        id: 110, 
        name: "Paramount+", 
        category: "streaming", 
        price: "$65 MXN", 
        description: "Una montaña de entretenimiento. Series y películas.", 
        features: ["Originales", "Blockbusters", "Contenido infantil", "Garantía"], 
        icon: "fa-mountain", 
        color: "from-blue-700 to-blue-900" 
    },

    // === MÚSICA ===
    { 
        id: 201, 
        name: "Spotify Premium", 
        category: "music", 
        price: "$75 MXN", 
        description: "Millones de canciones y podcasts. Escucha offline.", 
        features: ["Sin anuncios", "Modo Offline", "Saltar canciones", "Audio alta calidad"], 
        icon: "fa-spotify", 
        color: "from-green-500 to-green-800",
        variants: [
            { label: "1 Mes", price: "$75 MXN" },
            { label: "3 Meses", price: "$200 MXN" }
        ]
    },
    { 
        id: 202, 
        name: "Deezer", 
        category: "music", 
        price: "$60 MXN", 
        description: "Tu música favorita, siempre contigo.", 
        features: ["HiFi", "Sin anuncios", "Offline", "Flow"], 
        icon: "fa-music", 
        color: "from-purple-500 to-pink-500" 
    },

    // === HERRAMIENTAS ===
    { 
        id: 301, 
        name: "Office 365", 
        category: "software", 
        price: "$280 MXN", 
        description: "Word, Excel, PowerPoint y 1TB de nube.", 
        features: ["Cuenta Original", "1 TB OneDrive", "Licencia 1 Año", "5 Dispositivos"], 
        icon: "fa-file-word", 
        color: "from-blue-600 to-blue-800" 
    },
    { 
        id: 302, 
        name: "Canva Pro", 
        category: "software", 
        price: "$50 MXN", 
        description: "Diseña como un profesional con contenido premium ilimitado.", 
        features: ["Kit de marca", "Quita fondos", "Contenido Premium", "Garantía"], 
        icon: "fa-palette", 
        color: "from-cyan-500 to-blue-600",
        variants: [
            { label: "1 Mes", price: "$50 MXN" },
            { label: "3 Meses", price: "$120 MXN" },
            { label: "12 Meses (1 Año)", price: "$400 MXN" }
        ]
    },
    { 
        id: 303, 
        name: "CapCut Pro", 
        category: "software", 
        price: "$120 MXN", 
        description: "Editor de video todo en uno. Funciones Pro desbloqueadas.", 
        features: ["Efectos Pro", "Sin marca de agua", "Nube", "Garantía"], 
        icon: "fa-video", 
        color: "from-gray-700 to-black" 
    },
    { 
        id: 304, 
        name: "Gemini / ChatGPT", 
        category: "software", 
        price: "$100 MXN", 
        description: "Inteligencia Artificial avanzada para tus tareas.", 
        features: ["Modelos avanzados", "Respuestas rápidas", "Privacidad", "Soporte"], 
        icon: "fa-robot", 
        color: "from-teal-500 to-emerald-700" 
    },

    // === CUENTAS COMPLETAS (NUEVA CATEGORÍA) ===
    { 
        id: 401, 
        name: "Netflix (Completa)", 
        category: "full", 
        price: "$200 MXN", 
        description: "Cuenta completa privada para ti. Tú gestionas los perfiles.", 
        features: ["5 Perfiles", "Calidad 4K UHD", "Sin geobloqueo", "Privada Total"], 
        icon: "fa-users", 
        color: "from-red-800 to-black" 
    },
    { 
        id: 402, 
        name: "Disney+ (Completa)", 
        category: "full", 
        price: "$149 MXN", 
        description: "Cuenta completa de Disney+.", 
        features: ["7 Perfiles", "Privada", "Control Parental", "Soporte"], 
        icon: "fa-shield-alt", 
        color: "from-blue-800 to-black",
        variants: [
            { label: "Estándar (con anuncios)", price: "$149 MXN" },
            { label: "Premium (+ESPN)", price: "$259 MXN" }
        ]
    },
    { 
        id: 403, 
        name: "HBO Max (Completa)", 
        category: "full", 
        price: "$85 MXN", 
        description: "Cuenta completa de HBO Max.", 
        features: ["5 Perfiles", "Privada", "4K UHD", "Garantía"], 
        icon: "fa-crown", 
        color: "from-purple-800 to-black" 
    },
     { 
        id: 404, 
        name: "Prime Video (Completa)", 
        category: "full", 
        price: "$79 MXN", 
        description: "Cuenta completa de Amazon Prime Video.", 
        features: ["6 Perfiles", "Privada", "3 Pantallas", "Garantía"], 
        icon: "fa-box-open", 
        color: "from-blue-800 to-cyan-900" 
    }
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
        let iconClass = product.icon || 'fa-tag';
        
        const card = document.createElement('div');
        card.className = `glass-card rounded-2xl overflow-hidden cursor-pointer fade-in`;
        card.style.animationDelay = `${index * 0.05}s`;
        card.onclick = () => openModal(product);

        // Badge de categoría
        let categoryLabel = product.category;
        if(categoryLabel === 'full') categoryLabel = '👑 Completa';
        else if(categoryLabel === 'streaming') categoryLabel = 'Streaming';
        else if(categoryLabel === 'music') categoryLabel = 'Música';
        else if(categoryLabel === 'software') categoryLabel = 'Herramienta';

        card.innerHTML = `
            <div class="h-32 bg-gradient-to-br ${product.color} flex items-center justify-center relative group">
                <i class="fas ${iconClass} text-5xl text-white opacity-80 group-hover:scale-110 transition-transform duration-300"></i>
                <div class="absolute bottom-2 right-2 bg-black/40 px-2 py-1 rounded text-xs font-bold text-white uppercase backdrop-blur-sm">
                    ${categoryLabel}
                </div>
            </div>
            <div class="p-5">
                <h3 class="font-bold text-lg text-white mb-1 truncate">${product.name}</h3>
                <p class="text-gray-400 text-sm line-clamp-2 mb-4 h-10">${product.description}</p>
                <div class="flex items-center justify-between border-t border-white/10 pt-4">
                    <div class="flex flex-col">
                        <span class="text-xs text-gray-500">Desde</span>
                        <span class="text-cyan-400 font-bold text-xl">${product.price}</span>
                    </div>
                    <span class="text-xs text-gray-500 font-medium bg-slate-800 px-2 py-1 rounded hover:bg-slate-700 transition-colors">Ver más &rarr;</span>
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
        
        let matchesCategory = true;
        if (category === 'full') {
            matchesCategory = product.category === 'full';
        } else if (category !== 'all') {
            // Si elige "Streaming" en el select, que no muestre las cuentas completas, solo perfiles
            if(category === 'streaming' && product.category === 'full') matchesCategory = false;
            else matchesCategory = product.category === category;
        }

        return matchesSearch && matchesCategory;
    });
    renderProducts(filtered);
}

function filterProductsByMenu(menuType) {
    toggleDrawer();
    searchInput.value = "";
    
    let filtered = [];
    if (menuType === 'all') {
        filtered = products;
        categoryFilter.value = 'all';
    } else {
        filtered = products.filter(p => p.category === menuType);
        // Truco visual para el select
        if(menuType === 'streaming' || menuType === 'music' || menuType === 'software') {
            categoryFilter.value = menuType;
        } else {
            categoryFilter.value = 'all';
        }
    }
    renderProducts(filtered);
    document.getElementById('productsGrid').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

searchInput.addEventListener('input', filterProducts);
categoryFilter.addEventListener('change', filterProducts);

// --- 4. MODAL CON LÓGICA DE VARIANTES ---
const modal = document.getElementById('productModal');
const mTitle = document.getElementById('modalTitle');
const mDesc = document.getElementById('modalDescription');
const mPrice = document.getElementById('modalPrice');
const mFeatures = document.getElementById('modalFeatures');
const mHeader = document.getElementById('modalHeaderColor');
const mBtn = document.getElementById('modalBuyBtn');
const mCat = document.getElementById('modalCategory');

// Nuevos elementos para opciones
const mOptionsContainer = document.getElementById('modalOptionsContainer');
const mOptionsSelect = document.getElementById('modalOptionsSelect');

// Variable para guardar el producto actual seleccionado
let currentProduct = null;

function openModal(product) {
    currentProduct = product; // Guardamos referencia
    
    mTitle.innerText = product.name;
    mDesc.innerText = product.description;
    
    // Categoría bonita
    let catName = 'Producto';
    if(product.category === 'streaming') catName = 'Streaming';
    else if(product.category === 'music') catName = 'Música';
    else if(product.category === 'software') catName = 'Software';
    else if(product.category === 'full') catName = 'Cuenta Completa';
    else if(product.category === 'duo') catName = 'Combo';
    else if(product.category === 'special') catName = 'Especial';
    
    mCat.innerText = catName;
    mHeader.className = `h-32 w-full bg-gradient-to-r ${product.color} flex items-center justify-center`;
    mFeatures.innerHTML = product.features.map(feat => `<li class="flex items-center gap-2"><i class="fas fa-check text-cyan-500 text-xs"></i> ${feat}</li>`).join('');

    // Lógica de Variantes (Duración/Planes)
    mOptionsSelect.innerHTML = ''; // Limpiar select anterior
    
    if (product.variants && product.variants.length > 0) {
        // SI TIENE VARIANTES
        mOptionsContainer.classList.remove('hidden');
        
        // Llenar el select
        product.variants.forEach((variant, idx) => {
            const option = document.createElement('option');
            option.value = idx; // Usamos el índice para buscarlo luego
            option.text = `${variant.label}`;
            mOptionsSelect.appendChild(option);
        });

        // Precio inicial (del primer item)
        mPrice.innerText = product.variants[0].price;

        // Escuchar cambios en el select para actualizar precio
        mOptionsSelect.onchange = (e) => {
            const index = e.target.value;
            const selectedVariant = product.variants[index];
            // Efecto de animación simple en el precio
            mPrice.style.opacity = '0';
            setTimeout(() => {
                mPrice.innerText = selectedVariant.price;
                mPrice.style.opacity = '1';
            }, 150);
        };

    } else {
        // NO TIENE VARIANTES (Producto simple)
        mOptionsContainer.classList.add('hidden');
        mPrice.innerText = product.price;
        mOptionsSelect.onchange = null; // Quitar listener
    }
    
    // Configurar botón de compra
    mBtn.onclick = () => handleBuyClick();

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function handleBuyClick() {
    if (!currentProduct) return;

    let finalPrice = currentProduct.price;
    let detailText = ""; // Ej: "(3 Meses)"

    // Verificar si hay una variante seleccionada
    if (currentProduct.variants && currentProduct.variants.length > 0 && !mOptionsContainer.classList.contains('hidden')) {
        const index = mOptionsSelect.value;
        const variant = currentProduct.variants[index];
        finalPrice = variant.price;
        detailText = ` (${variant.label})`;
    }

    // Mensaje para WhatsApp
    // "Hola MB Streaming, me interesa: YouTube Premium (3 Meses) - $200 MXN. ¿Info de pago?"
    const msg = `Hola MB Streaming 👋, me interesa: *${currentProduct.name}${detailText}* - ${finalPrice}. ¿Me ayudas con la info de pago?`;
    
    window.open(`https://wa.me/${MY_PHONE_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
}

function closeModal() {
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// ... (Resto de funciones: toggleChat, toggleDrawer, etc. siguen IGUAL) ...
// --- 5. CHAT Y DRAWER (Copia las funciones toggleChat, sendCustomMessage, toggleDrawer y Listeners aquí del código anterior) ---

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
        setTimeout(() => { widget.classList.add('hidden'); }, 300);
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

function toggleDrawer() {
    const drawer = document.getElementById('appDrawer');
    const overlay = document.getElementById('drawerOverlay');
    const body = document.body;
    const isOpen = overlay.classList.contains('overlay-visible');
    if (!isOpen) {
        overlay.classList.remove('hidden');
        setTimeout(() => {
            overlay.classList.add('overlay-visible');
            drawer.classList.add('drawer-open');
        }, 10);
        body.style.overflow = 'hidden'; 
    } else {
        drawer.classList.remove('drawer-open');
        overlay.classList.remove('overlay-visible');
        setTimeout(() => {
            overlay.classList.add('hidden');
            body.style.overflow = 'auto';
        }, 300);
    }
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
        const widget = document.getElementById('chatWidget');
        if (widget.classList.contains('chat-visible')) toggleChat();
        const overlay = document.getElementById('drawerOverlay');
        if (overlay.classList.contains('overlay-visible')) toggleDrawer();
    }
});

// Inicializar
renderProducts(products);
const MY_PHONE_NUMBER = "523511563006";
const TARGET_DATE = "Jan 07, 2026 00:00:00"; 

// Constantes de Logos
const LOGOS = {
    netflix: "img/logo/netflix-logo.webp",
    max: "img/logo/hbo-max-logo.webp",
    disney: "img/logo/disney-plus-logo.webp",
    prime: "img/logo/prime-video-logo.webp",
    crunchy: "img/logo/crunchyroll-logo.webp",
    vix: "img/logo/vix-logo.webp",
    paramount: "img/logo/paramount-logo.webp",
    spotify: "img/logo/spotify-logo.webp",
    youtube: "img/logo/youtube-logo.webp",
    apple_tv: "img/logo/apple-tv-logo.webp",
    canva: "img/logo/canva-logo.webp",
    office: "img/logo/office-365-logo.webp",
    viki: "img/logo/rakuten-viki-logo.webp",
    deezer: "img/logo/deezer-logo.webp",
    capcut: "img/logo/capcut-logo.webp",
    chat_gpt: "img/logo/chat-gpt-logo.webp",
    gemini: "img/logo/gemini-logo.webp",
    offer1: "img/oferta-1.webp",
    offer2: "img/oferta-2.webp",
    offer3: "img/oferta-3.webp"
};

// COLORES
const COLORS = {
    netflix: "from-[#e50914] to-red-900",
    disney: "from-[#16AEC5] to-[#042033]",
    max: "from-[#00040A] to-[#13203D]",
    prime: "from-blue-800 to-slate-900",
    crunchy: "from-orange-500 to-orange-700",
    vix: "from-orange-600 to-red-600",
    paramount: "from-blue-600 to-blue-900",
    spotify: "from-[#1DB954] to-[#0E3A24]",
    youtube: "from-[#FF0000] to-red-900",
    apple_tv: "from-gray-800 to-black",
    canva: "from-[#4FD4FF] to-[#B56BFF]",
    office: "from-[#D83B01] to-[#5B0E00]",
    viki: "from-cyan-600 to-blue-600",
    deezer: "from-purple-500 to-purple-900",
    capcut: "from-gray-800 to-black",
    chat_gpt: "from-[#00A67E] to-[#014D42]",
    gemini: "from-[#4285F4] to-[#A142F4]",
    offer: "from-[#D4A348] to-gray-700"
};

// --- DATOS ---
const products = [
    // COMBOS ESPECIALES AÑO NUEVO
    {
        id: 901, name: "Combo Reyes Magos", category: "special", price: "$205 MXN", 
        description: "El regalo ideal: Netflix, Disney Premium + Paramount.", 
        features: ["Ideal para niños", "Regalo perfecto"], 
        image: LOGOS.offer1, color: COLORS.offer, logoClass: "h-24 w-auto",
        variants: [{ label: "Combo Reyes Magos", price: "$205 MXN" }]
    },
    {
        id: 902, name: "Combo Música y Entretenimiento", category: "special", price: "$250 MXN", 
        description: "Tu música favorita sin interrupciones y series/películas para pasar un buen rato: Spotify + Netflix.", 
        features: ["Spotify Premium 3 meses", "Netflix 1 mes", "Balance perfecto"], 
        image: LOGOS.offer2, color: COLORS.offer, logoClass: "h-28 w-auto",
        variants: [{ label: "Combo Música y Entretenimiento", price: "$250 MXN" }]
    },
    {
        id: 903, name: "Mega Pack Año Nuevo", category: "special", price: "$350 MXN", 
        description: "Empieza el 2026 con TODO: Netflix + Disney Premium + HBO Max Platino y Prime Video.", 
        features: ["Los gigantes del Streaming", "Ahorro Máximo", "Edición Limitada"], 
        image: LOGOS.offer3, color: COLORS.offer, logoClass: "w-auto",
        variants: [{ label: "Mega Pack Año Nuevo", price: "$350 MXN" }]
    },

    // PERFILES (streaming, música, herramientas)
    { 
        id: 101, name: "VIX", category: "streaming", price: "$65 MXN", 
        description: "Telenovelas, series latinas y Liga MX.", 
        features: ["Deportes vivo", "Originales", "Garantía"], 
        image: LOGOS.vix, color: COLORS.vix 
    },
    { 
        id: 102, name: "Paramount+", category: "streaming", price: "$65 MXN", 
        description: "Una montaña de entretenimiento.", 
        features: ["Originales", "Blockbusters", "Infantil", "Garantía"], 
        image: LOGOS.paramount, color: COLORS.paramount 
    },
    { 
        id: 103, name: "Crunchyroll", category: "streaming", price: "$65 MXN", 
        description: "La colección de anime más grande del mundo.", 
        features: ["Mega Fan", "Acceso a todo el contenido", "Acceso a Crunchyroll Game Vault", "Garantía"], 
        image: LOGOS.crunchy, color: COLORS.crunchy 
    },
    { 
        id: 104, name: "Disney+", category: "streaming", price: "$75 - $100 MXN", 
        description: "Disney, Pixar, Marvel y Star Wars.", 
        features: ["Películas/Series", "Perfil privado", "Garantía"], 
        image: LOGOS.disney, color: COLORS.disney, logoClass: "h-24 w-auto",
        variants: [
            { label: "Estándar (con anuncios)", price: "$75 MXN" },
            { label: "Premium", price: "$100 MXN" }
        ]
    },
    { 
        id: 105, name: "Viki Rakuten", category: "streaming", price: "$80 MXN", 
        description: "El mejor entretenimiento asiático.", 
        features: ["Viki Pass", "HD", "Garantía"], 
        image: LOGOS.viki, color: COLORS.viki 
    },
    { 
        id: 106, name: "Prime Video", category: "streaming", price: "$80 MXN", 
        description: "Series Amazon Originals y envíos gratis.", 
        features: ["Prime Video", "Series exclusivas", "UHD", "Soporte"], 
        image: LOGOS.prime, color: COLORS.prime, logoClass: "h-20 w-auto",
    },
    { 
        id: 107, name: "HBO Max", category: "streaming", price: "$70 - $130 MXN", 
        description: "Todo HBO, Warner Bros, DC y Cartoon Network.", 
        features: ["Perfil Privado", "4K UHD", "Series top", "Garantía"], 
        image: LOGOS.max, color: COLORS.max,
        variants: [{ label: "Básico (con anuncios)", price: "$70 MXN" }, { label: "Estándar", price: "$95 MXN" }, { label: "Platino", price: "$130 MXN" }]
    },
    { 
        id: 108, name: "Netflix", category: "streaming", price: "$95 MXN", 
        description: "Perfil privado en cuenta compartida. Calidad 4K UHD.", 
        features: ["1 Pantalla", "Calidad 4K", "Garantía"], 
        image: LOGOS.netflix, color: COLORS.netflix 
    },
    { 
        id: 109, name: "Apple TV+", category: "streaming", price: "$95 MXN", 
        description: "Disfruta de las mejores series originales de Apple.", 
        features: ["Series exclusivas", "Calidad 4K", "Acceso web", "Garantía"], 
        image: LOGOS.apple_tv, color: "from-zinc-800 to-black" 
    },
    { 
        id: 110, name: "YouTube Premium", category: "streaming", price: "$90 MXN", 
        description: "Videos sin anuncios y YouTube Music incluido.", 
        features: ["Sin publicidad", "YouTube Music", "Segundo plano", "Descargas"], 
        image: LOGOS.youtube, color: COLORS.youtube,
        variants: [
            { label: "1 Mes", price: "$90 MXN" },
            { label: "3 Meses", price: "$200 MXN" },
            { label: "4 Meses", price: "$250 MXN" },
            { label: "12 Meses", price: "$650 MXN" }
        ]
    },
    
    // Música y Herramientas
    { 
        id: 201, name: "Deezer", category: "music", price: "$60 MXN", 
        description: "Tu música favorita, siempre contigo.", 
        features: ["Sin anuncios", "Offline"], 
        image: LOGOS.deezer, color: COLORS.deezer
    },
    { 
        id: 202, name: "Spotify Premium", category: "music", price: "$75 MXN", 
        description: "Millones de canciones. Escucha offline.", 
        features: ["Sin anuncios", "Offline", "Alta calidad"], 
        image: LOGOS.spotify, color: COLORS.spotify, logoClass: "h-20 w-auto",
        variants: [{ label: "1 Mes", price: "$75 MXN" }, { label: "3 Meses", price: "$200 MXN" }]
    },
    { 
        id: 301, name: "Canva Pro", category: "tool", price: "$50 MXN", 
        description: "Diseña como profesional.", 
        features: ["Kit marca", "Quita fondos", "Premium"], 
        image: LOGOS.canva, color: COLORS.canva,
        variants: [{ label: "1 Mes", price: "$50 MXN" }, { label: "3 Meses", price: "$135 MXN" }, { label: "1 Año", price: "$450 MXN" }]
    },
    { 
        id: 302, name: "CapCut Pro", category: "tool", price: "$120 MXN", 
        description: "Editor de video todo en uno.", 
        features: ["Efectos Pro", "Sin marca de agua", "Nube"], 
        image: LOGOS.capcut, color: COLORS.capcut 
    },
    { 
        id: 303, name: "ChatGPT Plus", category: "tool", price: "$150 MXN", 
        description: "IA avanzada para tus tareas.", 
        features: ["Modelos avanzados", "Rápido", "Privacidad"], 
        image: LOGOS.chat_gpt, color: COLORS.chat_gpt, logoClass: "h-24 w-auto",
    },
    { 
        id: 304, name: "Office 365", category: "tool", price: "$280 MXN", 
        description: "Word, Excel, PowerPoint y 1TB nube.", 
        features: ["Cuenta Original", "1 TB OneDrive", "1 Año"], 
        image: LOGOS.office, color: COLORS.office 
    },
    { 
        id: 305, name: "Gemini Advanced", category: "tool", price: "$290 MXN", 
        description: "El modelo más potente de Google con ventana de 1M tokens.", 
        features: ["Modelo 1.5 Pro", "Multimodal (Video/Img)", "1M Tokens Contexto", "Integración Drive"],
        image: LOGOS.gemini, color: COLORS.gemini
    },

    // CUENTAS COMPLETAS
    { 
        id: 401, name: "Netflix (cuenta completa)", category: "full", price: "$200 MXN", 
        description: "Cuenta completa privada. Tú gestionas.", 
        features: ["5 Perfiles", "4K UHD", "Privada", "Ideal para revender los perfiles"], 
        image: LOGOS.netflix, color: COLORS.netflix 
    },
    { 
        id: 402, name: "Disney+ (cuenta completa)", category: "full", price: "$130 - $290 MXN", 
        description: "Cuenta completa Disney+.", 
        features: ["7 Perfiles", "2 pantallas - Estándar (con anuncios)", "4 pantallas - Premium (sin anuncios)", "Privada", "Ideal para revender los perfiles"], 
        image: LOGOS.disney, color: COLORS.disney, logoClass: "h-24 w-auto",
        variants: [{ label: "Estándar", price: "$130 MXN" }, { label: "Premium (+ESPN)", price: "$290 MXN" }]
    },
    { 
        id: 403, name: "HBO Max (cuenta completa)", category: "full", price: "$200 - $270 MXN", 
        description: "Cuenta completa HBO Max.", 
        features: ["5 Perfiles", "2 pantallas - Estándar", "4 pantallas - Platino", "Privada", "Ideal para revender los perfiles"], 
        image: LOGOS.max, color: COLORS.max,
        variants: [
            { label: "Estándar", price: "$200 MXN" }, { label: "Platino", price: "$270 MXN" }]
    },
    { 
        id: 404, name: "Prime Video (cuenta completa)", category: "full", price: "$85 MXN", 
        description: "Cuenta completa Prime Video.", 
        features: ["6 Perfiles", "3 Pantallas", "Privada", "Ideal para revender los perfiles"], 
        image: LOGOS.prime, color: COLORS.prime, logoClass: "h-20 w-auto",
    },

    { 
        id: 405, name: "Crunchyroll (cuenta completa)", category: "full", price: "$130 MXN", 
        description: "Cuenta completa Crunchyroll.", 
        features: ["Mega Fan", "5 Perfiles", "3 Pantallas", "Privada", "Ideal para revender los perfiles"], 
        image: LOGOS.crunchy, color: COLORS.crunchy 
    },

    // COMBOS DUO
    {
        id: 501, name: "Combos con Netflix", category: "duo", price: "$150 - $180 MXN", 
        description: "Combina Netflix con tu servicio favorito.", 
        features: ["1 Perfil Netflix", "1 Perfil extra", "Ahorro total"], 
        image: LOGOS.netflix, color: COLORS.netflix, 
        variants: [
            { label: "con Crunchyroll", price: "$150 MXN" },
            { label: "con VIX", price: "$150 MXN" },
            { label: "con Paramount+", price: "$150 MXN" },
            { label: "con HBO Básico (c/anuncios)", price: "$155 MXN" },
            { label: "con Disney+ Estándar (c/anuncios)", price: "$155 MXN" },
            { label: "con Prime Video", price: "$165 MXN" },
            { label: "con Disney+ Premium", price: "$180 MXN" },
            { label: "con HBO Estándar", price: "$180 MXN" },
            { label: "con HBO Platino", price: "$215 MXN" },

        ]
    },
    {
        id: 510, name: "Combos con HBO Max", category: "duo", price: "$125 - $215 MXN", 
        description: "Combina HBO Max con tu servicio favorito.", 
        features: ["1 Perfil HBO", "1 Perfil extra", "Ahorro total"], 
        image: LOGOS.max, color: COLORS.max, 
        variants: [
            { label: "Básico (c/anuncios) + Crunchyroll", price: "$125 MXN" },
            { label: "Básico (c/anuncios) + VIX", price: "$125 MXN" },
            { label: "Básico (c/anuncios) + Paramount+", price: "$125 MXN" },
            { label: "Básico (c/anuncios) + Disney+ (c/anuncios)", price: "$130 MXN" },
            { label: "Básico (c/anuncios) + Prime Video", price: "$140 MXN" },
            { label: "Estándar + Crunchyroll", price: "$150 MXN" },
            { label: "Estándar + VIX", price: "$150 MXN" },
            { label: "Estándar + Paramount+", price: "$150 MXN" },
            { label: "Básico (c/anuncios) + Disney+ (s/anuncios)", price: "$155 MXN" },
            { label: "Estándar + Disney+ (c/anuncios)", price: "$155 MXN" },
            { label: "Estándar + Prime Video", price: "$165 MXN" },
            { label: "Estándar + Disney+ (s/anuncios)", price: "$180 MXN" },
            { label: "Platino + Crunchyroll", price: "$185 MXN" },
            { label: "Platino + VIX", price: "$185 MXN" },
            { label: "Platino + Paramount+", price: "$185 MXN" },
            { label: "Platino + Disney+ (c/anuncios)", price: "$190 MXN" },
            { label: "Platino + Prime Video", price: "$200 MXN" },
            { label: "Platino + Disney+ (s/anuncios)", price: "$215 MXN" }
        ]
    },
    {
        id: 520, name: "Combos con Disney+", category: "duo", price: "$125 - $165 MXN", 
        description: "Combina Disney+ con tu servicio favorito.", 
        features: ["1 Perfil Disney", "1 Perfil extra", "Ahorro total"], 
        image: LOGOS.disney, color: COLORS.disney, logoClass: "h-24 w-auto",
        variants: [
            { label: "Estándar (c/anuncios) con Crunchyroll", price: "$125 MXN" },
            { label: "Estándar (c/anuncios) con VIX", price: "$125 MXN" },
            { label: "Estándar (c/anuncios) con Paramount+", price: "$125 MXN" },
            { label: "Estándar (c/anuncios) con Prime Video", price: "$140 MXN" },
            { label: "Premium con Crunchyroll", price: "$150 MXN" },
            { label: "Premium con VIX", price: "$150 MXN" },
            { label: "Premium con Paramount+", price: "$150 MXN" },
            { label: "Premium con Prime Video", price: "$165 MXN" }
        ]
    },
    {
        id: 530, name: "Combos con Prime", category: "duo", price: "$135 MXN", 
        description: "Combina Prime Video con otros.", 
        features: ["1 Perfil Prime", "1 Perfil extra", "Ahorro total"], 
        image: LOGOS.prime, color: COLORS.prime, logoClass: "h-20 w-auto",
        variants: [{ label: "con Crunchyroll", price: "$135 MXN" }, { label: "con VIX", price: "$135 MXN" }, { label: "con Paramount+", price: "$135 MXN" }]
    },
    {
        id: 540, name: "Combos con Crunchy", category: "duo", price: "$135 MXN", 
        description: "Combina Crunchyroll con otros.", 
        features: ["1 Perfil Crunchy", "1 Perfil extra", "Ahorro total"], 
        image: LOGOS.crunchy, color: COLORS.crunchy, 
        variants: [{ label: "con VIX", price: "$135 MXN" }, { label: "con Paramount+", price: "$135 MXN" }]
    },
    {
        id: 550, name: "Combos con VIX", category: "duo", price: "$135 MXN", 
        description: "Combina VIX con Paramount+.", 
        features: ["1 Perfil VIX", "1 Perfil Paramount", "Ahorro total"], 
        image: LOGOS.vix, color: COLORS.vix, 
        variants: [{ label: "con Paramount+", price: "$135 MXN" }]
    }
];

// --- LÓGICA PRINCIPAL ---
const gridContainer = document.getElementById('productsGrid');
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const emptyState = document.getElementById('emptyState');

function createCardHTML(product, index) {
    let label = "Producto";
    let badgeColor = "bg-slate-700";
    if(product.category === 'streaming') { label = "Perfil"; badgeColor = "bg-blue-600/50"; }
    else if(product.category === 'music') { label = "Música"; badgeColor = "bg-green-600/50"; }
    else if(product.category === 'tool') { label = "Herramienta"; badgeColor = "bg-slate-600/50"; }
    else if(product.category === 'full') { label = "Completa"; badgeColor = "bg-yellow-600/50 text-yellow-100"; }
    else if(product.category === 'duo') { label = "Combo Dúo"; badgeColor = "bg-purple-600/50 text-purple-100"; }
    // AGREGADO: Etiqueta para especiales
    else if(product.category === 'special') { label = "Año Nuevo"; badgeColor = "bg-yellow-500/80 text-black font-bold animate-pulse"; }

    const logoClass = product.logoClass || "h-16 w-auto max-w-[70%]";

    return `
        <div class="glass-card rounded-2xl overflow-hidden cursor-pointer fade-in hover:scale-[1.02] transition-all duration-300" 
             style="animation-delay: ${index * 0.05}s"
             onclick="openModal(${product.id})">
            
            <div class="h-32 bg-gradient-to-br ${product.color} flex items-center justify-center relative group overflow-hidden">
                <img src="${product.image}" alt="${product.name}" 
                     class="${logoClass} object-contain drop-shadow-2xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-2 brightness-0 invert">
                
                <div class="absolute bottom-2 right-2 ${badgeColor} backdrop-blur-md px-2 py-1 rounded text-[10px] font-bold text-white uppercase tracking-wider border border-white/10 shadow-lg">
                    ${label}
                </div>
            </div>
            
            <div class="p-5">
                <h3 class="font-bold text-lg text-white mb-1 truncate">${product.name}</h3>
                <p class="text-gray-400 text-xs line-clamp-2 mb-4 min-h-[2.5em]">${product.description}</p>
                <div class="flex items-center justify-between border-t border-white/10 pt-4">
                    <div class="flex flex-col">
                        <span class="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Precio</span>
                        <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-bold text-lg">${product.price}</span>
                    </div>
                    <button class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-cyan-500 transition-colors">
                        <i class="fas fa-arrow-right text-xs"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
}

// --- FUNCIÓN DE RENDERIZADO INTELIGENTE (Detecta si ya expiró) ---
function renderProducts(items) {
    gridContainer.innerHTML = '';
    if (items.length === 0) { emptyState.classList.remove('hidden'); return; }
    emptyState.classList.add('hidden');

    // 1. CHEQUEO DE FECHA: ¿Ya pasó año nuevo?
    const now = new Date().getTime();
    const target = new Date(TARGET_DATE).getTime();
    const isExpired = now > target;

    // 2. Si ya expiró, FILTRAMOS los especiales fuera de la lista
    let activeItems = items;
    if (isExpired) {
        activeItems = items.filter(p => p.category !== 'special');
        
        // También ocultamos el botón del menú
        const menuBtn = document.getElementById('specialMenuBtn');
        if(menuBtn) menuBtn.classList.add('hidden');
        
        // Y ocultamos el contador
        const countdown = document.getElementById('countdownContainer');
        if(countdown) countdown.classList.add('hidden');
    }

    const profiles = activeItems.filter(p => ['streaming', 'music', 'tool'].includes(p.category));
    const fullAccounts = activeItems.filter(p => p.category === 'full');
    const duos = activeItems.filter(p => p.category === 'duo');
    const specials = activeItems.filter(p => p.category === 'special');

    const drawSection = (title, icon, itemsList, colorClass = "text-white") => {
        if(itemsList.length === 0) return;
        const sectionHeader = `
            <div class="flex items-center gap-3 mb-6 px-2 fade-in">
                <div class="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center"><i class="fas ${icon} text-xl ${colorClass}"></i></div>
                <h2 class="text-2xl font-bold text-white tracking-tight">${title}</h2>
                <div class="h-px flex-grow bg-gradient-to-r from-white/10 to-transparent ml-4"></div>
            </div>`;
        const cardsHTML = itemsList.map((product, idx) => createCardHTML(product, idx)).join('');
        gridContainer.innerHTML += `${sectionHeader}<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">${cardsHTML}</div>`;
    };

    // ORDEN
    drawSection("Especiales de Año Nuevo", "fa-star", specials, "text-yellow-400 animate-pulse");
    drawSection("Perfiles y Suscripciones", "fa-user", profiles, "text-cyan-400");
    drawSection("Combos Dúo", "fa-user-friends", duos, "text-purple-400");
    drawSection("Cuentas Completas", "fa-crown", fullAccounts, "text-yellow-400");
}

function filterProducts() {
    const searchTerm = searchInput.value.toLowerCase();
    const category = categoryFilter.value;
    const filtered = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm) || product.description.toLowerCase().includes(searchTerm);
        let matchesCategory = true;
        
        // Verifica si la categoría es especial y ya expiró para no buscarla
        const isExpired = new Date().getTime() > new Date(TARGET_DATE).getTime();
        if(isExpired && product.category === 'special') return false;

        if (category === 'streaming') matchesCategory = product.category === 'streaming' || product.category === 'full';
        else if (category === 'full') matchesCategory = product.category === 'full';
        else if (category !== 'all') matchesCategory = product.category === category;
        return matchesSearch && matchesCategory;
    });
    renderProducts(filtered);
}

function filterProductsByMenu(menuType) {
    toggleDrawer();
    searchInput.value = "";
    
    // Si elige especiales pero ya expiraron, no hacer nada
    const isExpired = new Date().getTime() > new Date(TARGET_DATE).getTime();
    if(menuType === 'special' && isExpired) return;

    let filtered = [];
    if (menuType === 'all') { filtered = products; categoryFilter.value = 'all'; }
    else {
        if (menuType === 'streaming') filtered = products.filter(p => p.category === 'streaming' || p.category === 'full');
        else filtered = products.filter(p => p.category === menuType);
        
        if(['streaming', 'music', 'tool'].includes(menuType)) categoryFilter.value = menuType;
        else categoryFilter.value = 'all';
    }
    renderProducts(filtered);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

searchInput.addEventListener('input', filterProducts);
categoryFilter.addEventListener('change', filterProducts);

// --- MODAL ---
const modal = document.getElementById('productModal');
const mTitle = document.getElementById('modalTitle');
const mDesc = document.getElementById('modalDescription');
const mPrice = document.getElementById('modalPrice');
const mFeatures = document.getElementById('modalFeatures');
const mHeader = document.getElementById('modalHeaderColor');
const mBtn = document.getElementById('modalBuyBtn');
const mCat = document.getElementById('modalCategory');
const mOptionsContainer = document.getElementById('modalOptionsContainer');
const mOptionsSelect = document.getElementById('modalOptionsSelect');
let currentProduct = null;

window.openModal = function(productId) {
    const product = products.find(p => p.id === productId);
    if(!product) return;
    currentProduct = product;
    mTitle.innerText = product.name;
    mDesc.innerText = product.description;
    mCat.innerText = product.category === 'special' ? "Oferta Año Nuevo" : (product.category === 'full' ? "Cuenta Completa" : "Servicio");
    mHeader.className = `h-32 w-full bg-gradient-to-r ${product.color} flex items-center justify-center p-4`;
    const logoClass = product.logoClass || "h-16 w-auto max-w-[70%]";
    mHeader.innerHTML = `<img src="${product.image}" class="${logoClass} object-contain drop-shadow-2xl brightness-0 invert">`;
    mFeatures.innerHTML = product.features.map(f => `<li class="flex items-center gap-2 text-gray-300"><i class="fas fa-check-circle text-cyan-500 text-xs"></i> ${f}</li>`).join('');
    mOptionsSelect.innerHTML = ''; 
    if (product.variants && product.variants.length > 0) {
        mOptionsContainer.classList.remove('hidden');
        product.variants.forEach((v, idx) => {
            const opt = document.createElement('option');
            opt.value = idx;
            opt.text = `${v.label} - ${v.price}`;
            mOptionsSelect.appendChild(opt);
        });
        mPrice.innerText = product.variants[0].price;
        mOptionsSelect.onchange = (e) => { mPrice.innerText = product.variants[e.target.value].price; };
    } else {
        mOptionsContainer.classList.add('hidden');
        mPrice.innerText = product.price;
        mOptionsSelect.onchange = null;
    }
    mBtn.onclick = () => handleBuyClick();
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function handleBuyClick() {
    if (!currentProduct) return;
    let finalPrice = currentProduct.price;
    let detailText = ""; 
    if (currentProduct.variants && currentProduct.variants.length > 0 && !mOptionsContainer.classList.contains('hidden')) {
        const index = mOptionsSelect.value;
        const variant = currentProduct.variants[index];
        finalPrice = variant.price;
        detailText = ` (${variant.label})`;
    }
    const msg = `Hola, Misael, me interesa: *${currentProduct.name}${detailText}* - ${finalPrice}. ¿Info de pago?`;
    window.open(`https://wa.me/${MY_PHONE_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
}

window.closeModal = function() { modal.classList.add('hidden'); document.body.style.overflow = 'auto'; }

// --- LÓGICA DEL CONTADOR (CORREGIDA) ---
function initCountdown() {
    const countdownElement = document.getElementById('countdownTimer');
    if (!countdownElement) return;

    const countDate = new Date(TARGET_DATE).getTime();
    
    // Guardamos el intervalo en una variable para poder detenerlo
    const interval = setInterval(() => {
        const now = new Date().getTime();
        const gap = countDate - now;

        if (gap < 0) {
            clearInterval(interval); // 1. Detenemos el reloj
            
            // 2. Ocultamos el contador y el botón del menú
            const container = document.getElementById('countdownContainer');
            const menuBtn = document.getElementById('specialMenuBtn');
            if(container) container.classList.add('hidden');
            if(menuBtn) menuBtn.classList.add('hidden');

            // 3. ACTUALIZAMOS LAS CARDS
            // Al llamar a esta función, ella misma revisa la fecha y filtra los especiales
            renderProducts(products); 
            
            return; 
        }

        // Cálculos de tiempo
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        const d = Math.floor(gap / day);
        const h = Math.floor((gap % day) / hour);
        const m = Math.floor((gap % hour) / minute);
        const s = Math.floor((gap % minute) / second);

        document.getElementById('cd-days').innerText = d < 10 ? "0" + d : d;
        document.getElementById('cd-hours').innerText = h < 10 ? "0" + h : h;
        document.getElementById('cd-minutes').innerText = m < 10 ? "0" + m : m;
        document.getElementById('cd-seconds').innerText = s < 10 ? "0" + s : s;
    }, 1000);
}

// UTILS
window.toggleChat = function() {
    const widget = document.getElementById('chatWidget');
    if (widget.classList.contains('chat-hidden')) { widget.classList.remove('hidden'); setTimeout(() => { widget.classList.remove('chat-hidden'); widget.classList.add('chat-visible'); }, 10); } 
    else { widget.classList.remove('chat-visible'); widget.classList.add('chat-hidden'); setTimeout(() => { widget.classList.add('hidden'); }, 300); }
}
window.sendCustomMessage = function() {
    const input = document.getElementById('chatInput');
    const text = input.value.trim();
    if (!text) return;
    window.open(`https://wa.me/${MY_PHONE_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
    input.value = ''; toggleChat();
}
window.toggleDrawer = function() {
    const drawer = document.getElementById('appDrawer'), overlay = document.getElementById('drawerOverlay');
    if (!overlay.classList.contains('overlay-visible')) { overlay.classList.remove('hidden'); setTimeout(() => { overlay.classList.add('overlay-visible'); drawer.classList.add('drawer-open'); }, 10); document.body.style.overflow = 'hidden'; } 
    else { drawer.classList.remove('drawer-open'); overlay.classList.remove('overlay-visible'); setTimeout(() => { overlay.classList.add('hidden'); document.body.style.overflow = 'auto'; }, 300); }
}
window.toggleDisclaimer = function() {
    const modal = document.getElementById('disclaimerModal');
    modal.classList.contains('hidden') ? modal.classList.remove('hidden') : modal.classList.add('hidden');
}

// Global Event Listeners
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
        const widget = document.getElementById('chatWidget'); if (widget.classList.contains('chat-visible')) toggleChat();
        const overlay = document.getElementById('drawerOverlay'); if (overlay.classList.contains('overlay-visible')) toggleDrawer();
        const discModal = document.getElementById('disclaimerModal'); if (!discModal.classList.contains('hidden')) toggleDisclaimer();
    }
});

// INICIALIZACIÓN
renderProducts(products);
initCountdown();
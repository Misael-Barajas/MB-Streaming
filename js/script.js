const MY_PHONE_NUMBER = "523511563006";
const TARGET_DATE = "Dec 25, 2025 00:00:00"; 

// LOGOS DE LAS PLATAFORMAS
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
    builder: "img/logo/builder-logo.webp",
    offer1: "https://images.vexels.com/media/users/3/127856/isolated/svg/d7b666e9823c6dda5fed99b4e5668ccb.svg",
    offer2: "https://svgsilh.com/svg_v2/156508.svg",
    offer3: "https://svgsilh.com/svg_v2/1857356.svg",
    offer4: "https://svgsilh.com/svg/1087528.svg"
};

// COLORES GRADIENTES
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
    offer: "from-[#D4A348] to-gray-700",
    custom: "from-indigo-600 via-purple-600 to-pink-600"
};

const products = [
    {
    // CONSTRUCTOR DE COMBOS
        id: 999, name: "Arma tu combo", category: "custom", price: "A medida", description: "Selecciona tus servicios favoritos. El descuento de -$5 por cada ítem es aplicado al finalizar la compra.", features: ["Tú eliges las apps", "Elige el plan exacto", "Descuento acumulable (-$5 c/u)", "Pago único"], image: LOGOS.builder, color: COLORS.custom, logoClass: "h-28 w-auto invert brightness-0"
    },

    // COMBOS ESPECIALES NAVIDAD
    { id: 901, name: "Combo Arbolito", category: "special", price: "$90 MXN", description: "Disfruta de las mejores series y todo el anime bajo el arbolito.", features: ["Netflix + Crunchyroll", "Anime sin anuncios", "Ahorro Navideño"], image: LOGOS.offer1, color: COLORS.offer, logoClass: "h-28 w-auto", variants: [{ label: "Netflix + Crunchyroll", price: "$90 MXN" }] },
    { id: 902, name: "Combo Estrella", category: "special", price: "$120 MXN", description: "Brilla con los tres gigantes del streaming. Series aclamadas y el catálogo más popular.", features: ["3 Plataformas Top", "Cine, series y más", "Precio Estrella"], image: LOGOS.offer2, color: COLORS.offer, logoClass: "h-28 w-auto", variants: [{ label: "Netflix + HBO Max Básico + Prime Video", price: "$120 MXN" }] },
    { id: 903, name: "Combo Nochebuena", category: "special", price: "$139 MXN",description: "Una cena servida con lo mejor del entretenimiento. Drama premium de HBO, éxitos de Netflix y el mejor anime.", features: ["Triple entretenimiento", "Netflix + HBO + Crunchy", "Ideal para maratonear"], image: LOGOS.offer3, color: COLORS.offer, logoClass: "h-28 w-auto", variants: [{ label: "Netflix + HBO Max Básico + Crunchyroll", price: "$139 MXN" }] },
    { id: 904, name: "Combo Navidad Plus", category: "special", price: "$189 MXN",description: "¡El regalo definitivo! 5 plataformas para que no exista el aburrimiento. Deportes, novelas, cine, anime y series.", features: ["Pack de 5 Apps", "Ahorro masivo", "Entretenimiento infinito"], image: LOGOS.offer4, color: COLORS.offer, logoClass: "h-28 w-auto", variants: [{ label: "Netflix + VIX + Prime + Paramount + Disney+", price: "$189 MXN" }] },

    // PERFILES INDIVIDUALES
    { id: 101, name: "VIX", category: "streaming", price: "$35 MXN", originalPrice: "$65 MXN", description: "Acceso a series, películas latinas y deportes en vivo.", features: ["Deportes en vivo", "Contenido exclusivo VIX", "Garantía y soporte"], image: LOGOS.vix, color: COLORS.vix },
    { id: 102, name: "Paramount+", category: "streaming", price: "$35 MXN", originalPrice: "$65 MXN", description: "Una montaña de entretenimiento de los estudios Paramount.", features: ["Blockbusters y franquicias", "Eventos deportivos","Garantía y soporte"], image: LOGOS.paramount, color: COLORS.paramount },
    { id: 103, name: "Crunchyroll", category: "streaming", price: "$35 MXN", originalPrice: "$65 MXN", description: "El catálogo más grande de anime en streaming.", features: ["Plan Mega Fan", "Visualización sin anuncios", "Garantía y soporte"], image: LOGOS.crunchy, color: COLORS.crunchy },
    { id: 104, name: "Disney+", category: "streaming", price: "Desde $50 hasta $69 MXN", originalPrice: "Desde $75 hasta $100", description: "Hogar de Disney, Pixar, Marvel, Star Wars y National Geographic.", features: ["Perfil privado", "Descarga de contenido", "Garantía y soporte"], image: LOGOS.disney, color: COLORS.disney, logoClass: "h-24 w-auto", variants: [{ label: "Estándar (con anuncios)", price: "$50 MXN", originalPrice: "$75 MXN" }, { label: "Premium", price: "$69 MXN", originalPrice: "$100 MXN" }] },
    { id: 105, name: "Viki Rakuten", category: "streaming", price: "$59 MXN", originalPrice: "$80 MXN", description: "Dramas y películas asiáticas (K-Dramas, C-Dramas) con subtítulos.", features: ["Viki Pass Estándar", "Contenido exclusivo", "Garantía y soporte"], image: LOGOS.viki, color: COLORS.viki },
    { id: 106, name: "Prime Video", category: "streaming", price: "$45 MXN", originalPrice: "$80 MXN", description: "Series Originales de Amazon, acceso a películas y eventos deportivos.", features: ["Series, películas y deportes", "Garantía y soporte"], image: LOGOS.prime, color: COLORS.prime, logoClass: "h-20 w-auto" },
    { id: 107, name: "HBO Max", category: "streaming", price: "Desde $55 hasta $110 MXN", originalPrice: "Desde $70 hasta $130", description: "Contenido de HBO, Warner Bros. y DC Universe.", features: ["Máxima calidad", "Descarga de títulos", "Garantía y soporte"], image: LOGOS.max, color: COLORS.max, variants: [{ label: "Básico (con anuncios)", price: "$55 MXN", originalPrice: "$70 MXN" }, { label: "Estándar", price: "$75 MXN", originalPrice: "$95 MXN" }, { label: "Platino", price: "$110 MXN", originalPrice: "$130 MXN" }] },
    { id: 108, name: "Netflix", category: "streaming", price: "$89 MXN", originalPrice: "$95 MXN", description: "El catálogo más popular de series y películas a nivel mundial.", features: ["Perfil privado", "Descarga de contenido", "Garantía y soporte"], image: LOGOS.netflix, color: COLORS.netflix },
    { id: 109, name: "Apple TV+", category: "streaming", price: "$89 MXN", originalPrice: "$95 MXN", description: "Originales aclamados por la crítica, exclusivos de Apple.", features: ["Máxima calidad", "Perfil privado", "Garantía y soporte"], image: LOGOS.apple_tv, color: "from-zinc-800 to-black" },
    { id: 110, name: "YouTube Premium", category: "streaming", price: "Desde $65 MXN hasta $ MXN", originalPrice: "Desde $90 hasta $310", description: "Mira millones de videos sin interrupciones por anuncios.", features: ["Descargas sin conexión", "YouTube Music incluido", "Garantía y soporte"], image: LOGOS.youtube, color: COLORS.youtube, variants: [{ label: "1 Mes", price: "$65 MXN", originalPrice: "$90 MXN" }, { label: "2 Meses", price: "$110 MXN", originalPrice: "$150" }, { label: "4 Meses", price: "$130 MXN", originalPrice: "$310 MXN" }] },
    
    // Música y Herramientas
    { id: 201, name: "Deezer", category: "music", price: "$50 MXN", originalPrice: "$60 MXN", description: "Reproducción de música con sonido de alta fidelidad (HiFi).", features: ["Calidad HiFi", "Escucha sin conexión", "Garantía y soporte"], image: LOGOS.deezer, color: COLORS.deezer },
    { id: 202, name: "Spotify", category: "music", price: "Desde $65 hasta $129 MXN", originalPrice: "Desde $75 hasta $200", description: "El servicio de música más popular para escuchar tus playlists sin anuncios.", features: ["Premium sin anuncios", "Modo offline", "Garantía y soporte"], image: LOGOS.spotify, color: COLORS.spotify, logoClass: "h-20 w-auto", variants: [{ label: "1 Mes", price: "$65 MXN", originalPrice: "$75 MXN" }, { label: "3 Meses", price: "$129 MXN", originalPrice: "$200 MXN" }] },
    { id: 301, name: "Canva Pro", category: "tool", price: "Desde $40 hasta $159 MXN", originalPrice: "Desde $50 hasta $400", description: "Herramienta de diseño gráfico online con funciones Premium.", features: ["Acceso Pro", "Plantillas premium", "Garantía y soporte"], image: LOGOS.canva, color: COLORS.canva, variants: [{ label: "1 Mes", price: "$40 MXN", originalPrice: "$50 MXN" }, { label: "3 Meses", price: "$89 MXN", originalPrice: "$120 MXN" }, { label: "1 Año", price: "$159 MXN", originalPrice: "$400 MXN" }] },
    { id: 302, name: "CapCut Pro", category: "tool", price: "$95 MXN", originalPrice: "$120 MXN", description: "Editor de video avanzado para crear contenido de alta calidad.", features: ["Acceso a efectos Pro", "Sin marca de agua", "Garantía y soporte"], image: LOGOS.capcut, color: COLORS.capcut },
    { id: 303, name: "ChatGPT Plus", category: "tool", price: "$75 MXN", originalPrice: "$150 MXN", description: "Inteligencia Artificial avanzada, potenciada por GPT-4 y DALL-E.", features: ["Acceso a GPT-4", "Creación de imágenes (DALL-E)", "Garantía y soporte"], image: LOGOS.chat_gpt, color: COLORS.chat_gpt, logoClass: "h-24 w-auto" },
    { id: 305, name: "Gemini Adv", category: "tool", price: "$89 MXN", originalPrice: "$290 MXN", description: "IA de Google con acceso a modelos más potentes (Gemini Ultra).", features: ["Gemini Advanced", "Integración con Google", "Garantía y soporte"], image: LOGOS.gemini, color: COLORS.gemini },
    { id: 304, name: "Office 365", category: "tool", price: "Desde $220 hasta $450 MXN", originalPrice: "Antes $450", description: "Suite de productividad de Microsoft con 1TB de almacenamiento.", features: ["Office para 5 dispositivos", "1TB en la nube", "Garantía y soporte"], image: LOGOS.office, color: COLORS.office, variants: [{ label: "1 año", price: "$220 MXN", originalPrice: "$950 MXN" }, { label: "6 meses", price: "$450 MXN" }] },

    // CUENTAS COMPLETAS
    { id: 406, name: "Viki Rakuten (Completa)", category: "full", price: "$95 MXN", originalPrice: "$100 MXN", description: "Cuenta privada con acceso a todo el catálogo de dramas asiáticos.", features: ["Cuenta completa privada", "Viki Pass Plus", "Visualización en HD"], image: LOGOS.viki, color: COLORS.viki },
    { id: 405, name: "Crunchyroll (Completa)", category: "full", price: "$69 MXN", originalPrice: "$130 MXN", description: "Cuenta privada para anime sin límites.", features: ["Cuenta completa privada", "Plan Mega Fan", "Sin anuncios"], image: LOGOS.crunchy, color: COLORS.crunchy },
    { id: 402, name: "Disney+ (Completa)", category: "full", price: "Desde $139 hasta $259 MXN", originalPrice: "Antes $130", description: "Cuenta privada para disfrutar de todo el catálogo de Disney y Star+.", features: ["Cuenta completa privada", "Hasta 7 Perfiles", "Incluye ESPN (solo Premium)"], image: LOGOS.disney, color: COLORS.disney, logoClass: "h-24 w-auto", variants: [{ label: "Estándar", price: "$139 MXN", originalPrice: "$130 MXN" }, { label: "Premium (+ESPN)", price: "$259 MXN", originalPrice: "$290 MXN" }] },
    { id: 403, name: "HBO Max (Completa)", category: "full", price: "$85 MXN", originalPrice: "$200 MXN", description: "Cuenta privada con 5 perfiles para contenido de HBO y Warner.", features: ["Cuenta completa privada", "5 Perfiles disponibles"], image: LOGOS.max, color: COLORS.max },
    { id: 401, name: "Netflix (Completa)", category: "full", price: "$200 MXN", originalPrice: "$250 MXN", description: "Cuenta privada con acceso completo a todos los perfiles y beneficios.", features: ["Cuenta completa privada", "5 Perfiles disponibles"], image: LOGOS.netflix, color: COLORS.netflix },

    // COMBOS DUO
    { id: 501, name: "Combos con Netflix", category: "duo", price: "Desde $99 hasta $130 MXN", originalPrice: "Antes $150", description: "Combina tu perfil de Netflix con otro servicio, ¡ahorrando \$10 MXN en total!", features: ["Ahorro de $10 MXN", "2 Perfiles individuales", "Mejor precio garantizado"], image: LOGOS.netflix, color: COLORS.netflix, variants: [
        { label: "con Crunchyroll", price: "$99 MXN", originalPrice: "$150 MXN" },
        { label: "con VIX", price: "$99 MXN", originalPrice: "$150 MXN" },
        { label: "con Paramount+", price: "$99 MXN", originalPrice: "$150 MXN" },
        { label: "con Prime Video", price: "$109 MXN", originalPrice: "$165 MXN" },
        { label: "con Disney+ Estándar (c/anuncios)", price: "$110 MXN", originalPrice: "$160 MXN" },
        { label: "con HBO Básico (c/anuncios)", price: "$119 MXN", originalPrice: "$155 MXN" },
        { label: "con Disney+ Premium", price: "$130 MXN", originalPrice: "$185 MXN" },
    ]},
    
    // Combos Disney+
    { id: 520, name: "Combos con Disney+", category: "duo", price: "Desde $75 hasta $105 MXN", originalPrice: "Antes $130", description: "Combina tu perfil de Disney+ con otro servicio, ¡ahorrando \$10 MXN en total!", features: ["Ahorro de $10 MXN", "1 perfil Disney+", "1 perfil de la plataforma a elegir"], image: LOGOS.disney, color: COLORS.disney, logoClass: "h-24 w-auto", variants: [ 
        // Disney+ Estándar
        { label: "Estándar (c/anuncios) con Crunchyroll", price: "$70 MXN", originalPrice: "$130 MXN" },
        { label: "Estándar (c/anuncios) con VIX", price: "$70 MXN", originalPrice: "$130 MXN" },
        { label: "Estándar (c/anuncios) con Paramount+", price: "$70 MXN", originalPrice: "$130 MXN" },
        { label: "Estándar (c/anuncios) con Prime Video", price: "$80 MXN", originalPrice: "$145 MXN" },
        // Disney+ Premium
        { label: "Premium con Crunchyroll", price: "$95 MXN", originalPrice: "$155 MXN" },
        { label: "Premium con VIX", price: "$95 MXN", originalPrice: "$155 MXN" },
        { label: "Premium con Paramount+", price: "$95 MXN", originalPrice: "$155 MXN" },
        { label: "Premium con Prime Video", price: "$105 MXN", originalPrice: "$170 MXN" }
    ]},
    
    // Combos Prime Video
    { id: 530, name: "Combos con Prime Video", category: "duo", price: "$70 MXN", originalPrice: "$135 MXN", description: "Combina tu perfil de Prime Video con otro servicio, ¡ahorrando \$10 MXN en total!", features: ["Ahorro de $10 MXN", "1 perfil Prime Video", "1 perfil de la plataforma a elegir"], image: LOGOS.prime, color: COLORS.prime, logoClass: "h-20 w-auto", variants: [
        { label: "con Crunchyroll", price: "$69 MXN", originalPrice: "$135 MXN" },
        { label: "con VIX", price: "$69 MXN", originalPrice: "$135 MXN" },
        { label: "con Paramount+", price: "$69 MXN", originalPrice: "$135 MXN" }
    ]},
    
    // Combos Crunchyroll
    { id: 540, name: "Combos con Crunchy", category: "duo", price: "$60 MXN", originalPrice: "$120 MXN", description: "Combina tu perfil de Crunchyroll con otro servicio, ¡ahorrando \$10 MXN en total!", features: ["Ahorro de $10 MXN", "1 perfil Crunchyroll", "1 perfil de la plataforma a elegir"], image: LOGOS.crunchy, color: COLORS.crunchy, variants: [
        { label: "con VIX", price: "$59 MXN", originalPrice: "$120 MXN" },
        { label: "con Paramount+", price: "$59 MXN", originalPrice: "$120 MXN" }
    ]},
    
    // Combos VIX
    { id: 550, name: "Combos con VIX", category: "duo", price: "$59 MXN", originalPrice: "$120 MXN", description: "Combina tu perfil de VIX con Paramount+, ¡ahorrando \$10 MXN en total!", features: ["Ahorro de $10 MXN", "1 perfil VIX", "1 perfil Paramount+"], image: LOGOS.vix, color: COLORS.vix, variants: [
        { label: "con Paramount+", price: "$59 MXN", originalPrice: "$120 MXN" }
    ]}
];

// LÓGICA PRINCIPAL
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
    else if(product.category === 'duo') { label = "Combo dúo"; badgeColor = "bg-purple-600/50 text-purple-100"; }
    else if(product.category === 'special') { label = "Navidad"; badgeColor = "bg-yellow-500/80 text-black font-bold animate-pulse"; }
    else if(product.category === 'custom') { label = "Tú eliges"; badgeColor = "bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-bold"; }

    const logoClass = product.logoClass || "h-16 w-auto max-w-[70%]";

    let imageHTML = `<img src="${product.image}" alt="${product.name}" class="${logoClass} object-contain drop-shadow-2xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-2 brightness-0 invert">`;
    
    if(product.id === 999 && (!product.image.includes('img/') && !product.image.includes('http'))) {
       imageHTML = `<i class="fas fa-layer-group text-6xl text-white drop-shadow-lg transition-transform duration-300 group-hover:scale-110"></i>`;
    }

    let priceDisplay = "";
    if (product.originalPrice) {
        priceDisplay = `
            <div class="flex flex-col leading-none">
                <span class="text-[12px] text-gray-500 line-through decoration-red-500/60 decoration-1 font-bold mb-0.5">${product.originalPrice}</span>
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-bold text-lg">${product.price}</span>
            </div>
        `;
    } else {
        priceDisplay = `<span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-bold text-lg">${product.price}</span>`;
    }

    return `
        <div class="glass-card rounded-2xl overflow-hidden cursor-pointer fade-in hover:scale-[1.02] transition-all duration-300" 
             style="animation-delay: ${index * 0.05}s"
             onclick="openModal(${product.id})">
            
            <div class="h-32 bg-gradient-to-br ${product.color} flex items-center justify-center relative group overflow-hidden">
                ${imageHTML}
                <div class="absolute bottom-2 right-2 ${badgeColor} backdrop-blur-md px-2 py-1 rounded text-[10px] font-bold text-white uppercase tracking-wider border border-white/10 shadow-lg">
                    ${label}
                </div>
            </div>
            
            <div class="p-5">
                <h3 class="font-bold text-lg text-white mb-1 truncate">${product.name}</h3>
                <p class="text-gray-400 text-xs line-clamp-2 mb-4 min-h-[2.5em]">${product.description}</p>
                <div class="flex items-center justify-between border-t border-white/10 pt-4">
                    <div class="flex flex-col justify-center">
                        <span class="text-[10px] text-gray-500 uppercase font-bold tracking-wider mb-0.5">Precio</span>
                        ${priceDisplay}
                    </div>
                    <button class="w-8 h-8 rounded-full flex items-center justify-center text-white bg-white/10 transition-all duration-300 hover:[background:linear-gradient(135deg,#06b6d4,#9333ea)]">
                        <i class="fas fa-arrow-right text-xs"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
}

function renderProducts(items) {
    gridContainer.innerHTML = '';
    if (items.length === 0) { emptyState.classList.remove('hidden'); return; }
    emptyState.classList.add('hidden');

    const now = new Date().getTime();
    const target = new Date(TARGET_DATE).getTime();
    const isExpired = now > target;

    let activeItems = items;
    if (isExpired) {
        activeItems = items.filter(p => p.category !== 'special');
        const menuBtn = document.getElementById('specialMenuBtn');
        if(menuBtn) menuBtn.classList.add('hidden');
        const countdown = document.getElementById('countdownContainer');
        if(countdown) countdown.classList.add('hidden');
    }

    const custom = activeItems.filter(p => p.category === 'custom');
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

    drawSection("Ofertas Navideñas", "fa-star", specials, "text-yellow-400 animate-pulse");
    drawSection("Perfiles y Suscripciones", "fa-user", profiles, "text-cyan-400");
    drawSection("Combos Dúo", "fa-user-friends", duos, "text-purple-400");
    drawSection("Cuentas Completas", "fa-crown", fullAccounts, "text-yellow-400");
}

function filterProducts() {
    const searchTerm = searchInput.value.toLowerCase();
    const category = categoryFilter.value;
    
    const url = new URL(window.location);
    if(category === 'all') url.searchParams.delete('category');
    else url.searchParams.set('category', category);
    window.history.pushState({}, '', url);

    const filtered = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm) || product.description.toLowerCase().includes(searchTerm);
        let matchesCategory = true;
        
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
    
    const isExpired = new Date().getTime() > new Date(TARGET_DATE).getTime();
    if(menuType === 'special' && isExpired) return;

    if (menuType === 'custom') {
        const filtered = products.filter(p => p.category === 'custom');
        renderProducts(filtered);
        categoryFilter.value = 'all'; 
    } else {
        categoryFilter.value = menuType;
        filterProducts();
    }
    
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

function parsePrice(priceStr) {
    if(!priceStr) return 0;
    return parseInt(priceStr.replace(/[^0-9]/g, '')) || 0;
}

function updateModalPrice(currentPrice, oldPrice) {
    if (oldPrice) {
        mPrice.innerHTML = `
            <div class="flex flex-col items-start">
                <span class="text-sm text-gray-500 line-through decoration-red-500 decoration-2">${oldPrice}</span>
                <span class="text-3xl font-bold text-white">${currentPrice}</span>
            </div>`;
    } else {
        mPrice.innerText = currentPrice;
    }
}

window.openModal = function(productId) {
    const product = products.find(p => p.id === productId);
    if(!product) return;

    const url = new URL(window.location);
    url.searchParams.set('id', productId);
    window.history.pushState({}, '', url);

    currentProduct = product;
    mTitle.innerText = product.name;
    mDesc.innerText = product.description;
    mHeader.className = `h-32 w-full bg-gradient-to-r ${product.color} flex items-center justify-center p-4`;
    const logoClass = product.logoClass || "h-16 w-auto max-w-[70%]";
    
    if (product.id !== 999) {
        mHeader.innerHTML = `<img src="${product.image}" class="${logoClass} object-contain drop-shadow-2xl brightness-0 invert">`;
    } else {
        mHeader.innerHTML = `<i class="fas fa-tools text-8xl text-white drop-shadow-lg"></i>`;
    }

    if (product.id === 999) {
        mCat.innerText = "Constructor";
        mFeatures.innerHTML = ""; 
        mOptionsContainer.classList.remove('hidden'); 
        mOptionsContainer.innerHTML = `<label class="text-xs text-gray-400 uppercase font-bold tracking-wider mb-2 block">Selecciona tus servicios:</label>`;
        
        const selectionList = document.createElement('div');
        selectionList.className = "max-h-72 overflow-y-auto space-y-3 pr-2 custom-scroll";
        
        const individualProducts = products.filter(p => ['streaming', 'music', 'tool'].includes(p.category));
        
        individualProducts.forEach(p => {
            const itemDiv = document.createElement('div');
            itemDiv.className = "item-container flex flex-col bg-slate-900/50 p-3 rounded-lg border border-white/5 hover:border-indigo-500/50 transition-colors cursor-pointer select-none";
            
            let inputHTML = '';
            
            if (p.variants && p.variants.length > 0) {
                let optionsHTML = p.variants.map((v, i) => `<option value="${i}" data-price="${parsePrice(v.price)}">${v.label} ($${parsePrice(v.price)})</option>`).join('');
                
                inputHTML = `
                    <div class="flex items-center justify-between w-full mb-2 pointer-events-none">
                        <div class="flex items-center gap-2">
                            <input type="checkbox" class="w-4 h-4 rounded border-slate-600 text-indigo-600 focus:ring-indigo-500 bg-slate-800 combo-checkbox has-variants" 
                                   data-id="${p.id}" data-name="${p.name}">
                            <span class="text-sm font-medium text-gray-200">${p.name}</span>
                        </div>
                    </div>
                    <select class="w-full bg-slate-950 border border-slate-700 rounded text-xs p-2 text-gray-300 focus:border-indigo-500 outline-none combo-variant-select disabled:opacity-50" disabled onclick="event.stopPropagation()">
                        ${optionsHTML}
                    </select>
                `;
            } else {
                const price = parsePrice(p.price);
                inputHTML = `
                    <div class="flex items-center justify-between w-full pointer-events-none">
                        <div class="flex items-center gap-2">
                            <input type="checkbox" class="w-4 h-4 rounded border-slate-600 text-indigo-600 focus:ring-indigo-500 bg-slate-800 combo-checkbox" 
                                   value="${p.id}" data-price="${price}" data-name="${p.name}">
                            <span class="text-sm font-medium text-gray-200">${p.name}</span>
                        </div>
                        <span class="text-xs text-indigo-300 font-bold">$${price}</span>
                    </div>
                `;
            }

            itemDiv.innerHTML = inputHTML;
            
            itemDiv.onclick = (e) => {
                if (e.target.tagName === 'SELECT') return;

                const checkbox = itemDiv.querySelector('.combo-checkbox');
                checkbox.checked = !checkbox.checked;
                
                const select = itemDiv.querySelector('select');
                if(select) select.disabled = !checkbox.checked;
                
                updateCustomTotal();
            };
            
            const select = itemDiv.querySelector('select');
            if(select) {
                select.addEventListener('change', updateCustomTotal);
            }

            selectionList.appendChild(itemDiv);
        });
        
        mOptionsContainer.appendChild(selectionList);
        
        const summaryDiv = document.createElement('div');
        summaryDiv.id = "customSummary";
        summaryDiv.className = "mt-4 p-3 bg-indigo-900/20 rounded-lg border border-indigo-500/30 text-sm";
        summaryDiv.innerHTML = `
            <div class="flex justify-between text-gray-400 mb-1"><span>Subtotal:</span> <span id="calcSub">$0 MXN</span></div>
            <div class="flex justify-between text-green-400 mb-1"><span>Descuento ($5/item):</span> <span id="calcDisc">-$0 MXN</span></div>
            <div class="h-px bg-white/10 my-2"></div>
            <div class="text-xs text-center text-gray-500">Selecciona al menos 2 servicios</div>
        `;
        mFeatures.appendChild(summaryDiv);
        
        mPrice.innerText = "$0";
        mBtn.onclick = () => handleCustomBuy();
        
        updateCustomTotal();

    } else {
        mCat.innerText = product.category === 'special' ? "Oferta Navidad" : (product.category === 'full' ? "Cuenta Completa" : "Servicio");
        
        mFeatures.innerHTML = product.features.map(f => `<li class="flex items-start gap-3 text-gray-300"><div class="w-4 h-4 mt-0.5 rounded-full flex items-center justify-center bg-gradient-to-br from-[#06b6d4] to-[#9333ea] shadow-sm flex-shrink-0"><i class="fas fa-check text-white text-[10px]"></i></div><span class="text-sm">${f}</span></li>`).join('');
        
        mOptionsContainer.innerHTML = `<label class="text-xs text-gray-400 uppercase font-bold tracking-wider mb-2 block">Elige tu plan:</label><select id="modalOptionsSelect" class="w-full bg-slate-900 border border-slate-600 rounded-lg p-3 text-white text-sm focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none"></select>`;
        const select = document.getElementById('modalOptionsSelect');

        select.innerHTML = ''; 
        if (product.variants && product.variants.length > 0) {
            mOptionsContainer.classList.remove('hidden');
            product.variants.forEach((v, idx) => {
                const opt = document.createElement('option');
                opt.value = idx;
                opt.text = `${v.label} - ${v.price}`;
                select.appendChild(opt);
            });
            updateModalPrice(product.variants[0].price, product.variants[0].originalPrice);
            
            select.onchange = (e) => { 
                const variant = product.variants[e.target.value];
                updateModalPrice(variant.price, variant.originalPrice);
            };
        } else {
            mOptionsContainer.classList.add('hidden');
            updateModalPrice(product.price, product.originalPrice);
            select.onchange = null;
        }
        
        mBtn.disabled = false;
        mBtn.classList.remove('opacity-50', 'cursor-not-allowed');
        mBtn.classList.add('hover:scale-105');
        
        mBtn.onclick = () => handleBuyClick();
    }

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function updateCustomTotal() {
    const checkboxes = document.querySelectorAll('.combo-checkbox:checked');
    let subtotal = 0;
    let count = 0;
    
    checkboxes.forEach(cb => {
        let price = 0;
        if (cb.classList.contains('has-variants')) {
            const container = cb.closest('.item-container');
            const select = container.querySelector('select');
            const selectedOption = select.options[select.selectedIndex];
            price = parseInt(selectedOption.dataset.price);
        } else {
            price = parseInt(cb.dataset.price);
        }
        subtotal += price;
        count++;
    });

    const discount = count * 5; 
    const total = subtotal - discount;

    document.getElementById('calcSub').innerText = `$${subtotal} MXN`;
    document.getElementById('calcDisc').innerText = `-$${discount} MXN`;
    document.getElementById('modalPrice').innerText = `$${total} MXN`;
    
    const summaryText = document.querySelector('#customSummary .text-center');
    const btn = document.getElementById('modalBuyBtn');

    if(count < 2) {
        btn.disabled = true;
        btn.classList.add('opacity-50', 'cursor-not-allowed');
        btn.classList.remove('hover:scale-105');
        if(summaryText) summaryText.innerHTML = `<span class="text-orange-400 font-medium">Selecciona al menos 2 servicios</span>`;
    } else {
        btn.disabled = false;
        btn.classList.remove('opacity-50', 'cursor-not-allowed');
        btn.classList.add('hover:scale-105');
        if(summaryText) summaryText.innerHTML = `<span class="text-indigo-300 font-bold">¡Genial! Ahorras $${discount} MXN</span>`;
    }
}

function handleCustomBuy() {
    const checkboxes = document.querySelectorAll('.combo-checkbox:checked');
    if(checkboxes.length === 0) return;

    let itemsList = "";
    let total = document.getElementById('modalPrice').innerText;
    
    checkboxes.forEach(cb => {
        let name = cb.dataset.name;
        let price = 0;
        let detail = "";

        if (cb.classList.contains('has-variants')) {
            const container = cb.closest('.item-container');
            const select = container.querySelector('select');
            const selectedOption = select.options[select.selectedIndex];
            price = selectedOption.dataset.price;
            let rawText = selectedOption.text; 
            let variantName = rawText.split(' ($')[0];
            detail = ` (${variantName})`; 
        } else {
            price = cb.dataset.price;
        }
        itemsList += `\n- ${name}${detail} ($${price})`;
    });

    const msg = `Hola, Misael, armé mi propio combo personalizado con precios de oferta: ${itemsList}\n\nTotal con descuento: *${total}*.\n¿Me ayudas con el pago?`;
    window.open(`https://wa.me/${MY_PHONE_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
}

function handleBuyClick() {
    if (!currentProduct) return;
    let finalPrice = currentProduct.price;
    let detailText = ""; 
    const select = document.getElementById('modalOptionsSelect');
    
    if (currentProduct.variants && currentProduct.variants.length > 0 && select) {
        const index = select.value;
        const variant = currentProduct.variants[index];
        finalPrice = variant.price;
        detailText = ` (${variant.label})`;
    }
    const msg = `Hola, Misael, me interesa la oferta de: *${currentProduct.name}${detailText}* - ${finalPrice}. ¿Me puedes ayudar con el proceso de compra? ¡Gracias!`;
    window.open(`https://wa.me/${MY_PHONE_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
}

window.closeModal = function() { 
    modal.classList.add('hidden'); 
    document.body.style.overflow = 'auto';
    const url = new URL(window.location);
    url.searchParams.delete('id');
    window.history.pushState({}, '', url);
}

function initCountdown() {
    const countdownElement = document.getElementById('countdownTimer');
    if (!countdownElement) return;

    const countDate = new Date(TARGET_DATE).getTime();
    
    const interval = setInterval(() => {
        const now = new Date().getTime();
        const gap = countDate - now;

        if (gap < 0) {
            clearInterval(interval);
            const container = document.getElementById('countdownContainer');
            const menuBtn = document.getElementById('specialMenuBtn');
            const specialOpt = document.getElementById('optSpecial');
            
            if(container) container.classList.add('hidden');
            if(menuBtn) menuBtn.classList.add('hidden');
            if(specialOpt) specialOpt.remove();
            
            renderProducts(products); 
            return; 
        }

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

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
        const widget = document.getElementById('chatWidget'); if (widget.classList.contains('chat-visible')) toggleChat();
        const overlay = document.getElementById('drawerOverlay'); if (overlay.classList.contains('overlay-visible')) toggleDrawer();
        const discModal = document.getElementById('disclaimerModal'); if (!discModal.classList.contains('hidden')) toggleDisclaimer();
    }
});

function checkUrlParams() {
    const urlParams = new URLSearchParams(window.location.search);
    
    const category = urlParams.get('category');
    if (category) {
        categoryFilter.value = category; 
        filterProducts();
    }

    const productId = urlParams.get('id');
    if (productId) {
        const idNum = parseInt(productId);
        const productExists = products.some(p => p.id === idNum);
        if (productExists) {
            window.openModal(idNum);
        }
    }
}

window.openBuilderFromMenu = function() {
    toggleDrawer();
    
    setTimeout(() => {
        openModal(999);
    }, 300);
}

window.addEventListener('popstate', (event) => {
    const urlParams = new URLSearchParams(window.location.search);
    
    if (!urlParams.get('id')) {
        modal.classList.add('hidden'); 
        document.body.style.overflow = 'auto';
    } else {
        checkUrlParams();
    }

    const category = urlParams.get('category') || 'all';
    categoryFilter.value = category;
    filterProducts();
});

// INICIALIZACIÓN
renderProducts(products);
initCountdown();
checkUrlParams();
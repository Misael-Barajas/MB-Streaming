// js/script.js

// --- CONFIGURACIÓN ---
const MY_PHONE_NUMBER = "523511563006";

// --- DATOS ---
const products = [
    // === PERFILES STREAMING ===
    { 
        id: 101, 
        name: "Netflix (Perfil)", 
        category: "streaming", 
        price: "$95 MXN", 
        description: "Perfil privado en cuenta compartida. Calidad 4K UHD garantizada.", 
        features: ["1 Pantalla", "Calidad 4K", "Sin anuncios", "Garantía 30 días"], 
        image: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
        color: "from-gray-800 to-black"
    },
    { 
        id: 102, 
        name: "Apple TV+", 
        category: "streaming", 
        price: "$95 MXN", 
        description: "Disfruta de las mejores series originales de Apple.", 
        features: ["Series exclusivas", "Calidad 4K", "Acceso web/app", "Garantía total"], 
        image: "https://upload.wikimedia.org/wikipedia/commons/2/28/Apple_TV_Plus_Logo.svg",
        color: "from-zinc-800 to-zinc-950" 
    },
    { 
        id: 103, 
        name: "YouTube Premium", 
        category: "streaming", 
        price: "$90 MXN", 
        description: "Videos sin anuncios y YouTube Music incluido.", 
        features: ["Sin publicidad", "YouTube Music", "Segundo plano", "Descargas"], 
        image: "https://upload.wikimedia.org/wikipedia/commons/d/d7/YouTube_Logo_2017.svg",
        color: "from-red-600 to-red-900",
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
        image: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney%2B_logo.svg",
        color: "from-blue-900 to-slate-900",
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
        image: "https://upload.wikimedia.org/wikipedia/commons/9/92/Rakuten_Viki_Logo_2019.svg",
        color: "from-cyan-600 to-blue-600" 
    },
    { 
        id: 106, 
        name: "Prime Video", 
        category: "streaming", 
        price: "$80 MXN", 
        description: "Series Amazon Originals y envíos gratis (consultar).", 
        features: ["Prime Video", "Series exclusivas", "Calidad UHD", "Soporte"], 
        image: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Prime_Video.png",
        color: "from-blue-800 to-slate-900" 
    },
    { 
        id: 107, 
        name: "HBO Max (Max)", 
        category: "streaming", 
        price: "$80 MXN", 
        description: "Todo HBO, Warner Bros, DC y Cartoon Network.", 
        features: ["Perfil Privado", "4K UHD", "Series top", "Garantía"], 
        image: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Max_logo.svg",
        color: "from-blue-700 to-blue-900" 
    },
    { 
        id: 108, 
        name: "Crunchyroll", 
        category: "streaming", 
        price: "$65 MXN", 
        description: "La colección de anime más grande del mundo.", 
        features: ["Fan Pack", "Sin anuncios", "Simulcast (Estrenos)", "Catálogo completo"], 
        image: "https://upload.wikimedia.org/wikipedia/commons/0/08/Crunchyroll_Logo.png",
        color: "from-orange-500 to-orange-700" 
    },
    { 
        id: 109, 
        name: "VIX Premium", 
        category: "streaming", 
        price: "$65 MXN", 
        description: "Telenovelas, series latinas y Liga MX.", 
        features: ["Deportes en vivo", "Sin anuncios", "Originales VIX", "Garantía"], 
        image: "https://upload.wikimedia.org/wikipedia/commons/a/a2/ViX_logo_2022.svg",
        color: "from-orange-600 to-red-600" 
    },
    { 
        id: 110, 
        name: "Paramount+", 
        category: "streaming", 
        price: "$65 MXN", 
        description: "Una montaña de entretenimiento. Series y películas.", 
        features: ["Originales", "Blockbusters", "Contenido infantil", "Garantía"], 
        image: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Paramount_Plus.svg",
        color: "from-blue-600 to-blue-900" 
    },

    // === MÚSICA ===
    { 
        id: 201, 
        name: "Spotify Premium", 
        category: "music", 
        price: "$75 MXN", 
        description: "Millones de canciones y podcasts. Escucha offline.", 
        features: ["Sin anuncios", "Modo Offline", "Saltar canciones", "Audio alta calidad"], 
        image: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
        color: "from-green-600 to-green-900",
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
        image: "https://upload.wikimedia.org/wikipedia/commons/d/db/Deezer_logo.svg",
        color: "from-purple-600 to-purple-900" 
    },

    // === HERRAMIENTAS ===
    { 
        id: 301, 
        name: "Office 365", 
        category: "software", 
        price: "$280 MXN", 
        description: "Word, Excel, PowerPoint y 1TB de nube.", 
        features: ["Cuenta Original", "1 TB OneDrive", "Licencia 1 Año", "5 Dispositivos"], 
        image: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Microsoft_Office_logo_%282019%E2%80%93present%29.svg",
        color: "from-orange-600 to-red-700" 
    },
    { 
        id: 302, 
        name: "Canva Pro", 
        category: "software", 
        price: "$50 MXN", 
        description: "Diseña como un profesional con contenido premium ilimitado.", 
        features: ["Kit de marca", "Quita fondos", "Contenido Premium", "Garantía"], 
        image: "https://upload.wikimedia.org/wikipedia/commons/0/08/Canva_icon_2021.svg",
        color: "from-cyan-600 to-blue-600",
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
        image: "https://upload.wikimedia.org/wikipedia/commons/a/a0/CapCut_logo.svg",
        color: "from-gray-800 to-black" 
    },
    { 
        id: 304, 
        name: "Gemini / ChatGPT", 
        category: "software", 
        price: "$100 MXN", 
        description: "Inteligencia Artificial avanzada para tus tareas.", 
        features: ["Modelos avanzados", "Respuestas rápidas", "Privacidad", "Soporte"], 
        image: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
        color: "from-teal-600 to-emerald-800" 
    },

    // === CUENTAS COMPLETAS ===
    { 
        id: 401, 
        name: "Netflix (Completa)", 
        category: "full", 
        price: "$200 MXN", 
        description: "Cuenta completa privada para ti. Tú gestionas los perfiles.", 
        features: ["5 Perfiles", "Calidad 4K UHD", "Sin geobloqueo", "Privada Total"], 
        image: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
        color: "from-red-800 to-black" 
    },
    { 
        id: 402, 
        name: "Disney+ (Completa)", 
        category: "full", 
        price: "$149 MXN", 
        description: "Cuenta completa de Disney+.", 
        features: ["7 Perfiles", "Privada", "Control Parental", "Soporte"], 
        image: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney%2B_logo.svg",
        color: "from-blue-900 to-black",
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
        image: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Max_logo.svg",
        color: "from-purple-900 to-black" 
    },
     { 
        id: 404, 
        name: "Prime Video (Completa)", 
        category: "full", 
        price: "$79 MXN", 
        description: "Cuenta completa de Amazon Prime Video.", 
        features: ["6 Perfiles", "Privada", "3 Pantallas", "Garantía"], 
        image: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Prime_Video.png",
        color: "from-blue-900 to-cyan-950" 
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
            <div class="h-32 bg-gradient-to-br ${product.color} flex items-center justify-center relative group overflow-hidden">
                <img src="${product.image}" alt="${product.name}" 
                     class="h-16 w-auto max-w-[70%] object-contain drop-shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-2">
                
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
const mIcon = document.getElementById('modalIcon');

let currentProduct = null;

function openModal(product) {
    currentProduct = product;
    
    mTitle.innerText = product.name;
    mDesc.innerText = product.description;
    
    let catName = 'Producto';
    if(product.category === 'streaming') catName = 'Streaming';
    else if(product.category === 'music') catName = 'Música';
    else if(product.category === 'software') catName = 'Software';
    else if(product.category === 'full') catName = 'Cuenta Completa';
    else if(product.category === 'duo') catName = 'Combo';
    else if(product.category === 'special') catName = 'Especial';
    
    mCat.innerText = catName;
    mHeader.className = `h-32 w-full bg-gradient-to-r ${product.color} flex items-center justify-center p-4`;
    
    // Limpiamos el contenido previo del header y ponemos la imagen
    mHeader.innerHTML = `
        <img src="${product.image}" class="h-full w-auto object-contain drop-shadow-2xl" alt="${product.name}">
    `;

    mFeatures.innerHTML = product.features.map(feat => `<li class="flex items-center gap-2"><i class="fas fa-check text-cyan-500 text-xs"></i> ${feat}</li>`).join('');

    // Lógica de Variantes
    mOptionsSelect.innerHTML = ''; 
    
    if (product.variants && product.variants.length > 0) {
        mOptionsContainer.classList.remove('hidden');
        product.variants.forEach((variant, idx) => {
            const option = document.createElement('option');
            option.value = idx;
            option.text = `${variant.label}`;
            mOptionsSelect.appendChild(option);
        });

        mPrice.innerText = product.variants[0].price;

        mOptionsSelect.onchange = (e) => {
            const index = e.target.value;
            const selectedVariant = product.variants[index];
            mPrice.style.opacity = '0';
            setTimeout(() => {
                mPrice.innerText = selectedVariant.price;
                mPrice.style.opacity = '1';
            }, 150);
        };
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

    const msg = `Hola, Misael, me interesa: *${currentProduct.name}${detailText}* - ${finalPrice}. ¿Me ayudas con la info de pago?`;
    window.open(`https://wa.me/${MY_PHONE_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
}

function closeModal() {
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// --- UTILS ---
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
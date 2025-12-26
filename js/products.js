// js/products.js
// Catálogo + constantes (no toca precios)

window.MY_PHONE_NUMBER = "523511563006";
window.TARGET_DATE = "Jan 07, 2026 00:00:00";

// LOGOS DE LAS PLATAFORMAS
window.LOGOS = {
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
    mubi: "img/logo/mubi-logo.webp",
    builder: "img/logo/builder-logo.webp",
    offer1: "img/oferta-1.webp",
    offer2: "img/oferta-2.webp",
    offer3: "img/oferta-3.webp"
};

// COLORES GRADIENTES
window.COLORS = {
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
    mubi: "from-[#0000FF] via-[#000066] to-[#050505]",
    offer: "from-[#D4A348] to-gray-700",
    custom: "from-indigo-600 via-purple-600 to-pink-600"
};

// PRODUCTOS (descripciones mejoradas sin tocar precios)
window.products = [
    {
        id: 999,
        name: "Arma tu combo",
        category: "custom",
        price: "A medida",
        description: "Elige tus servicios favoritos. Se aplica un descuento de -$5 por cada ítem al final. Ideal para ahorrar armando tu paquete.",
        features: ["Tú eliges las apps", "Elige el plan exacto", "Descuento acumulable (-$5 c/u)", "Pago único"],
        image: LOGOS.builder,
        color: COLORS.custom,
        logoClass: "h-28 w-auto invert brightness-0"
    },

    // ESPECIALES
    { id: 901, name: "Combo Reyes Magos", category: "special", price: "$210 MXN",
      description: "Netflix, Disney Premium y Paramount. Un paquete completo para maratonear con magia.",
      features: ["3 Apps de Streaming", "Máxima Calidad (4K)", "Ahorro garantizado"],
      image: LOGOS.offer1, color: COLORS.offer, logoClass: "h-24 w-auto",
      variants: [{ label: "Netflix, Disney Premium y Paramount", price: "$210 MXN" }] },

    { id: 902, name: "Mega Pack 2026", category: "special", price: "$350 MXN",
      description: "Netflix, Disney Premium, HBO Max y Prime Video. El arsenal completo de entretenimiento.",
      features: ["4 Gigantes del Streaming", "Máxima Calidad (4K)", "Ahorro Masivo", "VIX de regalo"],
      image: LOGOS.offer3, color: COLORS.offer, logoClass: "w-auto",
      variants: [{ label: "Netflix, Disney Premium, HBO Platino, Prime Video y VIX", price: "$350 MXN" }],
      badges: ["VIX de regalo"] },

    // STREAMING / PERFILES
    { id: 101, name: "VIX", category: "streaming", price: "$65 MXN",
      description: "Series, películas latinas y deportes en vivo. Ideal si buscas contenido en español y eventos deportivos.",
      features: ["Deportes en vivo", "Contenido exclusivo VIX", "Compatible con combo", "Garantía y soporte"],
      image: LOGOS.vix, color: COLORS.vix },

    { id: 102, name: "Paramount+", category: "streaming", price: "$65 MXN",
      description: "Películas y series de Paramount, CBS, MTV y más. Un catálogo variado con franquicias conocidas.",
      features: ["Blockbusters y franquicias", "Eventos deportivos", "Compatible con combo", "Garantía y soporte"],
      image: LOGOS.paramount, color: COLORS.paramount },

    { id: 103, name: "Crunchyroll", category: "streaming", price: "$65 MXN",
      description: "Anime sin anuncios con gran catálogo. Perfecto si quieres estrenos y temporadas completas.",
      features: ["Plan Mega Fan", "Visualización sin anuncios", "Compatible con combo", "Garantía y soporte"],
      image: LOGOS.crunchy, color: COLORS.crunchy },

    { id: 104, name: "Prime Video", category: "streaming", price: "$70 MXN",
      description: "Originales de Amazon, películas y series populares. Buen complemento para cualquier combo.",
      features: ["Series, películas y deportes", "Compatible con combo", "Garantía y soporte"],
      image: LOGOS.prime, color: COLORS.prime, logoClass: "h-20 w-auto",
      badges: ["Más popular"] },

    { id: 105, name: "MUBI", category: "streaming", price: "$80 MXN",
      description: "Cine de autor y clásicos seleccionados. Ideal para amantes del cine independiente y de calidad.",
      features: ["Sin anuncios", "Calidad 4K", "Compatible con combo", "Garantía y soporte"],
      image: LOGOS.mubi, color: COLORS.mubi },

    { id: 106, name: "Viki Rakuten", category: "streaming", price: "$80 MXN",
      description: "Dramas y películas asiáticas (K-Dramas y más) con subtítulos de buena calidad.",
      features: ["Viki Pass Estándar", "Contenido exclusivo", "Compatible con combo", "Garantía y soporte"],
      image: LOGOS.viki, color: COLORS.viki },

    { id: 107, name: "HBO Max", category: "streaming", price: "Desde $70 hasta $130 MXN",
      description: "HBO, Warner Bros. y DC. Series top y estrenos con gran calidad de imagen.",
      features: ["Máxima calidad (4K UHD)", "Descarga de títulos", "Compatible con combo", "Garantía y soporte"],
      image: LOGOS.max, color: COLORS.max,
      variants: [{ label: "Básico (con anuncios)", price: "$70 MXN" }, { label: "Estándar", price: "$95 MXN" }, { label: "Platino", price: "$130 MXN" }] },

    { id: 108, name: "Disney+ Premium", category: "streaming", price: "$95 MXN",
      description: "Disney, Pixar, Marvel, Star Wars y National Geographic. Para toda la familia.",
      features: ["Perfil privado", "Sin anuncios", "Incluye ESPN", "Compatible con combo", "Garantía y soporte"],
      image: LOGOS.disney, color: COLORS.disney, logoClass: "h-24 w-auto",
      badges: ["Más popular"] },

    { id: 109, name: "Netflix", category: "streaming", price: "$95 MXN",
      description: "Series y películas para todos los gustos. Perfil individual 4K con excelente catálogo.",
      features: ["Perfil 4K individual", "Descarga de contenido", "Compatible con combo", "Garantía y soporte"],
      image: LOGOS.netflix, color: COLORS.netflix,
      badges: ["Más popular"] },

    { id: 110, name: "Apple TV+", category: "streaming", price: "$95 MXN",
      description: "Originales aclamados por la crítica y producciones exclusivas. Calidad premium.",
      features: ["Máxima calidad (4K)", "Perfil privado", "Compatible con combo", "Garantía y soporte"],
      image: LOGOS.apple_tv, color: "from-zinc-800 to-black" },

    { id: 111, name: "YouTube Premium", category: "streaming", price: "Desde $90 hasta $780 MXN",
      description: "Videos sin anuncios + descargas y YouTube Music. Ideal si consumes mucho YouTube.",
      features: ["Descargas sin conexión", "YouTube Music incluido", "Compatible con combo", "Garantía y soporte"],
      image: LOGOS.youtube, color: COLORS.youtube,
      variants: [{ label: "1 Mes", price: "$90 MXN" }, { label: "2 Meses", price: "$150 MXN" }, { label: "3 Meses", price: "$220 MXN" }, { label: "1 año", price: "$780 MXN" }] },

    // MÚSICA / HERRAMIENTAS
    { id: 201, name: "Deezer", category: "music", price: "$60 MXN",
      description: "Música con alta fidelidad (HiFi) para disfrutar mejor tus canciones y playlists.",
      features: ["Calidad HiFi", "Escucha sin conexión", "Compatible con combo", "Garantía y soporte"],
      image: LOGOS.deezer, color: COLORS.deezer },

    { id: 202, name: "Spotify", category: "music", price: "Desde $75 hasta $200 MXN",
      description: "Premium sin anuncios con modo offline. Ideal para música diaria y podcasts.",
      features: ["Premium sin anuncios", "Modo offline", "Compatible con combo", "Garantía y soporte"],
      image: LOGOS.spotify, color: COLORS.spotify, logoClass: "h-20 w-auto",
      variants: [{ label: "1 Mes", price: "$75 MXN" }, { label: "3 Meses", price: "$200 MXN" }] },

    { id: 301, name: "Canva Pro", category: "tool", price: "Desde $50 hasta $400 MXN",
      description: "Diseño online con funciones Pro: plantillas premium, recursos extra y herramientas avanzadas.",
      features: ["Acceso Pro", "Plantillas premium", "Compatible con combo", "Garantía y soporte"],
      image: LOGOS.canva, color: COLORS.canva,
      variants: [{ label: "1 Mes", price: "$50 MXN" }, { label: "3 Meses", price: "$120 MXN" }, { label: "1 Año", price: "$400 MXN" }] },

    { id: 302, name: "CapCut Pro", category: "tool", price: "$120 MXN",
      description: "Editor de video con herramientas Pro, efectos y exportación más limpia para creadores.",
      features: ["Acceso a efectos Pro", "Sin marca de agua", "Compatible con combo", "Garantía y soporte"],
      image: LOGOS.capcut, color: COLORS.capcut },

    { id: 303, name: "ChatGPT Plus", category: "tool", price: "$120 MXN",
      description: "IA avanzada para tareas, ideas y productividad. Ideal para estudiar y trabajar mejor.",
      features: ["Acceso a GPT-4", "Creación de imágenes (DALL-E)", "Compatible con combo", "Garantía y soporte"],
      image: LOGOS.chat_gpt, color: COLORS.chat_gpt, logoClass: "h-24 w-auto" },

    { id: 305, name: "Gemini Adv", category: "tool", price: "$290 MXN",
      description: "IA de Google con acceso a funciones avanzadas e integración con servicios Google.",
      features: ["Gemini Advanced", "Integración con Google", "Compatible con combo", "Garantía y soporte"],
      image: LOGOS.gemini, color: COLORS.gemini },

    { id: 304, name: "Office 365", category: "tool", price: "Desde $450 hasta $950 MXN",
      description: "Word, Excel y PowerPoint con almacenamiento en la nube. Ideal para estudio y trabajo.",
      features: ["Office para 5 dispositivos", "1TB en la nube", "Compatible con combo", "Garantía y soporte"],
      image: LOGOS.office, color: COLORS.office,
      variants: [{ label: "6 meses", price: "$450 MXN" }, { label: "1 año", price: "$950 MXN" }] },

    // CUENTAS COMPLETAS
    { id: 401, name: "VIX (Completa)", category: "full", price: "$120 MXN",
      description: "Cuenta privada para disfrutar series, películas y deportes en vivo.",
      features: ["Cuenta completa privada", "Deportes en vivo", "Contenido exclusivo VIX"],
      image: LOGOS.vix, color: COLORS.vix },

    { id: 402, name: "Crunchyroll (Completa)", category: "full", price: "$130 MXN",
      description: "Cuenta privada para anime sin límites.",
      features: ["Cuenta completa privada", "Plan Mega Fan", "Sin anuncios"],
      image: LOGOS.crunchy, color: COLORS.crunchy },

    { id: 403, name: "HBO Max (Completa)", category: "full", price: "Desde $200 hasta $270 MXN",
      description: "Cuenta privada con varios perfiles y gran catálogo HBO/Warner.",
      features: ["Cuenta completa privada", "5 Perfiles disponibles", "Calidad 4K UHD"],
      image: LOGOS.max, color: COLORS.max,
      variants: [{ label: "Estándar", price: "$200 MXN" }, { label: "Platino", price: "$270 MXN" }] },

    { id: 404, name: "Netflix (Completa)", category: "full", price: "$250 MXN",
      description: "Cuenta privada con acceso completo a perfiles y beneficios.",
      features: ["Cuenta completa privada", "5 Perfiles disponibles", "Calidad 4K UHD"],
      image: LOGOS.netflix, color: COLORS.netflix },

    { id: 405, name: "Disney+ (Completa)", category: "full", price: "$290 MXN",
      description: "Cuenta privada para disfrutar todo Disney+ con varios perfiles.",
      features: ["Cuenta completa privada", "Hasta 7 Perfiles", "Incluye ESPN"],
      image: LOGOS.disney, color: COLORS.disney, logoClass: "h-24 w-auto"},

    // COMBOS DÚO
    { id: 501, name: "Combos con Netflix", category: "duo", price: "Desde $150 hasta $215 MXN",
      description: "Combina Netflix con otro servicio y ahorra $10 MXN en total. Ideal para armar tu pack.",
      features: ["Ahorro de $10 MXN", "2 Perfiles individuales", "Mejor precio garantizado"],
      image: LOGOS.netflix, color: COLORS.netflix,
      variants: [
        { label: "con Crunchyroll", price: "$150 MXN" },
        { label: "con VIX", price: "$150 MXN" },
        { label: "con Paramount+", price: "$150 MXN" },
        { label: "con HBO Básico (c/anuncios)", price: "$155 MXN" },
        { label: "con Prime Video", price: "$165 MXN" },
        { label: "con HBO Estándar", price: "$180 MXN" },
        { label: "con Disney+ Premium", price: "$190 MXN" },
        { label: "con HBO Platino", price: "$215 MXN" },
      ]},

    { id: 510, name: "Combos con HBO Max", category: "duo", price: "Desde 125 hasta $220 MXN",
      description: "HBO Max + otro servicio con descuento total de $10 MXN. Tú eliges la combinación.",
      features: ["Ahorro de $10 MXN", "2 Perfiles individuales", "Mejor precio garantizado"],
      image: LOGOS.max, color: COLORS.max,
      variants: [
        { label: "Básico (c/anuncios) + Crunchyroll", price: "$125 MXN" },
        { label: "Básico (c/anuncios) + VIX", price: "$125 MXN" },
        { label: "Básico (c/anuncios) + Paramount+", price: "$125 MXN" },
        { label: "Básico (c/anuncios) + Prime Video", price: "$140 MXN" },
        { label: "Estándar + Crunchyroll", price: "$150 MXN" },
        { label: "Estándar + VIX", price: "$150 MXN" },
        { label: "Estándar + Paramount+", price: "$150 MXN" },
        { label: "Básico (c/anuncios) + Disney+", price: "$165 MXN" },
        { label: "Estándar + Prime Video", price: "$165 MXN" },
        { label: "Platino + Crunchyroll", price: "$185 MXN" },
        { label: "Platino + VIX", price: "$185 MXN" },
        { label: "Platino + Paramount+", price: "$185 MXN" },
        { label: "Estándar + Disney+", price: "$190 MXN" },
        { label: "Platino + Prime Video", price: "$200 MXN" },
        { label: "Platino + Disney+", price: "$225 MXN" }
      ]},

    { id: 520, name: "Combos con Disney+", category: "duo", price: "Desde $155 hasta $170 MXN",
      description: "Disney+ con descuento al combinarlo. Buen paquete familiar y fácil de armar.",
      features: ["Ahorro de $10 MXN", "1 Perfil Disney+", "1 Perfil extra"],
      image: LOGOS.disney, color: COLORS.disney, logoClass: "h-24 w-auto",
      variants: [
        { label: "con Crunchyroll", price: "$160 MXN" },
        { label: "con VIX", price: "$160 MXN" },
        { label: "con Paramount+", price: "$160 MXN" },
        { label: "con Prime Video", price: "$175 MXN" }
      ]},

    { id: 530, name: "Combos con Prime", category: "duo", price: "$135 MXN",
      description: "Prime Video + otro servicio con descuento. Una gran combinación para series y pelis.",
      features: ["Ahorro de $10 MXN", "1 Perfil Prime Video", "1 Perfil extra"],
      image: LOGOS.prime, color: COLORS.prime, logoClass: "h-20 w-auto",
      variants: [
        { label: "con Crunchyroll", price: "$135 MXN" },
        { label: "con VIX", price: "$135 MXN" },
        { label: "con Paramount+", price: "$135 MXN" }
      ]},

    { id: 540, name: "Combos con Crunchy", category: "duo", price: "$120 MXN",
      description: "Crunchyroll + otro servicio con descuento. Perfecto si amas el anime.",
      features: ["Ahorro de $10 MXN", "1 Perfil Crunchyroll", "1 Perfil extra"],
      image: LOGOS.crunchy, color: COLORS.crunchy,
      variants: [
        { label: "con VIX", price: "$120 MXN" },
        { label: "con Paramount+", price: "$120 MXN" }
      ]},

    { id: 550, name: "Combos con VIX", category: "duo", price: "$120 MXN",
      description: "VIX + Paramount+ con descuento. Entretenimiento variado y buen precio.",
      features: ["Ahorro de $10 MXN", "1 Perfil VIX", "1 Perfil Paramount+"],
      image: LOGOS.vix, color: COLORS.vix,
      variants: [{ label: "con Paramount+", price: "$120 MXN" }] }
];

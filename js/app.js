// js/app.js
(() => {
  const LS_CATEGORY_KEY = "mb_category";

  // Elementos
  const gridContainer = document.getElementById("productsGrid");
  const searchInput = document.getElementById("searchInput");
  const categoryFilter = document.getElementById("categoryFilter");
  const emptyState = document.getElementById("emptyState");

  // Modal
  const modal = document.getElementById("productModal");
  const mTitle = document.getElementById("modalTitle");
  const mDesc = document.getElementById("modalDescription");
  const mPrice = document.getElementById("modalPrice");
  const mFeatures = document.getElementById("modalFeatures");
  const mHeader = document.getElementById("modalHeaderColor");
  const mBtn = document.getElementById("modalBuyBtn");
  const mCat = document.getElementById("modalCategory");
  const mOptionsContainer = document.getElementById("modalOptionsContainer");
  const modalCloseBtn = document.getElementById("modalCloseBtn");

  let currentProduct = null;
  let lastFocusedEl = null;

  function isSpecialExpired() {
    return new Date().getTime() > new Date(window.TARGET_DATE).getTime();
  }

  function parsePrice(priceStr) {
    if (!priceStr) return 0;
    return parseInt(priceStr.replace(/[^0-9]/g, "")) || 0;
  }

  function escapeHTML(str) {
    return String(str).replace(/[&<>"']/g, (m) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;"
    }[m]));
  }

  function createCardHTML(product, index) {
    let label = "Producto";
    let badgeColor = "bg-slate-700";

    if (product.category === "streaming") { label = "Perfil"; badgeColor = "bg-blue-600/50"; }
    else if (product.category === "music") { label = "Música"; badgeColor = "bg-green-600/50"; }
    else if (product.category === "tool") { label = "Herramienta"; badgeColor = "bg-slate-600/50"; }
    else if (product.category === "full") { label = "Completa"; badgeColor = "bg-yellow-600/50 text-yellow-100"; }
    else if (product.category === "duo") { label = "Combo Dúo"; badgeColor = "bg-purple-600/50 text-purple-100"; }
    else if (product.category === "special") { label = "Año Nuevo"; badgeColor = "bg-yellow-500/80 text-black font-bold animate-pulse"; }
    else if (product.category === "custom") { label = "Tú Eliges"; badgeColor = "bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-bold"; }

    const logoClass = product.logoClass || "h-16 w-auto max-w-[70%]";

    // lazy + async decode
    let imageHTML = `
      <img
        src="${product.image}"
        alt="${escapeHTML(product.name)}"
        class="${logoClass} object-contain drop-shadow-2xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-2 brightness-0 invert"
        loading="lazy"
        decoding="async"
      >
    `;

    if (product.id === 999 && (!product.image.includes("img/") && !product.image.includes("http"))) {
      imageHTML = `<i class="fas fa-layer-group text-6xl text-white drop-shadow-lg transition-transform duration-300 group-hover:scale-110" aria-hidden="true"></i>`;
    }

    const badges = Array.isArray(product.badges) ? product.badges : [];
    const extraBadgesHTML = badges.length
      ? `<div class="absolute top-3 left-3 flex flex-col gap-2">
            ${badges.map(b => `
              <span class="px-2 py-1 rounded-lg text-[10px] font-bold bg-black/35 border border-white/10 backdrop-blur-md text-white">
                ${escapeHTML(b)}
              </span>
            `).join("")}
         </div>`
      : "";

    return `
      <div
        class="glass-card rounded-2xl overflow-hidden cursor-pointer fade-in hover:scale-[1.02] transition-all duration-300"
        style="animation-delay: ${index * 0.05}s"
        onclick="openModal(${product.id})"
        role="button"
        tabindex="0"
        aria-label="Ver detalles de ${escapeHTML(product.name)}"
        onkeydown="if(event.key==='Enter' || event.key===' '){ event.preventDefault(); openModal(${product.id}); }"
      >
        <div class="h-32 bg-gradient-to-br ${product.color} flex items-center justify-center relative group overflow-hidden">
          ${imageHTML}
          ${extraBadgesHTML}
          <div class="absolute bottom-2 right-2 ${badgeColor} backdrop-blur-md px-2 py-1 rounded text-[10px] font-bold text-white uppercase tracking-wider border border-white/10 shadow-lg">
            ${label}
          </div>
        </div>

        <div class="p-5">
          <h3 class="font-bold text-lg text-white mb-1 truncate">${escapeHTML(product.name)}</h3>
          <p class="text-gray-400 text-xs line-clamp-2 mb-4 min-h-[2.5em]">${escapeHTML(product.description)}</p>

          <div class="flex items-center justify-between border-t border-white/10 pt-4 gap-3">
            <div class="flex flex-col">
              <span class="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Precio</span>
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-bold text-lg">${escapeHTML(product.price)}</span>
            </div>

            <div class="flex items-center gap-2">
              <button
                class="px-3 py-2 rounded-xl text-xs font-bold bg-white/10 text-white hover:bg-white/15 transition-colors"
                aria-label="Ver detalles"
              >
                Ver detalles
              </button>
              <div class="w-8 h-8 rounded-full flex items-center justify-center text-white bg-white/10 transition-all duration-300 hover:[background:linear-gradient(135deg,#06b6d4,#9333ea)]" aria-hidden="true">
                <i class="fas fa-arrow-right text-xs" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function renderProducts(items) {
    gridContainer.innerHTML = "";
    if (items.length === 0) {
      emptyState.classList.remove("hidden");
      return;
    }
    emptyState.classList.add("hidden");

    const expired = isSpecialExpired();
    let activeItems = items;

    if (expired) {
      activeItems = items.filter(p => p.category !== "special");
      const menuBtn = document.getElementById("specialMenuBtn");
      const countdown = document.getElementById("countdownContainer");
      const specialOpt = document.getElementById("optSpecial");
      if (menuBtn) menuBtn.classList.add("hidden");
      if (countdown) countdown.classList.add("hidden");
      if (specialOpt) specialOpt.remove();
    }

    const custom = activeItems.filter(p => p.category === "custom");
    const profiles = activeItems.filter(p => ["streaming", "music", "tool"].includes(p.category));
    const fullAccounts = activeItems.filter(p => p.category === "full");
    const duos = activeItems.filter(p => p.category === "duo");
    const specials = activeItems.filter(p => p.category === "special");

    const drawSection = (title, icon, itemsList, colorClass = "text-white") => {
      if (itemsList.length === 0) return;

      const sectionHeader = `
        <div class="flex items-center gap-3 mb-6 px-2 fade-in">
          <div class="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
            <i class="fas ${icon} text-xl ${colorClass}" aria-hidden="true"></i>
          </div>
          <h2 class="text-2xl font-bold text-white tracking-tight">${title}</h2>
          <div class="h-px flex-grow bg-gradient-to-r from-white/10 to-transparent ml-4"></div>
        </div>`;

      const cardsHTML = itemsList.map((product, idx) => createCardHTML(product, idx)).join("");
      gridContainer.innerHTML += `${sectionHeader}<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">${cardsHTML}</div>`;
    };

    drawSection("Especiales de Año Nuevo", "fa-star", specials, "text-yellow-400 animate-pulse");
    drawSection("Perfiles y Suscripciones", "fa-user", profiles, "text-cyan-400");
    drawSection("Combos Dúo", "fa-user-friends", duos, "text-purple-400");
    drawSection("Crea tu combo personalizado", "fa-layer-group", custom, "text-indigo-400");
    drawSection("Cuentas Completas", "fa-crown", fullAccounts, "text-yellow-400");
  }

  function filterProducts() {
    const searchTerm = searchInput.value.toLowerCase();
    const category = categoryFilter.value;

    // Guardar categoría (UX)
    localStorage.setItem(LS_CATEGORY_KEY, category);

    // Mantener URL limpia
    const url = new URL(window.location);
    if (category === "all") url.searchParams.delete("category");
    else url.searchParams.set("category", category);
    window.history.pushState({}, "", url);

    const expired = isSpecialExpired();

    const filtered = window.products.filter(product => {
      if (expired && product.category === "special") return false;

      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm);

      let matchesCategory = true;
      if (category === "streaming") matchesCategory = product.category === "streaming" || product.category === "full";
      else if (category === "full") matchesCategory = product.category === "full";
      else if (category !== "all") matchesCategory = product.category === category;

      return matchesSearch && matchesCategory;
    });

    renderProducts(filtered);
  }

  window.filterProductsByMenu = function (menuType) {
    toggleDrawer();
    searchInput.value = "";

    if (menuType === "special" && isSpecialExpired()) return;

    if (menuType === "custom") {
      const filtered = window.products.filter(p => p.category === "custom");
      renderProducts(filtered);
      categoryFilter.value = "all";
      localStorage.setItem(LS_CATEGORY_KEY, "all");
    } else {
      categoryFilter.value = menuType;
      filterProducts();
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // --- MODAL ---
  window.openModal = function (productId) {
    const product = window.products.find(p => p.id === productId);
    if (!product) return;

    lastFocusedEl = document.activeElement;

    const url = new URL(window.location);
    url.searchParams.set("id", productId);
    window.history.pushState({}, "", url);

    currentProduct = product;
    mTitle.innerText = product.name;
    mDesc.innerText = product.description;

    mHeader.className = `h-32 w-full bg-gradient-to-r ${product.color} flex items-center justify-center p-4`;
    const logoClass = product.logoClass || "h-16 w-auto max-w-[70%]";

    if (product.id !== 999) {
      mHeader.innerHTML = `
        <img src="${product.image}" class="${logoClass} object-contain drop-shadow-2xl brightness-0 invert" loading="lazy" decoding="async" alt="${escapeHTML(product.name)}">
      `;
    } else {
      mHeader.innerHTML = `<i class="fas fa-tools text-8xl text-white drop-shadow-lg" aria-hidden="true"></i>`;
    }

    if (product.id === 999) {
      mCat.innerText = "Constructor";
      mFeatures.innerHTML = "";
      mOptionsContainer.classList.remove("hidden");
      mOptionsContainer.innerHTML = `<label class="text-xs text-gray-400 uppercase font-bold tracking-wider mb-2 block">Selecciona tus servicios:</label>`;

      const selectionList = document.createElement("div");
      selectionList.className = "max-h-72 overflow-y-auto space-y-3 pr-2 custom-scroll";

      const individualProducts = window.products.filter(p => ["streaming", "music", "tool"].includes(p.category));

      individualProducts.forEach(p => {
        const itemDiv = document.createElement("div");
        itemDiv.className = "item-container flex flex-col bg-slate-900/50 p-3 rounded-lg border border-white/5 hover:border-indigo-500/50 transition-colors cursor-pointer select-none";

        let inputHTML = "";

        if (p.variants && p.variants.length > 0) {
          const optionsHTML = p.variants
            .map((v, i) => `<option value="${i}" data-price="${parsePrice(v.price)}">${escapeHTML(v.label)} ($${parsePrice(v.price)})</option>`)
            .join("");

          inputHTML = `
            <div class="flex items-center justify-between w-full mb-2 pointer-events-none">
              <div class="flex items-center gap-2">
                <input type="checkbox"
                  class="w-4 h-4 rounded border-slate-600 text-indigo-600 focus:ring-indigo-500 bg-slate-800 combo-checkbox has-variants"
                  data-id="${p.id}" data-name="${escapeHTML(p.name)}">
                <span class="text-sm font-medium text-gray-200">${escapeHTML(p.name)}</span>
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
                <input type="checkbox"
                  class="w-4 h-4 rounded border-slate-600 text-indigo-600 focus:ring-indigo-500 bg-slate-800 combo-checkbox"
                  data-price="${price}" data-name="${escapeHTML(p.name)}">
                <span class="text-sm font-medium text-gray-200">${escapeHTML(p.name)}</span>
              </div>
              <span class="text-xs text-indigo-300 font-bold">$${price}</span>
            </div>
          `;
        }

        itemDiv.innerHTML = inputHTML;

        itemDiv.onclick = (e) => {
          if (e.target.tagName === "SELECT") return;
          const checkbox = itemDiv.querySelector(".combo-checkbox");
          checkbox.checked = !checkbox.checked;

          const select = itemDiv.querySelector("select");
          if (select) select.disabled = !checkbox.checked;

          updateCustomTotal();
        };

        const select = itemDiv.querySelector("select");
        if (select) select.addEventListener("change", updateCustomTotal);

        selectionList.appendChild(itemDiv);
      });

      mOptionsContainer.appendChild(selectionList);

      const summaryDiv = document.createElement("div");
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
      mCat.innerText = product.category === "special" ? "Oferta Año Nuevo" : (product.category === "full" ? "Cuenta Completa" : "Servicio");

      mFeatures.innerHTML = product.features
        .map(f => `
          <li class="flex items-start gap-3 text-gray-300">
            <div class="w-4 h-4 mt-0.5 rounded-full flex items-center justify-center bg-gradient-to-br from-[#06b6d4] to-[#9333ea] shadow-sm flex-shrink-0" aria-hidden="true">
              <i class="fas fa-check text-white text-[10px]" aria-hidden="true"></i>
            </div>
            <span class="text-sm">${escapeHTML(f)}</span>
          </li>
        `).join("");

      mOptionsContainer.innerHTML = `
        <label class="text-xs text-gray-400 uppercase font-bold tracking-wider mb-2 block">Elige tu plan:</label>
        <select id="modalOptionsSelect" class="w-full bg-slate-900 border border-slate-600 rounded-lg p-3 text-white text-sm focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none"></select>
      `;

      const select = document.getElementById("modalOptionsSelect");
      select.innerHTML = "";

      if (product.variants && product.variants.length > 0) {
        mOptionsContainer.classList.remove("hidden");
        product.variants.forEach((v, idx) => {
          const opt = document.createElement("option");
          opt.value = idx;
          opt.text = `${v.label} - ${v.price}`;
          select.appendChild(opt);
        });
        mPrice.innerText = product.variants[0].price;
        select.onchange = (e) => { mPrice.innerText = product.variants[e.target.value].price; };
      } else {
        mOptionsContainer.classList.add("hidden");
        mPrice.innerText = product.price;
        select.onchange = null;
      }

      mBtn.disabled = false;
      mBtn.classList.remove("opacity-50", "cursor-not-allowed");
      mBtn.classList.add("hover:scale-105");

      mBtn.onclick = () => handleBuyClick();
    }

    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";

    // Accesibilidad: foco al botón cerrar
    setTimeout(() => modalCloseBtn?.focus(), 10);
  };

  function updateCustomTotal() {
    const checkboxes = document.querySelectorAll(".combo-checkbox:checked");
    let subtotal = 0;
    let count = 0;

    checkboxes.forEach(cb => {
      let price = 0;
      if (cb.classList.contains("has-variants")) {
        const container = cb.closest(".item-container");
        const select = container.querySelector("select");
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

    document.getElementById("calcSub").innerText = `$${subtotal} MXN`;
    document.getElementById("calcDisc").innerText = `-$${discount} MXN`;
    document.getElementById("modalPrice").innerText = `$${total} MXN`;

    const summaryText = document.querySelector("#customSummary .text-center");
    const btn = document.getElementById("modalBuyBtn");

    if (count < 2) {
      btn.disabled = true;
      btn.classList.add("opacity-50", "cursor-not-allowed");
      btn.classList.remove("hover:scale-105");
      if (summaryText) summaryText.innerHTML = `<span class="text-orange-400 font-medium">Selecciona al menos 2 servicios</span>`;
    } else {
      btn.disabled = false;
      btn.classList.remove("opacity-50", "cursor-not-allowed");
      btn.classList.add("hover:scale-105");
      if (summaryText) summaryText.innerHTML = `<span class="text-indigo-300 font-bold">¡Genial! Ahorras $${discount} MXN</span>`;
    }
  }

  function handleCustomBuy() {
    const checkboxes = document.querySelectorAll(".combo-checkbox:checked");
    if (checkboxes.length === 0) return;

    let itemsList = "";
    let total = document.getElementById("modalPrice").innerText;

    checkboxes.forEach(cb => {
      let name = cb.dataset.name;
      let price = 0;
      let detail = "";

      if (cb.classList.contains("has-variants")) {
        const container = cb.closest(".item-container");
        const select = container.querySelector("select");
        const selectedOption = select.options[select.selectedIndex];
        price = selectedOption.dataset.price;
        const rawText = selectedOption.text;
        const variantName = rawText.split(" ($")[0];
        detail = ` (${variantName})`;
      } else {
        price = cb.dataset.price;
      }
      itemsList += `\n- ${name}${detail} ($${price})`;
    });

    const msg = `Hola, Misael, armé mi propio combo personalizado: ${itemsList}\n\nTotal con descuento: *${total}*.\n¿Me ayudas con el pago?`;
    window.open(`https://wa.me/${window.MY_PHONE_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
  }

  function handleBuyClick() {
    if (!currentProduct) return;
    let finalPrice = currentProduct.price;
    let detailText = "";
    const select = document.getElementById("modalOptionsSelect");

    if (currentProduct.variants && currentProduct.variants.length > 0 && select) {
      const index = select.value;
      const variant = currentProduct.variants[index];
      finalPrice = variant.price;
      detailText = ` (${variant.label})`;
    }

    const msg = `Hola, Misael, me interesa: *${currentProduct.name}${detailText}* - ${finalPrice}. ¿Me puedes ayudar con el proceso de compra? ¡Gracias!`;
    window.open(`https://wa.me/${window.MY_PHONE_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
  }

  window.closeModal = function () {
    modal.classList.add("hidden");
    document.body.style.overflow = "auto";

    const url = new URL(window.location);
    url.searchParams.delete("id");
    window.history.pushState({}, "", url);

    // Accesibilidad: regresar foco
    if (lastFocusedEl && typeof lastFocusedEl.focus === "function") {
      lastFocusedEl.focus();
    }
  };

  // COUNTDOWN
  function initCountdown() {
    const countdownElement = document.getElementById("countdownTimer");
    if (!countdownElement) return;

    const countDate = new Date(window.TARGET_DATE).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const gap = countDate - now;

      if (gap < 0) {
        clearInterval(interval);
        const container = document.getElementById("countdownContainer");
        const menuBtn = document.getElementById("specialMenuBtn");
        const specialOpt = document.getElementById("optSpecial");

        if (container) container.classList.add("hidden");
        if (menuBtn) menuBtn.classList.add("hidden");
        if (specialOpt) specialOpt.remove();

        renderProducts(window.products);
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

      document.getElementById("cd-days").innerText = d < 10 ? "0" + d : d;
      document.getElementById("cd-hours").innerText = h < 10 ? "0" + h : h;
      document.getElementById("cd-minutes").innerText = m < 10 ? "0" + m : m;
      document.getElementById("cd-seconds").innerText = s < 10 ? "0" + s : s;
    }, 1000);
  }

  // UTILS
  window.toggleChat = function () {
    const widget = document.getElementById("chatWidget");
    if (widget.classList.contains("chat-hidden")) {
      widget.classList.remove("hidden");
      setTimeout(() => {
        widget.classList.remove("chat-hidden");
        widget.classList.add("chat-visible");
      }, 10);
    } else {
      widget.classList.remove("chat-visible");
      widget.classList.add("chat-hidden");
      setTimeout(() => widget.classList.add("hidden"), 300);
    }
  };

  window.sendCustomMessage = function () {
    const input = document.getElementById("chatInput");
    const text = input.value.trim();
    if (!text) return;
    window.open(`https://wa.me/${window.MY_PHONE_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
    input.value = "";
    toggleChat();
  };

  window.toggleDrawer = function () {
    const drawer = document.getElementById("appDrawer");
    const overlay = document.getElementById("drawerOverlay");

    if (!overlay.classList.contains("overlay-visible")) {
      overlay.classList.remove("hidden");
      setTimeout(() => {
        overlay.classList.add("overlay-visible");
        drawer.classList.add("drawer-open");
      }, 10);
      document.body.style.overflow = "hidden";
    } else {
      drawer.classList.remove("drawer-open");
      overlay.classList.remove("overlay-visible");
      setTimeout(() => {
        overlay.classList.add("hidden");
        document.body.style.overflow = "auto";
      }, 300);
    }
  };

  window.toggleDisclaimer = function () {
    const disc = document.getElementById("disclaimerModal");
    disc.classList.contains("hidden") ? disc.classList.remove("hidden") : disc.classList.add("hidden");
  };

  function checkUrlParams() {
    const urlParams = new URLSearchParams(window.location.search);

    // Categoria: URL > localStorage > all
    const categoryFromUrl = urlParams.get("category");
    const categoryFromLS = localStorage.getItem(LS_CATEGORY_KEY);

    const category = categoryFromUrl || categoryFromLS || "all";
    categoryFilter.value = category;
    filterProducts();

    const productId = urlParams.get("id");
    if (productId) {
      const idNum = parseInt(productId);
      const productExists = window.products.some(p => p.id === idNum);
      if (productExists) window.openModal(idNum);
    }
  }

  window.openBuilderFromMenu = function () {
    toggleDrawer();
    setTimeout(() => window.openModal(999), 300);
  };

  window.addEventListener("popstate", () => {
    const urlParams = new URLSearchParams(window.location.search);

    if (!urlParams.get("id")) {
      modal.classList.add("hidden");
      document.body.style.overflow = "auto";
    } else {
      checkUrlParams();
    }

    const category = urlParams.get("category") || localStorage.getItem(LS_CATEGORY_KEY) || "all";
    categoryFilter.value = category;
    filterProducts();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      window.closeModal();
      const widget = document.getElementById("chatWidget");
      if (widget.classList.contains("chat-visible")) toggleChat();

      const overlay = document.getElementById("drawerOverlay");
      if (overlay.classList.contains("overlay-visible")) toggleDrawer();

      const discModal = document.getElementById("disclaimerModal");
      if (!discModal.classList.contains("hidden")) toggleDisclaimer();
    }
  });

  // Eventos
  searchInput.addEventListener("input", filterProducts);
  categoryFilter.addEventListener("change", filterProducts);

  // Inicialización
  renderProducts(window.products);
  initCountdown();
  checkUrlParams();
})();

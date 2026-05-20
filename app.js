const floorplans = {
  entry: `<svg class="floorplan" viewBox="0 0 260 180"><rect x="10" y="10" width="240" height="160" class="fp-outline"/><rect x="14" y="14" width="120" height="82" class="room"/><rect x="138" y="14" width="108" height="82" class="room-alt"/><rect x="14" y="100" width="72" height="66" class="accent-room"/><rect x="90" y="100" width="76" height="66" class="room"/><rect x="170" y="100" width="76" height="66" class="room-alt"/><text x="74" y="58" class="fp-label">GARAGE</text><text x="192" y="58" class="fp-label">FLEX / GUEST</text><text x="50" y="138" class="fp-label">FOYER</text><text x="128" y="138" class="fp-label">MUDRM</text><text x="208" y="138" class="fp-label">BATH</text></svg>`,
  main: `<svg class="floorplan" viewBox="0 0 260 180"><rect x="10" y="10" width="240" height="160" class="fp-outline"/><rect x="14" y="14" width="66" height="152" class="room-alt"/><rect x="84" y="14" width="78" height="72" class="accent-room"/><rect x="166" y="14" width="80" height="72" class="room"/><rect x="84" y="90" width="78" height="76" class="room"/><rect x="166" y="90" width="80" height="76" class="deck"/><text x="47" y="92" class="fp-label">GREAT RM</text><text x="123" y="55" class="fp-label">DINING</text><text x="206" y="55" class="fp-label">KITCHEN</text><text x="123" y="132" class="fp-label">PANTRY / PWDR</text><text x="206" y="132" class="fp-label">DECK</text></svg>`,
  roof: `<svg class="floorplan" viewBox="0 0 260 180"><rect x="10" y="10" width="240" height="160" class="fp-outline"/><rect x="14" y="14" width="104" height="72" class="accent-room"/><rect x="122" y="14" width="124" height="72" class="room-alt"/><rect x="14" y="90" width="72" height="76" class="room"/><rect x="90" y="90" width="68" height="76" class="room-alt"/><rect x="162" y="90" width="84" height="76" class="deck"/><text x="66" y="52" class="fp-label">PRIMARY</text><text x="184" y="52" class="fp-label">BED 2 / LOFT</text><text x="50" y="133" class="fp-label">LAUNDRY</text><text x="124" y="133" class="fp-label">BAR / BATH</text><text x="204" y="133" class="fp-label">ROOFTOP</text></svg>`,
  entry_vista: `<svg class="floorplan" viewBox="0 0 260 180"><rect x="10" y="10" width="240" height="160" class="fp-outline"/><rect x="14" y="14" width="128" height="82" class="room"/><rect x="146" y="14" width="100" height="82" class="accent-room"/><rect x="14" y="100" width="88" height="66" class="room-alt"/><rect x="106" y="100" width="64" height="66" class="room"/><rect x="174" y="100" width="72" height="66" class="room-alt"/><text x="78" y="58" class="fp-label">GARAGE</text><text x="196" y="58" class="fp-label">GUEST SUITE</text><text x="58" y="138" class="fp-label">FOYER</text><text x="138" y="138" class="fp-label">DROP ZONE</text><text x="210" y="138" class="fp-label">BATH</text></svg>`,
  main_vista: `<svg class="floorplan" viewBox="0 0 260 180"><rect x="10" y="10" width="240" height="160" class="fp-outline"/><rect x="14" y="14" width="74" height="152" class="room-alt"/><rect x="92" y="14" width="88" height="86" class="accent-room"/><rect x="184" y="14" width="62" height="86" class="room"/><rect x="92" y="104" width="88" height="62" class="room"/><rect x="184" y="104" width="62" height="62" class="deck"/><text x="51" y="92" class="fp-label">GREAT RM</text><text x="136" y="58" class="fp-label">DINING</text><text x="215" y="58" class="fp-label">KITCHEN</text><text x="136" y="141" class="fp-label">PANTRY / PWDR</text><text x="215" y="141" class="fp-label">DECK</text></svg>`,
  roof_vista: `<svg class="floorplan" viewBox="0 0 260 180"><rect x="10" y="10" width="240" height="160" class="fp-outline"/><rect x="14" y="14" width="114" height="72" class="accent-room"/><rect x="132" y="14" width="114" height="72" class="room-alt"/><rect x="14" y="90" width="76" height="76" class="room"/><rect x="94" y="90" width="72" height="76" class="room-alt"/><rect x="170" y="90" width="76" height="76" class="deck"/><text x="71" y="52" class="fp-label">PRIMARY</text><text x="189" y="52" class="fp-label">BED 2 / BED 3</text><text x="52" y="133" class="fp-label">LAUNDRY</text><text x="130" y="133" class="fp-label">LOFT / BATH</text><text x="208" y="133" class="fp-label">ROOFTOP</text></svg>`,
  entry_summit: `<svg class="floorplan" viewBox="0 0 260 180"><rect x="10" y="10" width="240" height="160" class="fp-outline"/><rect x="14" y="14" width="122" height="82" class="room"/><rect x="140" y="14" width="106" height="82" class="accent-room"/><rect x="14" y="100" width="84" height="66" class="room-alt"/><rect x="102" y="100" width="62" height="66" class="room"/><rect x="168" y="100" width="78" height="66" class="room-alt"/><text x="75" y="58" class="fp-label">GARAGE</text><text x="193" y="58" class="fp-label">SUITE / STUDY</text><text x="56" y="138" class="fp-label">FOYER</text><text x="133" y="138" class="fp-label">STORAGE</text><text x="207" y="138" class="fp-label">BATH</text></svg>`,
  main_summit: `<svg class="floorplan" viewBox="0 0 260 180"><rect x="10" y="10" width="240" height="160" class="fp-outline"/><rect x="14" y="14" width="62" height="152" class="room-alt"/><rect x="80" y="14" width="84" height="74" class="accent-room"/><rect x="168" y="14" width="78" height="74" class="room"/><rect x="80" y="92" width="84" height="74" class="room"/><rect x="168" y="92" width="78" height="74" class="deck"/><text x="45" y="92" class="fp-label">GREAT RM</text><text x="122" y="54" class="fp-label">DINING</text><text x="207" y="54" class="fp-label">CHEF'S KITCHEN</text><text x="122" y="136" class="fp-label">SCULLERY / PWDR</text><text x="207" y="136" class="fp-label">OUTDOOR RM</text></svg>`,
  roof_summit: `<svg class="floorplan" viewBox="0 0 260 180"><rect x="10" y="10" width="240" height="160" class="fp-outline"/><rect x="14" y="14" width="118" height="72" class="accent-room"/><rect x="136" y="14" width="110" height="72" class="room-alt"/><rect x="14" y="90" width="70" height="76" class="room"/><rect x="88" y="90" width="78" height="76" class="room-alt"/><rect x="170" y="90" width="76" height="76" class="deck"/><text x="73" y="52" class="fp-label">PRIMARY</text><text x="191" y="52" class="fp-label">BED 2 / BED 3</text><text x="49" y="133" class="fp-label">LAUNDRY</text><text x="127" y="133" class="fp-label">SKY LOUNGE</text><text x="208" y="133" class="fp-label">ROOFTOP</text></svg>`
};

function byId(id) {
  return document.getElementById(id);
}

function renderMetrics(items, targetId) {
  byId(targetId).innerHTML = items.map(item => `
    <div class="metric">
      <strong>${item.value}</strong>
      <span>${item.label}</span>
    </div>
  `).join("");
}

function renderFeatureCards(items, targetId, className) {
  byId(targetId).innerHTML = items.map(item => `
    <div class="${className}">
      <strong>${item.title}</strong>
      <span>${item.text}</span>
    </div>
  `).join("");
}

function initHero() {
  const data = window.siteData;
  byId("topbar-left").textContent = `${data.brand.full} • ${data.brand.location}`;
  byId("topbar-right").textContent = "Now booking hard hat tours • Delivery anticipated Spring 2027";
  byId("brand-name").textContent = data.brand.name;
  byId("brand-community").textContent = `at ${data.brand.community}`;

  byId("hero-chip").textContent = data.hero.eyebrow;
  byId("hero-minor").textContent = data.hero.minorTitle;
  byId("hero-major").textContent = data.hero.majorTitle;
  byId("hero-lead").textContent = data.hero.lead;
  byId("hero-primary").textContent = data.hero.ctaPrimary;
  byId("hero-secondary").textContent = data.hero.ctaSecondary;

  const video = byId("hero-video");
  video.poster = data.media.heroPoster;
  video.src = data.media.heroVideo;

  renderMetrics(data.stats, "hero-stats");
}

function initOverview() {
  const data = window.siteData.overview;
  byId("overview-title").textContent = data.title;
  byId("overview-body").textContent = data.body;
  byId("overview-image").src = window.siteData.media.overviewImage;

  byId("overview-features").innerHTML = data.features.map(item => `
    <div class="feature">
      <strong>${item.title}</strong>
      <span>${item.text}</span>
    </div>
  `).join("");

  byId("overview-stats").innerHTML = data.miniStats.map(item => `
    <div class="metric">
      <strong>${item.value}</strong>
      <span>${item.label}</span>
    </div>
  `).join("");
}

function modelTemplate(model) {
  return `
    <div class="model-grid reveal visible">
      <article class="card model-card">
        <div class="image">
          <img src="${model.image}" alt="${model.name}">
          <div class="caption">${model.imageNote}</div>
        </div>
        <div class="card-body">
          <div class="eyebrow">${model.tag}</div>
          <h3 class="serif">${model.name}</h3>
          <p>${model.description}</p>

          <div class="model-meta">
            ${model.stats.map(stat => `
              <div class="mini-stat">
                <strong>${stat.value}</strong>
                <span>${stat.label}</span>
              </div>
            `).join("")}
          </div>

          <div class="badge-row">
            ${model.badges.map(badge => `<span class="badge">${badge}</span>`).join("")}
          </div>
        </div>
      </article>

      <div class="plans-grid">
        ${model.plans.map(plan => `
          <div class="plan-card">
            <h4>${plan.title}</h4>
            ${floorplans[plan.svg]}
            <p>${plan.blurb}</p>
          </div>
        `).join("")}
      </div>
    </div>
  `;
}

function initModels() {
  const models = window.siteData.models;
  const tabs = byId("model-tabs");
  const panelsWrap = byId("model-panels");

  tabs.innerHTML = models.map((model, index) => `
    <button class="tab ${index === 0 ? "active" : ""}" data-model="${model.id}" type="button">${model.name}</button>
  `).join("");

  panelsWrap.innerHTML = models.map((model, index) => `
    <div class="model-panel ${index === 0 ? "active" : ""}" id="${model.id}">
      ${modelTemplate(model)}
    </div>
  `).join("");

  tabs.querySelectorAll(".tab").forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
      panelsWrap.querySelectorAll(".model-panel").forEach(panel => panel.classList.remove("active"));
      tab.classList.add("active");
      const panel = byId(tab.dataset.model);
      if (panel) panel.classList.add("active");
    });
  });
}

function initHomesite() {
  const data = window.siteData.homesite;
  byId("homesite-title").textContent = data.title;
  byId("homesite-body").textContent = data.body;

  byId("homesite-highlights").innerHTML = data.highlights.map(item => `
    <div class="commute">
      <strong>${item.value}</strong>
      <span>${item.label}</span>
    </div>
  `).join("");

  byId("siteplan-svg-wrap").innerHTML = `
    <svg class="siteplan" viewBox="0 0 680 560" aria-label="Interactive homesite plan">
      <defs>
        <linearGradient id="bgGrad" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stop-color="#eef3f9"/>
          <stop offset="100%" stop-color="#dbe4f1"/>
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="680" height="560" fill="url(#bgGrad)"/>
      <rect x="0" y="0" width="680" height="560" class="green" opacity=".18"/>
      <path d="M140 140 H540 Q590 140 590 190 V370 Q590 420 540 420 H140 Q90 420 90 370 V190 Q90 140 140 140 Z" class="road-fill"/>
      <path d="M175 175 H505 Q555 175 555 220 V340 Q555 385 505 385 H175 Q125 385 125 340 V220 Q125 175 175 175 Z" fill="#eff4fa"/>
      <rect x="258" y="236" width="164" height="88" rx="18" class="green" opacity=".72"/>
      <text x="340" y="285" text-anchor="middle" font-size="16" font-weight="800" fill="#29405f">CENTRAL GREEN</text>
      <text x="340" y="307" text-anchor="middle" font-size="12" fill="#4e6383">Illustrative common landscape space</text>
      <text x="154" y="128" font-size="13" font-weight="800" fill="#314769">Mountain View Drive</text>
      <text x="494" y="438" font-size="13" font-weight="800" fill="#314769">Private Loop</text>

      ${window.siteLotMarkup}
    </svg>
  `;

  const detail = byId("lot-detail");

  document.querySelectorAll(".lot").forEach((lot) => {
    const lotNum = lot.dataset.lot;
    const updateDetail = () => {
      document.querySelectorAll(".lot").forEach(item => item.classList.remove("active"));
      lot.classList.add("active");
      detail.innerHTML = `
        <h4>Homesite ${lotNum}</h4>
        <p>
          Placeholder detail for Homesite ${lotNum}. Later this can show model assignment, release phase, premium pricing notes, corner-lot status, or whether the homesite has a rooftop-view advantage.
        </p>
      `;
    };

    lot.addEventListener("mouseenter", updateDetail);
    lot.addEventListener("focus", updateDetail);
    lot.addEventListener("click", updateDetail);
  });
}

function initContact() {
  const contact = window.siteData.contact;
  const sales = window.siteData.sales;

  byId("contact-title").textContent = contact.title;
  byId("contact-body").textContent = contact.body;
  byId("contact-form-title").textContent = contact.formTitle;
  byId("contact-form-body").textContent = contact.formBody;

  byId("contact-features").innerHTML = contact.features.map(item => `
    <div class="contact-mini">
      <strong>${item.title}</strong>
      <span>${item.text}</span>
    </div>
  `).join("");

  byId("sales-name").textContent = sales.repName;
  byId("sales-phone").textContent = sales.phone;
  byId("sales-email").textContent = sales.email;
  byId("sales-office").textContent = sales.office;
  byId("sales-hours").textContent = sales.hours;
}

function initForm() {
  const form = byId("lead-form");
  const success = byId("success");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const endpoint = window.siteData?.integrations?.appsScriptUrl || "";
    const trimmedEndpoint = endpoint.trim();
    const formData = new FormData(form);

    formData.append("sourcePage", window.location.href);
    formData.append("community", window.siteData?.brand?.full || "");
    formData.append("sheetName", window.siteData?.integrations?.sheetName || "Leads");

    if (trimmedEndpoint && !trimmedEndpoint.includes("PASTE_YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE")) {
      try {
        await fetch(trimmedEndpoint, {
          method: "POST",
          body: formData,
          mode: "no-cors"
        });
      } catch (error) {
        console.error("Lead submission error:", error);
      }
    }

    form.style.display = "none";
    success.style.display = "block";
  });
}

function initMobileMenu() {
  const toggle = byId("menu-toggle");
  const menu = byId("mobile-menu");

  const closeMenu = () => {
    menu.classList.remove("open");
    document.body.classList.remove("no-scroll");
  };

  toggle.addEventListener("click", () => {
    menu.classList.toggle("open");
    document.body.classList.toggle("no-scroll", menu.classList.contains("open"));
  });

  menu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", closeMenu);
  });
}

function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".reveal").forEach(node => observer.observe(node));
}

window.siteLotMarkup = (() => {
  let markup = "";
  let num = 1;
  const coords = [];
  for (let i = 0; i < 12; i++) coords.push([102 + i * 38, 112, num++]);
  for (let i = 0; i < 8; i++) coords.push([596, 150 + i * 34, num++]);
  for (let i = 0; i < 12; i++) coords.push([102 + (11 - i) * 38, 438, num++]);
  for (let i = 0; i < 9; i++) coords.push([60, 150 + (8 - i) * 34, num++]);

  coords.forEach(([x, y, lot]) => {
    markup += `
      <g class="lot lot-${lot % 4}" data-lot="${lot}" tabindex="0" role="button" aria-label="Homesite ${lot}">
        <rect x="${x}" y="${y}" width="30" height="18" rx="3"/>
        <text x="${x + 15}" y="${y + 13}">${lot}</text>
      </g>
    `;
  });
  return markup;
})();

document.addEventListener("DOMContentLoaded", () => {
  initHero();
  initOverview();
  initModels();
  initHomesite();
  initContact();
  initForm();
  initMobileMenu();
  initReveal();
});

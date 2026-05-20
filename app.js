function byId(id){ return document.getElementById(id); }

function renderHero(){
  const d = window.siteData;
  byId('top-left').textContent = `${d.brand.nameTop} ${d.brand.nameBottom} • ${d.brand.location}`;
  byId('top-right').textContent = 'Boutique luxury residential website demo';
  byId('brand-top').textContent = d.brand.nameTop;
  byId('brand-bottom').textContent = d.brand.nameBottom;
  byId('hero-brand-top').textContent = d.brand.nameTop;
  byId('hero-brand-bottom').textContent = d.brand.nameBottom;
  byId('hero-subtitle').textContent = d.brand.subtitle;
  byId('hero-title').textContent = d.hero.title;
  byId('hero-body').textContent = d.hero.body;
  byId('hero-primary').textContent = d.hero.ctaPrimary;
  byId('hero-secondary').textContent = d.hero.ctaSecondary;
  byId('hero-image').src = d.media.heroImage;
}

function featureIcon(kind){
  const icons = {
    homesites: '<svg viewBox="0 0 48 48" class="feature-icon" aria-hidden="true"><rect x="8" y="10" width="32" height="28" rx="2" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M16 10V38M24 10V38M32 10V38M8 18H40M8 26H40" fill="none" stroke="currentColor" stroke-width="1.4"/></svg>',
    finishes: '<svg viewBox="0 0 48 48" class="feature-icon" aria-hidden="true"><path d="M10 34L24 12L38 34" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M16 34V22H32V34" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M20 22V18H28V22" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>',
    architecture: '<svg viewBox="0 0 48 48" class="feature-icon" aria-hidden="true"><path d="M10 36H38M14 36V16L24 10L34 16V36" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M19 20H29M19 25H29M19 30H29" fill="none" stroke="currentColor" stroke-width="1.4"/></svg>',
    location: '<svg viewBox="0 0 48 48" class="feature-icon" aria-hidden="true"><path d="M24 39C24 39 14 28.7 14 20.5C14 14.7 18.5 10 24 10C29.5 10 34 14.7 34 20.5C34 28.7 24 39 24 39Z" fill="none" stroke="currentColor" stroke-width="1.7"/><circle cx="24" cy="20" r="4" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>'
  };
  return icons[kind];
}

function renderCommunity(){
  const d = window.siteData;
  byId('community-title').textContent = d.community.title;
  byId('community-body').textContent = d.community.body;
  byId('community-image').src = d.media.overviewImage;

  const iconKeys = ['homesites','finishes','architecture','location'];
  byId('features-grid').innerHTML = d.features.map((item, idx) => `
    <article class="feature-card reveal">
      ${featureIcon(iconKeys[idx] || 'homesites')}
      <h4>${item.title}</h4>
      <p>${item.text}</p>
    </article>
  `).join('');
}

function lotStatusClass(status){
  return `status-${status.toLowerCase()}`;
}

function renderSitePlan(){
  const d = window.siteData.sitePlan;
  byId('siteplan-title').textContent = d.title;
  byId('siteplan-body').textContent = d.body;

  const lots = [
    { x: 118, y: 118, w: 84, h: 54, lot: d.lots[0] },
    { x: 222, y: 118, w: 84, h: 54, lot: d.lots[1] },
    { x: 326, y: 118, w: 84, h: 54, lot: d.lots[2] },
    { x: 118, y: 204, w: 84, h: 54, lot: d.lots[3] },
    { x: 222, y: 204, w: 84, h: 54, lot: d.lots[4] },
    { x: 326, y: 204, w: 84, h: 54, lot: d.lots[5] }
  ];

  byId('siteplan-svg-wrap').innerHTML = `
    <svg class="siteplan-svg" viewBox="0 0 520 370" role="img" aria-label="Interactive site plan with six homesites">
      <rect x="0" y="0" width="520" height="370" fill="#f4f0ea"/>
      <path class="siteplan-road" d="M40 88H448C467 88 482 103 482 122V280C482 299 467 314 448 314H72C53 314 38 299 38 280V128C38 107 53 88 74 88H40Z"/>
      <rect class="siteplan-green" x="96" y="100" width="336" height="176" rx="18"/>
      <rect class="siteplan-road" x="202" y="0" width="116" height="370" opacity=".34"/>
      <rect x="150" y="278" width="210" height="44" rx="12" fill="#d7e6d6"/>
      <text x="255" y="304" class="siteplan-label" style="font-size:14px; letter-spacing:.08em;">GREEN SPACE</text>
      <text x="438" y="68" class="siteplan-label" style="font-size:12px; letter-spacing:.08em;">PRIVATE DRIVE</text>
      ${lots.map((item, i) => `
        <g class="siteplan-lot ${item.lot.status.toLowerCase()}" data-index="${i}" tabindex="0" role="button" aria-label="${item.lot.label}">
          <rect x="${item.x}" y="${item.y}" width="${item.w}" height="${item.h}" rx="10" stroke="#8A7358" stroke-width="1.2"/>
          <text x="${item.x + item.w/2}" y="${item.y + 24}" class="siteplan-label">${item.lot.label.replace('Homesite ','LOT ')}</text>
          <text x="${item.x + item.w/2}" y="${item.y + 40}" class="siteplan-label" style="font-size:10px">${item.lot.status.toUpperCase()}</text>
        </g>
      `).join('')}
    </svg>
  `;

  const detailTitle = byId('detail-title');
  const detailStatus = byId('detail-status');
  const detailBody = byId('detail-body');
  const activateLot = (index) => {
    const lot = d.lots[index];
    document.querySelectorAll('.siteplan-lot').forEach((node, idx) => {
      node.classList.toggle('active', idx === index);
    });
    detailTitle.textContent = lot.label;
    detailStatus.textContent = lot.status;
    detailStatus.className = `status-chip ${lotStatusClass(lot.status)}`;
    detailBody.textContent = lot.note;
  };

  document.querySelectorAll('.siteplan-lot').forEach((node, index) => {
    node.addEventListener('mouseenter', () => activateLot(index));
    node.addEventListener('focus', () => activateLot(index));
    node.addEventListener('click', () => activateLot(index));
  });

  activateLot(0);
}

function renderGallery(){
  const d = window.siteData.gallery;
  byId('gallery-title').textContent = d.title;
  byId('gallery-body').textContent = d.body;
  byId('gallery-exterior').src = window.siteData.media.galleryExterior;
  byId('gallery-kitchen').src = window.siteData.media.galleryKitchen;
  byId('gallery-living').src = window.siteData.media.galleryLiving;
}

function renderLocation(){
  const d = window.siteData.location;
  byId('location-title').textContent = d.title;
  byId('location-body').textContent = d.body;
  byId('location-items').innerHTML = d.items.map(item => `
    <div class="location-item">
      <strong>${item.value}</strong>
      <span>${item.label}</span>
    </div>
  `).join('');
}

function renderBrochureAndRealtor(){
  const d = window.siteData;
  byId('brochure-title').textContent = d.brochure.title;
  byId('brochure-body').textContent = d.brochure.body;
  byId('brochure-link').href = d.brochure.brochureFile;
  byId('brochure-qr').src = d.brochure.qrImage;
  byId('brochure-file-name').textContent = 'Download placeholder brochure PDF';

  byId('realtor-title').textContent = d.realtor.title;
  byId('realtor-body').textContent = d.realtor.body;
  byId('realtor-email').textContent = d.realtor.email;
  byId('realtor-email').href = `mailto:${d.realtor.email}`;
  byId('realtor-phone').textContent = d.realtor.phone;
  byId('realtor-phone').href = `tel:${d.realtor.phone.replace(/[^\d+]/g,'')}`;
}

function renderContact(){
  const d = window.siteData;
  byId('contact-title').textContent = d.contact.title;
  byId('contact-body').textContent = d.contact.body;
  byId('sales-name').textContent = d.sales.repName;
  byId('sales-phone').textContent = d.sales.phone;
  byId('sales-email').textContent = d.sales.email;
  byId('sales-email').href = `mailto:${d.sales.email}`;

  const homesiteOptions = d.sitePlan.lots.map(lot => `<option value="${lot.label}">${lot.label} - ${lot.status}</option>`).join('');
  byId('homesite-options').innerHTML = `<option value="">Select Homesite</option>${homesiteOptions}`;
}

function initForm(){
  const form = byId('lead-form');
  const success = byId('success');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const endpoint = window.siteData?.integrations?.appsScriptUrl || "";
    const trimmedEndpoint = endpoint.trim();
    const formData = new FormData(form);
    formData.append("sourcePage", window.location.href);
    formData.append("community", `${window.siteData.brand.nameTop} ${window.siteData.brand.nameBottom}`);
    formData.append("sheetName", window.siteData?.integrations?.sheetName || "Viridian Leads");

    if (trimmedEndpoint && !trimmedEndpoint.includes("PASTE_YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE")) {
      try {
        await fetch(trimmedEndpoint, {
          method: 'POST',
          body: formData,
          mode: 'no-cors'
        });
      } catch (err) {
        console.error(err);
      }
    }

    form.style.display = 'none';
    success.style.display = 'block';
  });
}

function initReveal(){
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: .14 });

  document.querySelectorAll('.reveal').forEach(node => observer.observe(node));
}

function initMobileMenu(){
  const toggle = byId('menu-toggle');
  const menu = byId('mobile-menu');
  toggle.addEventListener('click', () => {
    menu.classList.toggle('open');
  });
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => menu.classList.remove('open'));
  });
}

window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});

document.addEventListener('DOMContentLoaded', () => {
  renderHero();
  renderCommunity();
  renderSitePlan();
  renderGallery();
  renderLocation();
  renderBrochureAndRealtor();
  renderContact();
  initForm();
  initReveal();
  initMobileMenu();
});

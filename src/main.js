const FEATURED_VEHICLES = [
  {
    id: 'apex-gt-coupe',
    badge: 'NEW',
    price: 145000,
    priceFormatted: '$145,000',
    title: '2024 Apex GT Coupe',
    make: 'Rolls-Royce',
    model: 'Apex GT Coupe',
    bodyType: 'Sedan',
    year: 2024,
    mileage: '15 mi',
    fuel: 'Petrol',
    trans: 'Auto',
    image: '/assets/aistudio/6_95b027a9.png',
    alt: '2024 Apex GT Coupe matte black luxury vehicle',
  },
  {
    id: 'executive-series-rs',
    badge: 'PRE-OWNED',
    price: 89500,
    priceFormatted: '$89,500',
    title: '2022 Executive Series RS',
    make: 'Toyota',
    model: 'Executive Series RS',
    bodyType: 'Sports',
    year: 2022,
    mileage: '12,400 mi',
    fuel: 'Hybrid',
    trans: 'Auto',
    image: '/assets/aistudio/7_67409dd3.png',
    alt: '2022 Executive Series RS metallic grey sports coupe',
  },
  {
    id: 'terrain-master-v8',
    badge: 'NEW',
    price: 115000,
    priceFormatted: '$115,000',
    title: '2024 Terrain Master V8',
    make: 'Lamborghini',
    model: 'Terrain Master V8',
    bodyType: 'Sports',
    year: 2024,
    mileage: '50 mi',
    fuel: 'Petrol',
    trans: 'Auto',
    image: '/assets/aistudio/2_6c0d16ec.png',
    alt: '2024 Terrain Master V8 blue performance coupe',
  },
];

const state = {
  make: 'All Makes',
  model: 'All Models',
  bodyType: 'All Types',
  price: 'Any Price',
  year: 'Any Year',
  condition: 'ALL',
  selectedVehicle: FEATURED_VEHICLES[0],
  calcPrice: 145000,
  calcDown: 29000,
  calcTerm: 60,
  calcRate: 5.49,
};

// DOM Elements
const makeSelect = document.getElementById('filter-make');
const modelSelect = document.getElementById('filter-model');
const bodySelect = document.getElementById('filter-body');
const priceSelect = document.getElementById('filter-price');
const yearSelect = document.getElementById('filter-year');
const filterForm = document.getElementById('filter-form');
const vehicleGrid = document.getElementById('vehicle-grid');
const vehicleEmpty = document.getElementById('vehicle-empty');
const resetFiltersBtn = document.getElementById('reset-filters-btn');
const emptyResetBtn = document.getElementById('empty-reset-btn');
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const brandHomeLink = document.getElementById('brand-home-link');
const modalOverlay = document.getElementById('modal-overlay');
const modalContent = document.getElementById('modal-content');
const modalClose = document.getElementById('modal-close');

// Bidirectional Scroll-to-Reveal Observer
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      } else {
        entry.target.classList.remove('is-visible');
      }
    });
  },
  { threshold: 0.15 }
);

function observeReveals(root = document) {
  const elements = root.querySelectorAll('.reveal');
  elements.forEach((el) => revealObserver.observe(el));
}

function scrollToSection(id) {
  closeMobileMenu();
  const target = document.getElementById(id);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
}

function closeMobileMenu() {
  if (!mobileMenu || !mobileMenuToggle) return;
  mobileMenu.hidden = true;
  mobileMenuToggle.setAttribute('aria-expanded', 'false');
}

function syncSelects() {
  if (makeSelect) makeSelect.value = state.make;
  if (modelSelect) modelSelect.value = state.model;
  if (bodySelect) bodySelect.value = state.bodyType;
  if (priceSelect) priceSelect.value = state.price;
  if (yearSelect) yearSelect.value = state.year;
}

function resetFilters() {
  state.make = 'All Makes';
  state.model = 'All Models';
  state.bodyType = 'All Types';
  state.price = 'Any Price';
  state.year = 'Any Year';
  state.condition = 'ALL';
  syncSelects();
  renderVehicles();
}

function getFilteredVehicles() {
  return FEATURED_VEHICLES.filter((v) => {
    if (state.condition !== 'ALL' && v.badge !== state.condition) return false;
    if (state.make !== 'All Makes' && v.make !== state.make) return false;
    if (state.model !== 'All Models' && v.model !== state.model) return false;
    if (state.bodyType !== 'All Types' && v.bodyType !== state.bodyType) return false;
    if (state.year !== 'Any Year' && String(v.year) !== state.year) return false;
    if (state.price === 'Under $100,000' && v.price >= 100000) return false;
    if (state.price === '$100,000 – $130,000' && (v.price < 100000 || v.price > 130000)) {
      return false;
    }
    if (state.price === '$130,000+' && v.price < 130000) return false;
    return true;
  });
}

function renderVehicles() {
  if (!vehicleGrid || !vehicleEmpty) return;
  const list = getFilteredVehicles();

  if (list.length === 0) {
    vehicleGrid.innerHTML = '';
    vehicleGrid.hidden = true;
    vehicleEmpty.hidden = false;
    return;
  }

  vehicleGrid.hidden = false;
  vehicleEmpty.hidden = true;

  vehicleGrid.innerHTML = list
    .map(
      (vehicle, idx) => `
      <div class="reveal" style="--reveal-delay: ${idx * 80}ms">
        <article class="vehicle-card" data-vehicle-id="${vehicle.id}" tabindex="0" role="button" aria-label="View details for ${vehicle.title}">
          <div class="vehicle-media">
            <img
              src="${vehicle.image}"
              alt="${vehicle.alt}"
              class="vehicle-img"
              referrerpolicy="no-referrer"
            />
            <span class="vehicle-badge">${vehicle.badge}</span>
          </div>
          <div class="vehicle-body">
            <div class="vehicle-price">${vehicle.priceFormatted}</div>
            <h3 class="vehicle-title">${vehicle.title}</h3>
            <div class="vehicle-divider"></div>
            <div class="vehicle-specs">
              <div>
                <div class="spec-label">YEAR</div>
                <div class="spec-value">${vehicle.year}</div>
              </div>
              <div>
                <div class="spec-label">MILEAGE</div>
                <div class="spec-value">${vehicle.mileage}</div>
              </div>
              <div>
                <div class="spec-label">FUEL</div>
                <div class="spec-value">${vehicle.fuel}</div>
              </div>
              <div>
                <div class="spec-label">TRANS</div>
                <div class="spec-value">${vehicle.trans}</div>
              </div>
            </div>
          </div>
        </article>
      </div>
    `
    )
    .join('');

  observeReveals(vehicleGrid);

  vehicleGrid.querySelectorAll('.vehicle-card').forEach((card) => {
    const openDetails = () => {
      const id = card.getAttribute('data-vehicle-id');
      const found = FEATURED_VEHICLES.find((v) => v.id === id);
      if (found) {
        state.selectedVehicle = found;
        state.calcPrice = found.price;
        state.calcDown = Math.round(found.price * 0.2);
        openModal('vehicle');
      }
    };
    card.addEventListener('click', openDetails);
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openDetails();
      }
    });
  });
}

function calculateMonthlyPayment(price, down, term, apr) {
  const principal = Math.max(0, price - down);
  const monthlyRate = apr / 100 / 12;
  if (monthlyRate === 0) return principal / term;
  return (
    (principal * monthlyRate * Math.pow(1 + monthlyRate, term)) /
    (Math.pow(1 + monthlyRate, term) - 1)
  );
}

function openModal(type) {
  if (!modalOverlay || !modalContent) return;

  if (type === 'vehicle' && state.selectedVehicle) {
    const v = state.selectedVehicle;
    modalContent.innerHTML = `
      <div class="modal-vehicle-img-wrap">
        <img src="${v.image}" alt="${v.alt}" class="modal-vehicle-img" referrerpolicy="no-referrer" />
      </div>
      <span class="modal-kicker">${v.badge} · ${v.bodyType}</span>
      <h3 class="modal-title">${v.title}</h3>
      <div class="modal-price">${v.priceFormatted}</div>
      <div class="modal-specs">
        <div><span class="modal-spec-label">YEAR</span>${v.year}</div>
        <div><span class="modal-spec-label">MILEAGE</span>${v.mileage}</div>
        <div><span class="modal-spec-label">FUEL</span>${v.fuel}</div>
        <div><span class="modal-spec-label">TRANSMISSION</span>${v.trans}</div>
      </div>
      <div class="modal-actions">
        <button type="button" class="btn btn-primary modal-btn" data-switch-modal="test-drive">BOOK A TEST DRIVE</button>
        <button type="button" class="btn btn-outline modal-btn" data-switch-modal="calculator">CALCULATE PAYMENT</button>
      </div>
    `;
  } else if (type === 'test-drive' || type === 'showroom' || type === 'contact') {
    const title =
      type === 'test-drive'
        ? 'Book a Private Test Drive'
        : type === 'showroom'
          ? 'Visit Our Showroom'
          : 'Contact Apex Motors';
    const desc =
      type === 'showroom'
        ? 'Schedule a private appointment with our gallery concierge.'
        : 'Provide your details and a dedicated specialist will respond promptly.';

    modalContent.innerHTML = `
      <h3 class="modal-title">${title}</h3>
      <p class="modal-desc">${desc}</p>
      <form id="modal-inquiry-form" class="modal-form">
        <div>
          <label class="modal-label" for="inquiry-name">FULL NAME</label>
          <input id="inquiry-name" required type="text" placeholder="Alex Mercer" class="modal-input" />
        </div>
        <div>
          <label class="modal-label" for="inquiry-email">EMAIL ADDRESS</label>
          <input id="inquiry-email" required type="email" placeholder="name@company.com" class="modal-input" />
        </div>
        <div>
          <label class="modal-label" for="inquiry-vehicle">VEHICLE OF INTEREST</label>
          <select id="inquiry-vehicle" class="modal-input">
            ${FEATURED_VEHICLES.map(
              (v) =>
                `<option value="${v.title}" ${
                  state.selectedVehicle?.title === v.title ? 'selected' : ''
                }>${v.title}</option>`
            ).join('')}
          </select>
        </div>
        <button type="submit" class="btn btn-primary modal-btn">SUBMIT REQUEST</button>
      </form>
    `;

    const form = document.getElementById('modal-inquiry-form');
    form?.addEventListener('submit', (e) => {
      e.preventDefault();
      modalContent.innerHTML = `
        <h3 class="modal-title">${title}</h3>
        <div class="modal-confirm">
          <div class="modal-confirm-title">Inquiry Confirmed</div>
          <p class="modal-confirm-text">Our concierge team has received your request and will reach out shortly.</p>
        </div>
      `;
    });
  } else if (type === 'calculator') {
    const monthly = Math.round(
      calculateMonthlyPayment(state.calcPrice, state.calcDown, state.calcTerm, state.calcRate)
    );
    modalContent.innerHTML = `
      <h3 class="modal-title">Payment Calculator</h3>
      <p class="modal-desc">Estimate monthly terms tailored to your acquisition structure.</p>
      <div class="modal-form">
        <div>
          <label class="modal-label" for="calc-price">VEHICLE PRICE ($)</label>
          <input id="calc-price" type="number" value="${state.calcPrice}" class="modal-input" />
        </div>
        <div class="modal-grid-2">
          <div>
            <label class="modal-label" for="calc-down">DOWN PAYMENT ($)</label>
            <input id="calc-down" type="number" value="${state.calcDown}" class="modal-input" />
          </div>
          <div>
            <label class="modal-label" for="calc-rate">APR (%)</label>
            <input id="calc-rate" type="number" step="0.1" value="${state.calcRate}" class="modal-input" />
          </div>
        </div>
        <div>
          <label class="modal-label" for="calc-term">TERM (MONTHS)</label>
          <select id="calc-term" class="modal-input">
            <option value="36" ${state.calcTerm === 36 ? 'selected' : ''}>36 Months</option>
            <option value="48" ${state.calcTerm === 48 ? 'selected' : ''}>48 Months</option>
            <option value="60" ${state.calcTerm === 60 ? 'selected' : ''}>60 Months</option>
            <option value="72" ${state.calcTerm === 72 ? 'selected' : ''}>72 Months</option>
          </select>
        </div>
        <div class="calc-summary">
          <span class="calc-summary-label">ESTIMATED MONTHLY</span>
          <span id="calc-result" class="calc-summary-value">$${monthly.toLocaleString()}/mo</span>
        </div>
      </div>
    `;

    const updateCalc = () => {
      state.calcPrice = Number(document.getElementById('calc-price')?.value) || 0;
      state.calcDown = Number(document.getElementById('calc-down')?.value) || 0;
      state.calcRate = Number(document.getElementById('calc-rate')?.value) || 0;
      state.calcTerm = Number(document.getElementById('calc-term')?.value) || 60;
      const resultEl = document.getElementById('calc-result');
      if (resultEl) {
        const val = Math.round(
          calculateMonthlyPayment(state.calcPrice, state.calcDown, state.calcTerm, state.calcRate)
        );
        resultEl.textContent = `$${val.toLocaleString()}/mo`;
      }
    };

    ['calc-price', 'calc-down', 'calc-rate', 'calc-term'].forEach((id) => {
      document.getElementById(id)?.addEventListener('input', updateCalc);
      document.getElementById(id)?.addEventListener('change', updateCalc);
    });
  } else if (type === 'financing') {
    modalContent.innerHTML = `
      <h3 class="modal-title">Bespoke Acquisition Financing</h3>
      <p class="modal-desc">
        Apex Motors partners with private wealth lenders and institutional finance desks to offer
        discrete lease, balloon, and direct-purchase structures tailored to individual and
        corporate portfolios.
      </p>
      <div class="modal-actions">
        <button type="button" class="btn btn-primary modal-btn" data-switch-modal="calculator">CALCULATE PAYMENT</button>
        <button type="button" class="btn btn-outline modal-btn" data-switch-modal="contact">SPEAK WITH FINANCE</button>
      </div>
    `;
  } else if (type === 'hours') {
    modalContent.innerHTML = `
      <h3 class="modal-title">Showroom Hours</h3>
      <div class="hours-list">
        <div class="hours-row">
          <span>Monday – Friday</span>
          <span class="hours-val">9:00 AM – 7:00 PM</span>
        </div>
        <div class="hours-row">
          <span>Saturday</span>
          <span class="hours-val">10:00 AM – 6:00 PM</span>
        </div>
        <div class="hours-row">
          <span>Sunday</span>
          <span class="hours-val">By Private Appointment</span>
        </div>
      </div>
    `;
  } else if (type === 'privacy' || type === 'terms') {
    modalContent.innerHTML = `
      <h3 class="modal-title">${type === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}</h3>
      <p class="modal-desc">
        ${
          type === 'privacy'
            ? 'Apex Motors handles client inquiries and acquisition records with strict confidentiality. Personal information is used solely to coordinate vehicle viewings, financing consultations, and delivery logistics.'
            : 'All featured vehicle specifications, availability, and pricing are subject to verification at the time of reservation. Private viewings and test drives require valid driver credentials.'
        }
      </p>
    `;
  }

  modalContent.querySelectorAll('[data-switch-modal]').forEach((btn) => {
    btn.addEventListener('click', () => {
      openModal(btn.getAttribute('data-switch-modal'));
    });
  });

  modalOverlay.hidden = false;
  modalOverlay.setAttribute('aria-hidden', 'false');
  requestAnimationFrame(() => {
    modalOverlay.classList.add('is-open');
  });
}

function closeModal() {
  if (!modalOverlay) return;
  modalOverlay.classList.remove('is-open');
  modalOverlay.setAttribute('aria-hidden', 'true');
  setTimeout(() => {
    if (!modalOverlay.classList.contains('is-open')) {
      modalOverlay.hidden = true;
    }
  }, 200);
}

// Event Wiring
brandHomeLink?.addEventListener('click', (e) => {
  e.preventDefault();
  closeMobileMenu();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

mobileMenuToggle?.addEventListener('click', () => {
  if (!mobileMenu) return;
  const isOpen = !mobileMenu.hidden;
  mobileMenu.hidden = isOpen;
  mobileMenuToggle.setAttribute('aria-expanded', String(!isOpen));
});

document.querySelectorAll('[data-scroll]').forEach((el) => {
  el.addEventListener('click', () => {
    const condition = el.getAttribute('data-condition');
    if (condition) {
      resetFilters();
      state.condition = condition;
      renderVehicles();
    }
    const targetId = el.getAttribute('data-scroll');
    if (targetId) scrollToSection(targetId);
  });
});

document.querySelectorAll('[data-category]').forEach((el) => {
  el.addEventListener('click', () => {
    const category = el.getAttribute('data-category');
    resetFilters();
    if (category) {
      state.bodyType = category;
      syncSelects();
      renderVehicles();
    }
    scrollToSection('featured-vehicles');
  });
});

document.querySelectorAll('[data-modal]').forEach((el) => {
  el.addEventListener('click', () => {
    closeMobileMenu();
    openModal(el.getAttribute('data-modal'));
  });
});

makeSelect?.addEventListener('change', (e) => {
  state.make = e.target.value;
  renderVehicles();
});

modelSelect?.addEventListener('change', (e) => {
  state.model = e.target.value;
  renderVehicles();
});

bodySelect?.addEventListener('change', (e) => {
  state.bodyType = e.target.value;
  renderVehicles();
});

priceSelect?.addEventListener('change', (e) => {
  state.price = e.target.value;
  renderVehicles();
});

yearSelect?.addEventListener('change', (e) => {
  state.year = e.target.value;
  renderVehicles();
});

filterForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  renderVehicles();
  scrollToSection('featured-vehicles');
});

resetFiltersBtn?.addEventListener('click', resetFilters);
emptyResetBtn?.addEventListener('click', resetFilters);

modalClose?.addEventListener('click', closeModal);
modalOverlay?.addEventListener('click', (e) => {
  if (e.target === modalOverlay) closeModal();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modalOverlay && !modalOverlay.hidden) {
    closeModal();
  }
});

// Initialize Page
renderVehicles();
observeReveals();

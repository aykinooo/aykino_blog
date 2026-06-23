/* ============================================================
   CYBERFOLIO — Main JavaScript
   Theme toggle, scroll reveal, mobile menu, filtering
   ============================================================ */

/* ---------- SVG Icon System (Lucide) ---------- */
const ICONS = {
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
  'shield-check': '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
  terminal: '<polyline points="4 17 10 11 4 5"/><line x1="12" x2="20" y1="19" y2="19"/>',
  sword: '<polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5"/><line x1="13" x2="19" y1="19" y2="13"/><line x1="16" x2="20" y1="16" y2="20"/><line x1="19" x2="21" y1="21" y2="19"/>',
  flag: '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" x2="4" y1="22" y2="15"/>',
  user: '<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  building: '<rect width="16" height="20" x="4" y="2" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01"/>',
  coffee: '<path d="M10 2v2M14 2v2M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"/>',
  github: '<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>',
  moon: '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>',
  'arrow-right': '<path d="M5 12h14M12 5l7 7-7 7"/>',
  target: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
  'graduation-cap': '<path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/>',
  share: '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/>',
  compass: '<circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>',
  calendar: '<rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18M8 2v4M16 2v4"/>',
  tag: '<path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"/><circle cx="7.5" cy="7.5" r=".5" fill="currentColor"/>',
  network: '<rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3M12 12V8"/>',
  zap: '<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>',
  'alert-triangle': '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4M12 17h.01"/>',
  server: '<rect width="20" height="8" x="2" y="2" rx="2"/><rect width="20" height="8" x="2" y="14" rx="2"/><path d="M6 6h.01M6 18h.01"/>',
  globe: '<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20M2 12h20"/>',
  folder: '<path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/>',
  database: '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/>',
  key: '<path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"/><path d="m21 2-9.6 9.6"/><circle cx="7.5" cy="15.5" r="5.5"/>',
  lock: '<rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
  monitor: '<rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/>',
  refresh: '<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/>',
  ban: '<circle cx="12" cy="12" r="10"/><path d="m4.9 4.9 14.2 14.2"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  x: '<path d="M18 6 6 18M6 6l12 12"/>',
  'hard-drive': '<line x1="22" x2="2" y1="12" y2="12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/><line x1="6" x2="6.01" y1="16" y2="16"/><line x1="10" x2="10.01" y1="16" y2="16"/>'
};

function svgIcon(name) {
  const inner = ICONS[name];
  if (!inner) return '';
  return `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">${inner}</svg>`;
}

function injectIcons(root = document) {
  root.querySelectorAll('i[data-icon]').forEach((el) => {
    const name = el.getAttribute('data-icon');
    if (ICONS[name]) {
      el.innerHTML = svgIcon(name);
      el.classList.add('icon-rendered');
    }
  });
}
window.injectIcons = injectIcons;

document.addEventListener('DOMContentLoaded', () => {

  injectIcons();

  /* ---------- Theme Toggle (Dark / Light) ---------- */
  const themeToggle = document.querySelector('.theme-toggle');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

  // Load saved theme or use system preference
  function getStoredTheme() {
    const stored = localStorage.getItem('theme');
    if (stored) return stored;
    return prefersDark.matches ? 'dark' : 'light';
  }

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    // Update toggle icon (sun in dark mode = switch to light, moon in light = switch to dark)
    if (themeToggle) {
      themeToggle.innerHTML = svgIcon(theme === 'dark' ? 'sun' : 'moon');
      themeToggle.setAttribute('aria-label',
        theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
      );
    }
  }

  // Initialize theme
  setTheme(getStoredTheme());

  // Toggle on click
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      setTheme(current === 'dark' ? 'light' : 'dark');
    });
  }

  // Listen for system preference changes
  prefersDark.addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      setTheme(e.matches ? 'dark' : 'light');
    }
  });


  /* ---------- Mobile Menu ---------- */
  const burger = document.querySelector('.nav-burger');
  const mobileMenu = document.querySelector('.mobile-menu');

  if (burger && mobileMenu) {
    burger.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
      burger.classList.toggle('active');
      // Prevent body scroll when menu is open
      document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
    });

    // Close menu when a link is clicked
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        burger.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }


  /* ---------- Scroll Reveal Animations ---------- */
  const revealElements = document.querySelectorAll('.reveal, .stagger');

  if (revealElements.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Unobserve after revealing (animate only once)
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
  }


  /* ---------- Active Nav Link ---------- */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  /* ---------- Homepage Latest Posts (from blog.html) ---------- */
  const latestPostsGrid = document.getElementById('latest-posts-grid');

  async function loadLatestPostsFromBlog() {
    if (!latestPostsGrid) return;
    try {
      const response = await fetch('./blog.html', { cache: 'no-store' });
      if (!response.ok) throw new Error('Failed to fetch blog page');

      const blogHtml = await response.text();
      const parser = new DOMParser();
      const blogDoc = parser.parseFromString(blogHtml, 'text/html');
      const latestCards = Array.from(blogDoc.querySelectorAll('.posts-grid .card')).slice(0, 3);

      if (latestCards.length === 0) throw new Error('No blog cards found');
      latestPostsGrid.innerHTML = latestCards.map((card) => card.outerHTML).join('');
      injectIcons(latestPostsGrid);
    } catch (error) {
      latestPostsGrid.innerHTML = '<p class="cve-empty">Unable to load latest articles right now.</p>';
    }
  }

  loadLatestPostsFromBlog();


  /* ---------- Blog Filter Buttons ---------- */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.posts-grid .card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active state
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;

      cards.forEach(card => {
        if (filter === 'all') {
          card.style.display = '';
          card.style.opacity = '0';
          card.style.transform = 'translateY(16px)';
          requestAnimationFrame(() => {
            card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          });
        } else {
          const tags = card.dataset.tags || '';
          if (tags.includes(filter)) {
            card.style.display = '';
            card.style.opacity = '0';
            card.style.transform = 'translateY(16px)';
            requestAnimationFrame(() => {
              card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            });
          } else {
            card.style.display = 'none';
          }
        }
      });
    });
  });


  /* ---------- Search Functionality ---------- */
  const searchInput = document.querySelector('.search-input');

  if (searchInput && cards.length > 0) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();

      cards.forEach(card => {
        const title = card.querySelector('.card-title')?.textContent.toLowerCase() || '';
        const excerpt = card.querySelector('.card-excerpt')?.textContent.toLowerCase() || '';
        const tags = card.dataset.tags?.toLowerCase() || '';

        const matches = title.includes(query) || excerpt.includes(query) || tags.includes(query);
        card.style.display = matches ? '' : 'none';
      });
    });
  }


  /* ---------- Smooth Scroll for Anchor Links ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });


  /* ---------- Contact Form Handler ---------- */
  const contactForm = document.querySelector('.contact-form');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      // Show success message (replace with real backend later)
      const btn = contactForm.querySelector('.btn-primary');
      const originalText = btn.textContent;
      btn.textContent = '✓ Message envoyé !';
      btn.style.background = '#34c759';
      setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
        contactForm.reset();
      }, 2500);
    });
  }


  /* ---------- Reading Progress Bar (Article pages) ---------- */
  const progressBar = document.querySelector('.reading-progress');
  const articleContent = document.querySelector('.article-content');

  if (progressBar && articleContent) {
    window.addEventListener('scroll', () => {
      const contentTop = articleContent.offsetTop;
      const contentHeight = articleContent.offsetHeight;
      const scrolled = window.scrollY - contentTop + window.innerHeight / 2;
      const progress = Math.max(0, Math.min(100, (scrolled / contentHeight) * 100));
      progressBar.style.width = progress + '%';
    });
  }


  /* ---------- Latest CVEs Feed (Home page) ---------- */
  const cveContainer = document.getElementById('cve-list');

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function formatCveDate(dateValue) {
    if (!dateValue) return 'Unknown date';
    const date = new Date(dateValue);
    if (Number.isNaN(date.getTime())) return 'Unknown date';
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    }).format(date);
  }

  function getSeverityLabel(cvss) {
    const score = Number(cvss);
    if (Number.isNaN(score)) return 'N/A';
    if (score >= 9) return 'Critical';
    if (score >= 7) return 'High';
    if (score >= 4) return 'Medium';
    if (score > 0) return 'Low';
    return 'N/A';
  }

  function getSeverityKey(label) {
    if (label === 'N/A') return 'na';
    return label.toLowerCase();
  }

  // Normalise un item brut retourné par l'API NVD v2
  function normalizeCVEFromNVD(item) {
    const cve = item?.cve;
    if (!cve) return null;
    const id = String(cve.id || '').trim();
    if (!id.startsWith('CVE-')) return null;

    const enDesc = (cve.descriptions || []).find(d => d.lang === 'en');
    const summary = enDesc ? enDesc.value : 'No summary provided.';

    const m = cve.metrics || {};
    const v31 = (m.cvssMetricV31 || [])[0];
    const v30 = (m.cvssMetricV30 || [])[0];
    const v2  = (m.cvssMetricV2  || [])[0];
    const baseScore = v31?.cvssData?.baseScore
                   ?? v30?.cvssData?.baseScore
                   ?? v2?.cvssData?.baseScore
                   ?? null;

    return {
      id,
      summary,
      published: cve.published || '',
      cvss     : baseScore != null ? Number(baseScore) : null,
      url      : `https://nvd.nist.gov/vuln/detail/${id}`
    };
  }

  function renderCves(items) {
    if (!cveContainer) return;
    if (!items || items.length === 0) {
      cveContainer.innerHTML = '<p class="cve-empty">No CVE data available right now.</p>';
      return;
    }

    cveContainer.innerHTML = items.slice(0, 6).map((cve) => {
      const id = escapeHtml(cve.id || 'CVE-UNKNOWN');
      const summary = escapeHtml(cve.summary || 'No summary provided.');
      const published = formatCveDate(cve.published);
      // cve.cvss peut être null → Number(null)=0 qui fausse le badge ; on force NaN si absent
      const cvss = cve.cvss != null ? Number(cve.cvss) : NaN;
      const severity = getSeverityLabel(cvss);
      const severityClass = `cve-severity-${getSeverityKey(severity)}`;
      const badge = !Number.isNaN(cvss) ? `${severity} ${cvss.toFixed(1)}` : 'N/A';
      const url = escapeHtml(cve.url || `https://nvd.nist.gov/vuln/detail/${id}`);

      return `
        <a class="cve-card" href="${url}" target="_blank" rel="noopener noreferrer">
          <div class="cve-card-top">
            <span class="cve-id">${id}</span>
            <span class="cve-severity ${severityClass}">${badge}</span>
          </div>
          <p class="cve-summary">${summary}</p>
          <div class="cve-card-bottom">
            <span class="cve-date">${published}</span>
            <span class="cve-link">View on NVD →</span>
          </div>
        </a>
      `;
    }).join('');
  }

  async function loadLatestCves() {
    if (!cveContainer) return;

    // 1. Appel direct à l'API NVD v2
    // NVD 2.0 trie par publishDate ASCENDANT (plus ancien en premier).
    // Pour avoir les toutes dernières CVE (comme sur nvd.nist.gov) :
    //   - requête 1 : récupère le total sur la fenêtre de 7 jours
    //   - requête 2 : saute à la dernière page → CVEs les plus récentes
    try {
      const now      = new Date();
      const pubStart = new Date(now - 7 * 24 * 60 * 60 * 1000).toISOString().slice(0, 23);
      const pubEnd   = now.toISOString().slice(0, 23);
      const base     = `https://services.nvd.nist.gov/rest/json/cves/2.0?pubStartDate=${pubStart}&pubEndDate=${pubEnd}&noRejected`;

      const controller = new AbortController();
      const timeoutId  = setTimeout(() => controller.abort(), 15000);

      // Requête 1 : sonde pour connaître le nombre total de résultats
      const probeResp = await fetch(`${base}&resultsPerPage=1&startIndex=0`,
        { cache: 'no-store', signal: controller.signal });
      if (!probeResp.ok) throw new Error('probe failed');
      const probeData  = await probeResp.json();
      const total      = probeData.totalResults || 0;
      if (total === 0) throw new Error('no results in window');

      // Requête 2 : dernière page = CVEs les plus récemment publiées
      const startIndex = Math.max(0, total - 6);
      const mainResp   = await fetch(`${base}&resultsPerPage=6&startIndex=${startIndex}`,
        { cache: 'no-store', signal: controller.signal });
      clearTimeout(timeoutId);
      if (!mainResp.ok) throw new Error('main fetch failed');

      const data  = await mainResp.json();
      const items = (data.vulnerabilities || [])
        .map(normalizeCVEFromNVD)
        .filter(Boolean)
        .sort((a, b) => new Date(b.published) - new Date(a.published))
        .slice(0, 6);

      if (items.length > 0) {
        renderCves(items);
        return;
      }
    } catch (_e) {
      // API inaccessible — on bascule sur le JSON statique
    }

    // 2. Fallback : JSON statique mis à jour par GitHub Actions
    try {
      const response = await fetch('./data/latest-cves.json', { cache: 'no-store' });
      if (!response.ok) throw new Error('fetch failed');
      const data = await response.json();
      renderCves(Array.isArray(data.items) ? data.items : []);
    } catch (_e) {
      cveContainer.innerHTML = '<p class="cve-empty">Unable to load CVE feed right now. Please try again later.</p>';
    }
  }

  loadLatestCves();

});

/* ============================================================
   CYBERFOLIO — Main JavaScript
   Theme toggle, scroll reveal, mobile menu, filtering
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

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
    // Update toggle icon
    if (themeToggle) {
      themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
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

});

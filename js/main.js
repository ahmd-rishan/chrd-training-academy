/* CHRD Training Academy - Core Application Script */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky Glass Header Scroll Effect
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });

  // 2. Mobile Menu Toggle & Backdrop Handler
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');

  // Create mobile nav backdrop element directly appended to document.body
  let navBackdrop = document.querySelector('.nav-backdrop');
  if (!navBackdrop) {
    navBackdrop = document.createElement('div');
    navBackdrop.className = 'nav-backdrop';
    document.body.appendChild(navBackdrop);
  }

  function toggleMobileNav(show) {
    if (!navMenu) return;
    const shouldOpen = show !== undefined ? show : !navMenu.classList.contains('open');
    if (shouldOpen) {
      navMenu.classList.add('open');
      if (header) header.classList.add('menu-open');
      document.body.classList.add('menu-open');
      document.documentElement.classList.add('menu-open');
      if (navBackdrop) {
        navBackdrop.classList.add('active');
        navBackdrop.style.opacity = '1';
        navBackdrop.style.visibility = 'visible';
        navBackdrop.style.pointerEvents = 'auto';
      }
      if (mobileToggle) mobileToggle.innerHTML = '✕';
    } else {
      navMenu.classList.remove('open');
      if (header) header.classList.remove('menu-open');
      document.body.classList.remove('menu-open');
      document.documentElement.classList.remove('menu-open');
      if (navBackdrop) {
        navBackdrop.classList.remove('active');
        navBackdrop.style.opacity = '0';
        navBackdrop.style.visibility = 'hidden';
        navBackdrop.style.pointerEvents = 'none';
      }
      if (mobileToggle) mobileToggle.innerHTML = '☰';
    }
  }

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMobileNav();
    });

    if (navBackdrop) {
      navBackdrop.addEventListener('click', () => {
        toggleMobileNav(false);
      });
    }

    // Close mobile nav when clicking any nav link
    document.querySelectorAll('.nav-link, .mega-item').forEach(link => {
      link.addEventListener('click', () => {
        toggleMobileNav(false);
      });
    });
  }

  // 3. Scroll Reveal Observer
  const revealElements = document.querySelectorAll('.reveal');
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -40px 0px',
    threshold: 0.1
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        if (entry.target.classList.contains('stat-card')) {
          const counterEl = entry.target.querySelector('.counter-value');
          if (counterEl && !counterEl.classList.contains('counted')) {
            counterEl.classList.add('counted');
            animateCounter(counterEl);
          }
        }
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach(el => revealObserver.observe(el));

  // 4. Stat Counter Animation
  function animateCounter(el) {
    const target = parseInt(el.getAttribute('data-target') || '0', 10);
    const suffix = el.getAttribute('data-suffix') || '';
    const duration = 1800;
    const startStep = 40;
    const increment = target / (duration / startStep);
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        el.innerText = target.toLocaleString() + suffix;
        clearInterval(timer);
      } else {
        el.innerText = Math.floor(current).toLocaleString() + suffix;
      }
    }, startStep);
  }

  // 5. Accordion (FAQ) Controller
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const content = item.querySelector('.accordion-content');
      const isActive = item.classList.contains('active');

      const container = item.closest('.accordion');
      if (container) {
        container.querySelectorAll('.accordion-item').forEach(i => {
          i.classList.remove('active');
          const c = i.querySelector('.accordion-content');
          if (c) c.style.maxHeight = null;
        });
      }

      if (!isActive && content) {
        item.classList.add('active');
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });
});

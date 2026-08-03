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
  let savedScrollY = 0;

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
      savedScrollY = window.scrollY || window.pageYOffset || 0;
      navMenu.classList.add('open');
      if (header) header.classList.add('menu-open');
      document.body.classList.add('menu-open');
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
      if (navBackdrop) {
        navBackdrop.classList.remove('active');
        navBackdrop.style.opacity = '0';
        navBackdrop.style.visibility = 'hidden';
        navBackdrop.style.pointerEvents = 'none';
      }
      if (mobileToggle) mobileToggle.innerHTML = '☰';
      window.scrollTo(0, savedScrollY);
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

  // 6. Client-Side Content Protection Module
  (function initContentProtection() {
    let toastTimeout = null;

    // Toast notification singleton
    function showProtectionToast(message) {
      let toast = document.querySelector('.cp-toast');
      if (!toast) {
        toast = document.createElement('div');
        toast.className = 'cp-toast';
        toast.innerHTML = `
          <svg class="cp-toast-icon" viewBox="0 0 24 24">
            <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
          </svg>
          <span class="cp-toast-message">${message}</span>
        `;
        document.body.appendChild(toast);
      } else {
        const msgEl = toast.querySelector('.cp-toast-message');
        if (msgEl) msgEl.textContent = message;
      }

      toast.classList.add('show');
      if (toastTimeout) clearTimeout(toastTimeout);
      toastTimeout = setTimeout(() => {
        toast.classList.remove('show');
      }, 2500);
    }

    // Helper: Check if target or any ancestor is an editable form field
    function isFormElement(el) {
      if (!el || el === document || el === window) return false;
      const tag = el.tagName ? el.tagName.toUpperCase() : '';
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(tag)) return true;
      if (el.isContentEditable) return true;
      if (el.closest && el.closest('input, textarea, select, [contenteditable="true"], .selectable')) return true;
      return false;
    }

    // Disable Right-Click (Context Menu) except on form inputs
    document.addEventListener('contextmenu', (e) => {
      if (isFormElement(e.target)) return;
      e.preventDefault();
      showProtectionToast('Content protection is enabled.');
    }, false);

    // Disable Keyboard Shortcuts (Ctrl/Cmd + C, X, A, S, U, P, Shift+I/J/C, F12)
    document.addEventListener('keydown', (e) => {
      if (isFormElement(e.target)) return;

      const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
      const cmdOrCtrl = isMac ? e.metaKey : e.ctrlKey;
      const key = e.key ? e.key.toUpperCase() : '';
      const keyCode = e.keyCode;

      // Intercept Ctrl/Cmd + P (Print)
      if (cmdOrCtrl && key === 'P') {
        e.preventDefault();
        showProtectionToast('Printing has been disabled.');
        return;
      }

      // Intercept Copy / Cut / Select All / Save / View Source
      if (cmdOrCtrl && ['C', 'X', 'A', 'S', 'U'].includes(key)) {
        e.preventDefault();
        showProtectionToast('Content protection is enabled.');
        return;
      }

      // Intercept DevTools shortcuts: F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C
      if (
        keyCode === 123 || // F12
        (cmdOrCtrl && e.shiftKey && ['I', 'J', 'C'].includes(key)) ||
        (isMac && e.altKey && ['I', 'J', 'C'].includes(key))
      ) {
        e.preventDefault();
        showProtectionToast('Content Protection Enabled');
        return;
      }
    }, false);

    // Disable Copy / Cut events on non-form elements
    document.addEventListener('copy', (e) => {
      if (isFormElement(e.target)) return;
      e.preventDefault();
      showProtectionToast('Content protection is enabled.');
    }, false);

    document.addEventListener('cut', (e) => {
      if (isFormElement(e.target)) return;
      e.preventDefault();
      showProtectionToast('Content protection is enabled.');
    }, false);

    // Disable Image and Text Dragging
    document.addEventListener('dragstart', (e) => {
      if (isFormElement(e.target)) return;
      if (e.target.tagName === 'IMG' || (e.target.closest && e.target.closest('img'))) {
        e.preventDefault();
        showProtectionToast('Content protection is enabled.');
        return;
      }
      e.preventDefault();
    }, false);
  })();
});

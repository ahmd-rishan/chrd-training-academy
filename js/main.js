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

  // 2. Mobile Menu Toggle
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const isOpen = navMenu.classList.contains('open');
      mobileToggle.innerHTML = isOpen ? '✕' : '☰';
    });

    // Close mobile nav when clicking a link
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        if (mobileToggle) mobileToggle.innerHTML = '☰';
      });
    });
  }

  // 3. Scroll Reveal Observer
  const revealElements = document.querySelectorAll('.reveal');
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.15
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // If element is a stat counter container, trigger counting
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
    const duration = 2000;
    const startStep = 50;
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

      // Close all active accordions in same container
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

  // 6. Testimonial Slider Controls (if present)
  const testimonialItems = document.querySelectorAll('.testimonial-slide');
  const prevBtn = document.getElementById('prevTestimonial');
  const nextBtn = document.getElementById('nextTestimonial');
  let currentSlide = 0;

  if (testimonialItems.length > 1) {
    function showSlide(index) {
      testimonialItems.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
      });
    }

    showSlide(currentSlide);

    prevBtn?.addEventListener('click', () => {
      currentSlide = (currentSlide - 1 + testimonialItems.length) % testimonialItems.length;
      showSlide(currentSlide);
    });

    nextBtn?.addEventListener('click', () => {
      currentSlide = (currentSlide + 1) % testimonialItems.length;
      showSlide(currentSlide);
    });

    // Auto-advance testimonials every 6 seconds
    setInterval(() => {
      currentSlide = (currentSlide + 1) % testimonialItems.length;
      showSlide(currentSlide);
    }, 6000);
  }
});

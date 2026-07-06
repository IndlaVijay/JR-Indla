document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  const navBackdrop = document.querySelector('.nav-backdrop');
  const body = document.body;



  function closeMenu() {
    navLinks.classList.remove('open');
    navBackdrop.classList.remove('open');
    body.classList.remove('menu-open');

    navToggle.classList.remove('active');
}

  function openMenu() {
    navLinks.classList.add('open');
    navBackdrop.classList.add('open');
    body.classList.add('menu-open');
 
    navToggle.classList.add('active');
}

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      if (navLinks.classList.contains('open')) {
        closeMenu();
      } else {
        openMenu();
      }
    });
  }

  if (navBackdrop) {
    navBackdrop.addEventListener('click', closeMenu);
  }

  // Dropdown submenu toggles (mobile accordion, desktop hover handled by CSS)
  document.querySelectorAll('.nav-item.has-children .nav-link-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      if (window.innerWidth <= 900) {
        e.preventDefault();
        const parent = btn.closest('.nav-item');
        const isOpen = parent.classList.contains('open');
        document.querySelectorAll('.nav-item.has-children').forEach(item => item.classList.remove('open'));
        if (!isOpen) parent.classList.add('open');
      }
    });
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 900) {
      closeMenu();
    }
  });

  const slides = document.querySelectorAll('.testimonial-slide');
  const dots = document.querySelectorAll('.testimonial-dots .dot');

  // FAQ accordion (About page)
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('active');
      document.querySelectorAll('.faq-item').forEach(i => {
        i.classList.remove('active');
        i.querySelector('.faq-arrow').textContent = '⌄';
      });
      if (!isOpen) {
        item.classList.add('active');
        item.querySelector('.faq-arrow').textContent = '⌃';
      }
    });
  });

  let currentSlide = 0;
  let slideInterval;

  function showSlide(index) {
    slides.forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));
    slides[index].classList.add('active');
    dots[index].classList.add('active');
    currentSlide = index;
  }

  function nextSlide() {
    const next = (currentSlide + 1) % slides.length;
    showSlide(next);
  }

  function startAutoSlide() {
    slideInterval = setInterval(nextSlide, 5000);
  }

  function resetAutoSlide() {
    clearInterval(slideInterval);
    startAutoSlide();
  }

  if (slides.length && dots.length) {
    dots.forEach(dot => {
      dot.addEventListener('click', () => {
        showSlide(parseInt(dot.getAttribute('data-index'), 10));
        resetAutoSlide();
      });
    });
    startAutoSlide();
  }

  const learnMoreBtn = document.querySelector('.btn-learn-more');
  if (learnMoreBtn) {
    learnMoreBtn.addEventListener('click', () => {
      alert('Learn more about Auxochromofours!');
    });
  }

  // Animate metric numbers counting up on scroll into view
  const counters = document.querySelectorAll('.count-num');
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseFloat(el.getAttribute('data-count'));
        const suffix = el.getAttribute('data-suffix') || '';
        const decimals = parseInt(el.getAttribute('data-decimal') || '0', 10);
        const duration = 1500;
        const startTime = performance.now();

        function tick(now) {
          const progress = Math.min((now - startTime) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const value = target * eased;
          el.textContent = decimals > 0 ? value.toFixed(decimals) : Math.round(value);
          if (decimals === 0) {
            el.textContent = Math.round(value) + suffix;
          } else {
            el.textContent = value.toFixed(decimals) + suffix;
          }
          if (progress < 1) {
            requestAnimationFrame(tick);
          } else {
            el.textContent = (decimals > 0 ? target.toFixed(decimals) : target) + suffix;
          }
        }
        requestAnimationFrame(tick);
        counterObserver.unobserve(el);
      }
    });
  }, { threshold: 0.4 });

  counters.forEach(c => counterObserver.observe(c));

});



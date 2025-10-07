// assets/js/app.js
// ES6+ Interactions and scroll/load animations using IntersectionObserver

document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle
  const mBtn = document.getElementById('mobileMenuBtn');
  const mMenu = document.getElementById('mobileMenu');
  if (mBtn && mMenu) {
    mBtn.addEventListener('click', () => {
      mMenu.classList.toggle('hidden');
    });
  }
  const mBtn2 = document.getElementById('mobileMenuBtn2');
  const mMenu2 = document.getElementById('mobileMenu2');
  if (mBtn2 && mMenu2) {
    mBtn2.addEventListener('click', () => {
      mMenu2.classList.toggle('hidden');
    });
  }

  // Reveal on scroll (IntersectionObserver)
  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealElements.forEach(el => revealObserver.observe(el));

  // Lightbox for Gallery
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxClose = document.getElementById('lightboxClose');
  if (lightbox && lightboxImg && lightboxClose) {
    document.querySelectorAll('img[data-lightbox]').forEach(img => {
      img.style.cursor = 'zoom-in';
      img.addEventListener('click', () => {
        lightboxImg.src = img.src;
        lightbox.classList.remove('hidden');
        lightbox.classList.add('flex');
      });
    });

    lightboxClose.addEventListener('click', () => {
      lightbox.classList.add('hidden');
      lightbox.classList.remove('flex');
    });

    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        lightbox.classList.add('hidden');
        lightbox.classList.remove('flex');
      }
    });
  }
});

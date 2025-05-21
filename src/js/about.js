const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      
      // Анимация карточек с задержкой
      document.querySelectorAll('.carousel-item').forEach((item, index) => {
        setTimeout(() => {
          item.classList.add('animate');
        }, index * 150);
      });
    }
  });
}, { threshold: 0.1 });

observer.observe(document.querySelector('.evolution-carousel'));
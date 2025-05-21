// Добавляем функционал модальных окон
document.querySelectorAll('[data-modal]').forEach(btn => {
    btn.addEventListener('click', () => {
        const modalId = btn.dataset.modal;
        const modal = document.getElementById(modalId);
        gsap.to(modal, {
            duration: 0.3,
            autoAlpha: 1,
            display: 'block'
        });
    });
});

document.querySelectorAll('.modal-close').forEach(btn => {
    btn.addEventListener('click', () => {
        const modal = btn.closest('.modal');
        gsap.to(modal, {
            duration: 0.2,
            autoAlpha: 0,
            display: 'none'
        });
    });
});

// Анимация плавающего ментора
gsap.to('.floating-mentor', {
    duration: 2,
    y: 20,
    repeat: -1,
    yoyo: true,
    ease: 'power1.inOut'
});

// Интерактивные вехи на таймлайне
document.querySelectorAll('.milestone').forEach(milestone => {
    milestone.addEventListener('mouseenter', () => {
        gsap.to(milestone, {
            scale: 1.2,
            duration: 0.3
        });
    });
    
    milestone.addEventListener('mouseleave', () => {
        gsap.to(milestone, {
            scale: 1,
            duration: 0.3
        });
    });
});

// Фильтрация курсов
document.querySelectorAll('.filter-tag').forEach(tag => {
    tag.addEventListener('click', function() {
        document.querySelectorAll('.filter-tag').forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        
        const filter = this.textContent.toLowerCase();
        document.querySelectorAll('.card').forEach(card => {
            card.style.display = filter === 'все курсы' ? 'block' : 'none';
        });
    });
});
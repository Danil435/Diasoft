document.addEventListener('DOMContentLoaded', () => {
    // Плавная прокрутка
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Анимация хедера
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        header.style.background = window.scrollY > 50 
            ? 'rgba(255,255,255,0.95)' 
            : '#fff';
    });

    // Модальное окно
    const modal = document.getElementById('authModal');
    const loginButtons = document.querySelectorAll('.btn-login');
    const closeModal = document.querySelector('.close');

    // Открытие модалки
    loginButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.style.display = 'block';
        });
    });

    // Закрытие модалки
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Закрытие при клике вне окна
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Обработка формы
    document.getElementById('loginForm').addEventListener('submit', (e) => {
        e.preventDefault();
        modal.style.display = 'none';
        alert('Форма успешно отправлена!');
    });

//     // Анимация карточек
//     const animateCards = () => {
//         const cards = document.querySelectorAll('.feature-card');
//         cards.forEach(card => {
//             const cardTop = card.getBoundingClientRect().top;
//             if (cardTop < window.innerHeight - 100) {
//                 card.style.opacity = '1';
//                 card.style.transform = 'translateY(0)';
//             }
//         });
//     };

//     window.addEventListener('scroll', animateCards);
//     animateCards(); // Инициализация
});
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.contact-form');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        if (form.checkValidity()) {
            const formData = new FormData(form);
            
            fetch('/send-message', {
                method: 'POST',
                body: formData
            })
            .then(response => {
                if (response.ok) {
                    alert('Сообщение успешно отправлено!');
                    form.reset();
                }
            })
            .catch(error => {
                console.error('Ошибка:', error);
            });
        }
    });
});
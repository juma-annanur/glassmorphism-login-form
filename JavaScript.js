document.addEventListener('DOMContentLoaded', function() {
    const togglePasswordIcon = document.getElementById('togglePasswordIcon');
    const passwordInput = document.getElementById('passwordInput');
    
    if (togglePasswordIcon && passwordInput) {
        togglePasswordIcon.addEventListener('click', function() {
            // Определяем текущий тип поля
            const currentType = passwordInput.getAttribute('type');
            
            // Переключаем тип между password и text
            if (currentType === 'password') {
                passwordInput.setAttribute('type', 'text');
                this.src = 'https://img.icons8.com/ios-filled/50/000000/hide.png';
                this.title = 'Hide password';
            } else {
                passwordInput.setAttribute('type', 'password');
                this.src = 'https://img.icons8.com/ios-filled/50/000000/visible--v1.png';
                this.title = 'Show password';
            }
        });
    }
});


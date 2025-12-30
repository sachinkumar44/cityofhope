// MyCityofHope Login Page JavaScript

console.log('%c🏥 MyCityofHope Login', 'color: #0066b2; font-size: 20px; font-weight: bold;');
console.log('%c✅ Page Loaded Successfully!', 'color: #008542; font-size: 14px;');

// Toggle Password Visibility
function togglePassword() {
    const passwordInput = document.getElementById('password');
    const toggleBtn = document.querySelector('.toggle-password i');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleBtn.classList.remove('fa-eye');
        toggleBtn.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        toggleBtn.classList.remove('fa-eye-slash');
        toggleBtn.classList.add('fa-eye');
    }
}

// Form Submission Handler
document.addEventListener('DOMContentLoaded', function() {
    
    const loginForm = document.querySelector('.login-form');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            if (username && password) {
                console.log('Login attempt:', { username });
                alert('Iniciando sesión...\n\nUsername: ' + username);
                // Here you would typically send data to server
            } else {
                alert('Por favor complete todos los campos');
            }
        });
    }
    
    // Access Key Button
    const btnAccessKey = document.querySelector('.btn-access-key');
    if (btnAccessKey) {
        btnAccessKey.addEventListener('click', function() {
            console.log('Access key login clicked');
            alert('Iniciar sesión con clave de acceso\n\nEsta función permite acceso sin contraseña usando biometría o clave de seguridad.');
        });
    }
    
    // Register Button
    const btnRegister = document.querySelector('.btn-register');
    if (btnRegister) {
        btnRegister.addEventListener('click', function() {
            console.log('Register clicked');
            alert('Regístrese ahora\n\nSerá redirigido a la página de registro...');
        });
    }
    
    // Help Buttons
    const helpButtons = document.querySelectorAll('.help-btn');
    helpButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const btnText = this.textContent.trim();
            console.log('Help button clicked:', btnText);
            alert('Abriendo: ' + btnText);
        });
    });
    
    // App Store Buttons
    const appButtons = document.querySelectorAll('.app-store-btn, .google-play-btn');
    appButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const store = this.classList.contains('app-store-btn') ? 'App Store' : 'Google Play';
            console.log('App download clicked:', store);
            alert('Descargando desde ' + store + '...');
        });
    });
    
    // Forgot Password Link
    const forgotLink = document.querySelector('.forgot-password a');
    if (forgotLink) {
        forgotLink.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Forgot password clicked');
            alert('Recuperar información de inicio de sesión\n\nSe le enviará un correo electrónico con instrucciones.');
        });
    }
    
    // Footer Links
    const footerLinks = document.querySelectorAll('.footer-links a');
    footerLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const linkText = this.textContent.trim();
            console.log('Footer link clicked:', linkText);
            alert('Abriendo: ' + linkText);
        });
    });
    
    // Language Toggle
    const langLink = document.querySelector('.lang-link');
    if (langLink) {
        langLink.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Language toggle clicked');
            alert('Cambiando idioma a inglés...');
        });
    }
    
    // Input Focus Effects
    const formInputs = document.querySelectorAll('.form-input');
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.classList.remove('focused');
        });
    });
    
    // Entrance Animations
    const loginCard = document.querySelector('.login-card');
    const leftSection = document.querySelector('.left-section');
    
    if (loginCard) {
        loginCard.style.opacity = '0';
        loginCard.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            loginCard.style.transition = 'all 0.8s ease-out';
            loginCard.style.opacity = '1';
            loginCard.style.transform = 'translateY(0)';
        }, 200);
    }
    
    if (leftSection) {
        leftSection.style.opacity = '0';
        leftSection.style.transform = 'translateX(-30px)';
        
        setTimeout(() => {
            leftSection.style.transition = 'all 0.8s ease-out';
            leftSection.style.opacity = '1';
            leftSection.style.transform = 'translateX(0)';
        }, 100);
    }
    
    // Sticky Notes Animation
    const stickyNotes = document.querySelectorAll('.sticky-note');
    stickyNotes.forEach((note, index) => {
        note.style.opacity = '0';
        note.style.transform = 'scale(0.8) rotate(0deg)';
        
        setTimeout(() => {
            note.style.transition = 'all 0.5s ease-out';
            note.style.opacity = '1';
            
            if (index === 0) {
                note.style.transform = 'scale(1) rotate(-5deg)';
            } else if (index === 1) {
                note.style.transform = 'scale(1) rotate(3deg)';
            } else {
                note.style.transform = 'scale(1) rotate(-4deg)';
            }
        }, 300 + (index * 100));
    });
    
    console.log('📊 Login Page Analytics:', {
        page: 'mycityofhope.html',
        timestamp: new Date().toISOString()
    });
});

// Window Load Event
window.addEventListener('load', function() {
    console.log('✅ MyCityofHope login page fully loaded!');
    console.log('⏱️ Load time:', performance.now().toFixed(2) + 'ms');
});

// Page Visibility
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        console.log('👋 User left the login page');
    } else {
        console.log('👀 User returned to login page');
    }
});
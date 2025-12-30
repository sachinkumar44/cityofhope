// Chat Button Function
function openChat() {
    alert('Chat support will open here.\n\nConnect with our team 24/7 for assistance.');
}

// Phone Popup Function
function showPhonePopup(phoneText) {
    const phoneNumber = phoneText.match(/[\d\(\)\-\s]+/)[0].trim();
    const telLink = 'tel:' + phoneNumber.replace(/[^0-9]/g, '');
    
    const overlay = document.createElement('div');
    overlay.className = 'phone-popup-overlay';
    overlay.innerHTML = `
        <div class="phone-popup">
            <div class="phone-popup-header">
                <h3>This site is trying to open Google Chrome.</h3>
            </div>
            <div class="phone-popup-body">
                <p>http://127.0.0.1:5500 wants to open this application.</p>
                <label class="phone-popup-checkbox">
                    <input type="checkbox" id="alwaysAllow">
                    <span>Always allow http://127.0.0.1:5500 to open links of this type in the associated app</span>
                </label>
            </div>
            <div class="phone-popup-footer">
                <button class="btn-popup-cancel">Cancel</button>
                <button class="btn-popup-open">Open</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(overlay);
    
    overlay.querySelector('.btn-popup-cancel').addEventListener('click', function() {
        document.body.removeChild(overlay);
    });
    
    overlay.querySelector('.btn-popup-open').addEventListener('click', function() {
        window.location.href = telLink;
        document.body.removeChild(overlay);
    });
    
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
            document.body.removeChild(overlay);
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
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

    // ==========================================
    // 📱 MOBILE MENU TOGGLE (HAMBURGER ↔ CROSS)
    // ==========================================
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');
    const mainMenuHeader = document.getElementById('mainMenuHeader');
    
    // Toggle Menu - Hamburger ↔ Cross
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', function() {
            const isActive = navMenu.classList.contains('active');
            const icon = this.querySelector('i');
            
            if (isActive) {
                // Close Menu
                navMenu.classList.remove('active');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
                document.body.style.overflow = '';
            } else {
                // Open Menu
                navMenu.classList.add('active');
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
                document.body.style.overflow = 'hidden';
            }
        });
    }

    // Main Menu Header Click - Go to Home
    if (mainMenuHeader) {
        mainMenuHeader.addEventListener('click', function() {
            // Close menu first
            if (navMenu) {
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
            
            // Reset hamburger icon
            if (mobileToggle) {
                const icon = mobileToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
            
            // Go to home page
            window.location.href = '/'; // or use: window.location.href = 'index.html';
        });
    }

    // Close Menu - Click Outside
    if (navMenu) {
        navMenu.addEventListener('click', function(e) {
            if (e.target === navMenu) {
                const mobileToggle = document.getElementById('mobileToggle');
                const icon = mobileToggle.querySelector('i');
                
                navMenu.classList.remove('active');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
                document.body.style.overflow = '';
            }
        });
    }

    // Mobile dropdown toggle
    document.querySelectorAll('.nav-item').forEach(item => {
        const link = item.querySelector('.nav-link');
        const dropdown = item.querySelector('.dropdown-menu-simple');
        
        if (dropdown) {
            link.addEventListener('click', function(e) {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    const isVisible = dropdown.style.display === 'block';
                    
                    // Close all dropdowns
                    document.querySelectorAll('.dropdown-menu-simple').forEach(d => {
                        d.style.display = 'none';
                    });
                    
                    // Toggle current dropdown
                    dropdown.style.display = isVisible ? 'none' : 'block';
                }
            });
        }
    });

    // ==========================================
    // Mobile Phone Icon Click
    // ==========================================
    const mobilePhoneIcon = document.querySelector('.mobile-icon.phone-icon');
    if (mobilePhoneIcon) {
        mobilePhoneIcon.addEventListener('click', function(e) {
            e.preventDefault();
            showPhonePopup('(833) 657-0019');
        });
    }

    // ==========================================
    // Mobile Search Icon Click
    // ==========================================
    const mobileSearchIcon = document.querySelector('.mobile-icon.search-icon');
    if (mobileSearchIcon) {
        mobileSearchIcon.addEventListener('click', function(e) {
            e.preventDefault();
            const searchTerm = prompt('Search City of Hope:');
            if (searchTerm) {
                console.log('Searching for: ' + searchTerm);
                alert('Search results for: ' + searchTerm);
            }
        });
    }

    // ==========================================
    // Mobile Phone Link Click (Bottom Section)
    // ==========================================
    const mobilePhoneLink = document.querySelector('.mobile-bottom-link.phone-link');
    if (mobilePhoneLink) {
        mobilePhoneLink.addEventListener('click', function(e) {
            e.preventDefault();
            showPhonePopup('(833) 692-0701');
        });
    }

    // ==========================================
    // Mobile Donate Button Click
    // ==========================================
    const mobileDonateBtn = document.querySelector('.btn-donate-mobile');
    if (mobileDonateBtn) {
        mobileDonateBtn.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Thank you for your interest in donating!\n\nYou will be redirected to our secure donation page.');
        });
    }

    // ==========================================
    // Appointment Buttons
    // ==========================================
    const appointmentBtn = document.querySelector('.btn-appointment');
    if (appointmentBtn) {
        appointmentBtn.addEventListener('click', function() {
            window.location.href = 'tel:+18338570019';
        });
    }

    const scheduleBtn = document.querySelector('.btn-schedule');
    if (scheduleBtn) {
        scheduleBtn.addEventListener('click', function() {
            alert('Request Appointment\n\nPlease call: 1-800-826-HOPE (4673)');
        });
    }

    // ==========================================
    // Navbar Scroll Effect
    // ==========================================
    let lastScroll = 0;
    window.addEventListener('scroll', function() {
        const nav = document.querySelector('.main-nav');
        if (nav) {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll > 50) {
                nav.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
            } else {
                nav.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
            }
            
            lastScroll = currentScroll;
        }
    });

    // ==========================================
    // Mega Menu Hover Effect
    // ==========================================
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        const megaMenu = item.querySelector('.mega-menu');
        
        if (megaMenu) {
            item.addEventListener('mouseenter', function() {
                if (window.innerWidth > 768) {
                    this.classList.add('active');
                    
                    const columns = megaMenu.querySelectorAll('.mega-menu-column');
                    columns.forEach((col, index) => {
                        setTimeout(() => {
                            col.style.opacity = '1';
                            col.style.transform = 'translateY(0)';
                        }, index * 100);
                    });
                }
            });

            item.addEventListener('mouseleave', function() {
                if (window.innerWidth > 768) {
                    this.classList.remove('active');
                    
                    const columns = megaMenu.querySelectorAll('.mega-menu-column');
                    columns.forEach(col => {
                        col.style.opacity = '0';
                        col.style.transform = 'translateY(20px)';
                    });
                }
            });
        }
    });

    // Close mega menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.nav-item') && !e.target.closest('.mega-menu')) {
            navItems.forEach(item => {
                item.classList.remove('active');
            });
        }
    });

    // Close mega menu on ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            navItems.forEach(item => {
                item.classList.remove('active');
            });
            
            // Also close mobile menu
            if (navMenu && navMenu.classList.contains('active')) {
                const mobileToggle = document.getElementById('mobileToggle');
                const icon = mobileToggle.querySelector('i');
                
                navMenu.classList.remove('active');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
                document.body.style.overflow = '';
            }
        }
    });

    // ==========================================
    // Mega Menu Link Click Handler
    // ==========================================
    document.querySelectorAll('.mega-menu-list a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const linkText = this.textContent.trim();
            console.log('Mega Menu Link Clicked:', linkText);
            alert('Navigating to: ' + linkText);
        });
    });

    // ==========================================
    // Mega Menu CTA Phone Click
    // ==========================================
    document.querySelectorAll('.phone-number').forEach(phone => {
        phone.addEventListener('click', function() {
            window.location.href = 'tel:' + this.textContent.replace(/[^0-9]/g, '');
        });
        
        phone.style.cursor = 'pointer';
        phone.style.textDecoration = 'underline';
    });

    // Initialize mega menu column animations
    document.querySelectorAll('.mega-menu-column').forEach(col => {
        col.style.opacity = '0';
        col.style.transform = 'translateY(20px)';
        col.style.transition = 'all 0.4s ease-out';
    });

    // ==========================================
    // Cancer Center Cards Click Handler
    // ==========================================
    document.querySelectorAll('.center-card').forEach(card => {
        card.addEventListener('click', function() {
            const centerName = this.querySelector('h3').textContent;
            console.log('Clicked on: ' + centerName);
        });
    });

    // ==========================================
    // CTA Cards Click Handler
    // ==========================================
    document.querySelectorAll('.cta-card-link, .research-cta-link, .learning-cta-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const cardText = this.querySelector('span').textContent;
            console.log('CTA Clicked: ' + cardText);
            alert('Navigating to: ' + cardText);
        });
    });

    // ==========================================
    // Fade-in Animation on Scroll
    // ==========================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll(
        '.center-card, .cta-card, .research-cta-card, .learning-cta-card, .nci-badge, .care-icon, .research-icon, .learning-icon, .blog-card, .physician-card'
    );

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });

    // ==========================================
    // Top Header Links (PHONE POPUP FEATURE)
    // ==========================================
    document.querySelectorAll('.top-header-links a').forEach(link => {
        link.addEventListener('click', function(e) {
            const linkText = this.textContent.trim();
            
            // Phone number click - Show popup
            if (linkText.includes('657-0019') || linkText.includes('405-2107')) {
                e.preventDefault();
                showPhonePopup(linkText);
                return;
            }
            
            // Donate button
            if (linkText.includes('Donate')) {
                e.preventDefault();
                alert('Thank you for your interest in donating!\n\nYou will be redirected to our secure donation page.');
            }
        });
    });

    // ==========================================
    // Search Icon Click (Desktop)
    // ==========================================
    const searchIcon = document.querySelector('.top-header-links a[href="#"] i.fa-search');
    if (searchIcon && searchIcon.parentElement) {
        searchIcon.parentElement.addEventListener('click', function(e) {
            e.preventDefault();
            const searchTerm = prompt('Search City of Hope:');
            if (searchTerm) {
                console.log('Searching for: ' + searchTerm);
                alert('Search results for: ' + searchTerm);
            }
        });
    }

    // Console welcome messages
    console.log('%cCity of Hope Website', 'color: #006eb5; font-size: 20px; font-weight: bold;');
    console.log('%cExpert Cancer Care: Our Legacy, Our Mission', 'color: #333; font-size: 14px;');
    console.log('%c✅ Mobile Menu Initialized!', 'color: #008542; font-size: 14px; font-weight: bold;');
    console.log('%c✅ Phone Popup Initialized!', 'color: #008542; font-size: 14px; font-weight: bold;');
});

window.addEventListener('load', function() {
    console.log('City of Hope website fully loaded');
});

window.addEventListener('popstate', function(event) {
    console.log('Navigation state changed');
});

document.addEventListener('click', function(e) {
    if (e.target.tagName === 'A' && e.target.getAttribute('href') === '#') {
        const hasPreventedDefault = e.target.classList.contains('cta-card-link') || 
                                   e.target.classList.contains('research-cta-link') ||
                                   e.target.classList.contains('learning-cta-link') ||
                                   e.target.closest('.mega-menu-list');
        
        if (!hasPreventedDefault) {
            e.preventDefault();
        }
    }
});

const style = document.createElement('style');
style.textContent = `
    * {
        scroll-behavior: smooth;
    }
`;
document.head.appendChild(style);

console.log('City of Hope - JavaScript loaded successfully! 🏥');
// ==========================================
// City of Hope Careers - JavaScript
// ==========================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Console Welcome Messages
    console.log('%c🏥 City of Hope Careers', 'color: #0066b2; font-size: 24px; font-weight: bold;');
    console.log('%c💼 Join Us and Help Turn Hope Into Reality', 'color: #333; font-size: 16px;');
    console.log('%c✅ Page Loaded Successfully!', 'color: #008542; font-size: 14px; font-weight: bold;');

    // ==========================================
    // HERO CAROUSEL FUNCTIONALITY
    // ==========================================
    
    const carouselDots = document.querySelectorAll('.carousel-dot');
    const carouselPrev = document.querySelector('.carousel-prev');
    const carouselNext = document.querySelector('.carousel-next');
    const hero = document.querySelector('.hero');
    
    let currentSlide = 0;
    const totalSlides = 4;
    
    // Background images array
    const heroImages = [
        'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=1600',
        'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1600',
        'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1600',
        'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=1600'
    ];
    
    function updateSlide(index) {
        currentSlide = index;
        
        // Update background image
        if (hero) {
            hero.style.backgroundImage = `url('${heroImages[currentSlide]}')`;
        }
        
        // Update active dot
        carouselDots.forEach((dot, i) => {
            if (i === currentSlide) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
        
        console.log('Carousel slide changed to:', currentSlide + 1);
    }
    
    // Dot click handlers
    carouselDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            updateSlide(index);
        });
    });
    
    // Previous button
    if (carouselPrev) {
        carouselPrev.addEventListener('click', () => {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            updateSlide(currentSlide);
        });
    }
    
    // Next button
    if (carouselNext) {
        carouselNext.addEventListener('click', () => {
            currentSlide = (currentSlide + 1) % totalSlides;
            updateSlide(currentSlide);
        });
    }
    
    // Auto-rotate carousel every 5 seconds
    let autoRotate = setInterval(() => {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlide(currentSlide);
    }, 5000);
    
    // Pause auto-rotate on hover
    if (hero) {
        hero.addEventListener('mouseenter', () => {
            clearInterval(autoRotate);
        });
        
        hero.addEventListener('mouseleave', () => {
            autoRotate = setInterval(() => {
                currentSlide = (currentSlide + 1) % totalSlides;
                updateSlide(currentSlide);
            }, 5000);
        });
    }

    // ==========================================
    // NAVIGATION & PAGE MANAGEMENT
    // ==========================================
    
    // Back to Home functionality
    const logoLink = document.querySelector('.logo a');
    if (logoLink) {
        logoLink.addEventListener('click', function(e) {
            console.log('Navigating to home page...');
        });
    }

    // Active navigation link
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === 'careers.html' && href === 'careers.html')) {
            link.classList.add('active');
        }
    });

    // Dropdown menu items
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    dropdownItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const itemName = this.textContent.trim();
            
            console.log('Dropdown item clicked:', itemName);
            
            // Scroll to section if it's an anchor
            if (targetId.startsWith('#')) {
                const target = document.querySelector(targetId);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                } else {
                    alert(`Navigating to: ${itemName}`);
                }
            }
        });
    });

    // Top social media icons
    const topSocialIcons = document.querySelectorAll('.social-top');
    topSocialIcons.forEach(icon => {
        icon.addEventListener('click', function(e) {
            e.preventDefault();
            const iconClass = this.querySelector('i').className;
            let platform = 'Social Media';
            
            if (iconClass.includes('facebook')) platform = 'Facebook';
            else if (iconClass.includes('instagram')) platform = 'Instagram';
            else if (iconClass.includes('twitter')) platform = 'Twitter';
            else if (iconClass.includes('linkedin')) platform = 'LinkedIn';
            
            console.log('Top social media clicked:', platform);
            alert(`Opening City of Hope ${platform} page...`);
        });
    });

    // ==========================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ==========================================
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            
            if (target) {
                target.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
                console.log('Scrolling to:', targetId);
            }
        });
    });

    // ==========================================
    // SEARCH FUNCTIONALITY
    // ==========================================
    
    const jobKeywordInput = document.getElementById('jobKeyword');
    const jobCategorySelect = document.getElementById('jobCategory');
    const jobLocationSelect = document.getElementById('jobLocation');
    const remoteCheckbox = document.getElementById('remoteJobs');
    const searchBtn = document.querySelector('.btn-new-search');

    // New Search Button Handler
    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            performSearch();
        });
    }

    // Enter key search
    if (jobKeywordInput) {
        jobKeywordInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }

    // Search function
    function performSearch() {
        const keyword = jobKeywordInput ? jobKeywordInput.value : '';
        const category = jobCategorySelect ? jobCategorySelect.value : '';
        const location = jobLocationSelect ? jobLocationSelect.value : '';
        const remote = remoteCheckbox ? remoteCheckbox.checked : false;

        console.log('🔍 Search Parameters:', {
            keyword,
            category,
            location,
            remote
        });

        if (keyword || category !== 'Search Jobs By Category' || location !== 'Search Jobs by Location') {
            let searchMessage = 'Searching for jobs...\n\n';
            if (keyword) searchMessage += `Keyword: ${keyword}\n`;
            if (category !== 'Search Jobs By Category') searchMessage += `Category: ${category}\n`;
            if (location !== 'Search Jobs by Location') searchMessage += `Location: ${location}\n`;
            if (remote) searchMessage += `Type: Remote Only\n`;
            
            alert(searchMessage);
        } else {
            alert('Please enter search criteria');
        }
    }

    // ==========================================
    // QUICK SEARCH BUTTONS
    // ==========================================
    
    const quickSearchBtns = document.querySelectorAll('.btn-quick');
    quickSearchBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const searchType = this.textContent.trim();
            console.log('Quick search clicked:', searchType);
            alert(`Searching: ${searchType}\n\nThis will filter jobs for specific employee groups.`);
        });
    });

    // ==========================================
    // REMOTE JOBS CHECKBOX
    // ==========================================
    
    if (remoteCheckbox) {
        remoteCheckbox.addEventListener('change', function() {
            if (this.checked) {
                console.log('✅ Remote jobs filter enabled');
                showNotification('Showing remote jobs only');
            } else {
                console.log('❌ Remote jobs filter disabled');
                showNotification('Showing all job types');
            }
        });
    }

    // ==========================================
    // CAREER CARDS FUNCTIONALITY
    // ==========================================
    
    const careerCards = document.querySelectorAll('.career-item');
    
    careerCards.forEach(card => {
        card.addEventListener('click', function() {
            const title = this.querySelector('.career-title').textContent;
            const category = this.getAttribute('data-category');
            
            console.log('Career card clicked:', { title, category });
            
            alert(`Opening ${title}\n\nYou will see all available positions in this category.`);
            
            // In real implementation, redirect to job listings
            // window.location.href = `job-listings.html?category=${category}`;
        });

        // Enhanced hover effect
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // ==========================================
    // MAP STATE MARKERS
    // ==========================================
    
    const stateMarkers = document.querySelectorAll('.state-marker');
    
    stateMarkers.forEach(marker => {
        marker.addEventListener('click', function() {
            const stateCode = this.textContent.trim().split('\n')[0];
            const stateName = this.getAttribute('data-state');
            
            console.log('State clicked:', { stateCode, stateName });
            
            alert(`Viewing Jobs in ${stateName}\n\nShowing all available positions in ${stateCode}`);
            
            // In real implementation
            // window.location.href = `jobs.html?state=${stateCode}`;
        });

        // Hover effect
        marker.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.15)';
            this.style.boxShadow = '0 8px 20px rgba(0,0,0,0.3)';
        });

        marker.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
        });
    });

    // ==========================================
    // REMOTE JOBS BUTTON
    // ==========================================
    
    const remoteBtns = document.querySelectorAll('.btn-remote-jobs');
    remoteBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            console.log('Remote jobs button clicked');
            alert('Showing Remote Job Opportunities\n\nWork from anywhere positions available across all departments.');
        });
    });

    // ==========================================
    // VIDEO CARDS & PLAY BUTTONS
    // ==========================================
    
    const videoCards = document.querySelectorAll('.video-card');
    
    videoCards.forEach(card => {
        const playBtn = card.querySelector('.play-icon');
        const videoTitle = card.querySelector('.video-title').textContent;
        
        if (playBtn) {
            playBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                console.log('Playing video:', videoTitle);
                
                alert(`▶️ Playing: ${videoTitle}\n\nVideo player would open here in full implementation.`);
                
                // In real implementation, open video modal
                // openVideoModal(videoTitle);
            });

            // Play button hover effect
            playBtn.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.2)';
            });

            playBtn.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
            });
        }

        // Card hover effect
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // ==========================================
    // JOIN TALENT NETWORK BUTTONS
    // ==========================================
    
    const joinButtons = document.querySelectorAll('.btn-join-network, .btn-join-today');
    
    joinButtons.forEach(button => {
        button.addEventListener('click', function() {
            console.log('Join Talent Network clicked');
            
            const email = prompt('Join Our Talent Network\n\nEnter your email address to get started:');
            
            if (email && validateEmail(email)) {
                console.log('Email submitted:', email);
                alert(`✅ Thank you for joining!\n\nWe'll send opportunities to:\n${email}\n\nYou'll receive:\n• New job postings\n• Career insights\n• Company updates`);
                
                // In real implementation
                // submitToTalentNetwork(email);
            } else if (email) {
                alert('❌ Please enter a valid email address');
            }
        });
    });

    // ==========================================
    // SUBSCRIBE BUTTON (Footer)
    // ==========================================
    
    const subscribeBtn = document.querySelector('.btn-subscribe');
    
    if (subscribeBtn) {
        subscribeBtn.addEventListener('click', function() {
            const email = prompt('Subscribe to News & Updates\n\nEnter your email:');
            
            if (email && validateEmail(email)) {
                console.log('Newsletter subscription:', email);
                alert(`✅ Subscribed Successfully!\n\nYou'll receive updates at:\n${email}`);
                
                // In real implementation
                // subscribeToNewsletter(email);
            } else if (email) {
                alert('❌ Please enter a valid email address');
            }
        });
    }

    // ==========================================
    // SOCIAL MEDIA LINKS
    // ==========================================
    
    const socialIcons = document.querySelectorAll('.social-icon');
    
    socialIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            const iconClass = this.querySelector('i').className;
            let platform = 'Social Media';
            
            if (iconClass.includes('facebook')) platform = 'Facebook';
            else if (iconClass.includes('instagram')) platform = 'Instagram';
            else if (iconClass.includes('twitter')) platform = 'Twitter';
            else if (iconClass.includes('linkedin')) platform = 'LinkedIn';
            
            console.log('Social media clicked:', platform);
            alert(`Opening ${platform} page...`);
            
            // In real implementation
            // window.open('https://facebook.com/cityofhope', '_blank');
        });
    });

    // ==========================================
    // FOOTER LINKS
    // ==========================================
    
    const footerLinks = document.querySelectorAll('.footer-column a');
    
    footerLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only prevent default for # links
            if (href === '#' || href.startsWith('#')) {
                e.preventDefault();
                const linkText = this.textContent;
                console.log('Footer link clicked:', linkText);
                alert(`Navigating to: ${linkText}`);
            }
        });
    });

    // ==========================================
    // NAVBAR SCROLL EFFECT
    // ==========================================
    
    let lastScroll = 0;
    const nav = document.querySelector('.main-nav');
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        // Add shadow on scroll
        if (currentScroll > 100) {
            nav.style.boxShadow = '0 4px 15px rgba(0,0,0,0.15)';
        } else {
            nav.style.boxShadow = '0 2px 5px rgba(0,0,0,0.05)';
        }
        
        lastScroll = currentScroll;
    });

    // ==========================================
    // SCROLL ANIMATIONS (Intersection Observer)
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

    // Animate career cards
    careerCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.6s ease-out ${index * 0.1}s`;
        observer.observe(card);
    });

    // Animate video cards
    videoCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.6s ease-out ${index * 0.15}s`;
        observer.observe(card);
    });

    // Animate badges
    const badges = document.querySelectorAll('.badge-item');
    badges.forEach((badge, index) => {
        badge.style.opacity = '0';
        badge.style.transform = 'translateY(20px)';
        badge.style.transition = `all 0.5s ease-out ${index * 0.1}s`;
        observer.observe(badge);
    });

    // ==========================================
    // HERO ENTRANCE ANIMATIONS
    // ==========================================
    
    const heroCard = document.querySelector('.hero-card');
    if (heroCard) {
        heroCard.style.opacity = '0';
        heroCard.style.transform = 'translateX(-50px)';
        
        setTimeout(() => {
            heroCard.style.transition = 'all 1s ease-out';
            heroCard.style.opacity = '1';
            heroCard.style.transform = 'translateX(0)';
        }, 300);
    }
    
    const carouselControls = document.querySelectorAll('.carousel-btn, .carousel-dots');
    carouselControls.forEach((control, index) => {
        control.style.opacity = '0';
        setTimeout(() => {
            control.style.transition = 'opacity 0.5s ease-out';
            control.style.opacity = '1';
        }, 800 + (index * 100));
    });

    // ==========================================
    // HELPER FUNCTIONS
    // ==========================================
    
    // Email validation
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Show notification (simple version)
    function showNotification(message) {
        console.log('📢 Notification:', message);
        
        // Create notification element
        const notification = document.createElement('div');
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            bottom: 30px;
            right: 30px;
            background: #0066b2;
            color: white;
            padding: 15px 25px;
            border-radius: 8px;
            box-shadow: 0 5px 20px rgba(0,0,0,0.3);
            z-index: 9999;
            animation: slideIn 0.3s ease-out;
        `;
        
        document.body.appendChild(notification);
        
        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease-out';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    // Log page view
    console.log('📊 Page Analytics:', {
        page: 'careers.html',
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent
    });

});

// ==========================================
// WINDOW LOAD EVENT
// ==========================================

window.addEventListener('load', function() {
    console.log('✅ Career page fully loaded and ready!');
    console.log('⏱️ Load time:', performance.now().toFixed(2) + 'ms');
});

// ==========================================
// PAGE VISIBILITY CHANGE
// ==========================================

document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        console.log('👋 User left the page');
    } else {
        console.log('👀 User returned to the page');
    }
});

// ==========================================
// HANDLE BROWSER BACK BUTTON
// ==========================================

window.addEventListener('popstate', function(event) {
    console.log('↩️ Browser back button pressed');
});

// ==========================================
// CSS ANIMATIONS (Add to document)
// ==========================================

const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
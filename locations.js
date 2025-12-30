// City of Hope Locations Page - JavaScript

document.addEventListener('DOMContentLoaded', function() {
    
    console.log('%c🏥 City of Hope Locations', 'color: #0066b2; font-size: 24px; font-weight: bold;');
    console.log('%c📍 Find Our Cancer Centers Nationwide', 'color: #333; font-size: 16px;');
    console.log('%c✅ Page Loaded Successfully!', 'color: #008542; font-size: 14px;');

    // ==========================================
    // CENTER CARDS INTERACTION
    // ==========================================
    
    const centerCards = document.querySelectorAll('.center-card');
    
    centerCards.forEach(card => {
        card.addEventListener('click', function() {
            const centerName = this.querySelector('h3').textContent;
            const phoneLink = this.querySelector('.phone-link');
            const phone = phoneLink ? phoneLink.textContent : '';
            
            console.log('Center card clicked:', centerName);
            alert(`${centerName}\n\nWould you like to:\n• View location details\n• Call ${phone}\n• Get directions`);
        });
    });

    // ==========================================
    // MAP MARKERS INTERACTION
    // ==========================================
    
    const mapMarkers = document.querySelectorAll('.map-marker');
    
    mapMarkers.forEach(marker => {
        marker.addEventListener('click', function() {
            const location = this.getAttribute('data-location');
            console.log('Map marker clicked:', location);
            alert(`Showing locations in ${location}\n\nClick on a location in the left panel for more details.`);
        });

        // Tooltip on hover
        marker.addEventListener('mouseenter', function() {
            const location = this.getAttribute('data-location');
            const tooltip = document.createElement('div');
            tooltip.className = 'map-tooltip';
            tooltip.textContent = location;
            tooltip.style.cssText = `
                position: absolute;
                bottom: 100%;
                left: 50%;
                transform: translateX(-50%);
                background: rgba(0,0,0,0.8);
                color: white;
                padding: 5px 10px;
                border-radius: 4px;
                font-size: 12px;
                white-space: nowrap;
                margin-bottom: 5px;
                pointer-events: none;
            `;
            this.appendChild(tooltip);
        });

        marker.addEventListener('mouseleave', function() {
            const tooltip = this.querySelector('.map-tooltip');
            if (tooltip) {
                tooltip.remove();
            }
        });
    });

    // ==========================================
    // FILTER FUNCTIONALITY
    // ==========================================
    
    const filterOptions = document.querySelectorAll('.filter-option input[type="checkbox"]');
    const resetBtn = document.querySelector('.reset-btn');
    const resultsCount = document.querySelector('.results-count');
    
    let totalResults = 40;
    
    filterOptions.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            updateResults();
        });
    });
    
    function updateResults() {
        const checkedFilters = document.querySelectorAll('.filter-option input[type="checkbox"]:checked');
        
        if (checkedFilters.length > 0) {
            // Simulate filtering
            const newCount = Math.max(5, totalResults - (checkedFilters.length * 8));
            resultsCount.textContent = `${newCount} results`;
            console.log(`Filters applied: ${checkedFilters.length}, Results: ${newCount}`);
        } else {
            resultsCount.textContent = `${totalResults} results`;
        }
    }
    
    if (resetBtn) {
        resetBtn.addEventListener('click', function() {
            filterOptions.forEach(checkbox => {
                checkbox.checked = false;
            });
            resultsCount.textContent = `${totalResults} results`;
            console.log('Filters reset');
        });
    }

    // ==========================================
    // FILTER GROUP ACCORDION
    // ==========================================
    
    const filterTitles = document.querySelectorAll('.filter-title');
    
    filterTitles.forEach(title => {
        title.addEventListener('click', function() {
            const filterOptions = this.nextElementSibling;
            const icon = this.querySelector('i');
            
            if (filterOptions.style.display === 'none') {
                filterOptions.style.display = 'flex';
                icon.style.transform = 'rotate(0deg)';
            } else {
                filterOptions.style.display = 'none';
                icon.style.transform = 'rotate(-90deg)';
            }
        });
    });

    // ==========================================
    // LOCATION ITEMS INTERACTION
    // ==========================================
    
    const locationItems = document.querySelectorAll('.location-item');
    
    locationItems.forEach(item => {
        const toggleBtn = item.querySelector('.phone-toggle');
        
        if (toggleBtn) {
            toggleBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                const locationName = item.querySelector('h4').textContent;
                console.log('Phone numbers requested for:', locationName);
                alert(`${locationName}\n\nMain: (833) 303-1358\nAppointments: (877) 584-2969\nFax: (626) 301-8000`);
            });
        }

        // Click on entire location item
        item.addEventListener('click', function() {
            const locationName = this.querySelector('h4').textContent;
            const address = this.querySelector('.address').textContent;
            console.log('Location clicked:', locationName);
            
            // Highlight on map
            alert(`${locationName}\n\n${address}\n\nOpening detailed information...`);
        });
    });

    // ==========================================
    // PHONE LINKS
    // ==========================================
    
    const phoneLinks = document.querySelectorAll('.phone-link, .btn-help-phone');
    
    phoneLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const phone = this.textContent.trim();
            console.log('Phone link clicked:', phone);
        });
    });

    // ==========================================
    // UTILITY BAR LINKS
    // ==========================================
    
    const utilityLinks = document.querySelectorAll('.utility-link');
    
    utilityLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const linkText = this.textContent.trim();
                console.log('Utility link clicked:', linkText);
            }
        });
    });

    // ==========================================
    // NAVIGATION LINKS
    // ==========================================
    
    const navLinks = document.querySelectorAll('.nav-item a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const linkText = this.textContent.trim();
                console.log('Nav link clicked:', linkText);
                alert(`Opening ${linkText} section...`);
            }
        });
    });

    // ==========================================
    // SMOOTH SCROLL
    // ==========================================
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // ==========================================
    // SCROLL ANIMATIONS
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

    // Animate center cards
    centerCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.6s ease-out ${index * 0.1}s`;
        observer.observe(card);
    });

    // Animate location items
    locationItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        item.style.transition = `all 0.5s ease-out ${index * 0.1}s`;
        observer.observe(item);
    });

    // ==========================================
    // NAVBAR SCROLL EFFECT
    // ==========================================
    
    const mainNav = document.querySelector('.main-navigation');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            mainNav.style.boxShadow = '0 4px 15px rgba(0,0,0,0.15)';
        } else {
            mainNav.style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)';
        }
        
        lastScroll = currentScroll;
    });

    // ==========================================
    // ENTRANCE ANIMATIONS
    // ==========================================
    
    const pageHeader = document.querySelector('.page-header h1');
    if (pageHeader) {
        pageHeader.style.opacity = '0';
        pageHeader.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            pageHeader.style.transition = 'all 0.8s ease-out';
            pageHeader.style.opacity = '1';
            pageHeader.style.transform = 'translateY(0)';
        }, 200);
    }

    const introText = document.querySelector('.intro-text');
    if (introText) {
        introText.style.opacity = '0';
        introText.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            introText.style.transition = 'all 0.8s ease-out';
            introText.style.opacity = '1';
            introText.style.transform = 'translateY(0)';
        }, 400);
    }

    // ==========================================
    // SEARCH FUNCTIONALITY (Future Enhancement)
    // ==========================================
    
    // This would connect to actual search API
    function searchLocations(query) {
        console.log('Searching locations for:', query);
        // API call would go here
    }

    // ==========================================
    // MAP ZOOM FUNCTIONALITY (Future Enhancement)
    // ==========================================
    
    function zoomToLocation(lat, lng) {
        console.log('Zooming to coordinates:', lat, lng);
        // Map zoom logic would go here
    }

    // ==========================================
    // LOG PAGE VIEW
    // ==========================================
    
    console.log('📊 Page Analytics:', {
        page: 'locations.html',
        timestamp: new Date().toISOString(),
        centers: centerCards.length,
        locations: locationItems.length
    });

});

// ==========================================
// WINDOW LOAD EVENT
// ==========================================

window.addEventListener('load', function() {
    console.log('✅ Locations page fully loaded!');
    console.log('⏱️ Load time:', performance.now().toFixed(2) + 'ms');
});

// ==========================================
// PAGE VISIBILITY
// ==========================================

document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        console.log('👋 User left the locations page');
    } else {
        console.log('👀 User returned to locations page');
    }
});
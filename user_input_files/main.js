// Main JavaScript for Nuqul Group Portal

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initializeAnimations();
    initializeFilters();
    initializeImageLoading();
    initializeScrollEffects();
    initializePageTransitions();
});

// Animation initialization
function initializeAnimations() {
    const animatedElements = document.querySelectorAll('[data-animate]');
    
    // Add entrance animations with stagger
    animatedElements.forEach((element, index) => {
        setTimeout(() => {
            element.style.animationPlayState = 'running';
        }, parseInt(element.dataset.delay) || 0);
    });
}

// Filter functionality
function initializeFilters() {
    const filterButtons = document.querySelectorAll('.pill');
    const companyCards = document.querySelectorAll('.company-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.dataset.filter;
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter cards with animation
            filterCards(filter, companyCards);
        });
    });
}

function filterCards(filter, cards) {
    cards.forEach((card, index) => {
        const category = card.dataset.category;
        const shouldShow = filter === 'all' || category === filter;
        
        if (shouldShow) {
            card.style.display = 'block';
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0) scale(1)';
            }, index * 50);
        } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px) scale(0.95)';
            setTimeout(() => {
                card.style.display = 'none';
            }, 300);
        }
    });
}

// Image loading with fade-in effect
function initializeImageLoading() {
    const images = document.querySelectorAll('.card-image img');
    
    images.forEach(img => {
        if (img.complete) {
            img.classList.add('loaded');
        } else {
            img.addEventListener('load', function() {
                this.classList.add('loaded');
            });
        }
    });
}

// Scroll effects
function initializeScrollEffects() {
    // Intersection Observer for reveal animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, observerOptions);
    
    // Observe elements for scroll reveal
    const revealElements = document.querySelectorAll('.company-card');
    revealElements.forEach(el => observer.observe(el));
}

// Page transitions
function initializePageTransitions() {
    // Add loading state to cards
    const cards = document.querySelectorAll('.company-card, .pick-card');
    
    cards.forEach(card => {
        const link = card.querySelector('.card-link') || card.querySelector('.pick-cta');
        
        card.addEventListener('click', function(e) {
            if (link && !e.defaultPrevented && !e.target.classList.contains('pick-cta')) {
                e.preventDefault();
                
                // Add loading state
                this.classList.add('loading');
                
                // Add success animation
                setTimeout(() => {
                    this.classList.add('success-animation');
                }, 100);
                
                // Navigate after animation
                setTimeout(() => {
                    window.location.href = link.href;
                }, 600);
            }
        });
    });
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Parallax effect for hero background
window.addEventListener('scroll', throttle(function() {
    const scrolled = window.pageYOffset;
    const heroBackground = document.querySelector('.hero-background');
    
    if (heroBackground && scrolled < window.innerHeight) {
        heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
}, 10));

// Smooth scroll for anchor links
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

// Add CSS for filter animations
const style = document.createElement('style');
style.textContent = `
    .company-card {
        transition: opacity 0.3s ease, transform 0.3s ease, display 0.3s ease;
    }
    
    .company-card.loading {
        pointer-events: none;
        opacity: 0.8;
    }
    
    .company-card.loading::before {
        animation: shimmer 1.5s infinite;
    }
`;
document.head.appendChild(style);
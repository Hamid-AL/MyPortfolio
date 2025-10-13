// Particle Background Animation
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = Math.random() * 4 + 1;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
        
        particlesContainer.appendChild(particle);
    }
}

// Project Cards Animation
function animateProjectCards() {
    const projectCards = document.querySelectorAll('.project-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    projectCards.forEach((card, index) => {
        // Add staggered delay for animation
        card.style.animationDelay = `${index * 0.1}s`;
        observer.observe(card);
    });
}

// Tech Tags Interactive Effects
function initTechTagEffects() {
    const techTags = document.querySelectorAll('.tech-tag');
    
    techTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
        
        // Add click effect
        tag.addEventListener('click', function() {
            this.style.animation = 'bounce 0.5s ease';
            setTimeout(() => {
                this.style.animation = '';
            }, 500);
        });
    });
}

// Project Button Effects
function initProjectButtonEffects() {
    const projectButtons = document.querySelectorAll('.project-btn');
    
    projectButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.02)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
        
        // Add ripple effect on click
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

// Stats Counter Animation
function animateStatsCounters() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const finalValue = target.textContent;
                let currentValue = 0;
                
                // Extract number from text (handle cases like "5+" or "98%")
                const numMatch = finalValue.match(/\d+/);
                if (numMatch) {
                    const targetNum = parseInt(numMatch[0]);
                    const increment = targetNum / 50; // Animation duration control
                    const suffix = finalValue.replace(targetNum.toString(), '');
                    
                    target.textContent = '0' + suffix;
                    
                    const counter = setInterval(() => {
                        currentValue += increment;
                        if (currentValue >= targetNum) {
                            target.textContent = finalValue;
                            clearInterval(counter);
                        } else {
                            target.textContent = Math.floor(currentValue) + suffix;
                        }
                    }, 50);
                }
                
                observer.unobserve(target);
            }
        });
    }, { threshold: 0.5 });
    
    statNumbers.forEach(stat => {
        observer.observe(stat);
    });
}

// Project Card Tilt Effect
function initProjectCardTilt() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / centerY * 5; // Max 5 degrees
            const rotateY = (centerX - x) / centerX * 5;
            
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
        });
    });
}

// Filter Projects by Category
function initProjectFilter() {
    const categories = ['All', 'Academic', 'Professional', 'Personal', 'Machine Learning', 'Computer Vision', 'Data Science'];
    
    // Create filter buttons (you can add this HTML if needed)
    const filterContainer = document.createElement('div');
    filterContainer.className = 'project-filters';
    filterContainer.innerHTML = categories.map(cat => 
        `<button class="filter-btn ${cat === 'All' ? 'active' : ''}" data-filter="${cat.toLowerCase()}">${cat}</button>`
    ).join('');
    
    // Insert filter before projects (optional)
    // document.querySelector('.project-section .container').insertBefore(filterContainer, document.querySelector('.row'));
    
    const filterButtons = filterContainer.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.dataset.filter;
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter projects
            projectCards.forEach(card => {
                const category = card.querySelector('.project-category')?.textContent.toLowerCase() || 'personal';
                
                if (filter === 'all' || category.includes(filter)) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.classList.add('animate');
                    }, 100);
                } else {
                    card.classList.remove('animate');
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// Lazy Loading for Project Images
function initLazyLoading() {
    const projectImages = document.querySelectorAll('.project-image img');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                
                // Add loading effect
                img.style.opacity = '0';
                img.style.transition = 'opacity 0.3s ease';
                
                // Simulate loading (replace with actual lazy loading if needed)
                setTimeout(() => {
                    img.style.opacity = '1';
                }, 100);
                
                imageObserver.unobserve(img);
            }
        });
    });
    
    projectImages.forEach(img => {
        imageObserver.observe(img);
    });
}

// Project Card Parallax Effect
function initCardParallax() {
    const projectCards = document.querySelectorAll('.project-card');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        projectCards.forEach((card, index) => {
            const cardTop = card.offsetTop;
            const cardHeight = card.offsetHeight;
            const windowHeight = window.innerHeight;
            
            // Only apply effect when card is in viewport
            if (scrolled + windowHeight > cardTop && scrolled < cardTop + cardHeight) {
                const rate = (scrolled - cardTop) * 0.05;
                
                if (window.innerWidth > 768) { // Only on desktop
                    card.style.transform = `translateY(${rate}px)`;
                }
            }
        });
    });
}

// Smooth Scrolling for Navigation
function initSmoothScrolling() {
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
}

// Add bounce animation for tech tags
const bounceKeyframes = `
@keyframes bounce {
    0%, 20%, 53%, 80%, 100% {
        animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
        transform: translate3d(0,0,0);
    }
    40%, 43% {
        animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
        transform: translate3d(0, -8px, 0);
    }
    70% {
        animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
        transform: translate3d(0, -4px, 0);
    }
    90% {
        transform: translate3d(0,-1px,0);
    }
}
`;

// Add ripple effect styles
const rippleStyles = `
.ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    pointer-events: none;
    animation: ripple-animation 0.6s ease-out;
}

@keyframes ripple-animation {
    to {
        transform: scale(2);
        opacity: 0;
    }
}
`;

// Inject styles
function injectStyles() {
    const style = document.createElement('style');
    style.textContent = bounceKeyframes + rippleStyles;
    document.head.appendChild(style);
}

// Performance optimization: Throttle scroll events
function throttle(func, delay) {
    let timeoutId;
    let lastExecTime = 0;
    return function (...args) {
        const currentTime = Date.now();
        
        if (currentTime - lastExecTime > delay) {
            func.apply(this, args);
            lastExecTime = currentTime;
        } else {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                func.apply(this, args);
                lastExecTime = Date.now();
            }, delay - (currentTime - lastExecTime));
        }
    };
}

// Initialize everything when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Core functions
    createParticles();
    injectStyles();
    
    // Animation functions
    animateProjectCards();
    animateStatsCounters();
    
    // Interactive functions
    initTechTagEffects();
    initProjectButtonEffects();
    initProjectCardTilt();
    initLazyLoading();
    initSmoothScrolling();
    
    // Optional features (uncomment if needed)
    // initProjectFilter();
    
    // Throttled scroll events
    const throttledCardParallax = throttle(initCardParallax, 16); // 60fps
    window.addEventListener('scroll', throttledCardParallax);
    
    // Add loading class removal after initial load
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
});
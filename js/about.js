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

// Mobile Navigation Toggle
function initMobileNav() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    if (burger) {
        burger.addEventListener('click', () => {
            nav.classList.toggle('active');
            burger.classList.toggle('active');
        });
        
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                burger.classList.remove('active');
            });
        });
    }
}

// Animate Skill Items
function animateSkills() {
    const skillItems = document.querySelectorAll('.skill-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }, { threshold: 0.1 });
    
    skillItems.forEach(skill => {
        skill.style.opacity = '0';
        skill.style.transform = 'translateY(30px)';
        skill.style.transition = 'all 0.5s ease';
        observer.observe(skill);
    });
}

// Animate Fact Cards
function animateFactCards() {
    const factCards = document.querySelectorAll('.fact-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 150);
            }
        });
    }, { threshold: 0.1 });
    
    factCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease';
        observer.observe(card);
    });
}

// Resume Button Download Handler
function initResumeDownload() {
    const resumeBtn = document.getElementById('resumeBtn');
    
    if (resumeBtn) {
        resumeBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'translateY(-5px)';
            }, 100);
            
            // Show download notification
            showNotification('Resume download will be available soon!');
            
            // In production, you would trigger actual download:
            // window.location.href = 'path/to/your/resume.pdf';
        });
    }
}

// Show Notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(45deg, var(--primary-color), var(--tertiary-color));
        color: white;
        padding: 1rem 2rem;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(74, 134, 232, 0.4);
        z-index: 10000;
        animation: slideInRight 0.5s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.5s ease';
        setTimeout(() => {
            notification.remove();
        }, 500);
    }, 3000);
}

// Add notification animations
function injectNotificationStyles() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOutRight {
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
}

// Floating Icons Animation Enhancement
function enhanceFloatingIcons() {
    const floatingIcons = document.querySelectorAll('.floating-icon');
    
    floatingIcons.forEach((icon, index) => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = `translate(var(--x), var(--y)) scale(1.2)`;
            this.style.boxShadow = '0 15px 40px rgba(74, 134, 232, 0.6)';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = `translate(var(--x), var(--y)) scale(1)`;
            this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
        });
    });
}

// Profile Circle Interaction
function initProfileCircleInteraction() {
    const profileCircle = document.querySelector('.profile-circle');
    
    if (profileCircle && window.innerWidth > 768) {
        profileCircle.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / centerY * 10;
            const rotateY = (centerX - x) / centerX * 10;
            
            this.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
        
        profileCircle.addEventListener('mouseleave', function() {
            this.style.transform = 'rotateX(0) rotateY(0)';
        });
    }
}

// Smooth Scrolling
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

// Button Hover Effects
function initButtonEffects() {
    const buttons = document.querySelectorAll('.cta-btn, .resume-btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// Scroll Progress Indicator
function initScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 70px;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(to right, var(--primary-color), var(--tertiary-color));
        z-index: 9999;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

// Text Highlight Animation
function initTextHighlight() {
    const highlights = document.querySelectorAll('.highlight');
    
    highlights.forEach(highlight => {
        highlight.addEventListener('mouseenter', function() {
            this.style.textShadow = '0 0 20px rgba(74, 134, 232, 0.8)';
        });
        
        highlight.addEventListener('mouseleave', function() {
            this.style.textShadow = 'none';
        });
    });
}

// Parallax Effect on Scroll
function initParallaxScroll() {
    if (window.innerWidth > 768) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const profileCircle = document.querySelector('.profile-circle');
            const floatingIcons = document.querySelectorAll('.floating-icon');
            
            if (profileCircle) {
                profileCircle.style.transform = `translateY(${scrolled * 0.1}px)`;
            }
            
            floatingIcons.forEach((icon, index) => {
                const speed = 0.05 + (index * 0.02);
                icon.style.transform = `translate(var(--x), var(--y)) translateY(${scrolled * speed}px)`;
            });
        });
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Core functions
    createParticles();
    initMobileNav();
    injectNotificationStyles();
    
    // Animation functions
    animateSkills();
    animateFactCards();
    
    // Interactive functions
    initResumeDownload();
    enhanceFloatingIcons();
    initProfileCircleInteraction();
    initSmoothScrolling();
    initButtonEffects();
    initScrollProgress();
    initTextHighlight();
    initParallaxScroll();
    
    // Add active class to current page nav link
    const currentPage = window.location.pathname.split('/').pop();
    document.querySelectorAll('nav a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});
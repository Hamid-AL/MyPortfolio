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

// Typing Animation for Roles
function typeWriter() {
    const roles = [
        'Python Developer',
        'AI Engineer',
        'Software Engineer',
    ];
    
    const typingElement = document.getElementById('typingText');
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    function type() {
        const currentRole = roles[roleIndex];
        
        if (isDeleting) {
            typingElement.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typingElement.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }
        
        if (!isDeleting && charIndex === currentRole.length) {
            isDeleting = true;
            typingSpeed = 2000; // Pause at end
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typingSpeed = 500; // Pause before next word
        }
        
        setTimeout(type, typingSpeed);
    }
    
    type();
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
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// Parallax Effect on Mouse Move
function initParallaxEffect() {
    const homeSection = document.querySelector('.home-section');
    
    if (window.innerWidth > 768) {
        document.addEventListener('mousemove', (e) => {
            const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
            const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
            
            const imageContainer = document.querySelector('.image-container');
            if (imageContainer) {
                imageContainer.style.transform = `translate(${moveX}px, ${moveY}px)`;
            }
        });
    }
}

// Animate Elements on Scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.home-content > *, .home-image');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    elements.forEach(el => {
        observer.observe(el);
    });
}

// Add Glowing Effect to Social Links
function initSocialLinkEffects() {
    const socialLinks = document.querySelectorAll('.social-links a');
    
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 0 20px rgba(74, 134, 232, 0.8)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.boxShadow = 'none';
        });
    });
}

// Random Particle Movement Enhancement
function enhanceParticles() {
    const particles = document.querySelectorAll('.particle');
    
    particles.forEach(particle => {
        const randomDelay = Math.random() * 5;
        const randomDuration = Math.random() * 3 + 3;
        
        particle.style.animationDelay = randomDelay + 's';
        particle.style.animationDuration = randomDuration + 's';
        
        // Add random horizontal movement
        const randomX = Math.random() * 100 - 50;
        particle.animate([
            { transform: 'translateX(0px)' },
            { transform: `translateX(${randomX}px)` },
            { transform: 'translateX(0px)' }
        ], {
            duration: randomDuration * 1000,
            iterations: Infinity,
            easing: 'ease-in-out'
        });
    });
}

// Add Loading Animation
function removeLoader() {
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Core functions
    createParticles();
    typeWriter();
    initMobileNav();
    
    // Enhancement functions
    initButtonEffects();
    initSmoothScrolling();
    initSocialLinkEffects();
    initParallaxEffect();
    animateOnScroll();
    enhanceParticles();
    removeLoader();
    
    // Add active class to current page nav link
    const currentPage = window.location.pathname.split('/').pop();
    document.querySelectorAll('nav a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});
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

// Timeline Animation
function animateTimeline() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }
        });
    }, { threshold: 0.1 });

    timelineItems.forEach(item => {
        observer.observe(item);
    });
}

// Skill Badges Animation
function animateSkillBadges() {
    const skillBadges = document.querySelectorAll('.skill-badge');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0) scale(1)';
            }
        });
    }, { threshold: 0.1 });

    skillBadges.forEach((badge, index) => {
        badge.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(badge);
    });
}

// Value Cards Animation
function animateValueCards() {
    const valueCards = document.querySelectorAll('.value-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    valueCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.2}s`;
        observer.observe(card);
    });
}

// Languages Animation
function animateLanguages() {
    const languageItems = document.querySelectorAll('.language-item');
    languageItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        }, 100 * index);
    });
}

// Interests Animation
function animateInterests() {
    const interestItems = document.querySelectorAll('.interest-item');
    interestItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
        }, 100 * index);
    });
}

// Bio Section Typewriter Effect (optional)
function typeWriterEffect() {
    const bioContent = document.querySelector('.bio-content p:first-child');
    if (bioContent) {
        const text = bioContent.textContent;
        bioContent.textContent = '';
        bioContent.style.borderRight = '2px solid var(--primary-color)';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                bioContent.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 30);
            } else {
                bioContent.style.borderRight = 'none';
            }
        };
        
        // Start typewriter effect after a delay
        setTimeout(typeWriter, 500);
    }
}

// Counter animation for education timeline
function animateEducationCounters() {
    const timelineMarkers = document.querySelectorAll('.timeline-marker');
    timelineMarkers.forEach((marker, index) => {
        setTimeout(() => {
            marker.style.transform = 'scale(1)';
            marker.style.opacity = '1';
        }, 200 * index);
    });
}

// Smooth scrolling for internal links
function initSmoothScrolling() {
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
}

// Parallax effect for profile image
function initParallaxEffect() {
    const profileImage = document.querySelector('.profile-image');
    if (profileImage) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            profileImage.style.transform = `translateY(${rate}px)`;
        });
    }
}

// Quote animation
function animateQuote() {
    const quote = document.querySelector('.quote-section blockquote');
    if (quote) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(quote);
    }
}

// Initialize everything when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Core functions
    createParticles();
    
    // Animation functions
    animateTimeline();
    animateSkillBadges();
    animateValueCards();
    animateLanguages();
    animateInterests();
    animateEducationCounters();
    animateQuote();
    
    // Optional effects
    initSmoothScrolling();
    initParallaxEffect();
    
    // Optional typewriter effect (uncomment if you want it)
    // typeWriterEffect();
    
    // Add hover effects for skill badges
    const skillBadges = document.querySelectorAll('.skill-badge');
    skillBadges.forEach(badge => {
        badge.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.05)';
        });
        
        badge.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add hover effects for value cards
    const valueCards = document.querySelectorAll('.value-card');
    valueCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 10px 25px rgba(199, 112, 240, 0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });
});
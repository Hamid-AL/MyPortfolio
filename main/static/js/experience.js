// Particle Background Animation
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;
    
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

// FIXED: Experience Cards Animation
function animateExperienceCards() {
    const experienceCards = document.querySelectorAll('.experience-card');
    
    if (experienceCards.length === 0) {
        console.log('No experience cards found in DOM');
        return;
    }
    
    console.log(`Found ${experienceCards.length} experience cards`);
    
    // Immediately make cards visible with a fallback
    experienceCards.forEach((card, index) => {
        // Remove initial hidden state
        card.style.opacity = '1';
        card.style.visibility = 'visible';
        card.style.display = 'block';
    });
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
                entry.target.classList.add('animate');
                console.log('Card became visible:', entry.target);
            }
        });
    }, { 
        threshold: 0.1,
        rootMargin: '50px' // Increased margin to trigger earlier
    });

    experienceCards.forEach((card) => {
        // Set initial state for animation
        card.style.opacity = '0';
        card.style.transform = 'translateX(50px)';
        card.style.transition = 'all 0.6s ease';
        
        observer.observe(card);
    });
}

// SIMPLIFIED VERSION - Immediate visibility
function showExperienceCardsImmediately() {
    const experienceCards = document.querySelectorAll('.experience-card');
    
    experienceCards.forEach((card, index) => {
        // Remove all hiding styles immediately
        card.style.opacity = '1';
        card.style.transform = 'translateX(0)';
        card.style.visibility = 'visible';
        card.style.display = 'block';
        
        // Add animation with delay
        card.style.transition = `all 0.6s ease ${index * 0.2}s`;
        card.classList.add('animate');
    });
}

// Tech Tag Hover Effects
function initTechTagEffects() {
    const techTags = document.querySelectorAll('.tech-tag');
    
    techTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Progress Bar for Skills
function animateSkillProgress() {
    const skillCategories = document.querySelectorAll('.skill-category');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }
        });
    }, { threshold: 0.3 });

    skillCategories.forEach((skill, index) => {
        skill.style.opacity = '0';
        skill.style.transform = 'translateX(-30px)';
        skill.style.transition = 'all 0.6s ease';
        skill.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(skill);
    });
}

// Current Role Highlight Animation
function animateCurrentRole() {
    const currentRole = document.querySelector('.current-role');
    if (currentRole) {
        setInterval(() => {
            currentRole.style.boxShadow = '0 0 30px rgba(40, 167, 69, 0.4)';
            setTimeout(() => {
                currentRole.style.boxShadow = '0 15px 40px rgba(74, 134, 232, 0.2)';
            }, 1000);
        }, 5000);
    }
}

// Achievement Counter Animation
function animateAchievements() {
    const achievementItems = document.querySelectorAll('.achievement-list li');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }
        });
    }, { threshold: 0.5 });

    achievementItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        item.style.transition = 'all 0.5s ease';
        item.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(item);
    });
}

// Debug function to check what's happening
function debugPage() {
    console.log('=== DEBUG INFORMATION ===');
    
    // Check if elements exist
    const cards = document.querySelectorAll('.experience-card');
    console.log(`Experience cards found: ${cards.length}`);
    
    cards.forEach((card, index) => {
        const styles = window.getComputedStyle(card);
        console.log(`Card ${index + 1}:`, {
            opacity: styles.opacity,
            visibility: styles.visibility,
            display: styles.display,
            transform: styles.transform
        });
    });
    
    // Check if CSS is loaded
    const timeline = document.querySelector('.experience-timeline');
    if (timeline) {
        const styles = window.getComputedStyle(timeline);
        console.log('Timeline position:', styles.position);
    }
}

// Main initialization function
function initExperiencePage() {
    console.log('Initializing experience page...');
    
    // Create particle background
    createParticles();
    
    // DEBUG: Check initial state
    debugPage();
    
    // Try the immediate visibility approach first
    showExperienceCardsImmediately();
    
    // Initialize other effects
    initTechTagEffects();
    animateSkillProgress();
    animateCurrentRole();
    animateAchievements();
    
    console.log('Experience page initialization complete');
}

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded');
    initExperiencePage();
});

// Fallback initialization
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initExperiencePage);
} else {
    // DOM is already ready
    setTimeout(initExperiencePage, 100);
}
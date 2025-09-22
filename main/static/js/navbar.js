// Navbar scroll effect
let isExpanded = false;

function scrollHandler() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY >= 20) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
}

// Toggle navbar on mobile
function toggleNavbar() {
    const toggler = document.querySelector('.custom-toggler');
    const collapse = document.querySelector('.navbar-collapse');
    
    toggler.classList.toggle('active');
    isExpanded = !isExpanded;
}

// Close navbar when link is clicked (mobile)
function closeNavbar() {
    const toggler = document.querySelector('.custom-toggler');
    const collapse = document.querySelector('.navbar-collapse');
    
    if (isExpanded) {
        toggler.classList.remove('active');
        const bsCollapse = new bootstrap.Collapse(collapse, {
            hide: true
        });
        isExpanded = false;
    }
}

// Highlight active page
function setActivePage() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('active-page');
        const href = link.getAttribute('href');
        
        if ((href === '/' && currentPath === '/') || 
            (href !== '/' && currentPath.includes(href))) {
            link.classList.add('active-page');
        }
    });
}

// Initialize navbar functionality
document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', scrollHandler);
    setActivePage();
});
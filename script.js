// Set current year in footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Mobile menu functionality
let menuOpen = false;

function toggleMenu() {
    menuOpen = !menuOpen;
    const menu = document.getElementById('mobile-menu');
    const line1 = document.getElementById('menu-line1');
    const line2 = document.getElementById('menu-line2');
    const line3 = document.getElementById('menu-line3');
    
    if (menuOpen) {
        menu.classList.remove('translate-x-full');
        line1.classList.add('rotate-45', 'translate-y-2');
        line2.classList.add('opacity-0');
        line3.classList.add('-rotate-45', '-translate-y-2');
    } else {
        menu.classList.add('translate-x-full');
        line1.classList.remove('rotate-45', 'translate-y-2');
        line2.classList.remove('opacity-0');
        line3.classList.remove('-rotate-45', '-translate-y-2');
    }
}

function closeMenu() {
    menuOpen = false;
    const menu = document.getElementById('mobile-menu');
    const line1 = document.getElementById('menu-line1');
    const line2 = document.getElementById('menu-line2');
    const line3 = document.getElementById('menu-line3');
    
    menu.classList.add('translate-x-full');
    line1.classList.remove('rotate-45', 'translate-y-2');
    line2.classList.remove('opacity-0');
    line3.classList.remove('-rotate-45', '-translate-y-2');
}

// Contact form functionality
function handleSubmit() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (name && email && message) {
        const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
        const body = encodeURIComponent(`Name: ${name}\n\nEmail: ${email}\n\nMessage:\n${message}`);
        window.location.href = `mailto:yashshinde570@gmail.com?subject=${subject}&body=${body}`;
        
        // Clear form
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
    } else {
        alert("Please fill in all fields.");
    }
}

// Close mobile menu when clicking on links
document.addEventListener('DOMContentLoaded', function() {
    const mobileLinks = document.querySelectorAll('#mobile-menu a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });
});

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
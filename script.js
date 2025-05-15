// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle (will appear on small screens)
    const mobileMenuToggle = document.createElement('div');
    mobileMenuToggle.className = 'mobile-menu-toggle';
    mobileMenuToggle.innerHTML = '<span></span><span></span><span></span>';
    document.querySelector('nav').appendChild(mobileMenuToggle);
    
    mobileMenuToggle.addEventListener('click', function() {
        document.querySelector('.nav-links').classList.toggle('active');
        this.classList.toggle('open');
    });
 
    // Form Submissions
    const reservationForm = document.getElementById('reservationForm');
    if (reservationForm) {
        reservationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Form validation
            if (validateForm(this)) {
                // Simulate form submission
                alert('Thank you! Your reservation request has been received. We will confirm shortly.');
                this.reset();
            }
        });
    }
 
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            if (validateForm(this)) {
                alert('Thank you for your message. We will respond within 24 hours.');
                this.reset();
            }
        });
    }
 
    // Form validation helper
    function validateForm(form) {
        let valid = true;
        const required = form.querySelectorAll('[required]');
        
        required.forEach(field => {
            if (!field.value.trim()) {
                field.style.borderColor = 'red';
                valid = false;
            } else {
                field.style.borderColor = '';
            }
        });
 
        // Email validation
        const email = form.querySelector('[type="email"]');
        if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
            email.style.borderColor = 'red';
            valid = false;
        }
 
        return valid;
    }
 
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
 
// DOM Elements
const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-menu a');
const backToTopBtn = document.getElementById('backToTop');

// Mobile Menu Toggle
function toggleMobileMenu() {
    if (hamburger && navMenu) {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    }
}

// Close mobile menu when clicking a link
function closeMobileMenu() {
    if (hamburger && navMenu) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.classList.remove('menu-open');
    }
}

// Initialize mobile menu
if (hamburger) {
    hamburger.addEventListener('click', toggleMobileMenu);
}

navLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (navMenu && navMenu.classList.contains('active')) {
        if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
            closeMobileMenu();
        }
    }
});

// Navbar Scroll Effect
function handleNavbarScroll() {
    if (navbar) {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
}

window.addEventListener('scroll', handleNavbarScroll);

// Active Navigation Highlighting
function highlightActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 150;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-menu a[href*="${sectionId}"]`);

        if (navLink) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLink.classList.add('active');
            } else {
                navLink.classList.remove('active');
            }
        }
    });
}

window.addEventListener('scroll', highlightActiveNav);

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const navbarHeight = navbar ? navbar.offsetHeight : 0;
                const targetPosition = target.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Back to Top Button
function handleBackToTop() {
    if (backToTopBtn) {
        if (window.scrollY > 500) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    }
}

window.addEventListener('scroll', handleBackToTop);

if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            animationObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.feature-card, .menu-item, .special-card, .testimonial-card, .gallery-item, .team-member, .contact-card').forEach(el => {
    el.classList.add('animate-on-scroll');
    animationObserver.observe(el);
});

// Menu Category Filter (for menu page)
const categoryBtns = document.querySelectorAll('.category-btn');
const menuItems = document.querySelectorAll('.menu-item');

categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        categoryBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');
        
        const category = btn.getAttribute('data-category');
        
        menuItems.forEach(item => {
            if (category === 'all' || item.getAttribute('data-category') === category) {
                item.style.display = 'block';
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }, 10);
            } else {
                item.style.opacity = '0';
                item.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    item.style.display = 'none';
                }, 300);
            }
        });
    });
});

// Form Validation and Submission
const contactForm = document.getElementById('contactForm');
const reservationForm = document.getElementById('reservationForm');

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^[\d\s\-\+\(\)]{10,}$/;
    return re.test(phone);
}

function showFormMessage(form, message, isSuccess) {
    // Remove existing message if any
    const existingMsg = form.querySelector('.form-message');
    if (existingMsg) {
        existingMsg.remove();
    }
    
    const msgDiv = document.createElement('div');
    msgDiv.className = `form-message ${isSuccess ? 'success' : 'error'}`;
    msgDiv.textContent = message;
    msgDiv.style.cssText = `
        padding: 15px;
        margin-top: 20px;
        border-radius: 8px;
        text-align: center;
        font-weight: 500;
        background: ${isSuccess ? '#d4edda' : '#f8d7da'};
        color: ${isSuccess ? '#155724' : '#721c24'};
        border: 1px solid ${isSuccess ? '#c3e6cb' : '#f5c6cb'};
    `;
    form.appendChild(msgDiv);
    
    setTimeout(() => {
        msgDiv.remove();
    }, 5000);
}

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = this.querySelector('[name="name"]').value.trim();
        const email = this.querySelector('[name="email"]').value.trim();
        const subject = this.querySelector('[name="subject"]').value.trim();
        const message = this.querySelector('[name="message"]').value.trim();
        
        // Validation
        if (!name || !email || !subject || !message) {
            showFormMessage(this, 'Please fill in all fields.', false);
            return;
        }
        
        if (!validateEmail(email)) {
            showFormMessage(this, 'Please enter a valid email address.', false);
            return;
        }
        
        // Simulate form submission
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            showFormMessage(this, 'Thank you for your message! We will get back to you soon.', true);
            this.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 1500);
    });
}

if (reservationForm) {
    reservationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = this.querySelector('[name="name"]').value.trim();
        const email = this.querySelector('[name="email"]').value.trim();
        const phone = this.querySelector('[name="phone"]').value.trim();
        const date = this.querySelector('[name="date"]').value;
        const time = this.querySelector('[name="time"]').value;
        const guests = this.querySelector('[name="guests"]').value;
        
        // Validation
        if (!name || !email || !phone || !date || !time || !guests) {
            showFormMessage(this, 'Please fill in all required fields.', false);
            return;
        }
        
        if (!validateEmail(email)) {
            showFormMessage(this, 'Please enter a valid email address.', false);
            return;
        }
        
        if (!validatePhone(phone)) {
            showFormMessage(this, 'Please enter a valid phone number.', false);
            return;
        }
        
        // Check if date is in the future
        const selectedDate = new Date(date);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        if (selectedDate < today) {
            showFormMessage(this, 'Please select a future date.', false);
            return;
        }
        
        // Simulate form submission
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Booking...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            showFormMessage(this, 'Reservation confirmed! You will receive a confirmation email shortly.', true);
            this.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 1500);
    });
}

// Gallery Lightbox (for about page)
const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
    item.addEventListener('click', function() {
        const img = this.querySelector('img');
        if (img) {
            openLightbox(img.src, img.alt);
        }
    });
});

function openLightbox(src, alt) {
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <button class="lightbox-close">&times;</button>
            <img src="${src}" alt="${alt}">
        </div>
    `;
    lightbox.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;
    
    const content = lightbox.querySelector('.lightbox-content');
    content.style.cssText = `
        position: relative;
        max-width: 90%;
        max-height: 90%;
    `;
    
    const closeBtn = lightbox.querySelector('.lightbox-close');
    closeBtn.style.cssText = `
        position: absolute;
        top: -40px;
        right: 0;
        background: none;
        border: none;
        color: white;
        font-size: 2.5rem;
        cursor: pointer;
        transition: transform 0.3s ease;
    `;
    
    const lightboxImg = lightbox.querySelector('img');
    lightboxImg.style.cssText = `
        max-width: 100%;
        max-height: 80vh;
        border-radius: 8px;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
    `;
    
    document.body.appendChild(lightbox);
    document.body.style.overflow = 'hidden';
    
    setTimeout(() => {
        lightbox.style.opacity = '1';
    }, 10);
    
    // Close lightbox
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox || e.target === closeBtn) {
            lightbox.style.opacity = '0';
            setTimeout(() => {
                document.body.removeChild(lightbox);
                document.body.style.overflow = '';
            }, 300);
        }
    });
    
    // Close with Escape key
    document.addEventListener('keydown', function escHandler(e) {
        if (e.key === 'Escape') {
            lightbox.style.opacity = '0';
            setTimeout(() => {
                if (document.body.contains(lightbox)) {
                    document.body.removeChild(lightbox);
                    document.body.style.overflow = '';
                }
            }, 300);
            document.removeEventListener('keydown', escHandler);
        }
    });
}

// Testimonial Slider
const testimonialSlider = document.querySelector('.testimonial-slider');
if (testimonialSlider) {
    let currentSlide = 0;
    const testimonials = testimonialSlider.querySelectorAll('.testimonial-card');
    const totalSlides = testimonials.length;
    
    // Create navigation dots
    const dotsContainer = document.createElement('div');
    dotsContainer.className = 'slider-dots';
    dotsContainer.style.cssText = `
        display: flex;
        justify-content: center;
        gap: 10px;
        margin-top: 30px;
    `;
    
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('button');
        dot.className = 'slider-dot';
        dot.style.cssText = `
            width: 12px;
            height: 12px;
            border-radius: 50%;
            border: 2px solid #c9a227;
            background: ${i === 0 ? '#c9a227' : 'transparent'};
            cursor: pointer;
            transition: all 0.3s ease;
        `;
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    }
    
    testimonialSlider.parentElement.appendChild(dotsContainer);
    
    function goToSlide(index) {
        currentSlide = index;
        testimonialSlider.style.transform = `translateX(-${index * 100}%)`;
        
        // Update dots
        const dots = dotsContainer.querySelectorAll('.slider-dot');
        dots.forEach((dot, i) => {
            dot.style.background = i === index ? '#c9a227' : 'transparent';
        });
    }
    
    // Auto-play slider
    setInterval(() => {
        currentSlide = (currentSlide + 1) % totalSlides;
        goToSlide(currentSlide);
    }, 5000);
}

// Counter Animation
const counters = document.querySelectorAll('.counter');

function animateCounter(counter) {
    const target = parseInt(counter.getAttribute('data-target'));
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    
    const updateCounter = () => {
        current += step;
        if (current < target) {
            counter.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
        } else {
            counter.textContent = target;
        }
    };
    
    updateCounter();
}

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounter(entry.target);
            counterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

counters.forEach(counter => {
    counterObserver.observe(counter);
});

// Parallax Effect for Hero Section
const hero = document.querySelector('.hero');
if (hero) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        hero.style.backgroundPositionY = `${scrolled * 0.5}px`;
    });
}

// Initialize page-specific date pickers
const dateInputs = document.querySelectorAll('input[type="date"]');
dateInputs.forEach(input => {
    // Set minimum date to today
    const today = new Date().toISOString().split('T')[0];
    input.setAttribute('min', today);
});

// Lazy Loading Images
const lazyImages = document.querySelectorAll('img[data-src]');

const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
        }
    });
}, { rootMargin: '50px' });

lazyImages.forEach(img => {
    imageObserver.observe(img);
});

// Newsletter Form
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const emailInput = this.querySelector('input[type="email"]');
        const email = emailInput.value.trim();
        
        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        
        const submitBtn = this.querySelector('button');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Subscribing...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            alert('Thank you for subscribing to our newsletter!');
            emailInput.value = '';
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 1000);
    });
}

// Page Load Animations
document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('loaded');
    
    // Animate hero content
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            heroContent.style.transition = 'all 1s ease';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 300);
    }
});

// Escape key closes mobile menu
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeMobileMenu();
    }
});
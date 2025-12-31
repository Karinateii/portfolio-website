// ================================
// LOADING SCREEN
// ================================
window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loading-screen');
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
    }, 1500);
});

// ================================
// NAVIGATION
// ================================
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Sticky navbar on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Active link on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ================================
// SMOOTH SCROLL
// ================================
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

// ================================
// STATS COUNTER ANIMATION
// ================================
const animateCounter = (element, target, duration = 2000) => {
    let current = 0;
    const increment = target / (duration / 16);
    
    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    };
    
    updateCounter();
};

// Intersection Observer for stats
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const target = parseInt(stat.getAttribute('data-target'));
                animateCounter(stat, target);
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const aboutStats = document.querySelector('.about-stats');
if (aboutStats) {
    statsObserver.observe(aboutStats);
}

// ================================
// SKILLS PROGRESS BARS
// ================================
const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.skill-progress');
            progressBars.forEach(bar => {
                const progress = bar.getAttribute('data-progress');
                bar.style.width = progress + '%';
            });
            skillsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

const skillsSection = document.querySelector('.skills');
if (skillsSection) {
    skillsObserver.observe(skillsSection);
}

// ================================
// PROJECT FILTERS
// ================================
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        const filterValue = button.getAttribute('data-filter');
        
        projectCards.forEach(card => {
            if (filterValue === 'all') {
                card.style.display = 'flex';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                }, 10);
            } else {
                const categories = card.getAttribute('data-category');
                if (categories && categories.includes(filterValue)) {
                    card.style.display = 'flex';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            }
        });
    });
});

// ================================
// CONTACT FORM
// ================================
const contactForm = document.getElementById('contact-form');
const formSuccess = document.getElementById('form-success');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        
        const formData = new FormData(contactForm);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message')
        };
        
        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            
            const result = await response.json();
            
            if (response.ok) {
                console.log('SUCCESS!', result);
                contactForm.style.display = 'none';
                formSuccess.classList.add('show');
                
                setTimeout(() => {
                    contactForm.reset();
                    contactForm.style.display = 'block';
                    formSuccess.classList.remove('show');
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = originalText;
                }, 5000);
            } else {
                throw new Error(result.error || 'Failed to send email');
            }
        } catch (error) {
            console.log('FAILED...', error);
            alert('Failed to send message. Please try again or email directly at karinateidoutimiwei@gmail.com');
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
        }
    });
}
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all elements with data-aos attribute
document.querySelectorAll('[data-aos]').forEach(element => {
    observer.observe(element);
});

// ================================
// TYPING EFFECT (Optional Enhancement)
// ================================
const typingEffect = (element, words, speed = 100) => {
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    const type = () => {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            element.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            element.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }
        
        let timeout = speed;
        
        if (isDeleting) {
            timeout /= 2;
        }
        
        if (!isDeleting && charIndex === currentWord.length) {
            timeout = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            timeout = 500;
        }
        
        setTimeout(type, timeout);
    };
    
    type();
};

// Uncomment to enable typing effect on hero subtitle
// const heroSubtitle = document.querySelector('.hero-subtitle');
// if (heroSubtitle) {
//     const titles = [
//         'Full-Stack Software Engineer',
//         'Backend Developer',
//         '.NET Specialist',
//         'Problem Solver'
//     ];
//     typingEffect(heroSubtitle, titles);
// }

// ================================
// CURSOR TRAIL EFFECT (Optional)
// ================================
const createCursorTrail = () => {
    const coords = { x: 0, y: 0 };
    const circles = [];
    const colors = ['#6366f1', '#ec4899', '#14b8a6'];
    
    for (let i = 0; i < 10; i++) {
        const circle = document.createElement('div');
        circle.style.cssText = `
            position: fixed;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: ${colors[i % colors.length]};
            pointer-events: none;
            z-index: 99999;
            opacity: ${1 - i * 0.1};
            transition: opacity 0.3s, transform 0.3s;
        `;
        document.body.appendChild(circle);
        circles.push(circle);
    }
    
    window.addEventListener('mousemove', (e) => {
        coords.x = e.clientX;
        coords.y = e.clientY;
    });
    
    const animateCircles = () => {
        let x = coords.x;
        let y = coords.y;
        
        circles.forEach((circle, index) => {
            circle.style.left = x - 5 + 'px';
            circle.style.top = y - 5 + 'px';
            circle.style.transform = `scale(${(circles.length - index) / circles.length})`;
            
            const nextCircle = circles[index + 1] || circles[0];
            x += (parseInt(nextCircle.style.left || 0) - x) * 0.3;
            y += (parseInt(nextCircle.style.top || 0) - y) * 0.3;
        });
        
        requestAnimationFrame(animateCircles);
    };
    
    animateCircles();
};

// Uncomment to enable cursor trail
// if (window.innerWidth > 768) {
//     createCursorTrail();
// }

// ================================
// PARALLAX EFFECT
// ================================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero-image');
    
    parallaxElements.forEach(element => {
        const speed = 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// ================================
// THEME SWITCHER
// ================================
const createThemeSwitcher = () => {
    const themeToggle = document.createElement('button');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    themeToggle.className = 'theme-toggle';
    themeToggle.setAttribute('title', 'Toggle Light/Dark Mode');
    themeToggle.setAttribute('aria-label', 'Toggle theme');
    
    document.body.appendChild(themeToggle);
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
    
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        const icon = themeToggle.querySelector('i');
        if (document.body.classList.contains('light-theme')) {
            icon.className = 'fas fa-moon';
            localStorage.setItem('theme', 'light');
        } else {
            icon.className = 'fas fa-sun';
            localStorage.setItem('theme', 'dark');
        }
    });
};

// Enable theme switcher
createThemeSwitcher();

// ================================
// PERFORMANCE OPTIMIZATION
// ================================
// Lazy load images
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
});

lazyImages.forEach(img => imageObserver.observe(img));

// ================================
// CONSOLE MESSAGE
// ================================
console.log('%c👋 Hello Developer!', 'color: #6366f1; font-size: 24px; font-weight: bold;');
console.log('%cLooking for something? Check out my GitHub:', 'color: #ec4899; font-size: 14px;');
console.log('%chttps://github.com/Karinateii', 'color: #14b8a6; font-size: 14px;');
console.log('%c\nBuilt with ❤️ and ☕', 'color: #94a3b8; font-size: 12px;');

// ================================
// EASTER EGG
// ================================
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            alert('🎉 You found the secret! Here\'s a virtual high-five! ✋');
            confetti();
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});

const confetti = () => {
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.style.cssText = `
            position: fixed;
            width: 10px;
            height: 10px;
            background: ${['#6366f1', '#ec4899', '#14b8a6', '#f59e0b'][Math.floor(Math.random() * 4)]};
            left: ${Math.random() * 100}%;
            top: -10px;
            opacity: 1;
            pointer-events: none;
            z-index: 99999;
            animation: fall ${2 + Math.random() * 3}s linear forwards;
        `;
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 5000);
    }
};

// Add confetti animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fall {
        to {
            top: 100vh;
            opacity: 0;
            transform: translateX(${Math.random() * 200 - 100}px) rotate(${Math.random() * 720}deg);
        }
    }
`;
document.head.appendChild(style);

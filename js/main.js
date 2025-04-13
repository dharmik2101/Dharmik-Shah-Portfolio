// Main JavaScript file

document.addEventListener('DOMContentLoaded', function() {
  // Initialize all components
  initParticles();
  createFloatingData();
  initCustomCursor();
  initHeaderShrink();
  initBackToTop();
  initTypewriter();
  initMobileMenu();
  initThemeToggle();
  
  // Initialize scroll animations
  initScrollAnimations();
  
  // Initialize counters
  initCounters();
});

// Particles JS Configuration
function initParticles() {
  if (typeof particlesJS !== 'undefined') {
    particlesJS('particles-js', {
      "particles": {
        "number": {
          "value": 80,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#4cc9f0"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          }
        },
        "opacity": {
          "value": 0.5,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 3,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#4361ee",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 3,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "grab"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 140,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    });
  }
}

// Create Floating Data Points
function createFloatingData() {
  const floatingData = document.getElementById('floatingData');
  if (!floatingData) return;
  
  const numPoints = 20;
  
  for (let i = 0; i < numPoints; i++) {
    const point = document.createElement('div');
    point.className = 'data-point';
    
    // Random position
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;
    
    point.style.left = `${posX}%`;
    point.style.top = `${posY}%`;
    
    // Custom properties for animation
    point.style.setProperty('--translate-x', `${Math.random() * 50 - 25}px`);
    point.style.setProperty('--translate-y', `${Math.random() * 50 - 25}px`);
    point.style.setProperty('--translate-x-alt', `${Math.random() * 50 - 25}px`);
    point.style.setProperty('--translate-y-alt', `${Math.random() * 50 - 25}px`);
    point.style.setProperty('--rotation', `${Math.random() * 360}deg`);
    point.style.animationDelay = `${Math.random() * 5}s`;
    
    floatingData.appendChild(point);
  }
}

// Initialize Custom Cursor
function initCustomCursor() {
  const cursor = document.getElementById('cursor');
  const cursorDot = document.getElementById('cursorDot');
  
  if (!cursor || !cursorDot) return;
  
  document.addEventListener('mousemove', function(e) {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    cursorDot.style.left = e.clientX + 'px';
    cursorDot.style.top = e.clientY + 'px';
  });
  
  // Add interaction effects
  const links = document.querySelectorAll('a, button, .skill-card, .project-card, .service-card, .soft-skill-card');
  links.forEach(link => {
    link.addEventListener('mouseenter', () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
      cursor.style.opacity = '0.5';
    });
    
    link.addEventListener('mouseleave', () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1)';
      cursor.style.opacity = '1';
    });
  });
}

// Header Shrink on Scroll
function initHeaderShrink() {
  const header = document.getElementById('header');
  if (!header) return;
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      header.classList.add('header-shrink');
    } else {
      header.classList.remove('header-shrink');
    }
  });
}

// Initialize Back to Top Button
function initBackToTop() {
  const backToTop = document.getElementById('backToTop');
  if (!backToTop) return;
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      backToTop.classList.add('show');
    } else {
      backToTop.classList.remove('show');
    }
  });
  
  backToTop.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// Typewriter Effect
function initTypewriter() {
  const typedTextElement = document.getElementById('typedText');
  if (!typedTextElement) return;
  
  const words = ['Data Analyst', 'Supply Chain Specialist', 'Data Engineer', 'Data Scientist', 'Python Developer', 'SQL Expert'];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typeSpeed = 100;
  
  function type() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
      typedTextElement.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
      typeSpeed = 50;
    } else {
      typedTextElement.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
      typeSpeed = 150;
    }
    
    if (!isDeleting && charIndex === currentWord.length) {
      isDeleting = true;
      typeSpeed = 1500; // Pause at end of word
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      typeSpeed = 500; // Pause before typing next word
    }
    
    setTimeout(type, typeSpeed);
  }
  
  setTimeout(type, 1000);
}

// Mobile Menu Toggle
function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  
  if (!hamburger || !navLinks) return;
  
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.innerHTML = navLinks.classList.contains('active') ? 
      '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
  });
  
  // Close mobile menu when clicking a link
  const navItems = navLinks.querySelectorAll('a');
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      navLinks.classList.remove('active');
      hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    });
  });
}

// Theme Toggle
function initThemeToggle() {
  const themeToggle = document.getElementById('themeToggle');
  if (!themeToggle) return;
  
  // Check if user has a preferred theme
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  let darkMode = localStorage.getItem('darkMode') === 'true' || prefersDark;
  
  function updateTheme() {
    if (darkMode) {
      document.body.classList.add('dark-theme');
      themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
      document.body.classList.remove('dark-theme');
      themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
  }
  
  // Initial theme setup
  updateTheme();
  
  themeToggle.addEventListener('click', () => {
    darkMode = !darkMode;
    localStorage.setItem('darkMode', darkMode);
    updateTheme();
  });
}

// Initialize scroll animations
function initScrollAnimations() {
  // Elements to animate on scroll
  const animatableElements = document.querySelectorAll('.timeline-item, .certification-item, .stat-item, .education-card, .project-card, .service-card, .viz-card, .contact-item');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, { threshold: 0.2 });
  
  animatableElements.forEach(element => {
    observer.observe(element);
  });
  
  // Progress bars animation
  const progressBars = document.querySelectorAll('.progress-bar span');
  const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const width = entry.target.style.width;
        
        // Force reflow
        entry.target.style.width = '0%';
        
        // Animate after a short delay
        setTimeout(() => {
          entry.target.style.width = width;
        }, 100);
      }
    });
  }, { threshold: 0.5 });
  
  progressBars.forEach(bar => {
    progressObserver.observe(bar);
  });
}

// Initialize counters
function initCounters() {
  const counters = document.querySelectorAll('.stat-number');
  
  counters.forEach(counter => {
    const target = counter.textContent;
    const targetNumber = parseInt(target.replace(/\D/g, ''));
    
    // Start from 0
    counter.textContent = '0';
    
    // Animate to target
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          let count = 0;
          const updateCounter = () => {
            if (count < targetNumber) {
              count += Math.ceil(targetNumber / 50);
              if (count > targetNumber) count = targetNumber;
              
              // Add "+" if original had it
              if (target.includes('+')) {
                counter.textContent = `${count}+`;
              } else {
                counter.textContent = count;
              }
              
              setTimeout(updateCounter, 30);
            }
          };
          
          updateCounter();
          
          // Unobserve after animation
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    
    observer.observe(counter);
  });
}
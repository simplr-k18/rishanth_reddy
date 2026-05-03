// Defines SVG icons for use in the project.
const iconMap = {
    "github": `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>`,
    "linkedin": `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>`,
    "external-link": `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>`,
    "file-text": `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="13" x2="12" y2="17"></line><line x1="9" y1="15" x2="15" y2="15"></line></svg>`,
    "play-circle": `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>`,
    "mail": `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22 6 12 13 2 6"></polyline></svg>`,
    "link": `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>`,
    "article": `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><line x1="10" y1="9" x2="8" y2="9"></line></svg>`,
    "my-blog": `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><line x1="10" y1="9" x2="8" y2="9"></line></svg>`,
    "X": `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 1200 1227" fill="currentColor"><path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.163 519.284ZM569.165 687.828L521.697 619.934L144.011 79.6904H306.615L611.412 515.685L658.88 583.579L1055.08 1150.31H892.476L569.165 687.828Z"/></svg>`,
    "figma": '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 0 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path></svg>'
   };

document.addEventListener('DOMContentLoaded', () => {
    window.scrollTo(0, 0);
    initializePage();
});

function initializePage() {
    setupManifestoIntro();
    setupTheme();
    setupHeader();
    setupParticleBackground();
    setupFloatingAnimation();
    setupFunFact();
    setupCustomCursor();
    setupScrollAnimations(); // Added for scroll animations
    setupProjects();
    setupProjectCardHover();
}

function setupManifestoIntro() {
    const intro = document.getElementById('manifestoIntro');
    const canvas = document.getElementById('manifestoCanvas');
    const skipButton = document.getElementById('skipManifesto');
    const replayButton = document.getElementById('replayManifesto');
    if (!intro) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const network = canvas ? createManifestoNetwork(canvas) : null;
    let closeTimer;
    
    // Initialize audio
    const manifestoAudio = new Audio('assets/audio/manifesto.mp3');
    manifestoAudio.loop = false;
    manifestoAudio.volume = 0.8;

    const closeIntro = () => {
        window.clearTimeout(closeTimer);
        intro.classList.add('is-leaving');
        document.body.classList.remove('intro-running');
        intro.setAttribute('aria-hidden', 'true');
        manifestoAudio.pause();
        manifestoAudio.currentTime = 0;
        window.setTimeout(() => network?.stop(), reduceMotion ? 0 : 900);
        window.setTimeout(() => {
            intro.classList.remove('is-active', 'is-leaving');
        }, reduceMotion ? 0 : 900);
    };

    const playIntro = ({ remember = false } = {}) => {
        if (reduceMotion) return;
        window.clearTimeout(closeTimer);
        intro.classList.remove('is-leaving');
        intro.classList.add('is-active');
        intro.setAttribute('aria-hidden', 'false');
        document.body.classList.add('intro-running');
        network?.start();
        
        // Play audio
        manifestoAudio.currentTime = 0;
        manifestoAudio.play().catch(error => {
            console.log('Audio autoplay prevented or failed:', error);
        });
        
        if (remember) sessionStorage.setItem('manifestoIntroSeen', 'true');
        closeTimer = window.setTimeout(closeIntro, 9400);
    };

    if (!sessionStorage.getItem('manifestoIntroSeen')) {
        playIntro({ remember: true });
    }

    skipButton?.addEventListener('click', closeIntro);
    replayButton?.addEventListener('click', () => playIntro());
}

function createManifestoNetwork(canvas) {
    const ctx = canvas.getContext('2d');
    let particles = [];
    let rafId = null;
    let running = false;
    let width = 0;
    let height = 0;

    function resize() {
        const dpr = window.devicePixelRatio || 1;
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function createParticles() {
        particles = [];
        const count = width > 768 ? 58 : 34;
        for (let i = 0; i < count; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.42,
                vy: (Math.random() - 0.5) * 0.42,
                size: Math.random() * 1.8 + 1.1
            });
        }
    }

    function draw() {
        ctx.clearRect(0, 0, width, height);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.72)';
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.13)';

        particles.forEach((p, i) => {
            p.x += p.vx;
            p.y += p.vy;

            if (p.x < 0 || p.x > width) p.vx *= -1;
            if (p.y < 0 || p.y > height) p.vy *= -1;

            for (let j = i + 1; j < particles.length; j++) {
                const p2 = particles[j];
                const dx = p.x - p2.x;
                const dy = p.y - p2.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < 155) {
                    ctx.globalAlpha = (1 - distance / 155) * 0.7;
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.stroke();
                }
            }

            ctx.globalAlpha = 1;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
        });

        rafId = running ? requestAnimationFrame(draw) : null;
    }

    function start() {
        if (running) return;
        running = true;
        resize();
        createParticles();
        draw();
    }

    function stop() {
        running = false;
        if (rafId) cancelAnimationFrame(rafId);
        rafId = null;
        ctx.clearRect(0, 0, width, height);
    }

    window.addEventListener('resize', () => {
        if (!running) return;
        resize();
        createParticles();
    });

    return { start, stop };
}

function setupTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const savedTheme = localStorage.getItem('theme') || 'dark';
    
    document.body.classList.remove('light-mode');
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        themeToggle.textContent = '🌙';
    } else {
        themeToggle.textContent = '☀️';
    }

    themeToggle.addEventListener('click', (e) => {
        const isLight = document.body.classList.contains('light-mode');
        const x = e.clientX;
        const y = e.clientY;

        if (!document.startViewTransition) {
            // Fallback for browsers without View Transitions
            document.body.classList.toggle('light-mode');
            themeToggle.textContent = isLight ? '☀️' : '🌙';
            localStorage.setItem('theme', isLight ? 'dark' : 'light');
            return;
        }

        // Add visual feedback to button
        themeToggle.style.transition = 'transform 0.2s cubic-bezier(0.4, 0, 0.2, 1)';
        themeToggle.style.transform = 'scale(0.92)';
        
        // Set CSS variables for the click position with smooth spread
        document.documentElement.style.setProperty('--x', x + 'px');
        document.documentElement.style.setProperty('--y', y + 'px');

        // Start the View Transition with smooth easing
        document.startViewTransition(() => {
            document.body.classList.toggle('light-mode');

            const newIsLight = document.body.classList.contains('light-mode');
            themeToggle.textContent = newIsLight ? '🌙' : '☀️';
            localStorage.setItem('theme', newIsLight ? 'light' : 'dark');
        });
        
        // Reset button scale after animation
        setTimeout(() => {
            themeToggle.style.transform = 'scale(1)';
        }, 1200);
    });
}


function setupHeader() {
    const header = document.querySelector('.site-header');
    const siteTitle = header.querySelector('.site-title');
    const heroTitle = document.getElementById('hero-title');
    const navLinks = header.querySelectorAll('.contact-link');

    if (!header || !siteTitle || !heroTitle || !navLinks.length) return;

    const handleResize = () => {
        const isMobile = window.innerWidth <= 768;
        navLinks.forEach(link => {
            const linkType = link.dataset.linkType;
            const icon = iconMap[linkType] || '';
            const text = link.querySelector('.link-text')?.textContent || '';

            if (isMobile) {
                link.innerHTML = icon;
                link.setAttribute('aria-label', text);
            } else {
                link.innerHTML = `<span class="link-text">${text}</span>`;
                link.removeAttribute('aria-label');
            }
        });
    };

    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 10);

        const heroTitleRect = heroTitle.getBoundingClientRect();
        const isVisible = heroTitleRect.bottom < header.offsetHeight;
        if (isVisible) {
            siteTitle.classList.add('visible');
            header.classList.add('nav-visible');
        } else {
            siteTitle.classList.remove('visible');
            header.classList.remove('nav-visible');
        }
    });

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial call
}

function setupParticleBackground() {
    const canvas = document.getElementById('particle-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let mouse = { x: null, y: null, radius: 100 };
    let particles = [];

    window.addEventListener('mousemove', e => {
        mouse.x = e.x;
        mouse.y = e.y;
    });

    window.addEventListener('mouseout', () => {
        mouse.x = null;
        mouse.y = null;
    });

    function resizeCanvas() {
        const dpr = window.devicePixelRatio || 1;
        canvas.width = window.innerWidth * dpr;
        canvas.height = window.innerHeight * dpr;
        canvas.style.width = `${window.innerWidth}px`;
        canvas.style.height = `${window.innerHeight}px`;
        ctx.scale(dpr, dpr);
    }

    function createParticles() {
        particles = [];
        const particleCount = window.innerWidth > 768 ? 200 : 80;
        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                size: Math.random() * 1.5 + 1,
            });
        }
    }

    function animateParticles() {
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        const isDark = !document.body.classList.contains('light-mode');
        const particleColor = isDark ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.8)';
        const lineColor = isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';

        particles.forEach((p, i) => {
            p.x += p.vx;
            p.y += p.vy;

            if (p.x < 0 || p.x > window.innerWidth) p.vx *= -1;
            if (p.y < 0 || p.y > window.innerHeight) p.vy *= -1;

            if (mouse.x && mouse.y) {
                const dx = mouse.x - p.x;
                const dy = mouse.y - p.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < mouse.radius) {
                    p.x -= dx / 20;
                    p.y -= dy / 20;
                }
            }

            ctx.fillStyle = particleColor;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();

            for (let j = i + 1; j < particles.length; j++) {
                const p2 = particles[j];
                const dx = p.x - p2.x;
                const dy = p.y - p2.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < 120) {
                    ctx.beginPath();
                    ctx.strokeStyle = lineColor;
                    ctx.lineWidth = 0.5;
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.stroke();
                }
            }
        });

        requestAnimationFrame(animateParticles);
    }

    window.addEventListener('resize', () => {
        resizeCanvas();
        createParticles();
    });

    resizeCanvas();
    createParticles();
    animateParticles();
}

function setupFloatingAnimation() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes floatingMotion {
            0% { 
                transform: translateY(0px) rotateZ(-0.5deg); 
            }
            33% { 
                transform: translateY(-25px) rotateZ(0.5deg); 
            }
            66% { 
                transform: translateY(-12px) rotateZ(-0.3deg); 
            }
            100% { 
                transform: translateY(0px) rotateZ(-0.5deg); 
            }
        }

        .profile-image-placeholder {
            animation: floatingMotion 7s cubic-bezier(0.42, 0, 0.58, 1) infinite;
        }
    `;
    document.head.appendChild(style);

    const profileImage = document.getElementById('profileImage');
    if (!profileImage) return;

    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                profileImage.style.opacity = Math.max(0, 1 - window.scrollY / 800);
                ticking = false;
            });
            ticking = true;
        }
    });
}

function setupCustomCursor() {
    if (window.matchMedia("(max-width: 768px), (pointer: coarse)").matches) {
        return;
    }

    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');
    if (!cursorDot || !cursorOutline) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    
    const speed = 0.18;
    
    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        cursorDot.style.left = `${mouseX}px`;
        cursorDot.style.top = `${mouseY}px`;
        cursorDot.classList.add('is-visible');
        cursorOutline.classList.add('is-visible');
    });

    window.addEventListener('mouseleave', () => {
        cursorDot.classList.remove('is-visible');
        cursorOutline.classList.remove('is-visible');
    });

    window.addEventListener('mousedown', () => {
        cursorOutline.classList.add('is-pressed');
    });

    window.addEventListener('mouseup', () => {
        cursorOutline.classList.remove('is-pressed');
    });
    
    function animateCursor() {
        cursorX += (mouseX - cursorX) * speed;
        cursorY += (mouseY - cursorY) * speed;
        
        cursorOutline.style.left = `${cursorX}px`;
        cursorOutline.style.top = `${cursorY}px`;
        
        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    const interactiveElements = document.querySelectorAll(
        'a, button, .project-card, .theme-toggle, .tag-filter-btn'
    );

    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorOutline.classList.add('is-hovering');
            cursorDot.classList.add('is-hovering');
        });
        el.addEventListener('mouseleave', () => {
            cursorOutline.classList.remove('is-hovering', 'is-pressed');
            cursorDot.classList.remove('is-hovering');
        });
    });
}

function setupFunFact() {
    const funFactText = document.getElementById('funFactText');
    if (!funFactText) return;

    const funFacts = [
        "Built systems processing billions of records",
        "Saved teams 100+ hrs/week with automation",
        "Data architect by day. Figma perfectionist by night",
        "Fluent in SQL, Python, and Sarcasm",
        "My code is well-documented. My side projects folder is chaos",
        "I design data models and Figma prototypes with equal obsession",
        "First principles thinker. Second coffee drinker"
    ];

    let factIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeFunFact() {
        const currentFact = funFacts[factIndex];
        let delay = isDeleting ? 50 : 100;

        if (isDeleting) {
            funFactText.textContent = currentFact.substring(0, charIndex - 1);
            charIndex--;
        } else {
            funFactText.textContent = currentFact.substring(0, charIndex + 1);
            charIndex++;
        }

        if (!isDeleting && charIndex === currentFact.length) {
            delay = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            factIndex = (factIndex + 1) % funFacts.length;
        }

        setTimeout(typeFunFact, delay);
    }

    typeFunFact();
}

function setupScrollAnimations() {
    const style = document.createElement('style');
    style.textContent = `
        .scroll-animate {
            opacity: 0;
            transform: translateY(60px) scale(0.95);
            transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .scroll-animate.is-visible {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
        .project-card {
            transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .project-card:hover {
            transform: translateY(-12px) scale(1.02);
            box-shadow: 0 22px 52px rgba(0, 0, 0, 0.22);
        }
        .project-card .card-media img, 
        .project-card .card-media video {
            transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), filter 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .project-card:hover .card-media img, 
        .project-card:hover .card-media video {
            transform: scale(1.12);
        }
    `;
    document.head.appendChild(style);

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('is-visible');
                }, index * 80);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -100px 0px' });

    // We will let renderProjects function add the class and observer
}

let allProjects = [];

function setupProjects() {
    const projectGrid = document.getElementById('project-grid');
    if (!projectGrid) return;

    fetch('data/projects.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            if (!data || !data.projects) {
                console.error('Invalid project data format');
                return;
            }
            allProjects = data.projects;
            renderProjects(allProjects);
            setupProjectFilters();
        })
        .catch(error => {
            console.error('Error loading projects:', error);
            projectGrid.innerHTML = '<p style="color: var(--text-tertiary);">Could not load projects. Please check the data file.</p>';
        });
}

function renderProjects(projects) {
    const projectGrid = document.getElementById('project-grid');
    if (!projectGrid) return;
    projectGrid.innerHTML = '';

    projects.forEach((project, index) => {
        const card = document.createElement('div');
        card.className = 'project-card scroll-animate'; // Added scroll-animate class
        card.dataset.skills = project.skills.join(',');
        card.dataset.index = index;
        card.style.animationDelay = `${(index % 6) * 150}ms`;

        const linksHTML = project.links.map(link => {
            const icon = iconMap[link.icon] || iconMap["link"];
            return `<a href="${link.url}" target="_blank" rel="noopener noreferrer" class="card-icon" aria-label="${link.type}" title="${link.type}">${icon}</a>`;
        }).join('');

        card.innerHTML = `
            <div class="card-media">
                ${project.video 
                    ? `<video src="${project.video}" loop muted autoplay playsinline style="width: 100%; height: 100%; object-fit: cover;"></video>`
                    : `<img src="${project.image}" alt="${project.title}" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.parentElement.style.display='none';">`
                }
            </div>
            <div class="card-content">
                <div class="card-header">
                    <div class="item-title">${project.title}</div>
                    <div class="item-description">${project.description}</div>
                </div>
                <div class="card-footer">
                    <div class="card-links">
                        ${linksHTML}
                    </div>
                    <span class="skill-label">${project.skills[0]}</span>
                </div>
            </div>
        `;
        
        projectGrid.appendChild(card);
    });

    // After rendering, find all elements that need to be animated and observe them.
    const animatedElements = document.querySelectorAll('.scroll-animate');
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    animatedElements.forEach(el => {
        observer.observe(el);
    });
}

function setupProjectCardHover() {
    const projectGrid = document.getElementById('project-grid');
    if (!projectGrid) return;

    projectGrid.addEventListener('mousemove', e => {
        const card = e.target.closest('.project-card');
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -3;
        const rotateY = ((x - centerX) / centerX) * 2.5;

        card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`;
        card.style.transition = 'transform 0.1s cubic-bezier(0.4, 0, 0.2, 1)';
        
        // Light shift effect
        const lightX = (x / rect.width) * 100;
        const lightY = (y / rect.height) * 100;
        card.style.setProperty('--light-x', `${lightX}%`);
        card.style.setProperty('--light-y', `${lightY}%`);
    });

    projectGrid.addEventListener('mouseleave', e => {
        const cards = projectGrid.querySelectorAll('.project-card');
        cards.forEach(card => {
            card.style.transform = `perspective(1200px) rotateX(0) rotateY(0) scale3d(1, 1, 1)`;
            card.style.transition = 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
        });
    }, true);

    projectGrid.addEventListener('mouseenter', e => {
        const card = e.target.closest('.project-card');
        if (!card) return;
        card.style.transition = 'transform 0.1s cubic-bezier(0.4, 0, 0.2, 1)';
    }, true);
}

function setupProjectFilters() {
    const tagContainer = document.getElementById('tag-filter-container');
    const projectGrid = document.getElementById('project-grid');
    const noResults = document.getElementById('no-results');
    const clearFiltersBtn = document.getElementById('clear-filters-empty-btn');

    if (!tagContainer || !projectGrid || !noResults || !clearFiltersBtn) {
        return;
    }

    const primarySkills = new Set();
    allProjects.forEach(project => {
        if (project.skills && project.skills.length > 0) {
            primarySkills.add(project.skills[0]);
        }
    });

    tagContainer.innerHTML = '';
    
    const allTag = document.createElement('button');
    allTag.className = 'tag-filter-btn active';
    allTag.textContent = 'All';
    tagContainer.appendChild(allTag);

    primarySkills.forEach(skill => {
        const tag = document.createElement('button');
        tag.className = 'tag-filter-btn';
        tag.textContent = skill;
        tagContainer.appendChild(tag);
    });

    let selectedSkills = new Set();
    const tags = tagContainer.querySelectorAll('.tag-filter-btn');

    function filterProjects() {
        let visibleCount = 0;
        const projectCards = document.querySelectorAll('.project-card');
        
        projectCards.forEach(card => {
            const cardSkills = card.dataset.skills.split(',').map(s => s.trim());
            const isVisible = selectedSkills.size === 0 || [...selectedSkills].some(skill => cardSkills.includes(skill));

            if (isVisible) {
                card.classList.remove('hidden');
                visibleCount++;
            } else {
                card.classList.add('hidden');
            }
        });

        noResults.style.display = visibleCount === 0 ? 'block' : 'none';
    }

    tags.forEach(tag => {
        tag.addEventListener('click', () => {
            const skill = tag.textContent;

            if (skill === 'All') {
                selectedSkills.clear();
            } else {
                if (selectedSkills.has(skill)) {
                    selectedSkills.delete(skill);
                } else {
                    selectedSkills.add(skill);
                }
            }

            tags.forEach(t => {
                const isActive = (t.textContent === 'All' && selectedSkills.size === 0) || selectedSkills.has(t.textContent);
                t.classList.toggle('active', isActive);
            });
            
            allTag.classList.toggle('active', selectedSkills.size === 0);

            filterProjects();
        });
    });

    clearFiltersBtn.addEventListener('click', () => {
        selectedSkills.clear();
        tags.forEach(t => t.classList.remove('active'));
        allTag.classList.add('active');
        filterProjects();
    });
}
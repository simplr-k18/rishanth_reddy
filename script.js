document.addEventListener('DOMContentLoaded', () => {

    // --- Theme Toggle ---
    const themeToggle = document.getElementById('themeToggle');

    const savedTheme = localStorage.getItem('theme') || 'dark';
    const isDark = savedTheme === 'dark';

    if (!isDark) {
        document.body.classList.add('light-mode');
        themeToggle.textContent = '🌙';
    }

    themeToggle.addEventListener('click', () => {
        const isCurrentlyDark = !document.body.classList.contains('light-mode');
        document.body.classList.toggle('light-mode');
        themeToggle.textContent = isCurrentlyDark ? '🌙' : '☀️';
        localStorage.setItem('theme', isCurrentlyDark ? 'light' : 'dark');
    });
    // --- NEW: Particle Animation ---
    const canvas = document.getElementById('particle-canvas');
    const ctx = canvas.getContext('2d');

    let mouse = {
        x: null,
        y: null,
        radius: 100
    };

    window.addEventListener('mousemove', event => {
        mouse.x = event.x;
        mouse.y = event.y;
    });

    window.addEventListener('mouseout', () => {
        mouse.x = undefined;
        mouse.y = undefined;
    });

    let particles = [];

    function resizeCanvas() {
        // --- MODIFIED: Handle high-DPI screens for sharpness ---
        const dpr = window.devicePixelRatio || 1;
        canvas.width = window.innerWidth * dpr;
        canvas.height = window.innerHeight * dpr;
        canvas.style.width = `${window.innerWidth}px`;
        canvas.style.height = `${window.innerHeight}px`;
        ctx.scale(dpr, dpr);
    }

    function createParticles() {
        particles = [];
        const particleCount = window.innerWidth > 768 ? 150 : 50;
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

            // --- NEW: Mouse interaction ---
            let dx = mouse.x - p.x;
            let dy = mouse.y - p.y;
            let distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < mouse.radius) {
                p.x -= dx / 20;
                p.y -= dy / 20;
            }

            ctx.fillStyle = particleColor;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();

            // --- NEW: Draw lines between particles ---
            for (let j = i; j < particles.length; j++) {
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

    // Initialize and handle resize
    window.addEventListener('resize', () => {
        resizeCanvas();
        createParticles();
    });

    // Kick off the animation
    resizeCanvas();
    createParticles();
    animateParticles();

    // --- REVISED: Tag-based Project Filtering System ---
    const tagContainer = document.getElementById('tag-filter-container');
    const projectCards = document.querySelectorAll('.project-grid .section-item');
    const noResults = document.getElementById('no-results');
    const clearFiltersEmptyBtn = document.getElementById('clear-filters-empty-btn');

    // 1. Create and populate tags
    const primarySkills = new Set();
    projectCards.forEach(card => {
        const skills = card.dataset.skills.split(',').map(s => s.trim());
        if (skills.length > 0) {
            primarySkills.add(skills[0]);
        }
    });

    // Add an "All" tag first
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
    
    // --- MODIFIED: Upgraded filtering logic ---
    let selectedSkills = new Set();
    const tags = tagContainer.querySelectorAll('.tag-filter-btn');

    tags.forEach(tag => {
        tag.addEventListener('click', () => {
            const skill = tag.textContent;

            if (skill === 'All') {
                selectedSkills.clear();
            } else {
                // Toggle selection for this tag
                if (selectedSkills.has(skill)) {
                    selectedSkills.delete(skill);
                } else {
                    selectedSkills.add(skill);
                }
            }

            // Update active classes
            tags.forEach(t => {
                if (selectedSkills.has(t.textContent)) {
                    t.classList.add('active');
                } else {
                    t.classList.remove('active');
                }
            });

            // 'All' tag is active only if no other tags are selected
            allTag.classList.toggle('active', selectedSkills.size === 0);

            filterProjects();
        });
    });

    function filterProjects() {
        let visibleCount = 0;
        projectCards.forEach(card => {
            const cardSkills = card.dataset.skills.split(',').map(s => s.trim());
            // Show if no filters are active, or if the card has at least one of the selected skills
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

    // Clear filters when the "Clear Filters" button in the empty state is clicked
    clearFiltersEmptyBtn.addEventListener('click', () => {
        selectedSkills.clear();
        tags.forEach(t => t.classList.remove('active'));
        allTag.classList.add('active'); // Reactivate 'All' tag
        filterProjects();
    });



// --- Fun Fact Typewriter Animation ---
    const funFactText = document.getElementById('funFactText');
    const funFacts = [
        "Can solve a Rubik's cube, but still pushes doors that say pull.",
        "Once tried to debug a rubber duck. The duck was not amused.",
        "My code is like a good joke – it needs a bit of explanation.",
        "Fluent in SQL, Python, and sarcasm.",
        "Believes that the best way to predict the future is to code it."
    ];

    let factIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseDuration = 2000; // 2-second pause after typing a fact

    function typeFunFact() {
        const currentFact = funFacts[factIndex];
        let delay = typingSpeed;

        if (isDeleting) {
            // Deleting text
            funFactText.textContent = currentFact.substring(0, charIndex - 1);
            charIndex--;
            delay = deletingSpeed;
        } else {
            // Typing text
            funFactText.textContent = currentFact.substring(0, charIndex + 1);
            charIndex++;
        }

        // Check if the sentence is fully typed or deleted
        if (!isDeleting && charIndex === currentFact.length) {
            // Pause at the end of the sentence, then start deleting
            delay = pauseDuration;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            // Move to the next fact after deleting
            isDeleting = false;
            factIndex = (factIndex + 1) % funFacts.length; // Loop back to the start
        }

        setTimeout(typeFunFact, delay);
    }

    // Start the animation
    typeFunFact();
});
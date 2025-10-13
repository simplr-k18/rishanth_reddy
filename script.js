document.addEventListener('DOMContentLoaded', () => {

    // --- Theme Toggle ---
    const themeToggle = document.getElementById('themeToggle');
    const bgAnimation = document.getElementById('bgAnimation');

    const savedTheme = localStorage.getItem('theme') || 'dark';
    const isDark = savedTheme === 'dark';

    if (!isDark) {
        document.body.classList.add('light-mode');
        themeToggle.textContent = '🌙';
    }

    createBackgroundAnimation(isDark);

    themeToggle.addEventListener('click', () => {
        const isCurrentlyDark = !document.body.classList.contains('light-mode');
        document.body.classList.toggle('light-mode');
        themeToggle.textContent = isCurrentlyDark ? '🌙' : '☀️';
        localStorage.setItem('theme', isCurrentlyDark ? 'light' : 'dark');
        
        bgAnimation.innerHTML = '';
        createBackgroundAnimation(!isCurrentlyDark);
    });

    function createBackgroundAnimation(isDark) {
        if (isDark) {
            // Snowflakes
            for (let i = 0; i < 30; i++) {
                const snowflake = document.createElement('div');
                snowflake.classList.add('snowflake');
                snowflake.textContent = '❅';
                snowflake.style.left = Math.random() * 100 + '%';
                snowflake.style.animationDuration = (Math.random() * 10 + 10) + 's';
                snowflake.style.animationDelay = Math.random() * 2 + 's';
                snowflake.style.opacity = Math.random() * 0.3 + 0.1;
                bgAnimation.appendChild(snowflake);
            }
        } else {
            // Sunrise Sun
            const sun = document.createElement('div');
            sun.classList.add('sunrise-sun');
            bgAnimation.appendChild(sun);
        }
    }

    // --- Analytics Counter ---
    function updateAnalytics() {
        let visits = 1000;
        const stored = parseInt(localStorage.getItem('portfolioVisits') || '1000');
        visits = stored + Math.floor(Math.random() * 3);
        localStorage.setItem('portfolioVisits', visits);

        const badge = document.getElementById('analyticsBadge');
        const k = (visits / 1000).toFixed(1);
        badge.innerHTML = `
            <div style="font-weight: 600; color: var(--text);">${k}K+ Visited</div>
            <div style="font-size: 12px; margin-top: 4px;">Thanks for stopping by!</div>
        `;
    }

    updateAnalytics();

    // --- Plant Growth Animation ---
    const stages = Array.from({ length: 7 }, (_, i) => document.getElementById(`stage-${i + 1}`));
    let currentStage = 0;

    function growPlant(progress) {
        const stage = Math.floor(progress * stages.length);

        if (stage !== currentStage && stage < stages.length) {
            if (currentStage < stages.length && stages[currentStage]) {
                stages[currentStage].style.opacity = '0';
            }
            if (stage < stages.length && stages[stage]) {
                stages[stage].style.opacity = '1';
            }
            currentStage = stage;
        }
    }

    window.addEventListener('scroll', () => {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = window.scrollY;
        const progress = scrollHeight > 0 ? scrolled / scrollHeight : 0;
        growPlant(progress);
    });
    
    // Initialize plant on load
    growPlant(0);

    // --- Watering Animation ---
    const plantWrapper = document.getElementById('plantWrapper');
    let isWatering = false;

    plantWrapper.addEventListener('click', () => {
        if (isWatering) return;
        isWatering = true;

        // Create water drops
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                const drop = document.createElement('div');
                drop.classList.add('water-drop');
                drop.style.left = (40 + Math.random() * 20) + '%';
                plantWrapper.appendChild(drop);

                // Particles around drop
                for (let j = 0; j < 3; j++) {
                    const particle = document.createElement('div');
                    particle.classList.add('water-particles');
                    const angle = (Math.PI * 2 * j) / 3;
                    const distance = 20;
                    particle.style.setProperty('--tx', `${Math.cos(angle) * distance}px`);
                    particle.style.setProperty('--ty', `${Math.sin(angle) * distance}px`);
                    particle.style.left = '50%';
                    particle.style.top = '-30px';
                    plantWrapper.appendChild(particle);

                    particle.addEventListener('animationend', () => particle.remove());
                }

                drop.addEventListener('animationend', () => drop.remove());
            }, i * 150);
        }

        setTimeout(() => {
            isWatering = false;
        }, 800);
    });
// --- Fun Fact Typewriter Animation ---
    const funFactText = document.getElementById('funFactText');
    const funFacts = [
        "Can solve a Rubik's cube, but still pushes doors that say pull.",
        "Once tried to debug a rubber duck. The duck was not amused.",
        "My code is like a good joke – it needs a bit of explanation.",
        "Fluent in JavaScript, Python, and sarcasm.",
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
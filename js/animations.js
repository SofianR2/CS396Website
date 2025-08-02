document.addEventListener('DOMContentLoaded', function() {
    initAnimations();
});

function initAnimations() {
    // Fade in the main title with a slight bounce effect
    anime({
        targets: 'h1',
        opacity: [0, 1],
        translateY: [-30, 0],
        duration: 1200,
        easing: 'easeOutElastic(1, 0.8)',
        delay: 200
    });

    // Staggered animation for navigation links
    anime({
        targets: '.site-nav a',
        opacity: [0, 1],
        translateX: [-20, 0],
        duration: 800,
        delay: anime.stagger(100, {start: 600}),
        easing: 'easeOutQuart'
    });

    // Animate the motto section with a slide-in effect
    anime({
        targets: '.motto-content h2',
        opacity: [0, 1],
        translateX: [-50, 0],
        duration: 1000,
        delay: 1500,
        easing: 'easeOutQuart'
    });

    anime({
        targets: '.motto-content p',
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 1200,
        delay: 1700,
        easing: 'easeOutQuart'
    });

    // Animate the motto image with a subtle zoom effect
    anime({
        targets: '.motto-image',
        scale: [0.9, 1],
        opacity: [0, 1],
        duration: 1500,
        delay: 2000,
        easing: 'easeOutCubic'
    });

    // Animate the "Our History" button with a pulse effect
    anime({
        targets: '.motto-button-container .btn',
        scale: [0.8, 1],
        opacity: [0, 1],
        duration: 800,
        delay: 2200,
        easing: 'easeOutBack(1.7)'
    });

    // Page specific animations
    initHistoryAnimations();
    initTeamAnimations();
    initContactAnimations();
    addHoverAnimations();
}

// History page specific animations
function initHistoryAnimations() {
    // Animate the history intro section
    anime({
        targets: '.history-intro',
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 1000,
        delay: 800,
        easing: 'easeOutQuart'
    });

    // Animate the jump links with a staggered effect
    anime({
        targets: '.jump-links li',
        opacity: [0, 1],
        translateX: [-20, 0],
        duration: 600,
        delay: anime.stagger(150, {start: 1200}),
        easing: 'easeOutQuart'
    });

    // Animate the history image with a zoom effect
    anime({
        targets: '.history-image',
        scale: [0.8, 1],
        opacity: [0, 1],
        duration: 1200,
        delay: 1400,
        easing: 'easeOutCubic'
    });

    // Animate history section titles with a slide-in effect
    anime({
        targets: '.history-section h2',
        opacity: [0, 1],
        translateX: [-40, 0],
        duration: 800,
        delay: anime.stagger(300, {start: 1600}),
        easing: 'easeOutQuart'
    });

    // Animate history section paragraphs with a fade-up effect
    anime({
        targets: '.history-section p',
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 1000,
        delay: anime.stagger(200, {start: 1800}),
        easing: 'easeOutQuart'
    });

    // Animate trophy categories with a staggered scale effect
    anime({
        targets: '.trophy-category',
        scale: [0.9, 1],
        opacity: [0, 1],
        duration: 800,
        delay: anime.stagger(200, {start: 2200}),
        easing: 'easeOutBack(1.2)'
    });

    // Animate trophy list items with a staggered fade-in
    anime({
        targets: '.trophy-list li',
        opacity: [0, 1],
        translateX: [-15, 0],
        duration: 600,
        delay: anime.stagger(100, {start: 2400}),
        easing: 'easeOutQuart'
    });

    // Animate the trophy summary with a special highlight effect
    anime({
        targets: '.trophy-summary',
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 1200,
        delay: 2800,
        easing: 'easeOutQuart'
    });

    // Add special hover effects for history page elements
    addHistoryHoverAnimations();
}

function addHoverAnimations() {
    // Navigation links hover effect
    const navLinks = document.querySelectorAll('.site-nav a');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            anime({
                targets: this,
                scale: 1.05,
                duration: 200,
                easing: 'easeOutQuad'
            });
        });

        link.addEventListener('mouseleave', function() {
            anime({
                targets: this,
                scale: 1,
                duration: 200,
                easing: 'easeOutQuad'
            });
        });
    });

    // Button hover effect
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            anime({
                targets: this,
                scale: 1.05,
                duration: 200,
                easing: 'easeOutQuad'
            });
        });

        button.addEventListener('mouseleave', function() {
            anime({
                targets: this,
                scale: 1,
                duration: 200,
                easing: 'easeOutQuad'
            });
        });
    });
}

// Team page hover animations
function addTeamHoverAnimations() {
    // Player card hover effect
    const playerCards = document.querySelectorAll('.player-card');
    playerCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            anime({
                targets: this,
                scale: 1.05,
                translateY: -5,
                duration: 300,
                easing: 'easeOutQuad'
            });
        });

        card.addEventListener('mouseleave', function() {
            anime({
                targets: this,
                scale: 1,
                translateY: 0,
                duration: 300,
                easing: 'easeOutQuad'
            });
        });
    });

    // Player photo hover effect
    const playerPhotos = document.querySelectorAll('.player-photo');
    playerPhotos.forEach(photo => {
        photo.addEventListener('mouseenter', function() {
            anime({
                targets: this,
                scale: 1.1,
                duration: 400,
                easing: 'easeOutQuad'
            });
        });

        photo.addEventListener('mouseleave', function() {
            anime({
                targets: this,
                scale: 1,
                duration: 400,
                easing: 'easeOutQuad'
            });
        });
    });

    // Player name hover effect
    const playerNames = document.querySelectorAll('.player-name');
    playerNames.forEach(name => {
        name.addEventListener('mouseenter', function() {
            anime({
                targets: this,
                scale: 1.02,
                duration: 200,
                easing: 'easeOutQuad'
            });
        });

        name.addEventListener('mouseleave', function() {
            anime({
                targets: this,
                scale: 1,
                duration: 200,
                easing: 'easeOutQuad'
            });
        });
    });
}

// Add scroll-triggered animations
function addScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Animate elements when they come into view
                anime({
                    targets: entry.target,
                    opacity: [0, 1],
                    translateY: [30, 0],
                    duration: 800,
                    easing: 'easeOutQuart'
                });
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const scrollElements = document.querySelectorAll('.league-table-container, .motto-section, .history-section, .team-roster, .contact-intro, .contact-form-section');
    scrollElements.forEach(el => observer.observe(el));
}

// Initialize scroll animations when page is fully loaded
window.addEventListener('load', function() {
    addScrollAnimations();
}); 
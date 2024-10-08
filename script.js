/* Toggle Menu */

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

/* Section Obvserver */

function handleIntersection(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            history.replaceState(null, null, `#${sectionId}`);
        }
    });
}

const observer = new IntersectionObserver(handleIntersection, {
    root: null, // Ansichtsfenster
    threshold: 0.5 // Mindestens 50% der Section muss sichtbar sein
});

const sections = document.querySelectorAll('section');
sections.forEach(section => {
    observer.observe(section);
});

/* Toggle Theme */

const themeToggleButton = document.getElementById('theme-toggle');
const bodyElement = document.body;

// Überprüfe, ob ein gespeichertes Theme existiert
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    bodyElement.className = savedTheme;
    themeToggleButton.textContent = savedTheme === 'dark-theme' ? 'Helles Theme aktivieren' : 'Dunkles Theme aktivieren';
}

themeToggleButton.addEventListener('click', () => {
    // Theme umschalten
    if (bodyElement.classList.contains('light-theme')) {
        bodyElement.classList.replace('light-theme', 'dark-theme');
        themeToggleButton.textContent = 'Helles Theme aktivieren'; // Button-Text anpassen
        localStorage.setItem('theme', 'dark-theme'); // Speichere das Theme
    } else {
        bodyElement.classList.replace('dark-theme', 'light-theme');
        themeToggleButton.textContent = 'Dunkles Theme aktivieren'; // Button-Text anpassen
        localStorage.setItem('theme', 'light-theme'); // Speichere das Theme
    }
});

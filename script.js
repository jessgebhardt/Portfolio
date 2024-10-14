function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

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

/* Modal */

var modal = document.getElementById("creditsModal");

var modalBtn = document.getElementById("openModal");

var span = document.getElementsByClassName("close")[0];

modalBtn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

/* Typing/Blinking Animation */
const phrases = ["Software Engineer", "Web Developer", "Frontend Engineer", "Creative Problem Solver"];
const typedTextElement = document.getElementById("typed-text");
const cursor = document.querySelector(".cursor");

let currentPhraseIndex = 0;
let currentCharIndex = 0;
let isTyping = true;

function type() {
    if (isTyping) {
        if (currentCharIndex < phrases[currentPhraseIndex].length) {
            typedTextElement.textContent += phrases[currentPhraseIndex][currentCharIndex];
            currentCharIndex++;
            setTimeout(type, 100); // Typing speed
        } else {
            isTyping = false;
            setTimeout(erase, 1500); // Wait before starting to erase
        }
    }
}

function erase() {
    if (!isTyping) {
        if (currentCharIndex > 0) {
            typedTextElement.textContent = phrases[currentPhraseIndex].substring(0, currentCharIndex - 1);
            currentCharIndex--;
            setTimeout(erase, 100); // Erasing speed
        } else {
            isTyping = true;
            currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length; // Move to next phrase
            setTimeout(type, 500); // Wait before starting to type next phrase
        }
    }
}

type();
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
function openModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "block";
    document.body.classList.add("no-scroll");
}

function closeModal(modal) {
    if (modal) {
        modal.style.display = "none";
        document.body.classList.remove("no-scroll");
    }
}

var closeButtons = document.getElementsByClassName("close");
for (let i = 0; i < closeButtons.length; i++) {
    closeButtons[i].onclick = function() {
        var modal = closeButtons[i].closest('.modal') || closeButtons[i].closest('.credits-modal');
        closeModal(modal);
    };
}

window.onclick = function(event) {
    for (let i = 0; i < closeButtons.length; i++) {
        var modal = closeButtons[i].closest('.modal') || closeButtons[i].closest('.credits-modal');
        if (event.target === modal) {
            closeModal(modal);
        }
    }
}

/* Typing/Blinking Animation */
var phrases = ["Software Engineer", "Web Developer", "Frontend Engineer", "Creative Problem Solver", "Cat Mom"];
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

/* Languages */

const content = {
    en: {
        phrases: ["Software Engineer", "Web Developer", "Frontend Engineer", "Creative Problem Solver"],

        homeNav: "Home",
        aboutNav: "About",
        skillNav: "Skills",
        projectsNav: "Projects",
        contactNav: "Contact",

        myTitles: "I'm a ",

        cvBtn: "Download CV",
        contactBtn: "Contact Me",

        aboutTxt1: "Get To Know More",
        aboutTitle1: "Experience",
        aboutTitle2: "Education",
        aboutTxt2: "1.5 years <br/>Frontend Development",
        aboutTxt3: "I'm passionate about exploring different areas of software development, with a special love for web and game development. The blend of creativity, logic, and technology drives my passion for building meaningful solutions.<br/> As I near the completion of my Bachelor's degree in Software Engineering, I've gained strong experience using JavaScript, C#, and Unity in academic projects. I also have 1.5 years of professional experience as a Web Developer, where I mostly worked with JavaScript, Vue.js, HTML, CSS, and MongoDB.<br/> I'm always eager to learn and excited to continue growing as a developer.",
        aboutTxt4: "Final grade: 1,7",

        expTxt1: "Explore My",

        projectsTxt: "Browse My Recent",
        projectsTitle1: "City Generator",
        projectsTitle2: "Overworld Generator",
        projectsTitle3: "Dialogue Generator",
        projectsTxt1: "This project was part of my bachelorthesis. It developed an approach to automatically create urban areas for video games and other applications using procedural content generation. Various algorithms and techniques were used to customize and optimize the generated city models.",
        projectsTxt2: "Poisson disk sampling is used to determine optimal locations for a specified number of city districts when creating a city. A weighted suitability calculation then assigns each district its appropriate location.<br/> To delineate the boundaries of the districts, I used a modified Voronoi diagram, which also represents the primary streets of the city. Next, secondary roads can be generated using an L-system, adding complexity and realism to the road network. Finally, parcels of land get divided and buildings are automatically placed within those parcels.<br/> All aspects of the city generation process are easily customizable through the Unity Inspector, allowing for different results with each generation.",

        projectsTxt3: "This overworld generator was developed as part of a university group project focused on creating a 2D survival game. My primary responsibility was designing and implementing the overworld generation system.",
        projectsTxt4: "This system generates a group of islands using Perlin noise, which creates realistic terrain features. To define the biomes, I applied two layers of Perlin noise: one for temperature and another for moisture values across the map. Vegetation, including trees and bushes, is placed on the islands using a Wave Function Collapse algorithm. Cave entrances are strategically placed using Poisson disk sampling to ensure a natural distribution, and biome-specific resources are also randomly placed. Additionally, random roads are generated to enhance exploration within the game world. The overall design was inspired by the game <i>Don't Starve</i>.",

        projectsTxt5: "Dialogue Forge is a web application developed as part of a university group project that uses AI to generate dialogue for movies, games, and other media. I worked primarily on the frontend, contributing to the design and implementation of a user-friendly interface. This interface enables users to create and edit dialogues and personas, as well as generate dialogues. My focus was on ensuring that these features were intuitive and easy to use, enhancing the overall user experience.",

        contactTxt1: "Get In Touch",

        creditsBtn: "Credits",

        copyright: "Copyright &#169; 2024 Jessica Gebhardt. All Rights Reserved.",
    },
    de: {
        phrases: ["Software-Ingenieurin", "Webentwicklerin", "Frontend-Ingenieurin", "kreative Problemlöserin"],

        homeNav: "Home",
        aboutNav: "Über mich",
        skillNav: "Fähigkeiten",
        projectsNav: "Projekte",
        contactNav: "Kontakt",

        myTitles: "Ich bin eine ",

        cvBtn: "Lebenslauf",
        contactBtn: "Kontakt",

        aboutTxt1: "Erfahren Sie Mehr",
        aboutTitle1: "Berufserfahrung",
        aboutTitle2: "Bildung",
        aboutTxt2: "1,5 Jahre <br/>Frontend-Entwicklung",
        aboutTxt3: "Ich erforsche leidenschaftlich gerne verschiedene Bereiche der Softwareentwicklung, mit einer besonderen Vorliebe für Web- und Spieleentwicklung. Die Mischung aus Kreativität, Logik und Technologie treibt meine Leidenschaft für die Entwicklung sinnvoller Lösungen an.<br/> Da ich kurz vor dem Abschluss meines Bachelorstudiums in Software Engineering stehe, habe ich in akademischen Projekten viel Erfahrung mit JavaScript, C# und Unity gesammelt. Ich habe auch 1,5 Jahre Berufserfahrung als Webentwicklerin, wo ich hauptsächlich mit JavaScript, Vue.js, HTML, CSS und MongoDB gearbeitet habe.<br/> Ich bin immer wissbegierig und freue mich darauf, als Entwicklerin weiter zu wachsen.",
        aboutTxt4: "Abschlussnote: 1,7",

        expTxt1: "Erkunden Sie Meine",

        projectsTxt: "Durchsuchen Sie Meine Neuesten",
        projectsTitle1: "Stadt Generator",
        projectsTitle2: "2D Welt Generator",
        projectsTitle3: "Dialog Generator",
        projectsTxt1: "Dieses Projekt war Teil meiner Bachelorthesis. Es wurde ein Ansatz zur automatischen Erstellung von Stadtgebieten für Videospiele und andere Anwendungen mit Hilfe von prozeduraler Inhaltsgenerierung entwickelt. Verschiedene Algorithmen und Techniken wurden verwendet, um die generierten Stadtmodelle anzupassen und zu optimieren.",
        projectsTxt2: "Poisson Disk Sampling wird verwendet, um bei der Generierung einer Stadt optimale Standorte für eine bestimmte Anzahl von Stadtteilen zu ermitteln. Durch eine gewichtete Eignungsberechnung wird dann jedem Bezirk ein geeigneter Standort zugewiesen.<br/> Zur Abgrenzung der Stadtteile habe ich ein modifiziertes Voronoi-Diagramm verwendet. Die Grenzen stellen dabei auch die Hauptstraßen der Stadt dar. Anschließend können mit Hilfe eines L-Systems Nebenstraßen erzeugt werden, die das Straßennetz komplexer und realistischer machen. Schließlich werden die Grundstücke aufgeteilt und die Gebäude automatisch auf diesen Parzellen platziert.<br/> Alle Aspekte des Stadterzeugungsprozesses sind über den Unity Inspector leicht anpassbar, so dass bei jeder Generiernung andere Ergebnisse erzielt werden können.",
        
        projectsTxt3: "Dieser Overworld-Generator wurde im Rahmen eines Gruppenprojekts an der Universität entwickelt, bei dem es um die Entwicklung eines 2D-Survival-Spiels ging. Meine Hauptaufgabe war das Design und die Implementierung des Overworld-Generatorsystems.",
        projectsTxt4: "Dieses System erzeugt eine Gruppe von Inseln unter Verwendung von Perlin Noise. Um die Biome zu definieren, habe ich zwei Schichten von Perlin Noise überlagert: eine für die Temperatur und eine für die Feuchtigkeitswerte auf der Karte. Die Vegetation, einschließlich Bäumen und Sträuchern, wurde mit Hilfe eines Wave Function Collapse-Algorithmus auf den Inseln platziert. Höhleneingänge werden strategisch mittels Poisson disk sampling platziert, um eine natürliche Verteilung zu gewährleisten, und biome-spezifische Ressourcen werden ebenfalls zufällig platziert. Zusätzlich werden zufällige Straßen generiert, um die Erkundung der Spielwelt zu erleichtern. Das Gesamtdesign wurde von dem Spiel <i>Don't Starve</i> inspiriert.",

        projectsTxt5: "Dialogue Forge ist eine Webanwendung, die im Rahmen eines gemeinschaftlichen Hochschulprojekts entwickelt wurde und KI nutzt, um Dialoge für Filme, Spiele und andere Medien zu generieren. Ich habe hauptsächlich am Frontend gearbeitet und an der Konzeption und Implementierung einer benutzerfreundlichen Oberfläche mitgewirkt. Diese Schnittstelle ermöglicht es Benutzern, Dialoge und Personas zu erstellen und zu bearbeiten sowie Dialoge zu generieren. Ich habe mich darauf konzentriert sicherzustellen, dass diese Funktionen intuitiv und einfach zu benutzen sind, um das Gesamterlebnis für die Nutzer*innen zu verbessern.",

        contactTxt1: "Kontaktieren Sie Mich",

        creditsBtn: "Impressum",

        copyright: "Urheberrecht &#169; 2024 Jessica Gebhardt. Alle Rechte vorbehalten."
    }
};

let currentLanguage = 'en';
const userLang = navigator.language || navigator.userLanguage;
currentLanguage = userLang.startsWith('de') ? 'de' : 'en';
document.getElementById('languageToggle').innerText = currentLanguage === 'en' ? 'EN' : 'DE';

const setLanguage = (language) => {
    document.getElementById('myTitles').textContent = content[language].myTitles;
    phrases = content[language].phrases;

    document.getElementById('aboutNavDesktop').innerText = content[language].aboutNav;
    document.getElementById('aboutNavHamburger').innerText = content[language].aboutNav;
    document.getElementById('skillNavDesktop').innerText = content[language].skillNav;
    document.getElementById('skillNavHamburger').innerText = content[language].skillNav;
    document.getElementById('projectsNavDesktop').innerText = content[language].projectsNav;
    document.getElementById('projectsNavHamburger').innerText = content[language].projectsNav;
    document.getElementById('contactNavDesktop').innerText = content[language].contactNav;
    document.getElementById('contactNavHamburger').innerText = content[language].contactNav;

    document.getElementById('cvBtn').innerText = content[language].cvBtn;
    document.getElementById('contactBtn').innerText = content[language].contactBtn;

    document.getElementById('aboutTxt1').innerText = content[language].aboutTxt1;
    document.getElementById('aboutTitle').innerText = content[language].aboutNav;
    document.getElementById('aboutTitle1').innerText = content[language].aboutTitle1;
    document.getElementById('aboutTxt2').innerHTML = content[language].aboutTxt2;
    document.getElementById('aboutTitle2').innerText = content[language].aboutTitle2;
    document.getElementById('aboutTxt3').innerHTML = content[language].aboutTxt3;
    document.getElementById('aboutTxt4').innerHTML = content[language].aboutTxt4;

    document.getElementById('expTxt1').innerText = content[language].expTxt1;
    document.getElementById('expTitle').innerText = content[language].skillNav;
    // document.getElementById('expTitle').innerText = content[language].skillNav; Intermediate und so

    document.getElementById('projectsTxt').innerText = content[language].projectsTxt;
    document.getElementById('projectsTitle').innerText = content[language].projectsNav;
    document.getElementById('projectsTitle1').innerText = content[language].projectsTitle1;
    document.getElementById('projectsTitle2').innerText = content[language].projectsTitle2;
    document.getElementById('projectsTitle3').innerText = content[language].projectsTitle3;
    document.getElementById('projectsTitle4').innerText = content[language].projectsTitle1 + ":";
    document.getElementById('projectsTitle5').innerText = content[language].projectsTitle2 + ":";
    document.getElementById('projectsTitle6').innerText = content[language].projectsTitle3 + ":";
    document.getElementById('projectsTxt1').innerText = content[language].projectsTxt1;
    document.getElementById('projectsTxt2').innerHTML = content[language].projectsTxt2;
    document.getElementById('projectsTxt3').innerText = content[language].projectsTxt3;
    document.getElementById('projectsTxt4').innerHTML = content[language].projectsTxt4;
    document.getElementById('projectsTxt5').innerText = content[language].projectsTxt5;

    document.getElementById('contactTxt1').innerText = content[language].contactTxt1;
    document.getElementById('contactTitle').innerText = content[language].contactNav;
    
    document.getElementById('creditsBtn').innerText = content[language].creditsBtn;
    document.getElementById('creditsTitle').innerText = content[language].creditsBtn + ":";

    document.getElementById('homeNav').innerText = content[language].homeNav;
    document.getElementById('aboutNav').innerText = content[language].aboutNav;
    document.getElementById('skillNav').innerText = content[language].skillNav;
    document.getElementById('projectsNav').innerText = content[language].projectsNav;

    document.getElementById('copyright').innerHTML = content[language].copyright;
};

document.getElementById('languageToggle').addEventListener('click', () => {
    currentLanguage = currentLanguage === 'en' ? 'de' : 'en';
    setLanguage(currentLanguage);
    document.getElementById('languageToggle').innerText = currentLanguage === 'en' ? 'EN' : 'DE';
    type();
});

// Set initial language
setLanguage(currentLanguage);

/* Theme Toggle */
const themeToggleButton = document.getElementById('themeToggle');
let isDarkMode = false;

if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme');
    themeToggleButton.textContent = '🌜';
    isDarkMode = true;
}

themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    
    if (isDarkMode) {
        themeToggleButton.textContent = '🌞';
        localStorage.setItem('theme', 'light');
    } else {
        themeToggleButton.textContent = '🌜';
        localStorage.setItem('theme', 'dark');
    }
    
    isDarkMode = !isDarkMode;
});
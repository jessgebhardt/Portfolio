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

const currentYear = new Date().getFullYear();

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
        aboutTxt3: "I'm passionate about exploring different areas of software development, with a special love for web and game development. The blend of creativity, logic, and technology drives my passion for building meaningful solutions.<br/> During my Bachelor's degree in Software Engineering, I've gained strong experience using JavaScript, C#, and Unity in academic projects. I also have 1.5 years of professional experience as a Web Developer, where I mostly worked with JavaScript, Vue.js, HTML, CSS, and MongoDB.<br/> I'm always eager to learn and excited to continue growing as a developer.",
        aboutTxt4: "Final grade: 1,7",

        expTxt1: "Explore My",

        projectsTxt: "Browse My Recent",
        projectsTitle1: "City Generator",
        projectsTitle2: "Overworld Generator",
        projectsTitle3: "Dialogue Generator",
        projectsTitle4: "First Person Shooter",
        projectsTitle5: "Catnoid Game",
        projectsTxtCity1: "This project was part of my bachelorthesis. It developed an approach to automatically create urban areas for video games and other applications using procedural content generation. Various algorithms and techniques were used to customize and optimize the generated city models.",
        projectsTxtCity2: "Poisson disk sampling is used to determine optimal locations for a specified number of city districts when creating a city. A weighted suitability calculation then assigns each district its appropriate location.<br/> To delineate the boundaries of the districts, I used a modified Voronoi diagram, which also represents the primary streets of the city. Next, secondary roads can be generated using an L-system, adding complexity and realism to the road network. Finally, parcels of land get divided and buildings are automatically placed within those parcels.<br/> All aspects of the city generation process are easily customizable through the Unity Inspector, allowing for different results with each generation.",

        projectsTxtWorld1: "This overworld generator was developed as part of a university group project focused on creating a 2D survival game. My primary responsibility was designing and implementing the overworld generation system.",
        projectsTxtWorld2: "This system generates a group of islands using Perlin noise, which creates realistic terrain features. To define the biomes, I applied two layers of Perlin noise: one for temperature and another for moisture values across the map. Vegetation, including trees and bushes, is placed on the islands using a Wave Function Collapse algorithm. Cave entrances are strategically placed using Poisson disk sampling to ensure a natural distribution, and biome-specific resources are also randomly placed. Additionally, random roads are generated to enhance exploration within the game world. The overall design was inspired by the game <i>Don't Starve</i>.",

        projectsTxtDialogue1: "Dialogue Forge is a web application developed as part of a university group project that uses AI to generate dialogue for movies, games, and other media. I worked primarily on the frontend, contributing to the design and implementation of a user-friendly interface. This interface enables users to create and edit dialogues and personas, as well as generate dialogues. My focus was on ensuring that these features were intuitive and easy to use, enhancing the overall user experience.",

        projectsTxtFPS1: "This game was created as part of a university course. The task was to develop a first person shooter in which enemies are animated, can recognize, pursue and attack the player, but can also be injured and defeated in the process.",
        projectsTxtFPS2: "I realized the enemies as soldiers. They don't move rigidly along a route, but head for certain points on the map one after the other and find their own way there. When they spot the player, they take up the chase. If they lose sight of him again, they reorient themselves and run back to the nearest target point to continue their patrol.",
        projectsTxtFPS3: "The player can run, jump, climb, shoot and use a grappling hook to pull themselves up and hold on to walls. There is also a trampoline on the map that can be used to jump particularly high.",
        projectsTxtFPS4: "I especially enjoyed the level design, I wanted to create an environment that was not only functional, but also visually interesting and varied.",

        projectsTxtArkanoid1: "This game was one of the first projects I developed as part of a university course using Unity and C#. The task was to program a simple game in the style of Arkanoid and to implement certain requirements, for example a score and life display as well as collectable power-ups.",
        projectsTxtArkanoid2: "Another feature was the use of different 'strong' blocks that cannot be destroyed with a single hit. Their resistance can be recognized by their color, which changes depending on the number of hits, so you can see directly how many times the ball still has to be hit to destroy the block.",
        projectsTxtArkanoid3: "As I really enjoyed the development, I expanded the game beyond the mandatory requirements. Among other things, I added 'Game-Over' and 'You Won' screens, sound effects, a restart function and a playful cat theme.",

        contactTxt1: "Get In Touch",

        creditsBtn: "Credits",

        copyright: `Copyright &#169; ${currentYear} Jessica Gebhardt. All Rights Reserved.`,
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
        aboutTxt3: "Ich erforsche leidenschaftlich gerne verschiedene Bereiche der Softwareentwicklung, mit einer besonderen Vorliebe für Web- und Spieleentwicklung. Die Mischung aus Kreativität, Logik und Technologie treibt meine Leidenschaft für die Entwicklung sinnvoller Lösungen an.<br/> Während meines Bachelorstudiums in Software Engineering, habe ich in akademischen Projekten viel Erfahrung mit JavaScript, C# und Unity gesammelt. Ich habe auch 1,5 Jahre Berufserfahrung als Webentwicklerin, wo ich hauptsächlich mit JavaScript, Vue.js, HTML, CSS und MongoDB gearbeitet habe.<br/> Ich bin immer wissbegierig und freue mich darauf, als Entwicklerin weiter zu wachsen.",
        aboutTxt4: "Abschlussnote: 1,7",

        expTxt1: "Erkunden Sie Meine",

        projectsTxt: "Durchsuchen Sie Meine Neuesten",
        projectsTitle1: "Stadt Generator",
        projectsTitle2: "2D Welt Generator",
        projectsTitle3: "Dialog Generator",
        projectsTitle4: "First Person Shooter",
        projectsTitle5: "Catnoid Spiel",
        projectsTxtCity1: "Dieses Projekt war Teil meiner Bachelorthesis. Es wurde ein Ansatz zur automatischen Erstellung von Stadtgebieten für Videospiele und andere Anwendungen mit Hilfe von prozeduraler Inhaltsgenerierung entwickelt. Verschiedene Algorithmen und Techniken wurden verwendet, um die generierten Stadtmodelle anzupassen und zu optimieren.",
        projectsTxtCity2: "Poisson Disk Sampling wird verwendet, um bei der Generierung einer Stadt optimale Standorte für eine bestimmte Anzahl von Stadtteilen zu ermitteln. Durch eine gewichtete Eignungsberechnung wird dann jedem Bezirk ein geeigneter Standort zugewiesen.<br/> Zur Abgrenzung der Stadtteile habe ich ein modifiziertes Voronoi-Diagramm verwendet. Die Grenzen stellen dabei auch die Hauptstraßen der Stadt dar. Anschließend können mit Hilfe eines L-Systems Nebenstraßen erzeugt werden, die das Straßennetz komplexer und realistischer machen. Schließlich werden die Grundstücke aufgeteilt und die Gebäude automatisch auf diesen Parzellen platziert.<br/> Alle Aspekte des Stadterzeugungsprozesses sind über den Unity Inspector leicht anpassbar, so dass bei jeder Generiernung andere Ergebnisse erzielt werden können.",
        
        projectsTxtWorld1: "Dieser Overworld-Generator wurde im Rahmen eines Gruppenprojekts an der Universität entwickelt, bei dem es um die Entwicklung eines 2D-Survival-Spiels ging. Meine Hauptaufgabe war das Design und die Implementierung des Overworld-Generatorsystems.",
        projectsTxtWorld2: "Dieses System erzeugt eine Gruppe von Inseln unter Verwendung von Perlin Noise. Um die Biome zu definieren, habe ich zwei Schichten von Perlin Noise überlagert: eine für die Temperatur und eine für die Feuchtigkeitswerte auf der Karte. Die Vegetation, einschließlich Bäumen und Sträuchern, wurde mit Hilfe eines Wave Function Collapse-Algorithmus auf den Inseln platziert. Höhleneingänge werden strategisch mittels Poisson disk sampling platziert, um eine natürliche Verteilung zu gewährleisten, und biome-spezifische Ressourcen werden ebenfalls zufällig platziert. Zusätzlich werden zufällige Straßen generiert, um die Erkundung der Spielwelt zu erleichtern. Das Gesamtdesign wurde von dem Spiel <i>Don't Starve</i> inspiriert.",

        projectsTxtDialogue1: "Dialogue Forge ist eine Webanwendung, die im Rahmen eines gemeinschaftlichen Hochschulprojekts entwickelt wurde und KI nutzt, um Dialoge für Filme, Spiele und andere Medien zu generieren. Ich habe hauptsächlich am Frontend gearbeitet und an der Konzeption und Implementierung einer benutzerfreundlichen Oberfläche mitgewirkt. Diese Schnittstelle ermöglicht es Benutzern, Dialoge und Personas zu erstellen und zu bearbeiten sowie Dialoge zu generieren. Ich habe mich darauf konzentriert sicherzustellen, dass diese Funktionen intuitiv und einfach zu benutzen sind, um das Gesamterlebnis für die Nutzer*innen zu verbessern.",

        projectsTxtFPS1: "Dieses Spiel entstand im Rahmen eines Hochschulkurses. Die Aufgabe war, einen First Person Shooter zu entwickeln, in dem Gegner animiert sind, den Spieler erkennen, verfolgen und angreifen können, dabei aber auch selbst verletzt werden und besiegt werden können.",
        projectsTxtFPS2: "Ich habe die Gegner als Soldaten umgesetzt. Sie bewegen sich nicht starr auf einer Route, sondern steuern nacheinander bestimmte Punkte auf der Karte an und suchen sich dabei eigenständig den Weg dorthin. Wenn sie den Spieler entdecken, nehmen sie die Verfolgung auf. Verlieren sie ihn wieder aus dem Blick, orientieren sie sich neu und laufen zum nächstgelegenen Zielpunkt zurück, um ihre Patrouille fortzusetzen.",
        projectsTxtFPS3: "Der Spieler kann laufen, springen, klettern, schießen und sich mit einer Grappling Hook an Wände hochziehen und festhalten. Außerdem befindet sich ein Trampolin auf der Karte, mit dem man besonders hoch springen kann.",
        projectsTxtFPS4: "Mir hat vor allem das Level-Design viel Spaß gemacht, ich wollte eine Umgebung schaffen, die nicht nur funktional, sondern auch visuell interessant ist.",

        projectsTxtArkanoid1: "Dieses Spiel war eines der ersten Projekte, das ich im Rahmen eines Hochschulkurses mit Unity und C# entwickelt habe. Die Aufgabe bestand darin, ein einfaches Spiel im Stil von Arkanoid zu programmieren und dabei bestimmte Anforderungen umzusetzen, zum Beispiel eine Punkte- und Lebensanzeige sowie sammelbare Power-Ups.",
        projectsTxtArkanoid2: "Ein weiteres Feature war der Einsatz von verschieden 'starken' Blöcken, die nicht mit einem einzigen Treffer zerstört werden können. Ihre Widerstandsfähigkeit erkennt man an der Farbe, je nach Trefferzahl ändert sich diese, sodass man direkt sehen kann, wie oft der Ball noch getroffen werden muss, um den Block zu zerstören.",
        projectsTxtArkanoid3: "Da mir die Entwicklung großen Spaß gemacht hat, habe ich das Spiel über die Pflichtanforderungen hinaus erweitert. Ich habe unter anderem 'Game-Over'- und 'You Won'-Screens, Soundeffekte, eine Neustart-Funktion sowie ein verspieltes Katzen-Theme ergänzt.",

        contactTxt1: "Kontaktieren Sie Mich",

        creditsBtn: "Impressum",

        copyright: `Urheberrecht &#169; ${currentYear} Jessica Gebhardt. Alle Rechte vorbehalten.`
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
    document.getElementById('projectsTitle4').innerText = content[language].projectsTitle4;
    document.getElementById('projectsTitle5').innerText = content[language].projectsTitle5;
    document.getElementById('projectsTitle10').innerText = content[language].projectsTitle1 + ":";
    document.getElementById('projectsTitle20').innerText = content[language].projectsTitle2 + ":";
    document.getElementById('projectsTitle30').innerText = content[language].projectsTitle3 + ":";
    document.getElementById('projectsTitle40').innerText = content[language].projectsTitle4 + ":";
    document.getElementById('projectsTitle50').innerText = content[language].projectsTitle5 + ":";
    document.getElementById('projectsTxtCity1').innerText = content[language].projectsTxtCity1;
    document.getElementById('projectsTxtCity2').innerHTML = content[language].projectsTxtCity2;
    document.getElementById('projectsTxtWorld1').innerText = content[language].projectsTxtWorld1;
    document.getElementById('projectsTxtWorld2').innerHTML = content[language].projectsTxtWorld2;
    document.getElementById('projectsTxtDialogue1').innerText = content[language].projectsTxtDialogue1;
    document.getElementById('projectsTxtFPS1').innerText = content[language].projectsTxtFPS1;
    document.getElementById('projectsTxtFPS2').innerText = content[language].projectsTxtFPS2;
    document.getElementById('projectsTxtFPS3').innerText = content[language].projectsTxtFPS3;
    document.getElementById('projectsTxtFPS4').innerText = content[language].projectsTxtFPS4;
    document.getElementById('projectsTxtArkanoid1').innerText = content[language].projectsTxtArkanoid1;
    document.getElementById('projectsTxtArkanoid2').innerText = content[language].projectsTxtArkanoid2;
    document.getElementById('projectsTxtArkanoid3').innerText = content[language].projectsTxtArkanoid3;

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
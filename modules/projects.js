function switchProjects(num, change = false) {
    // Get current language
    var currentLan;
    const UKFlag = document.getElementById("settingUKFlag");
    if (UKFlag.classList.contains("settingCurrentFlag")) { currentLan = 0; }
    else { currentLan = 1; }

    // List of projects
    const project_list = [
        {
            en_title: "My (first) Portfolio Website",
            nl_title: "Mijn (eerste) Portfolio Website"
        },
        {
            en_title: "Barber's Website",
            nl_title: "Kapper's Website"
        },
        {
            en_title: "Spark (2.5D Platformer Game)",
            nl_title: "Spark (2.5D Platformer Game)"
        },
        {
            en_title: "Accident Prediction (Quintor)",
            nl_title: "Ongevallen Voorspelling (Quintor)"
        },
        {
            en_title: "This Portfolio Website (v2)",
            nl_title: "Deze Portfolio Website (v2)"
        },
        {
            en_title: "PCB Recommender System (Omron)",
            nl_title: "PCB Recommender Systeem (Omron)"
        },
        {
            en_title: "T.B.D.",
            nl_title: "T.B.D."
        },
        {
            en_title: "T.B.D.",
            nl_title: "T.B.D."
        }
    ];

    // Get project windows and arrows
    const window1 = document.getElementById("projectWindow1");
    const window2 = document.getElementById("projectWindow2");
    const window3 = document.getElementById("projectWindow3");
    const window4 = document.getElementById("projectWindow4");
    const windows = [window1, window2, window3, window4];
    const arrowLeft = document.getElementById("projectLeft");
    const arrowRight = document.getElementById("projectRight");

    // Check which page is currently shown
    if (change) { num = arrowRight.classList.contains("disabledProjectArrow") ? 1 : 0; }

    // Switch projects
    if (num == 0) { // 'Page' 1
        // Enable/disable arrows
        arrowRight.classList.remove("disabledProjectArrow");
        arrowRight.setAttribute("onclick", "switchProjects(1)");
        arrowLeft.classList.add("disabledProjectArrow");
        arrowLeft.setAttribute("onclick", "");

        // Change project windows
        for (let i = 0; i < windows.length; i++) { windows[i].childNodes[0].style.opacity = "0.1"; }
        for (let i = 0; i < windows.length; i++) {
            const randomTime = Math.floor(Math.random() * (2000 - 500 + 1) + 500);
            setTimeout(() => {
                const randomIndex = Math.floor(Math.random() * windows.length);
                var title = currentLan == 0 ? project_list[parseInt(windows[randomIndex].id.slice(-1)) - 1].en_title : project_list[parseInt(windows[randomIndex].id.slice(-1)) - 1].nl_title;
                windows[randomIndex].innerHTML = `<p class='projectFlatText'>${title}</p>`;
                windows.splice(randomIndex, 1);
            }, randomTime);
        }
        for (let i = 0; i < windows.length; i++) { windows[i].setAttribute("onclick", `openProject(${i})`) }
    } else if (num == 1) { // 'Page' 2
        // Enable/disable arrows
        arrowRight.classList.add("disabledProjectArrow");
        arrowRight.setAttribute("onclick", "");
        arrowLeft.classList.remove("disabledProjectArrow");
        arrowLeft.setAttribute("onclick", "switchProjects(0)");

        // Change project windows
        for (let i = 0; i < windows.length; i++) { windows[i].childNodes[0].style.opacity = "0.1"; }
        for (let i = 0; i < windows.length; i++) {
            const randomTime = Math.floor(Math.random() * (2000 - 500 + 1) + 500);
            setTimeout(() => {
                const randomIndex = Math.floor(Math.random() * windows.length);
                var title = currentLan == 0 ? project_list[parseInt(windows[randomIndex].id.slice(-1)) + 3].en_title : project_list[parseInt(windows[randomIndex].id.slice(-1)) + 3].nl_title;
                windows[randomIndex].innerHTML = `<p class='projectFlatText'>${title}</p>`;
                windows.splice(randomIndex, 1);
            }, randomTime);
        }
        for (let i = 0; i < windows.length; i++) { windows[i].setAttribute("onclick", `openProject(${i + 4})`) }
    }
}

function openProject(index, change = false) {
    // Get current language
    var currentLan;
    const UKFlag = document.getElementById("settingUKFlag");
    if (UKFlag.classList.contains("settingCurrentFlag")) { currentLan = 0; }
    else { currentLan = 1; }

    // Check if project info language should be updated
    if (change) {
        if (document.getElementById("projectInfo").style.display != "flex") { index = -1; }
        else {
            const projectCurrent = document.getElementById("projectCurrent").innerHTML;
            index = parseInt(projectCurrent);
        }
    }

    // List of projects
    const project_list = [
        { // First portfolio website
            eng_title: "My (first) Portfolio Website",
            eng_description: `
                <p class='tags'>
                    <span class='tag html'>HTML</span>
                    <span class='tag css'>CSS</span>
                    <span class='tag js'>JS</span>
                </p>
                <p class='links'>
                    <a class='link' href='https://github.com/JoepvanDam/portfolio' target='_blank'>GitHub</a>
                    <a class='link' href='https://joepvandam.github.io/portfolio/' target='_blank'>Live Page</a>
                </p>
                <p>
                    All projects before this were for fun, small, and most of them were never finished. This was the first project that I did for my <a href='https://www.hu.nl/voltijd-opleidingen/open-ict' target='_blank'>study - Open ICT</a> (page in Dutch), and the first one I actually finished. The site you are currently on is actually an improvement on my first portfolio, you'll notice they look quite similar.
                </p>
                <p>
                    I designed the website in Figma and developed it using HTML, CSS, and JavaScript. Fun fact: most items on the page are CSS-styled divs (just like on this page).
                </p>
                <p>
                    <b>My roles:</b> Designer and (Front-End) Developer<br>
                </p>
                
            `,
            nl_title: "Mijn (eerste) Portfolio Website",
            nl_description: `
                <p class='tags'>
                    <span class='tag html'>HTML</span>
                    <span class='tag css'>CSS</span>
                    <span class='tag js'>JS</span>
                </p>
                <p class='links'>
                    <a class='link' href='https://github.com/JoepvanDam/portfolio' target='_blank'>GitHub</a>
                    <a class='link' href='https://joepvandam.github.io/portfolio/' target='_blank'>Live Page</a>
                </p>
                <p>
                    Alle projecten voor deze waren voor de lol, klein, en de meeste waren nooit af. Dit was het eerste project dat ik deed voor mijn <a href='https://www.hu.nl/voltijd-opleidingen/open-ict' target='_blank'>studie - Open ICT</a>, en de eerste die ik daadwerkelijk afmaakte. De site waar je nu op zit is eigenlijk een verbetering van mijn eerste portfolio, je zult merken dat ze erg op elkaar lijken.
                </p>
                <p>
                    Ik heb de website ontworpen in Figma en ontwikkeld met HTML, CSS, en JavaScript. Leuk feitje: de meeste items op de pagina zijn CSS-gestylde divs (just like on this page).
                </p>
                <p>
                    <b>Mijn rollen:</b> Ontwerper en (Front-End) Developer<br>
                </p>
            `
        },
        { // Barber's website
            eng_title: "Barber's Website",
            eng_description: `
                <p class='tags'>
                    <span class='tag html'>HTML</span>
                    <span class='tag css'>CSS</span>
                    <span class='tag js'>JS</span>
                    <span class='tag php'>PHP</span>
                </p>
                <p>
                    This was my second project for my <a href='https://www.hu.nl/voltijd-opleidingen/open-ict' target='_blank'>study - Open ICT</a> (page in Dutch). The assignment was to create a website for a fictional barber shop. This was the first time I worked with a group of people, which started out a bit rough, but we eventually found our way and finished the project. Sadly, the website is no longer online.
                </p>
                <p>
                    As front-end developer, I helped design the website in Figma and developed it using HTML, CSS, JavaScript, and (new here) PHP. The website had a full booking system, a login system, and a working dashboard for the barbers to see who is coming for an appointment. The website was also responsive, and had a dark mode. We hosted the website locally using XAMPP.
                </p>
                <p>
                    <b>My roles:</b> Designer and (Front-End) Developer<br>
                </p>
            `,
            nl_title: "Kapper's Website",
            nl_description: `
                <p class='tags'>
                    <span class='tag html'>HTML</span>
                    <span class='tag css'>CSS</span>
                    <span class='tag js'>JS</span>
                    <span class='tag php'>PHP</span>
                </p>
                <p>
                    Dit was mijn tweede project voor mijn <a href='https://www.hu.nl/voltijd-opleidingen/open-ict' target='_blank'>studie - Open ICT</a>. De opdracht was om een website te maken voor een fictieve kapper. Dit was de eerste keer dat ik met een groep mensen werkte, wat in het begin wat stroef verliep, maar uiteindelijk vonden we onze weg en maakten we het project af. Helaas is de website niet meer online.
                </p>
                <p>
                    Als front-end ontwikkelaar hielp ik met het ontwerpen van de website in Figma en ontwikkelde ik het met HTML, CSS, JavaScript, en (nieuw hier) PHP. De website had een volledig boekingssysteem, een inlogsysteem, en een werkend dashboard voor de kappers om te zien wie er voor een afspraak komt. De website was ook responsive, en had een donkere modus. We hostten de website lokaal met XAMPP.
                </p>
                <p>
                    <b>Mijn rollen:</b> Ontwerper en (Front-End) Developer<br>
                </p>
            `
        },
        { // Spark (2.5D Platformer Game)
            eng_title: "Spark (2.5D Platformer Game)",
            eng_description: `
                <p class='tags'>
                    <span class='tag unity'>Unity</span>
                    <span class='tag csharp'>C#</span>
                </p>
                <p class='links'>
                    <a class='link' href='https://hu-ebp.github.io/game/' target='_blank'>Game (WebGL)</a>
                    <a class='link' href='https://github.com/HU-EBP/game' target='_blank'>GitHub</a>
                </p>
                <p>
                    For the third and last project of my first year in the <a href='https://www.hu.nl/voltijd-opleidingen/open-ict' target='_blank'>study - Open ICT</a>, we had to create some kind of game. We chose to make a 2.5D platformer game, which we called Spark. We decided on using Unity / C# to develop it. The game was originally supposed to teach the player programming by solving puzzles, but we didn't have enough time to finish it. So we implemented a different but similar puzzle mechanic instead.
                </p>
                <p>
                    I did most of the in-game logic (player movement, camera, puzzle mechanics, etc.) and helped a lot with the level designs. I learned a lot about C# and Unity during this project, and I had a lot of fun working on it.
                </p>
                <p>
                    <b>My roles:</b> (Game) Developer and Level Designer<br>
                </p>
            `,
            nl_title: "Spark (2.5D Platformer Game)",
            nl_description: `
                <p class='tags'>
                    <span class='tag unity'>Unity</span>
                    <span class='tag csharp'>C#</span>
                </p>
                <p class='links'>
                    <a class='link' href='https://hu-ebp.github.io/game/' target='_blank'>Game (WebGL)</a>
                    <a class='link' href='https://github.com/HU-EBP/game' target='_blank'>GitHub</a>
                </p>
                <p>
                    Voor het derde en laatste project van mijn eerste jaar in de <a href='https://www.hu.nl/voltijd-opleidingen/open-ict' target='_blank'>studie - Open ICT</a>, moesten we een soort game maken. We kozen ervoor om een 2D platformer game te maken, die we Spark noemden. We besloten om Unity / C# te gebruiken om het te ontwikkelen. De game was oorspronkelijk bedoeld om de speler programmeren te leren door puzzels op te lossen, maar we hadden niet genoeg tijd om het af te maken. Dus implementeerden we in plaats daarvan een ander maar vergelijkbaar puzzelmechanisme.
                </p>
                <p>
                    Ik heb het overgrote deel van de in-game logica (speler beweging, camera, puzzel mechanieken, etc.) gemaakt en hielp veel met de level designs. Ik heb veel geleerd over C# en Unity tijdens dit project, en ik had er veel plezier mee.
                </p>
                <p>
                    <b>Mijn rollen:</b> (Game) Developer en Level Designer<br>
                </p>
            `
        },
        { // Accident Prediction (Quintor)
            eng_title: "Accident Prediction (Quintor)",
            eng_description: `
                <p class='tags'>
                    <span class='tag python'>Python</span>
                    <span class='tag react'>React</span>
                </p>
                <p>
                    For the first project of my second year in the <a href='https://www.hu.nl/voltijd-opleidingen/open-ict' target='_blank'>study - Open ICT</a> we worked for a real client: <a href='https://www.quintor.nl/' target='_blank'>Quintor</a>. The assignment was to predict the risk of accidents on a particular road, based on various data sources (weather, traffic density, traffic speed, etc.). We used Python to develop the prediction model and some back-end code, and we used React for the front-end (which I didn't work on).
                </p>
                <p>
                    Sadly, since this was for a real client, I can't show the code or the website. However, I can tell you that the project was a success, and the client was happy with the result.
                </p>
                <p>
                    I worked mostly on the AI part of the project, where we used a Random Forest Regressor to predict the risk of accidents based on real-time traffic and weather data. I also helped a bit with the back-end code (connecting the predictor to the Front-End). The project was a lot of fun, and I learned a lot about AI and Python.
                </p>
                <p>
                    <b>My roles:</b> AI Developer and Back-End Developer<br>
                </p>
            `,
            nl_title: "Ongevallen Voorspelling (Quintor)",
            nl_description: `
                <p class='tags'>
                    <span class='tag python'>Python</span>
                    <span class='tag react'>React</span>
                </p>
                <p>
                    Voor het eerste project van mijn tweede jaar in de <a href='https://www.hu.nl/voltijd-opleidingen/open-ict' target='_blank'>studie - Open ICT</a> werkten we voor een echte klant: <a href='https://www.quintor.nl/' target='_blank'>Quintor</a>. De opdracht was om het risico op ongevallen op een bepaalde weg te voorspellen, gebaseerd op verschillende data bronnen (weer, verkeersdichtheid, verkeerssnelheid, etc.). We gebruikten Python om het voorspellingsmodel en wat back-end code te ontwikkelen, en we gebruikten React voor de front-end (waar ik zelf niet aan heb gewerkt).
                </p>
                <p>
                    Helaas, omdat dit voor een echte klant was, kan ik de code of de website niet laten zien. Ik kan je wel vertellen dat het project een succes was, en dat de klant blij was met het resultaat.
                </p>
                <p>
                    Ik werkte voornamelijk aan het AI gedeelte van het project, waar we een Random Forest Regressor gebruikten om het risico op ongevallen te voorspellen op basis van real-time verkeers- en weerdata. Ik heb ook een beetje geholpen met de back-end code (het verbinden van de voorspeller met de Front-End). Het project was erg leuk, en ik heb veel geleerd over AI en Python.
                </p>
                <p>
                    <b>Mijn rollen:</b> AI Developer en Back-End Developer<br>
                </p>
            `
        },
        { // This Portfolio Website (v2)
            eng_title: "This Portfolio Website (v2)<br>W.I.P.",
            eng_description: `
                <p class='tags'>
                    <span class='tag html'>HTML</span>
                    <span class='tag css'>CSS</span>
                    <span class='tag js'>JS</span>
                </p>
                <p class='links'>
                    <a class='link' href='PLACEHOLDER' target='_blank'>GitHub</a>
                </p>
                <p>
                    This is the website you are currently on. I made this to replace my <a href='https://joepvandam.github.io/portfolio/' target='_blank'>first portfolio website</a>. Although I am proud of the first one, I wanted to make a new one that is more modern, more responsive, and more user-friendly - while retaining the same style. This website is still a work in progress, so expect some changes in the future.
                </p>
                <p>
                    I used my own creativity and my first portfolio to design this website. I developed it using HTML, CSS, and JavaScript. I used one library (<a href='https://github.com/mourner/suncalc' target='_blank'>SunCalc</a>) to get the current moon phase (which actually updates the moon in dark mode!), but the rest is all me. I would like to do some more back-end stuff, and possibly start using React to improve the site, but this is it for now.
                </p>
                <p>
                    <b>My roles:</b> Designer and (Front-End) Developer<br>
                </p>
            `,
            nl_title: "Deze Portfolio Website (v2)<br>W.I.P.",
            nl_description: `
                <p class='tags'>
                    <span class='tag html'>HTML</span>
                    <span class='tag css'>CSS</span>
                    <span class='tag js'>JS</span>
                </p>
                <p>
                    Dit is de website waar je nu op zit. Ik heb deze gemaakt om mijn <a href='https://joepvandam.github.io/portfolio/' target='_blank'>eerste portfolio website</a> te vervangen. Hoewel ik trots ben op de eerste, wilde ik een nieuwe maken die moderner is, meer responsive, en gebruiksvriendelijker - terwijl ik dezelfde stijl behoud. Deze website is nog wel in ontwikkeling, dus verwacht wat veranderingen in de toekomst.
                </p>
                <p>
                    Ik heb mijn eigen creativiteit en mijn eerste portfolio gebruikt om deze website te ontwerpen. Ik heb het ontwikkeld met HTML, CSS, en JavaScript. Ik heb één library gebruikt (<a href='https://github.com/mourner/suncalc' target='_blank'>SunCalc</a>) om de huidige maanfase te krijgen (die de maan in dark mode echt aanneemt!), maar de rest is allemaal van mij. Ik zou graag wat meer back-end dingen willen doen, en mogelijk React gaan gebruiken om de site te verbeteren, maar dit is het voor nu.
                </p>
                <p>
                    <b>Mijn rollen:</b> Ontwerper en (Front-End) Developer<br>
                </p>
            `
        },
        { // PCB Recommender System (Omron)
            eng_title: "PCB Recommender System (Omron)<br>W.I.P.",
            eng_description: `
                <p class='tags'>
                    <span class='tag python'>Python</span>
                </p>
                <p>
                    This is my current project. I am working on this for <a href='https://www.omron.com/' target='_blank'>Omron</a> as part of my <a href='https://www.hu.nl/voltijd-opleidingen/open-ict' target='_blank'>study - Open ICT</a>. The assignment is to create a PCB (Printed Circuit Board) recommender system, which will help Omron's employees find the right solution for production problems. The project is still in its early stages, so I can't tell you much about it yet.
                </p>
                <p>
                    I am working on this project with a group, and we are using Python to develop the system. I am currently only working on the AI / Data Science part of the project.
                </p>
                <p>
                    <b>My roles:</b> AI Developer and Data Scientist<br>
                </p>
            `,
            nl_title: "PCB Recommender Systeem (Omron)<br>W.I.P.",
            nl_description: `
                <p class='tags'>
                    <span class='tag python'>Python</span>
                </p>
                <p>
                    Dit is mijn huidige project. Ik werk hieraan voor <a href='https://www.omron.com/' target='_blank'>Omron</a> als onderdeel van mijn <a href='https://www.hu.nl/voltijd-opleidingen/open-ict' target='_blank'>studie - Open ICT</a>. De opdracht is om een PCB (Printed Circuit Board) recommender systeem te maken, die Omron's werknemers helpt de juiste oplossing te vinden voor productieproblemen. Het project is nog in de beginfase, dus ik kan je er nog niet veel over vertellen.
                </p>
                <p>
                    Ik werk aan dit project met een groep, en we gebruiken Python om het systeem te ontwikkelen. Ik werk momenteel alleen aan het AI / Data Science gedeelte van het project.
                </p>
                <p>
                    <b>Mijn rollen:</b> AI Developer en Data Scientist<br>
                </p>
            `	
        },
        { // T.B.D.
            eng_title: "T.B.D.",
            eng_description: "",
            nl_title: "T.B.D.",
            nl_description: ""
        },
        { // T.B.D.
            eng_title: "T.B.D.",
            eng_description: "",
            nl_title: "T.B.D.",
            nl_description: ""
        }
    ];

    const projectInfo = document.getElementById("projectInfo");
    const projectChoice = document.getElementById("projectChoice");
    
    if (index == -1) { // Close project info
        // Hide project info
        projectInfo.style.opacity = "0";
        projectInfo.style.pointerEvents = "none";
        setTimeout(() => {
            projectInfo.style.display = "none";
            // Show project choice
            projectChoice.style.display = "grid";
            projectChoice.style.pointerEvents = "all";
        }, 600);
        setTimeout(() => { projectChoice.style.opacity = "1"; }, 700);
    }
    else { // Open chosen project
        // Update projectCurrent
        document.getElementById("projectCurrent").innerHTML = index;

        // Hide project choice
        projectChoice.style.opacity = "0";
        projectChoice.style.pointerEvents = "none";
        setTimeout(() => {
            projectChoice.style.display = "none";
            // Show project info
            projectInfo.style.display = "flex";
            projectInfo.style.pointerEvents = "all";
        }, 600);
        setTimeout(() => { projectInfo.style.opacity = "1"; }, 700);

        const projectInfoTitle = document.getElementById("projectInfoTitle");
        const projectInfoDesc = document.getElementById("projectInfoDesc");
        if (currentLan == 0) {
            projectInfoTitle.innerHTML = `<h1>${project_list[index].eng_title}</h1>`;
            projectInfoDesc.innerHTML = project_list[index].eng_description;
        } else {
            projectInfoTitle.innerHTML = `<h1>${project_list[index].nl_title}</h1>`;
            projectInfoDesc.innerHTML = project_list[index].nl_description;
        }

        const projectInfoClose = document.getElementById("projectInfoClose");
        projectInfoClose.setAttribute("onclick", "openProject(-1)");
    }
}

export { switchProjects, openProject }
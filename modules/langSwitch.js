import { switchProjects, openProject } from "./projects.js"; 

// Master function to switch language (EN/NL)
export default function languageSwitch(currentLan) {
    if (currentLan == 0) { // Switching to English
        changeFlag("NLFlag", "UKFlag");

        // Settings
        document.getElementById("moonHoverText").innerHTML = "This moon (mostly) accurately reflects the current lunar phase. Pretty cool, right?!";
        document.getElementById("settingDarkmode").innerHTML = "Darkmode";
        document.getElementById("settingAnim").innerHTML = "Animations";
        document.getElementById("tab2").innerHTML = "Projects";
        document.getElementById("tab3").innerHTML = "About";

        // About buttons
        document.getElementById("planeControlDisplay").innerHTML = "Select a plane to send";
        document.getElementById("planeControlDisplay").style.fontSize = "";
        document.getElementById("planeButtonInfoText").innerHTML = "Info";
        document.getElementById("planeButtonInterestsText").innerHTML = "Interests";
        document.getElementById("planeButtonSkillsText").innerHTML = "Skills";
        document.getElementById("planeButtonReturnText").innerHTML = "Return";

        // About texts
        document.getElementById("infoDesc").innerHTML = "My name is Joep van Dam. I'm a <span id='age1'>...</span> year old student from the Netherlands, and I am currently in my <span id='studyYears'>...</span> year at Open-ICT at the HU University of Applied Sciences Utrecht. I am currently mostly interested in AI, which I am learning a lot about. I like being creative, as you can probably tell from this site. I love all animals, but especially cats. I have one cat and one dog at home.";
        document.getElementById("interest1").innerHTML = "Programming: I have been programming as a small hobby for a few years, and am now starting to get into it as an occupation.";
        document.getElementById("interest2").innerHTML = "Front-End / Designing: I love being creative and making something beautiful and fun to look at!";
        document.getElementById("interest3").innerHTML = "Games: I play games daily and I would love to be in the development of one, especially game design. Games I play myself include Rocket League, Factorio, and Hunt: Showdown.";
    }
    else if (currentLan == 1) { // Switching to Dutch
        changeFlag("UKFlag", "NLFlag");
        
        // Settings
        document.getElementById("moonHoverText").innerHTML = "Deze maan weerspiegelt nauwkeurig de huidige maanfase (grotendeels). Best gaaf, toch?!";
        document.getElementById("settingDarkmode").innerHTML = "Donker-modus";
        document.getElementById("settingAnim").innerHTML = "Animaties";
        document.getElementById("tab2").innerHTML = "Projecten";
        document.getElementById("tab3").innerHTML = "Over";

        // About buttons
        document.getElementById("planeControlDisplay").innerHTML = "Kies een vliegtuig om te sturen";
        document.getElementById("planeControlDisplay").style.fontSize = "1.8em";
        document.getElementById("planeButtonInfoText").innerHTML = "Info";
        document.getElementById("planeButtonInterestsText").innerHTML = "Interesses";
        document.getElementById("planeButtonSkillsText").innerHTML = "Skills";
        document.getElementById("planeButtonReturnText").innerHTML = "Stuur Terug";

        // About texts
        document.getElementById("infoDesc").innerHTML = "Mijn naam is Joep van Dam. Ik ben een <span id='age1'>...</span> jaar oude student uit Nederland, en ik zit momenteel in mijn <span id='studyYears'>...</span> jaar bij Open-ICT aan de Hogeschool Utrecht. Ik ben momenteel vooral geïnteresseerd in AI, waar ik veel over leer. Ik hou van creatief bezig zijn, zoals je waarschijnlijk wel kan zien aan deze site. Ik hou van alle dieren, maar vooral van katten. Ik heb thuis een kat en een hond.";
        document.getElementById("interest1").innerHTML = "Programmeren: Ik programmeer al een paar jaar als hobby, en werk nu steeds meer naar een beroep in het veld.";
        document.getElementById("interest2").innerHTML = "Front-End / Designen: Ik hou ervan creatief te zijn en iets moois en leuk om naar te kijken!";
        document.getElementById("interest3").innerHTML = "Games: Ik speel dagelijks games en zou graag betrokken zijn bij de development van een game, vooral game design. Games die ik zelf speel zijn onder andere Rocket League, Factorio en Hunt: Showdown.";
    }
    
    // Projects
    switchProjects(null, true);
    openProject(null, true);
}

// Change flag on pole
function changeFlag(flagToRemove, flagToShow) {
    var removing = document.getElementById(flagToRemove);
    var showing = document.getElementById(flagToShow);

    document.getElementById(`setting${flagToRemove}`).classList.remove("settingCurrentFlag");
    document.getElementById(`setting${flagToShow}`).classList.add("settingCurrentFlag");

    removing.style.bottom = "0px";
    setTimeout(() => { removing.style.display = "none"; showing.style.display = "block"; }, 1000);
    setTimeout(() => { showing.style.bottom = "310px"; }, 1010);
}
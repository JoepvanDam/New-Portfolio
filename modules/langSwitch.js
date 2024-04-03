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
    }
    else if (currentLan == 1) { // Switching to Dutch
        changeFlag("UKFlag", "NLFlag");
        
        // Settings
        document.getElementById("moonHoverText").innerHTML = "Deze maan weerspiegelt nauwkeurig de huidige maanfase (grotendeels). Best gaaf, toch?!";
        document.getElementById("settingDarkmode").innerHTML = "Donker-modus";
        document.getElementById("settingAnim").innerHTML = "Animaties";
        document.getElementById("tab2").innerHTML = "Projecten";
        document.getElementById("tab3").innerHTML = "Over";
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
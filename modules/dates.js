import darkModeSwitch from "./darkmode.js";

export default function updateDates() {
    // Update age
    var age1 = document.getElementById("age1");
    var today = new Date();
    var birthDate = new Date("2002-11-22");
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) { age--; }
    age1.innerHTML = age;

    // Get language
    var currentLan;
    const UKFlag = document.getElementById("settingUKFlag");
    if (UKFlag.classList.contains("settingCurrentFlag")) { currentLan = 0; }
    else { currentLan = 1; }

    // Update year in study
    var studyYear = document.getElementById("studyYears");
    var years = today.getFullYear() - 2022;
    if (years == 1) {
        if (currentLan == 0) { studyYear.innerHTML = "first"; }
        else if (currentLan == 1) { studyYear.innerHTML = "eerste"; }
    }
    else if (years == 2) {
        if (currentLan == 0) { studyYear.innerHTML = "second"; }
        else if (currentLan == 1) { studyYear.innerHTML = "tweede"; }
    }
    else if (years == 3) {
        if (currentLan == 0) { studyYear.innerHTML = "third"; }
        else if (currentLan == 1) { studyYear.innerHTML = "derde"; }
    }
    else if (years == 4) {
        if (currentLan == 0) { studyYear.innerHTML = "fourth"; }
        else if (currentLan == 1) { studyYear.innerHTML = "vierde"; }
    }

    // Run darkmode if time is between 8pm and 8am
    var hours = today.getHours();
    if (hours >= 20 || hours < 8) { darkModeSwitch(true); }
}
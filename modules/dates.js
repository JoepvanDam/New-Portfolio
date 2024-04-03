export default function updateDates() {
    // Update age
    var age1 = document.getElementById("age1");
    var today = new Date();
    var birthDate = new Date("2002-11-22");
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) { age--; }
    age1.innerHTML = age;

    // Update year in study
    var studyYear = document.getElementById("studyYears");
    var years = today.getFullYear() - 2022;
    if (years == 1) { studyYear.innerHTML = "first"; }
    else if (years == 2) { studyYear.innerHTML = "second"; }
    else if (years == 3) { studyYear.innerHTML = "third"; }
    else if (years == 4) { studyYear.innerHTML = "fourth"; }
}
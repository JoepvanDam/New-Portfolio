export default function openSettings(openClose) {
    const settingsWrapper = document.getElementById("settingsWrapper");
    const settingsWheel = document.getElementById("settingsWheel");
    if (openClose) {
        settingsWrapper.classList.remove("settingsUp");
        settingsWrapper.classList.add("settingsDown");
        settingsWheel.setAttribute("onclick", "openSettings(false)");
    } else {
        settingsWrapper.classList.remove("settingsDown");
        settingsWrapper.classList.add("settingsUp");
        settingsWheel.setAttribute("onclick", "openSettings(true)");
    }
}
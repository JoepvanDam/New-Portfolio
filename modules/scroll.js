import { nextTab, switchTabs } from "./tabSwitch.js";

onkeydown = () => { checkKey() };
function checkKey(e) {
    e = e || window.event;
    if (e.keyCode == '38') { switchTabs(3); } // Arrow up
    else if (e.keyCode == '40') { switchTabs(0); } // Arrow down
    else if (e.keyCode == '37') { nextTab('left'); } // Arrow left
    else if (e.keyCode == '39') { nextTab('right'); } // Arrow right
}

addEventListener('wheel', (event) => {
    const targetElement = event.target;
    const specificElement = document.getElementById("projectInfoDesc");

    if (targetElement !== specificElement && targetElement.parentElement !== specificElement && targetElement.parentElement.parentElement !== specificElement) {
        if (event.deltaY > 0) {  nextTab('right'); } // Scrollwheel down
        else {  nextTab('left'); } // Scrollwheel up 
    }
});

// Scrolling for mobile (touch)
let touchStartX = 0; let touchEndX = 0;
function checkDirection() {
    let touchDistance = touchEndX - touchStartX;
    if (touchDistance > 100 || touchDistance < -100) {
        if (touchEndX < touchStartX) { nextTab('right'); }; // Swipe left
        if (touchEndX > touchStartX) { nextTab('left'); }; // Swipe right
    }
}
document.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].screenX; })
document.addEventListener('touchend', e => { touchEndX = e.changedTouches[0].screenX; checkDirection(); })
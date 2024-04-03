var flying = false;
export default function sendPlane(num) {
    if (flying) return;
    flying = true;
    setTimeout(() => { flying = false; }, 3000);

    // Get all vars
    const buttonWrappers = document.getElementsByClassName("planeControlButtonWrapper");
    const planeControlDisplay = document.getElementById("planeControlDisplay");
    const controlButton4 = document.getElementById("planeControlButton4");
    const buttons = document.getElementsByClassName("planeControlButton");
    const basicInfo = document.getElementById("basicInfo");
    const interests = document.getElementById("interests");

    // Set all buttons to inactive
    for (let i = 0; i < buttons.length; i++) { buttons[i].classList.add('inactivePlaneControlButton'); buttons[i].classList.remove('activePlaneControlButton'); }

    // Waiting for plane to arrive
    planeControlDisplay.innerHTML = "Plane arriving...";
    buttons[3].classList.add('activePlaneControlButton');
    buttons[3].classList.remove('inactivePlaneControlButton');

    // 1/2/3: send chosen plane
    if (num == 1) {
        basicInfo.style.left = "calc(50% - 410px)";
        setTimeout(() => { planeControlDisplay.innerHTML = "Info Plane"; }, 3000);
        controlButton4.setAttribute("onclick", "sendPlane(4)");
    } else if (num == 2) {
        interests.style.left = "calc(50% - 410px)";
        setTimeout(() => { planeControlDisplay.innerHTML = "Interests Plane"; }, 3000);
        controlButton4.setAttribute("onclick", "sendPlane(5)");
    } else if (num == 3) {
        var skillsPlanes = document.getElementsByClassName("skill");
        for (let i = 0; i < skillsPlanes.length; i++) { skillsPlanes[i].style.left = "-100px"; skillsPlanes[i].classList.add('hide'); }

        // Choose a random order for the top positions
        const tops = [0, 100, 200, 300, 400];
        for (let i = 0; i < skillsPlanes.length; i++) {
            const rand = Math.floor(Math.random() * tops.length);
            skillsPlanes[i].style.top = tops[rand] + "px";
            tops.splice(rand, 1);
        }
        
        // Choose a random speed for the planes to fly in
        skillsPlanes = Array.from(skillsPlanes);
        for (let i = 0; i < skillsPlanes.length; i++) {
            const randomTime = Math.floor(Math.random() * (2000 - 500 + 1) + 500);
            setTimeout(() => {
                const randomIndex = Math.floor(Math.random() * skillsPlanes.length);
                skillsPlanes[randomIndex].style.left = "-0";
                skillsPlanes[randomIndex].classList.remove('hide');
                skillsPlanes.splice(randomIndex, 1);
            }, randomTime);
        }

        setTimeout(() => { planeControlDisplay.innerHTML = "Skills Planes"; }, 3000);
        controlButton4.setAttribute("onclick", "sendPlane(6)");
    } // 4/5/6: return chosen plane
    else if (num == 4) {
        planeControlDisplay.innerHTML = "Plane clearing airspace...";
        for (let i = 0; i < buttons.length; i++) { buttons[i].classList.add('activePlaneControlButton'); buttons[i].classList.remove('inactivePlaneControlButton'); }
        buttons[3].classList.add('inactivePlaneControlButton');
        buttons[3].classList.remove('activePlaneControlButton');
        basicInfo.style.left = "calc(100% + 1000px)";
        setTimeout(() => { basicInfo.style.opacity = "0"; }, 1000);
        setTimeout(() => { basicInfo.style.left = "-1000px"; }, 2000);
        setTimeout(() => {
            basicInfo.style.opacity = "1";
            for (let i = 0; i < buttonWrappers.length - 1; i++) { buttonWrappers[i].style.display = "block"; }
            buttonWrappers[3].style.display = "none";
            planeControlDisplay.innerHTML = "Select a plane to send";
        }, 3000);
    } else if (num == 5) {
        planeControlDisplay.innerHTML = "Plane clearing airspace...";
        for (let i = 0; i < buttons.length; i++) { buttons[i].classList.add('activePlaneControlButton'); buttons[i].classList.remove('inactivePlaneControlButton'); }
        buttons[3].classList.add('inactivePlaneControlButton');
        buttons[3].classList.remove('activePlaneControlButton');
        interests.style.left = "calc(100% + 1000px)";
        setTimeout(() => { interests.style.opacity = "0"; }, 1000);
        setTimeout(() => { interests.style.left = "-1000px"; }, 2000);
        setTimeout(() => {
            interests.style.opacity = "1";
            for (let i = 0; i < buttonWrappers.length - 1; i++) { buttonWrappers[i].style.display = "block"; }
            buttonWrappers[3].style.display = "none";
            planeControlDisplay.innerHTML = "Select a plane to send";
        }, 3000);
    } else if (num == 6) {
        planeControlDisplay.innerHTML = "Plane clearing airspace...";
        for (let i = 0; i < buttons.length; i++) { buttons[i].classList.add('activePlaneControlButton'); buttons[i].classList.remove('inactivePlaneControlButton'); }
        buttons[3].classList.add('inactivePlaneControlButton');
        buttons[3].classList.remove('activePlaneControlButton');
        
        // Find all skills planes
        const skillsPlanes = document.getElementsByClassName("skill");
        for (let i = 0; i < skillsPlanes.length; i++) {
            skillsPlanes[i].style.left = "calc(100% + 1000px)";
            skillsPlanes[i].classList.add('hide');
            setTimeout(() => { skillsPlanes[i].style.opacity = "0"; }, 1000);
            setTimeout(() => { skillsPlanes[i].style.left = "-1000px"; }, 2000);
        }
        setTimeout(() => {
            for (let i = 0; i < skillsPlanes.length; i++) { skillsPlanes[i].style.opacity = "1"; }
            for (let i = 0; i < buttonWrappers.length - 1; i++) { buttonWrappers[i].style.display = "block"; }
            buttonWrappers[3].style.display = "none";
            planeControlDisplay.innerHTML = "Select a plane to send";
        }, 3000);
    }

    // Hide all buttonWrappers except the last one
    if (num < 4) {
        setTimeout(() => {
            for (let i = 0; i < buttonWrappers.length - 1; i++) { buttonWrappers[i].style.display = "none"; }
            buttonWrappers[3].style.display = "block";
        }, 3000);
    }
}
var flying = false, planeActive = [false, false, false];
function sendPlane(num) {
    if (flying) return;
    flying = true;
    setTimeout(() => { flying = false; }, 3000);

    // If the user sends a plane, disable the tabs for 3 seconds
    if (num < 4) {
        const tabs = document.getElementsByClassName("tab");
        for (let i = 0; i < tabs.length; i++) {
            tabs[i].setAttribute("onclick", "");
            tabs[i].classList.add("inactiveTab");
        }
        setTimeout(() => {
            for (let i = 0; i < tabs.length; i++) {
                tabs[i].setAttribute("onclick", `switchTabs(${i})`);
                tabs[i].classList.remove("inactiveTab");
            }
        }, 3000);
    }

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
        planeActive[0] = true;
        basicInfo.style.left = "calc(50% - 410px)";
        setTimeout(() => { planeControlDisplay.innerHTML = "Info Plane"; }, 3000);
        controlButton4.setAttribute("onclick", "sendPlane(4)");
    } else if (num == 2) {
        planeActive[1] = true;
        interests.style.left = "calc(50% - 410px)";
        setTimeout(() => { planeControlDisplay.innerHTML = "Interests Plane"; }, 3000);
        controlButton4.setAttribute("onclick", "sendPlane(5)");
    } else if (num == 3) {
        planeActive[2] = true;
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
        planeActive[0] = false;
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
        planeActive[1] = false;
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
        planeActive[2] = false;
        planeControlDisplay.innerHTML = "Plane clearing airspace...";
        for (let i = 0; i < buttons.length; i++) { buttons[i].classList.add('activePlaneControlButton'); buttons[i].classList.remove('inactivePlaneControlButton'); }
        buttons[3].classList.add('inactivePlaneControlButton');
        buttons[3].classList.remove('activePlaneControlButton');

        // Get all skill_parts and stick them to where they are
        const parent = document.getElementById("skills");
        const skillPart1s = document.getElementsByClassName("skill_part1");
        const skillPart2s = document.getElementsByClassName("skill_part2");
        const skillPart3s = document.getElementsByClassName("skill_part3");
        const skillPart4s = document.getElementsByClassName("skill_part4");
        const skillPart5s = document.getElementsByClassName("skill_part5");
        const skillPart6s = document.getElementsByClassName("skill_part6");
        const skillPart7s = document.getElementsByClassName("skill_part7");
        const skillPart8s = document.getElementsByClassName("skill_part8");
        const allSkillParts = [skillPart1s, skillPart2s, skillPart3s, skillPart4s, skillPart5s, skillPart6s, skillPart7s, skillPart8s];
        for (let i = 0; i < allSkillParts.length; i++) { skillPartFade(parent, allSkillParts[i], i+1); }
        const testSkillParts = Array.from(document.getElementsByClassName("test_skill_part"));
        for (let i = 0; i < testSkillParts.length; i++) { testSkillParts[i].style.opacity = "0"; }
        setTimeout(() => { for (let i = 0; i < allSkillParts.length; i++) { for (let j = 0; j < allSkillParts[i].length; j++) { allSkillParts[i][j].style.opacity = "1"; } } }, 2000);
        setTimeout(() => { for (let i = 0; i < testSkillParts.length; i++) { testSkillParts[i].remove(); }}, 6000);
        
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

function skillPartFade(parent, skillParts, num) {
    for (let i = 0; i < skillParts.length; i++) {
        const rect = skillParts[i].getBoundingClientRect();
        skillParts[i].style.opacity = "0";
        const newElement = document.createElement("div");
        newElement.style.position = "absolute";
        newElement.style.left = rect.left + "px";
        newElement.style.top = rect.top - 150 + "px";
        newElement.style.width = rect.width + "px";
        newElement.style.height = rect.height + "px";
        newElement.style.boxSizing = "border-box";
        newElement.style.zIndex = "-1";
        newElement.classList.add("test_skill_part", `test_skill_part${num}`);
        parent.appendChild(newElement);
    }
}

export { sendPlane, planeActive }
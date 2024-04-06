import { planeActive } from "./planes.js";

var currentTab = 0, moving = false;
export default function switchTabs(tabNum) {
    if (currentTab == tabNum || moving) { return }
    currentTab = tabNum;
    moving = true;
    setTimeout(() => { moving = false; }, 1000);

    // Side tab (nav) vars
    var tab1 = document.getElementById("tab1");
    var tab2 = document.getElementById("tab2");
    var tab3 = document.getElementById("tab3");
    var tab4 = document.getElementById("tab4");

    // Homepage vars
    var house = document.getElementById("house");
    var langchange = document.getElementById("langChange");
    var lamp = document.getElementById("lamp");
    var sticky = document.getElementById("sticky");

    // Project page vars
    var projectFlat = document.getElementById("projectFlat");

    // About page vars
    var planeTower = document.getElementById("planeTower");
    var planeControl = document.getElementById("planeControl");

    // Contact page vars
    // ...

    // Removing currentTab from all tabs
    tab1.classList.remove("currentTab");
    tab2.classList.remove("currentTab");
    tab3.classList.remove("currentTab");
    tab4.classList.remove("currentTab");

    // Plan:
    // 0
    // | House | Projects About Contact
    // 1
    // House | Projects | About Contact
    // 2
    // House Projects | About | Contact
    // 3
    // House Projects About | Contact |

    // Remove planes if they are in view
    if (planeActive[0]) { sendPlane(4); }
    if (planeActive[1]) { sendPlane(5); }
    if (planeActive[2]) { sendPlane(6); }

    // Remove test_skill_parts if they are in view
    const testSkillParts = Array.from(document.getElementsByClassName("test_skill_part"));
    for (let i = 0; i < testSkillParts.length; i++) { testSkillParts[i].style.left = "calc(100% + 1000px)"; }

    if (tabNum == 0) {
        // House in view
        house.style.right = 'calc(50% - 200px)';
        lamp.style.right = 'calc(30% - 100px)';
        langchange.style.left = '50px';
        sticky.style.right = 'calc(50% + 27.5px)';

        // Projects right 1
        projectFlat.style.right = "calc(-50% + 250px)";

        // About right 2
        planeTower.style.right = "calc(-150% + 250px)";
        planeControl.style.right = "calc(-150% + 250px)";

        // Contact right 3

        // Set currentTab to tabNum
        tab1.classList.add("currentTab");
    }
    else if (tabNum == 1) {
        // House left 1
        house.style.right = 'calc(150% - 200px)';
        lamp.style.right = 'calc(130% - 100px)';
        langchange.style.left = 'calc(-100% + 50px)';
        sticky.style.right = 'calc(150% + 27.5px)';

        // Projects in view
        projectFlat.style.right = "calc(50% - 250px)";

        // About right 1
        planeTower.style.right = "calc(-50% + 250px)";
        planeControl.style.right = "calc(-50% + 250px)";

        // Contact right 2

        // Set currentTab to tabNum
        tab2.classList.add("currentTab");
    }
    else if (tabNum == 2) {
        // House left 2
        house.style.right = 'calc(250% - 200px)';
        lamp.style.right = 'calc(230% - 100px)';
        langchange.style.left = 'calc(-200% + 50px)';
        sticky.style.right = 'calc(250% + 27.5px)';

        // Projects left 1
        projectFlat.style.right = "calc(150% - 250px)";

        // About in view
        planeTower.style.right = "calc(15% - 250px)";
        planeControl.style.right = "calc(50% - 250px)";
        sendPlaneWrapper.style.right = "";

        // Contact right 1

        // Set currentTab to tabNum
        tab3.classList.add("currentTab");
    }
    else if (tabNum == 3) {
        // House left 3
        house.style.right = 'calc(350% - 200px)';
        lamp.style.right = 'calc(330% - 100px)';
        langchange.style.left = 'calc(-300% + 50px)';
        sticky.style.right = 'calc(350% + 27.5px)';

        // Projects left 2
        projectFlat.style.right = "calc(250% - 250px)";

        // About left 1
        planeTower.style.right = "calc(115% - 250px)";
        planeControl.style.right = "calc(150% - 250px)";
        sendPlaneWrapper.style.right = "calc(150% - 250px)";

        // Contact in view

        // Set currentTab to tabNum
        tab4.classList.add("currentTab");
    }
}
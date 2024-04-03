var currentTab = 0;
export default function switchTabs(tabNum) {
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
    // ...

    // Contact page vars
    // ...

    // Removing currentTab from all tabs
    tab1.classList.remove("currentTab");
    tab2.classList.remove("currentTab");
    tab3.classList.remove("currentTab");
    tab4.classList.remove("currentTab");

    // On homepage
    if (currentTab == 0) {
        if (tabNum == 0) { return }

        // Always move homepage away to the left
        house.style.right = "calc(100% + 200px)";
        langchange.style.left = "-400px";
        lamp.style.right = "calc(150% + 100px)";
        sticky.style.right = "calc(125% + 100px)";

        // To projects page
        if (tabNum == 1) {
            projectFlat.style.right = "calc(50% - 250px)";

            currentTab = 1;
            tab2.classList.add("currentTab");
        }

        // To about page
        else if (tabNum == 2) {
            projectFlat.style.right = "calc(150% - 250px)";

            currentTab = 2;
            tab3.classList.add("currentTab");
        }

        // To contact page
        else if (tabNum == 3) {
            projectFlat.style.right = "calc(150% - 250px)";

            currentTab = 3;
            tab4.classList.add("currentTab");
        }
    }

    // On projects page
    else if (currentTab == 1) {
        if (tabNum == 1) { return }

        // To home page
        if (tabNum == 0) {
            projectFlat.style.right = "calc(-40% - 250px)";

            house.style.right = "calc(50% - 200px)";
            langchange.style.left = "50px";
            lamp.style.right = "calc(30% - 100px)";
            sticky.style.right = "calc(50% + 27.5px)";

            currentTab = 0;
            tab1.classList.add("currentTab");
        }

        // To about page
        else if (tabNum == 2) {
            projectFlat.style.right = "calc(150% - 250px)";

            currentTab = 2;
            tab3.classList.add("currentTab");
        }

        // To contact page
        else if (tabNum == 3) {
            projectFlat.style.right = "calc(150% - 250px)";

            currentTab = 3;
            tab4.classList.add("currentTab");
        }
    }

    // On about page
    else if (currentTab == 2) {
        if (tabNum == 2) { return }

        // To home page
        if (tabNum == 0) {
            projectFlat.style.right = "calc(-40% - 250px)";

            house.style.right = "calc(50% - 200px)";
            langchange.style.left = "50px";
            lamp.style.right = "calc(30% - 100px)";
            sticky.style.right = "calc(50% + 27.5px)";

            currentTab = 0;
            tab1.classList.add("currentTab");
        }

        // To projects page
        else if (tabNum == 1) {
            projectFlat.style.right = "calc(50% - 250px)";

            currentTab = 1;
            tab2.classList.add("currentTab");
        }

        // To contact page
        else if (tabNum == 3) {
            currentTab = 3;
            tab4.classList.add("currentTab");
        }
    }

    // On contact page
    else if (currentTab == 3) {
        if (tabNum == 3) { return }

        // To home page
        if (tabNum == 0) {
            projectFlat.style.right = "calc(-40% - 250px)";

            house.style.right = "calc(50% - 200px)";
            langchange.style.left = "50px";
            lamp.style.right = "calc(30% - 100px)";
            sticky.style.right = "calc(50% + 27.5px)";

            currentTab = 0;
            tab1.classList.add("currentTab");
        }

        // To projects page
        else if (tabNum == 1) {
            currentTab = 1;
            tab2.classList.add("currentTab");
            projectFlat.style.right = "calc(50% - 250px)";
        }

        // To about page
        else if (tabNum == 2) {
            currentTab = 2;
            tab3.classList.add("currentTab");
        }
    }
}
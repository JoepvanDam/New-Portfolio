// Master function to switch darkmode
let isRunning = false;
export default function darkModeSwitch(onOff) {
    if (isRunning) { return }

    // Dark mode on
    if (onOff) {
        isRunning = true;

        // Pause settings switch until animation is done
        pauseSwitch();

        // Move sun away
        moveAway('sun');

        // Step 0 (text)
        projectsInfoDark(true);

        // Step 1
        setTimeout(() => {
            houseDark(true); // Make house dark
            stickyDark(true); // Make sticky dark
            settingsDark(true); // Make settings dark
            projectsDark(true); // Make projects dark
            aboutPlanes(true); // Make about planes dark
            aboutMisc(true); // Make about misc dark
            contactDark(true); // Make contact dark
            background('lightBG', 'redBG', 'darkBG'); // Change background to dark
        }, 500);

        // Step 2
        setTimeout(() => { moveIn('moon'); }, 900); // Move moon in

        // Step 3
        setTimeout(() => {
            settingSwitch("darkModeSwitch(false)", true); // Re-enable settings switch
            isRunning = false; // Re-enable dark mode switch
        }, 1000);
    }

    // Dark mode off
    else if (!onOff) {
        isRunning = true;

        // Pause settings switch until animation is done
        pauseSwitch();

        // Move moon away
        moveAway('moon');

        // Step 0 (text)
        projectsInfoDark(false);

        // Step 1
        houseDark(false); // Make house light
        setTimeout(() => {
            stickyDark(false); // Make sticky light
            settingsDark(false); // Make settings light
            projectsDark(false); // Make projects light
            aboutPlanes(false); // Make about planes light
            aboutMisc(false); // Make about misc light
            contactDark(false); // Make contact light
            background('darkBG', 'redBG', 'lightBG'); // Change background to light
        }, 500);

        // Step 2
        setTimeout(() => { moveIn('sun'); }, 900); // Move sun in

        // Step 3
        setTimeout(() => {
            settingSwitch("darkModeSwitch(true)", false); // Re-enable settings switch
            isRunning = false; // Re-enable dark mode switch
        }, 1000);
    }
}

// Moving the sun/moon away using CSS transition
function moveAway(item) {
    const itemID = document.getElementById(item);
    itemID.style.left = '95%';
    setTimeout(() => { itemID.style.top = '100%'; }, 150);
    setTimeout(() => { itemID.style.left = '0'; }, 1000);
}

// Changing the background color by toggling CSS classes
function background(startBG, midBG, endBG) {
    const mainBG = document.getElementById("main");
    mainBG.classList.toggle(startBG);
    mainBG.classList.toggle(midBG);
    setTimeout(() => { mainBG.classList.toggle(endBG); mainBG.classList.toggle(midBG); }, 300);
}

// Moving the sun/moon in using CSS transition
function moveIn(item) {
    const sunID = document.getElementById(item);
    sunID.style.top = '25px';
    setTimeout(() => { sunID.style.left = 'calc(50% - 55px)'; }, 150);
}

// Changing settings switch state
function settingSwitch(attribute, check) {
    const switchID = document.getElementById("darkmodeSwitch");
    const checkID = document.getElementById("darkmodeCheckbox");
    switchID.setAttribute("onclick", attribute);
    checkID.disabled = false;
    checkID.checked = check;
}

// Pause settings switch until animation is done
function pauseSwitch() {
    const switchID = document.getElementById("darkmodeSwitch");
    const checkID = document.getElementById("darkmodeCheckbox");
    switchID.setAttribute("onclick", '');
    checkID.disabled = true;
}

// House & floor & lamp
function houseDark(isOn) {
    if (isOn) { // Dark mode on
        // Floor 
        document.getElementById("floor").style.backgroundColor = "rgb(60, 60, 60)";

        // House
        document.getElementById("mainHouse").style.backgroundColor = "rgb(75, 75, 75)";
        document.getElementById("door").style.backgroundColor = "rgb(100, 100, 100)";
        document.getElementById("doorKnob").style.backgroundColor = "rgb(75, 75, 75)";
        document.getElementById("chimney").style.backgroundColor = "rgb(75, 75, 75)";

        // Roof
        let clrNum = 100;
        const id1 = setInterval(() => {
            if (clrNum > 50) {
                clrNum--;
                document.getElementById("roof").style.background = `linear-gradient(135deg, rgb(${clrNum}, ${clrNum}, ${clrNum}) 0%, rgb(${clrNum}, ${clrNum}, ${clrNum}) 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0) 100%)`;
            }
            else { clearInterval(id1); }
        }, 20);

        // Smoke & lights
        document.getElementById("smoke1").style.opacity = 1;
        setTimeout(() => {
            document.getElementById("smoke2").style.opacity = 1;
            document.getElementById("behindDoor").style.backgroundColor = "rgb(175, 175, 100)";
        }, 500);
        setTimeout(() => {
            document.getElementById("smoke3").style.opacity = 1;
            document.getElementById("window").style.backgroundColor = "rgb(150, 150, 100)";
        }, 1000);
        setTimeout(() => { document.getElementById("smoke4").style.opacity = 1; }, 1500);

        // Lamp
        document.getElementById("lampPoleTop").style.backgroundColor = "rgb(75, 75, 75)";
        document.getElementById("lampPole").style.backgroundColor = "rgb(75, 75, 75)";
        setTimeout(() => {
            document.getElementById("lampBulb").style.backgroundColor = "rgb(175, 175, 100)";
        }, 1600);
        setTimeout(() => {
            let y2Num = 0.5;
            const id2 = setInterval(() => {
                document.getElementById("lampPaint").setAttribute("y2", `${y2Num}`);
                y2Num += 10;
                if (y2Num > 630) { clearInterval(id2); }
            }, 5);
        }, 1700);
    }
    else { // Dark mode off
        // Floor 
        document.getElementById("floor").style.backgroundColor = "rgb(175, 175, 175)";

        // House
        document.getElementById("mainHouse").style.backgroundColor = "rgb(125, 125, 125)";
        document.getElementById("door").style.backgroundColor = "rgb(150, 150, 150)";
        document.getElementById("doorKnob").style.backgroundColor = "rgb(125, 125, 125)";
        document.getElementById("chimney").style.backgroundColor = "rgb(125, 125, 125)";

        // Roof
        let clrNum = 50;
        const id = setInterval(() => {
            if (clrNum < 100) {
                clrNum++;
                document.getElementById("roof").style.background = `linear-gradient(135deg, rgb(${clrNum}, ${clrNum}, ${clrNum}) 0%, rgb(${clrNum}, ${clrNum}, ${clrNum}) 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0) 100%)`;
            }
            else { clearInterval(id); }
        }, 20);
        document.getElementById("roof").style.background = "linear-gradient(135deg, rgb(100, 100, 100) 0%, rgb(100, 100, 100) 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0) 100%)";

        // Smoke & lights
        document.getElementById("window").style.backgroundColor = "rgb(100, 100, 100)";
        document.getElementById("behindDoor").style.backgroundColor = "rgb(100, 100, 100)";
        setTimeout(() => { document.getElementById("smoke1").style.opacity = 0; }, 500);
        setTimeout(() => {
            document.getElementById("smoke2").style.opacity = 0;
            document.getElementById("window").style.backgroundColor = "rgb(100, 100, 150)";
            document.getElementById("behindDoor").style.backgroundColor = "rgb(75, 75, 75)";
        }, 1000);
        setTimeout(() => { document.getElementById("smoke3").style.opacity = 0; }, 1500);
        setTimeout(() => { document.getElementById("smoke4").style.opacity = 0; }, 2000);

        // Lamp
        document.getElementById("lampPoleTop").style.backgroundColor = "rgb(120, 120, 120)";
        document.getElementById("lampPole").style.backgroundColor = "rgb(150, 150, 150)";
        setTimeout(() => {
            document.getElementById("lampBulb").style.backgroundColor = "rgb(130, 130, 135)";
        }, 800);
        setTimeout(() => {
            document.getElementById("lampPaint").setAttribute("y2","0.5");
        }, 900);
    }
}

// Sticky
function stickyDark(isOn) {
    if (isOn) { // Dark mode on
        // Stickys textbox
        document.getElementById("stickyTalks1").style.backgroundColor = "rgb(50, 50, 50)";
        document.getElementById("stickyTalks1").style.border = "1px solid rgb(255, 255, 255)";
        document.getElementById("stickyTalks2").style.backgroundColor = "rgb(50, 50, 50)";
        document.getElementById("stickyTalks2").style.border = "1px solid rgb(255, 255, 255)";
        document.getElementById("stickyTalksText").style.color = "rgb(255, 255, 255)";

        // Sticky
        document.getElementById("stickyHead").style.backgroundColor = "rgb(75, 75, 75)";
        document.getElementById("stickyHead").style.border = "1px solid rgb(125, 125, 125)";
        document.getElementById("stickyArm1").style.backgroundColor = "rgb(75, 75, 75)";
        document.getElementById("stickyArm1").style.border = "1px solid rgb(125, 125, 125)";
        document.getElementById("stickyArm2").style.backgroundColor = "rgb(75, 75, 75)";
        document.getElementById("stickyArm2").style.border = "1px solid rgb(125, 125, 125)";
        document.getElementById("stickyBody").style.backgroundColor = "rgb(75, 75, 75)";
        document.getElementById("stickyBody").style.border = "1px solid rgb(125, 125, 125)";
        document.getElementById("stickyLeg1").style.backgroundColor = "rgb(75, 75, 75)";
        document.getElementById("stickyLeg1").style.border = "1px solid rgb(125, 125, 125)";
        document.getElementById("stickyLeg2").style.backgroundColor = "rgb(75, 75, 75)";
        document.getElementById("stickyLeg2").style.border = "1px solid rgb(125, 125, 125)";
    }
    else { // Dark mode off
        // Stickys textbox
        document.getElementById("stickyTalks1").style.backgroundColor = "rgb(200, 200, 200)";
        document.getElementById("stickyTalks1").style.border = "1px solid rgb(0, 0, 0)";
        document.getElementById("stickyTalks2").style.backgroundColor = "rgb(200, 200, 200)";
        document.getElementById("stickyTalks2").style.border = "1px solid rgb(0, 0, 0)";
        document.getElementById("stickyTalksText").style.color = "rgb(0, 0, 0)";

        // Sticky
        document.getElementById("stickyHead").style.backgroundColor = "rgb(200, 200, 200)";
        document.getElementById("stickyHead").style.border = "1px solid rgb(75, 75, 75)";
        document.getElementById("stickyArm1").style.backgroundColor = "rgb(200, 200, 200)";
        document.getElementById("stickyArm1").style.border = "1px solid rgb(75, 75, 75)";
        document.getElementById("stickyArm2").style.backgroundColor = "rgb(200, 200, 200)";
        document.getElementById("stickyArm2").style.border = "1px solid rgb(75, 75, 75)";
        document.getElementById("stickyBody").style.backgroundColor = "rgb(200, 200, 200)";
        document.getElementById("stickyBody").style.border = "1px solid rgb(75, 75, 75)";
        document.getElementById("stickyLeg1").style.backgroundColor = "rgb(200, 200, 200)";
        document.getElementById("stickyLeg1").style.border = "1px solid rgb(75, 75, 75)";
        document.getElementById("stickyLeg2").style.backgroundColor = "rgb(200, 200, 200)";
        document.getElementById("stickyLeg2").style.border = "1px solid rgb(75, 75, 75)";
    }
}

// Settings & flagpole & tabs
function settingsDark(isOn) {
    if (isOn) { // Dark mode on
        // Settings
        document.getElementById("settingsWheel").style.filter = "brightness(0.5)";
        document.getElementById("settingsBox").style.backgroundColor = "rgb(75, 75, 75)";
        document.getElementById("settingsBox").style.color = "rgb(255, 255, 255)";

        // Flagpole
        document.getElementById("pole").style.backgroundColor = "rgb(75, 75, 75)";
        document.getElementById("poleTop").style.backgroundColor = "rgb(50, 50, 50)";
        document.getElementById("poleBottom").style.backgroundColor = "rgb(50, 50, 50)";

        // Tabs
        document.getElementById("tab1").style.backgroundColor = "rgb(50, 50, 50)";
        document.getElementById("tab2").style.backgroundColor = "rgb(50, 50, 50)";
        document.getElementById("tab3").style.backgroundColor = "rgb(50, 50, 50)";
        document.getElementById("tab4").style.backgroundColor = "rgb(50, 50, 50)";
        document.getElementById("tab1").style.color = "rgb(255, 255, 255)";
        document.getElementById("tab2").style.color = "rgb(255, 255, 255)";
        document.getElementById("tab3").style.color = "rgb(255, 255, 255)";
        document.getElementById("tab4").style.color = "rgb(255, 255, 255)";
        document.getElementById("tab1").style.border = "1px solid rgb(100, 100, 100)";
        document.getElementById("tab2").style.border = "1px solid rgb(100, 100, 100)";
        document.getElementById("tab3").style.border = "1px solid rgb(100, 100, 100)";
        document.getElementById("tab4").style.border = "1px solid rgb(100, 100, 100)";
    }
    else { // Dark mode off
        // Settings
        document.getElementById("settingsWheel").style.filter = "";
        document.getElementById("settingsBox").style.backgroundColor = "rgb(175, 175, 175)";
        document.getElementById("settingsBox").style.color = "rgb(0, 0, 0)";

        // Flagpole
        document.getElementById("pole").style.backgroundColor = "rgb(150, 150, 150)";
        document.getElementById("poleTop").style.backgroundColor = "rgb(125, 125, 125)";
        document.getElementById("poleBottom").style.backgroundColor = "rgb(125, 125, 125)";

        // Tabs
        document.getElementById("tab1").style.backgroundColor = "rgb(175, 175, 175)";
        document.getElementById("tab2").style.backgroundColor = "rgb(175, 175, 175)";
        document.getElementById("tab3").style.backgroundColor = "rgb(175, 175, 175)";
        document.getElementById("tab4").style.backgroundColor = "rgb(175, 175, 175)";
        document.getElementById("tab1").style.color = "rgb(0, 0, 0)";
        document.getElementById("tab2").style.color = "rgb(0, 0, 0)";
        document.getElementById("tab3").style.color = "rgb(0, 0, 0)";
        document.getElementById("tab4").style.color = "rgb(0, 0, 0)";
        document.getElementById("tab1").style.border = "1px solid rgb(50, 50, 50)";
        document.getElementById("tab2").style.border = "1px solid rgb(50, 50, 50)";
        document.getElementById("tab3").style.border = "1px solid rgb(50, 50, 50)";
        document.getElementById("tab4").style.border = "1px solid rgb(50, 50, 50)";
    }
}

// Projects info
function projectsInfoDark(isOn) {
    if (isOn) { // Dark mode on
        document.getElementById("projectInfo").style.color = "rgb(255, 255, 255)";
        document.getElementById("projectInfoTitle").style.backgroundColor = "rgb(75, 75, 75)";
        document.getElementById("projectInfoTitle").style.border = "4px solid rgb(55, 55, 105)";
        document.getElementById("projectInfoDesc").style.backgroundColor = "rgb(75, 75, 75)";
        document.getElementById("projectInfoDesc").style.border = "2px solid rgb(55, 55, 105)";
    } else {
        document.getElementById("projectInfo").style.color = "black";
        document.getElementById("projectInfoTitle").style.backgroundColor = "rgb(200, 200, 200)";
        document.getElementById("projectInfoTitle").style.border = "4px solid rgb(115, 115, 255)";
        document.getElementById("projectInfoDesc").style.backgroundColor = "rgb(200, 200, 200)";
        document.getElementById("projectInfoDesc").style.border = "2px solid rgb(115, 115, 255)";
    }
}

// Projects flat
function projectsDark(isOn) {
    if (isOn) { // Dark mode on
        // Project flat
        document.getElementById("projectFlatTop").style.backgroundColor = "rgb(40, 40, 40)";
        document.getElementById("flatBlock").style.backgroundColor = "rgb(50, 50, 50)";

        // Arrows
        document.getElementById("projectLeft").style.color = "rgb(225, 225, 225)";
        document.getElementById("projectRight").style.color = "rgb(225, 225, 225)";
        document.getElementById("projectLeft").style.border = "2px solid rgb(225, 225, 225)";
        document.getElementById("projectRight").style.border = "2px solid rgb(225, 225, 225)";

        // Door
        document.getElementById("projectDoorBehind").style.backgroundColor = "rgb(200, 200, 100)";

        // Windows
        const windows = Array.from(document.getElementsByClassName("projectWindow"));
        for (let i = 0; i < windows.length; i++) { windows[i].style.backgroundColor = "rgb(75, 75, 75)"; }
        for (let i = 0; i < windows.length; i++) {
            const randomTime = Math.floor(Math.random() * (3000 - 500 + 1) + 500);
            setTimeout(() => {
                const randomIndex = Math.floor(Math.random() * windows.length);
                windows[randomIndex].style.backgroundColor = "rgb(125, 125, 75)";
                windows.splice(randomIndex, 1);
            }, randomTime);
        }
    }
    else { // Dark mode off
        // Project flat
        document.getElementById("projectFlatTop").style.backgroundColor = "rgb(140, 140, 140)";
        document.getElementById("flatBlock").style.backgroundColor = "rgb(150, 150, 150)";

        // Arrows
        document.getElementById("projectLeft").style.color = "rgb(25, 25, 25)";
        document.getElementById("projectRight").style.color = "rgb(25, 25, 25)";
        document.getElementById("projectLeft").style.border = "2px solid rgb(25, 25, 25)";
        document.getElementById("projectRight").style.border = "2px solid rgb(25, 25, 25)";

        // Door
        document.getElementById("projectDoorBehind").style.backgroundColor = "rgb(100, 100, 150)";

        // Windows
        const windows = document.getElementsByClassName("projectWindow");
        for (let i = 0; i < windows.length; i++) { windows[i].style.backgroundColor = "rgb(100, 100, 150)"; }
    }
}

// About planes
function aboutPlanes(isOn) {
    if (isOn) { // Dark mode on
        // Planes
        const planeMids = document.getElementsByClassName("planeMid");
        for (let i = 0; i < planeMids.length; i++) { planeMids[i].setAttribute("fill", "rgb(20, 20, 40)"); }
        const planeTexts = document.getElementsByClassName("planeText");
        for (let i = 0; i < planeTexts.length; i++) { planeTexts[i].setAttribute("fill", "rgb(255, 255, 255)"); }

        // Plane lights
        setTimeout(() => {
            const random = ['random1', 'random2', 'random3', 'random4']
            const planeWingLights = document.getElementsByClassName("planeWingLight");
            for (let i = 0; i < planeWingLights.length; i++) {
                const randomIndex = Math.floor(Math.random() * random.length);
                planeWingLights[i].classList.add(random[randomIndex]);
            }
        }, 500);

        // Lines
        const lines = document.getElementsByClassName("line");
        for (let i = 0; i < lines.length; i++) { lines[i].style.backgroundColor = "rgba(40, 40, 60, 0.75)"; }

        // Text wrappers
        const textWrappers = document.getElementsByClassName("planeTextWrapper");
        for (let i = 0; i < textWrappers.length; i++) {
            textWrappers[i].style.backgroundColor = "rgb(50, 50, 50)";
            textWrappers[i].style.border = "1px solid rgb(100, 100, 100)";
            textWrappers[i].style.color = "rgb(255, 255, 255)";
        }
        
        // Skills
        document.getElementById("skills").classList.add("dark");
        document.getElementById("skills").classList.remove("light");
    } else { // Dark mode off
        // Planes
        const planeMids = document.getElementsByClassName("planeMid");
        for (let i = 0; i < planeMids.length; i++) { planeMids[i].setAttribute("fill", "#FFFFFF"); }
        const planeTexts = document.getElementsByClassName("planeText");
        for (let i = 0; i < planeTexts.length; i++) { planeTexts[i].setAttribute("fill", "#000000"); }

        // Plane lights
        const planeWingLights = document.getElementsByClassName("planeWingLight");
        for (let i = 0; i < planeWingLights.length; i++) { planeWingLights[i].classList.remove('random1', 'random2', 'random3', 'random4'); }

        // Lines
        const lines = document.getElementsByClassName("line");
        for (let i = 0; i < lines.length; i++) { lines[i].style.backgroundColor = "rgba(200, 200, 200)"; }

        // Text wrappers
        const textWrappers = document.getElementsByClassName("planeTextWrapper");
        for (let i = 0; i < textWrappers.length; i++) {
            textWrappers[i].style.backgroundColor = "rgb(225, 225, 225)";
            textWrappers[i].style.border = "1px solid rgb(0, 0, 0)";
            textWrappers[i].style.color = "rgb(0, 0, 0)";
        }

        // Skills
        document.getElementById("skills").classList.remove("dark");
        document.getElementById("skills").classList.add("light");
    }
}

// Plane control & tower
function aboutMisc(isOn) {
    if (isOn) { // Dark mode on
        // Plane control panel
        document.getElementById("planeControl").style.backgroundColor = "rgb(50, 50, 50)";
        document.getElementById("planeControl").style.border = "1px solid rgb(100, 100, 100)";
        document.getElementById("planeControl").style.color = "white";

        // Display
        document.getElementById("planeControlDisplay").style.backgroundColor = "rgb(50, 100, 50)";

        // Buttons
        const buttons = document.getElementsByClassName("planeControlButton");
        for (let i = 0; i < buttons.length; i++) { buttons[i].style.border = "1px solid rgb(155, 155, 155)"; }

        // Tower
        document.getElementById("planeTower").style.opacity = 0.5;
    } else { // Dark mode off
        // Plane control panel
        document.getElementById("planeControl").style.backgroundColor = "rgb(200, 200, 200)";
        document.getElementById("planeControl").style.border = "1px solid black";
        document.getElementById("planeControl").style.color = "black";

        // Display
        document.getElementById("planeControlDisplay").style.backgroundColor = "rgb(25, 50, 25)";

        // Buttons
        const buttons = document.getElementsByClassName("planeControlButton");
        for (let i = 0; i < buttons.length; i++) { buttons[i].style.border = "1px solid black"; }

        // Tower
        document.getElementById("planeTower").style.opacity = 1;
    }
}

// Contact billboard
function contactDark(isOn) {
    const billboardSupportLeft = document.getElementById("billboardSupportLeft");
    const billboardSupportRight = document.getElementById("billboardSupportRight");
    const aboveBillboard = document.getElementById("aboveBillboard");
    const billboardRectangle = document.getElementById("billboardRectangle");
    const billboardSupportLeftStand = document.getElementById("billboardSupportLeftStand");
    const billboardSupportRightStand = document.getElementById("billboardSupportRightStand");
    const billboardLight1 = document.getElementById("billboardLight1");
    const billboardLight2 = document.getElementById("billboardLight2");
    const billboardLight3 = document.getElementById("billboardLight3");
    const billboardLight4 = document.getElementById("billboardLight4");
    const billboardLight5 = document.getElementById("billboardLight5");
    const allLights = [billboardLight1, billboardLight2, billboardLight3, billboardLight4, billboardLight5];
    if (isOn) { // Dark mode on
        billboardSupportLeft.style.fill = "#2F2F2F";
        billboardSupportRight.style.fill = "#2F2F2F";
        aboveBillboard.style.fill = "#3F3F3F";
        billboardRectangle.style.fill = "#4F4F4F";
        billboardSupportLeftStand.style.fill = "#1F1F1F";
        billboardSupportRightStand.style.fill = "#1F1F1F";
        for (let i = 0; i < allLights.length; i++) {
            const randomTime = Math.floor(Math.random() * (2000 - 200 + 1) + 200);
            setTimeout(() => {
                const randomIndex = Math.floor(Math.random() * allLights.length);
                allLights[randomIndex].style.fill = "rgb(175, 175, 100)";
                allLights.splice(randomIndex, 1);
            }, randomTime);
        }
    } else { // Dark mode off
        billboardSupportLeft.style.fill = "#717171";
        billboardSupportRight.style.fill = "#717171";
        aboveBillboard.style.fill = "#ABABAB";
        billboardRectangle.style.fill = "#C2C2C2";
        billboardSupportLeftStand.style.fill = "#4F4F4F";
        billboardSupportRightStand.style.fill = "#4F4F4F";
        for (let i = 0; i < allLights.length; i++) { allLights[i].style.fill = "#989898"; }
    }
}
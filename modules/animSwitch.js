// Animation switch
let isRunning = false;
export default function animationSwitch(onOff) {
    if (isRunning) { return }

    // Animations off
    if (!onOff) {
        isRunning = true;
        document.getElementById("animationSwitch").setAttribute("onclick", "animationSwitch(true)");
        var ss = document.createElement("link");
        ss.rel = "stylesheet";
        ss.type = "text/css";
        ss.href = "./stylesheets/removeAnimations.css";
        ss.id = "removeAnimations";
        document.head.appendChild(ss);
        setTimeout(() => { isRunning = false }, 100);
    }
    
    // Animations on
    else if (onOff) {
        isRunning = true;
        document.getElementById("animationSwitch").setAttribute("onclick", "animationSwitch(false)");
        document.getElementById("removeAnimations").remove();
        setTimeout(() => { isRunning = false }, 100);
    }
}
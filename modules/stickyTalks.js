export default function stickyTalks(currentTalky, currentLan) {
    var stickyText = document.getElementById("stickyTalksText");
    var stickyBox = document.getElementById("stickyTalks1");
    var stickyBoxBelow = document.getElementById("stickyTalks2");
    var door = document.getElementById("door");
    var doorKnob = document.getElementById("doorKnob");
    var sticky = document.getElementById("sticky");

    if (currentTalky == 0) { // Sticky walks out
        stickyBox.classList.add("stickyHovers");
        sticky.style.display = "grid";
        stickyBox.style.height = "300px";
        stickyBox.style.transform = "translate(0, -230px)";
        
        if (currentLan == 0) {
            stickyText.innerHTML = "Welcome!<br>My name is Joep van Dam. Well, actually I am a collection of styled HTML divs posing as the creator of this portfolio website, but you can call me Joep. I will be guiding you through this site. (Click to send me inside)";
        }
        else if (currentLan == 1) {
            stickyText.innerHTML = "Welkom!<br>Mijn naam is Joep van dam. Nouja, ik ben eigenlijk een verzameling van gestijlde HTML divs die zich voordoet als de maker van deze portfolio website, maar jij mag me Joep noemen. Ik zal je door deze site leiden. (Klik om me naar binnen te sturen)";
            stickyBox.style.height = "350px";
            stickyBox.style.transform = "translate(0, -255px)";
        }
        stickyBox.setAttribute("onclick", `updateStickyTalks(1, ${currentLan})`);

        setTimeout(() => {
            door.style.width = "0px";
            doorKnob.style.width = "0px";
        }, 1500);
        setTimeout(() => { doorKnob.style.opacity = "0"; }, 1900);
        setTimeout(() => { sticky.style.opacity = "1"; }, 2100);
        setTimeout(() => { stickyBox.style.opacity = "1"; }, 2300);
        setTimeout(() => { stickyBoxBelow.style.opacity = "1"; }, 2700);
    }

    else if (currentTalky == 1) { // Sticky goes inside
        stickyBox.classList.remove("stickyHovers");
        stickyBox.setAttribute("onclick", "");
        setTimeout(() => {
            stickyBox.style.opacity = "0";
            stickyBoxBelow.style.opacity = "0";
        }, 1000);
        setTimeout(() => { sticky.style.opacity = "0"; }, 2000);
        setTimeout(() => {
            door.style.width = "100px";
            doorKnob.style.opacity = "1";
            doorKnob.style.width = "20px";
        }, 2500);
        setTimeout(() => {
            door.setAttribute("onclick", `updateStickyTalks(0, ${currentLan})`);
            sticky.style.display = "none";
        }, 3000);
    }
}
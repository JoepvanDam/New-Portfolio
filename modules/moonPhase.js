// Small module to set the moon image to its current phase using SunCalc
export default function setMoonPhase() {
    const currentDate = new Date();
    const illumination = SunCalc.getMoonIllumination(currentDate);

    let currentPhase = '';
    const moonID = document.getElementById("moon");
    if (illumination.phase === 0 || illumination.phase >= 0.96 && illumination.phase <= 1) { moonID.src = './images/moonPhases/New.svg'; currentPhase = "New Moon"; }
    else if (illumination.phase > 0 && illumination.phase < 0.232) { moonID.src = './images/moonPhases/WaxingC.svg'; currentPhase = "Waxing Crescent"; }
    else if (illumination.phase >= 0.232 && illumination.phase < 0.26) { moonID.src = './images/moonPhases/FirstQ.svg'; currentPhase = "First Quarter";  }
    else if (illumination.phase >= 0.26 && illumination.phase < 0.47) { moonID.src = './images/moonPhases/WaxingG.svg'; currentPhase = "Waxing Gibbous"; }
    else if (illumination.phase >= 0.47 && illumination.phase < 0.50) { moonID.src = './images/moonPhases/Full.svg'; currentPhase = "Full Moon"; }
    else if (illumination.phase >= 0.50 && illumination.phase < 0.73) { moonID.src = './images/moonPhases/WaningG.svg'; currentPhase = "Waning Gibbous"; }
    else if (illumination.phase >= 0.73 && illumination.phase < 0.76) { moonID.src = './images/moonPhases/ThirdQ.svg'; currentPhase = "Last Quarter"; }
    else if (illumination.phase >= 0.76 && illumination.phase < 0.96) { moonID.src = './images/moonPhases/WaningC.svg'; currentPhase = "Waning Crescent"; }
}
setMoonPhase();
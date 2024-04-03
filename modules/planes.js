var currentPlane = 0;
export default function sendPlane(num) {
    if (currentPlane != 0) {
        if (currentPlane == 1) {
            const basicInfo = document.getElementById("basicInfo");
            basicInfo.style.left = "calc(100% + 820px)";
            setTimeout(() => { basicInfo.style.opacity = "0"; }, 1000);
            setTimeout(() => { basicInfo.style.left = "-820px"; }, 2000);
            setTimeout(() => { basicInfo.style.opacity = "1"; }, 3000);
            currentPlane = 0;
        }

        return;
    }

    if (num == 1) {
        const basicInfo = document.getElementById("basicInfo");
        basicInfo.style.left = "calc(50% - 410px)";
        currentPlane = 1;
    }
}
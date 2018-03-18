function switchToApple() {
     logoDescCarousel.style.marginLeft = "0px";
}

function switchToSamsung() {
    logoDescCarousel.style.marginLeft = "-400px";
}

function switchToSony() {
    logoDescCarousel.style.marginLeft = "-800px";
}

function switchToXiaomi() {
    logoDescCarousel.style.marginLeft = "-1200px";
}

function switchToOnePlus() {
    logoDescCarousel.style.marginLeft = "-1600px";
}

let logoDescCarousel = document.querySelector(".logo-desc-carousel");

document.querySelector(".gallery .apple").addEventListener("click", switchToApple);
document.querySelector(".gallery .samsung").addEventListener("click", switchToSamsung);
document.querySelector(".gallery .sony").addEventListener("click", switchToSony);
document.querySelector(".gallery .xiaomi").addEventListener("click", switchToXiaomi);
document.querySelector(".gallery .one-plus").addEventListener("click", switchToOnePlus);

function switchToLeft() {
    let currentMarginLeft = getComputedStyle(logoDescCarousel).marginLeft;
    if (currentMarginLeft == "0px") {
        return;
    } else {
        logoDescCarousel.style.marginLeft = (parseInt(currentMarginLeft) + 400) + "px";
    }
}

function switchToRight() {
    let currentMarginLeft = getComputedStyle(logoDescCarousel).marginLeft;
    if (currentMarginLeft == "-1600px") {
        return;
    } else {
        logoDescCarousel.style.marginLeft = (parseInt(currentMarginLeft) - 400) + "px";
    }
}

document.querySelector(".arrow-left").addEventListener("click", switchToLeft);
document.querySelector(".arrow-right").addEventListener("click", switchToRight);

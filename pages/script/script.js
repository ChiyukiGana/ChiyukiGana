const backgroundImageSrc = "https://imgapi.xl0408.top/index.php";
const backgroundImage = document.getElementById("backgroundImage");
let backgroundImageLoaded = false;
function BackgroundImageLoaded() {
    backgroundImageLoaded = true;
    backgroundImage.style.animation = "AmOpacity 2s";
    backgroundImage.style.opacity = "1";
}
function BackgroundStart() {
    backgroundImage.onload = BackgroundImageLoaded;
    backgroundImage.style.opacity = "0";
    backgroundImage.src = backgroundImageSrc;
    setTimeout(function () { let handle = setInterval(function () { if (backgroundImageLoaded == false) { backgroundImage.src = backgroundImageSrc; } else { clearInterval(handle); } }, 2000) }, 2000)
}
BackgroundStart();
const musicbubble = document.getElementById("musicTab");
musicbubble.style.backgroundColor = "rgb(180, 63, 63)";
musicbubble.style.width = "9999px";
musicbubble.style.height = "80px";

musicbubble.addEventListener("mouseenter", () => {
    musicbubble.style.backgroundColor = "black";
    musicbubble.style.border = "2px white";
});

musicbubble.addEventListener("mouseleave", () => {
    clearInterval(musicbubble.dataset.intervalId);
    musicbubble.style.backgroundColor = "rgb(180, 63, 63)";
});

const newstuffTab = document.getElementById("newstuff");

newstuffTab.style.height = "80px";
newstuffTab.style.marginLeft = "auto";
newstuffTab.style.marginRight = "auto";
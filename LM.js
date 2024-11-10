const linkBubbles = document.querySelectorAll(".linkBubbleAM");

linkBubbles.forEach(bubble => {
    bubble.style.backgroundColor = "rgb(180, 63, 63)";
    bubble.style.width = "device-width";
    bubble.style.height = "80px";

    // Add mouseenter event listener
    bubble.addEventListener("mouseenter", () => {
        bubble.style.backgroundColor = "black";
    });

    // Add mouseleave event listener outside the mouseenter
    bubble.addEventListener("mouseleave", () => {
        bubble.style.backgroundColor = "rgb(180, 63, 63)";
    });
});
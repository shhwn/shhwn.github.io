const allTab = document.getElementById("alltab")
const newestpageTab = document.getElementById("newestpagetab")

window.addEventListener('load', function() {
    const button = document.getElementById('newestpagetab');
    if (button) {
        button.click();
        button.style.backgroundColor = '#ff073a';

        alltab.addEventListener('click', function(event) {
            if (event.target && event.target.id !== 'newestpagetab') {
                button.style.backgroundColor = '';
            }
        }, {});
    }
});

function openTab(evt, funcName) {
    var i, Tab, pagetabs;
    Tab = document.getElementsByClassName("Tab");
    for (i = 0; i < Tab.length; i++) {
        Tab[i].style.display = "none";
    }
    pagetabs = document.getElementsByClassName("pagetabs");
    for (i = 0; i < pagetabs.length; i++) {
        pagetabs[i].className = pagetabs[i].className.replace(" active", "");
    }
    document.getElementById(funcName).style.display = "block";
    evt.currentTarget.className += " active";
};

const linkBubbles = document.querySelectorAll(".linkBubbleAM");
linkBubbles.forEach(bubble => {
    bubble.style.backgroundColor = "#ff073a";
    bubble.style.width = "300px";
    bubble.style.height = "80px";
    bubble.style.borderRadius = "50px"

    bubble.addEventListener("mouseenter", () => {
        bubble.style.backgroundColor = "#000000";
    });

    bubble.addEventListener("mouseleave", () => {
        bubble.style.backgroundColor = "#ff073a";
    });
});

const sintab = document.getElementById("sinTab");
sintab.style.backgroundColor = "#ff073a"
sintab.style.width = "100%"
sintab.style.height = "70px";
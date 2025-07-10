// dark mode feature:
let lightMode = localStorage.getItem('lightMode');
const Theme = document.getElementById('theme');

const enableLightMode = () => {
    document.body.classList.add('lightMode');
    localStorage.setItem('lightMode', 'active');
};

const disableLightMode = () => {
    document.body.classList.remove('lightMode');
    localStorage.setItem('lightMode', null);
};

if (lightMode === 'active') {
    enableLightMode();
}

Theme.addEventListener("click", () => {
    lightMode = localStorage.getItem('lightMode');
    lightMode !== "active" ? enableLightMode() : disableLightMode();
});

document.getElementById('theme').addEventListener('click', function () {
    document.body.classList.toggle('lightMode');
    document.body.classList.toggle('darkMode');
});

// popoupcards: 
function popUpFunc(placeholderID) {
    const PopUpCard = document.querySelectorAll('.popupcard');
    const overlay = document.getElementById('overlay');
    PopUpCard.forEach(p => p.style.display = 'none');

    overlay.style.display = 'block';

    const targetPopup = document.getElementById(placeholderID);
        if (targetPopup) {
        targetPopup.style.display = 'block';
    }
}

document.addEventListener("click", function (deleteMe) {
    if (deleteMe.target.closest("#closeButton")) {
        const close = deleteMe.target.closest(".popupcard");
        if (close) {
            close.style.display = 'none';
        }
        const overlay = document.getElementById('overlay');
        if(overlay){
            overlay.style.display = 'none';
        };
    };
});

function makeDraggable(note) {
    let offsetX, offsetY;

    const move = (e) => {
        note.style.left = `${e.clientX - offsetX}px`;
        note.style.top = `${e.clientY - offsetY}px`;
    };

    note.addEventListener("mousedown", (e) => {
        offsetX = e.clientX - note.offsetLeft;
        offsetY = e.clientY - note.offsetTop;
        document.addEventListener("mousemove", move);
    });

    document.addEventListener("mouseup", () => {
        document.removeEventListener("mousemove", move);
    });
}

makeDraggable(document.querySelector(".gompers"));

window.addEventListener(() => {
    const gomp = document.querySelector(".gompers");
    if (gomp) makeDraggable(gomp);
});

const hamMenu = document.querySelector('.menu');
const hoverMenu = document.querySelector('.hoverMenu');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    hoverMenu.classList.toggle('active');
});
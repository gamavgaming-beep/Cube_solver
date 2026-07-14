/* =====================================
   Rubik Solver Pro
   cube.js - Part 1
===================================== */

const faces = [
    "U",
    "R",
    "F",
    "D",
    "L",
    "B"
];

const defaultColors = {
    U: "white",
    R: "red",
    F: "green",
    D: "yellow",
    L: "orange",
    B: "blue"
};

let selectedColor = "white";

// Color Picker
document.querySelectorAll(".color").forEach(btn => {
    btn.addEventListener("click", () => {
        selectedColor = btn.dataset.color;
    });
});

// Create 54 Stickers
faces.forEach(face => {

    const faceDiv = document.getElementById("face-" + face);

    if (!faceDiv) return;

    faceDiv.innerHTML = `
        <h3>${face}</h3>
        <div class="face-grid"></div>
    `;

    const grid = faceDiv.querySelector(".face-grid");

    for (let i = 0; i < 9; i++) {

        const sticker = document.createElement("div");

        sticker.className = "sticker";

        sticker.style.background = defaultColors[face];

        sticker.dataset.face = face;
        sticker.dataset.index = i;

        sticker.addEventListener("click", () => {
            sticker.style.background = selectedColor;
        });

        grid.appendChild(sticker);

    }

});

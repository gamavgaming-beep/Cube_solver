/* =====================================
   Rubik Solver Pro
   script.js - Part 1
===================================== */

const editor = document.getElementById("cubeEditor");

const faceNames = [
    "U", // White
    "R", // Red
    "F", // Green
    "D", // Yellow
    "L", // Orange
    "B"  // Blue
];

const faceColors = [
    "white",
    "red",
    "green",
    "yellow",
    "orange",
    "blue"
];

let selectedColor = "white";

document.querySelectorAll(".color").forEach(btn => {

    btn.addEventListener("click", () => {

        selectedColor = btn.dataset.color;

    });

});

function createCube() {

    editor.innerHTML = "";

    for (let face = 0; face < 6; face++) {

        const faceBox = document.createElement("div");

        faceBox.className = "face";

        const title = document.createElement("h4");

        title.innerText = faceNames[face];

        faceBox.appendChild(title);

        const grid = document.createElement("div");

        grid.className = "faceGrid";

        for (let i = 0; i < 9; i++) {

            const sticker = document.createElement("div");

            sticker.className = "sticker";

            sticker.style.background = faceColors[face];

            sticker.dataset.face = face;

            sticker.dataset.index = i;

            sticker.onclick = function(){

                this.style.background = selectedColor;

            };

            grid.appendChild(sticker);

        }

        faceBox.appendChild(grid);

        editor.appendChild(faceBox);

    }

}

createCube();

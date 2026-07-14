/* =====================================
   Rubik Solver Pro
   script.js - Part 1
===================================== */

const FACE_ORDER = ["U", "R", "F", "D", "L", "B"];

const FACE_COLORS = {
    U: "white",
    R: "red",
    F: "green",
    D: "yellow",
    L: "orange",
    B: "blue"
};

let selectedColor = "white";

const cubeState = {};

FACE_ORDER.forEach(face => {
    cubeState[face] = [];
    for (let i = 0; i < 9; i++) {
        cubeState[face].push(FACE_COLORS[face]);
    }
});

function createSticker(face, index) {

    const sticker = document.createElement("div");

    sticker.className = "sticker";

    sticker.dataset.face = face;
    sticker.dataset.index = index;

    sticker.style.background = cubeState[face][index];

    sticker.addEventListener("click", () => {

        cubeState[face][index] = selectedColor;

        sticker.style.background = selectedColor;

    });

    return sticker;

}

function createFace(faceName) {

    const face = document.getElementById("face-" + faceName);

    if (!face) return;

    face.innerHTML = "";

    const title = document.createElement("h3");

    title.textContent = faceName;

    face.appendChild(title);

    const grid = document.createElement("div");

    grid.className = "face-grid";

    for (let i = 0; i < 9; i++) {

        grid.appendChild(createSticker(faceName, i));

    }

    face.appendChild(grid);

}

function loadCube() {

    FACE_ORDER.forEach(face => {

        createFace(face);

    });

}

document.querySelectorAll(".color").forEach(btn => {

    btn.addEventListener("click", () => {

        selectedColor = btn.dataset.color;

        document.querySelectorAll(".color").forEach(c => {

            c.style.outline = "none";

        });

        btn.style.outline = "4px solid white";

    });

});

loadCube();

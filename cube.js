
/* ==========================================
   Rubik Solver Pro
   cube.js - Part 1
========================================== */

const COLORS = [
    "white",
    "yellow",
    "red",
    "orange",
    "blue",
    "green"
];

let selectedColor = "white";

let cubeState = [];

function createSolvedCube() {

    cubeState = [];

    for (let face = 0; face < 6; face++) {

        cubeState.push([]);

        for (let i = 0; i < 9; i++) {

            cubeState[face].push(COLORS[face]);

        }

    }

}

function createCubeEditor() {

    const editor = document.getElementById("cubeEditor");

    editor.innerHTML = "";

    for (let i = 0; i < 54; i++) {

        const sticker = document.createElement("div");

        sticker.className = "sticker";

        sticker.dataset.index = i;

        const face = Math.floor(i / 9);

        const pos = i % 9;

        sticker.dataset.face = face;

        sticker.dataset.pos = pos;

        sticker.style.background = cubeState[face][pos];

        sticker.onclick = () => {

            cubeState[face][pos] = selectedColor;

            sticker.style.background = selectedColor;

        };

        editor.appendChild(sticker);

    }

}

function initColorPicker() {

    document.querySelectorAll(".color").forEach(btn => {

        btn.onclick = () => {

            selectedColor = btn.dataset.color;

            document.querySelectorAll(".color").forEach(c => {

                c.style.transform = "scale(1)";

            });

            btn.style.transform = "scale(1.2)";

        };

    });

}

window.addEventListener("DOMContentLoaded", () => {

    createSolvedCube();

    createCubeEditor();

    initColorPicker();

});

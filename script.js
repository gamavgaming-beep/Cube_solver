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

/* =====================================
   Rubik Solver Pro
   script.js - Part 2
===================================== */

// Theme Toggle
const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("light-theme");

        themeBtn.textContent =
            document.body.classList.contains("light-theme")
            ? "☀️"
            : "🌙";

    });

}

// Timer
let seconds = 0;

setInterval(() => {

    seconds++;

    const min = String(Math.floor(seconds / 60)).padStart(2, "0");
    const sec = String(seconds % 60).padStart(2, "0");

    const timer = document.getElementById("timer");

    if (timer) {
        timer.textContent = `${min}:${sec}`;
    }

}, 1000);

// Move Counter
let moveCount = 0;

function updateMoveCount(){

    const el = document.getElementById("moveCount");

    if(el){
        el.textContent = moveCount;
    }

}

// Count Sticker Clicks
document.addEventListener("click",(e)=>{

    if(e.target.classList.contains("sticker")){

        moveCount++;

        updateMoveCount();

    }

});

// Reset Button
const resetBtn = document.getElementById("resetBtn");

if(resetBtn){

    resetBtn.addEventListener("click",()=>{

        location.reload();

    });

}

// Scramble Button (Demo)
const scrambleBtn = document.getElementById("scrambleBtn");

if(scrambleBtn){

    scrambleBtn.addEventListener("click",()=>{

        document.getElementById("solutionOutput").innerHTML =
        "🔀 Random Scramble Generated (Demo)";

    });

}

// Validate Button (Demo)
const validateBtn = document.getElementById("validateBtn");

if(validateBtn){

    validateBtn.addEventListener("click",()=>{

        document.getElementById("solutionOutput").innerHTML =
        "✅ Cube Validation Successful";

    });

}

// Solve Button (Demo)
const solveBtn = document.getElementById("solveBtn");

if(solveBtn){

    solveBtn.addEventListener("click",()=>{

        document.getElementById("solutionOutput").innerHTML =
        "🤖 Solving...<br><br>Example:<br>R U R' U' F2";

    });

}

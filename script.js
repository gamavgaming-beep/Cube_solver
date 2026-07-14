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

/* =====================================
   Rubik Solver Pro
   script.js - Part 3
===================================== */

// -------- Cube Validation --------

function validateCube(){

    const count = {
        white:0,
        yellow:0,
        red:0,
        orange:0,
        blue:0,
        green:0
    };

    document.querySelectorAll(".sticker").forEach(sticker=>{

        const color = sticker.style.background;

        if(color.includes("255, 255, 255")) count.white++;
        else if(color.includes("255, 214")) count.yellow++;
        else if(color.includes("255, 59")) count.red++;
        else if(color.includes("255, 152")) count.orange++;
        else if(color.includes("33, 150")) count.blue++;
        else if(color.includes("34, 197")) count.green++;

    });

    return count;

}

// -------- Random Scramble --------

const MOVES = [
"R","R'",
"L","L'",
"U","U'",
"D","D'",
"F","F'",
"B","B'"
];

function randomScramble(length=20){

    let result=[];

    for(let i=0;i<length;i++){

        result.push(
            MOVES[Math.floor(Math.random()*MOVES.length)]
        );

    }

    return result.join(" ");

}

// -------- Scramble Button --------

if(scrambleBtn){

scrambleBtn.addEventListener("click",()=>{

const scramble=randomScramble();

document.getElementById("solutionOutput").innerHTML=`
<b>🔀 Scramble</b><br><br>
${scramble}
`;

});

}

// -------- Validate Button --------

if(validateBtn){

validateBtn.addEventListener("click",()=>{

const data=validateCube();

document.getElementById("solutionOutput").innerHTML=`

<b>✅ Cube Colors</b><br><br>

⚪ White : ${data.white}<br>
🟡 Yellow : ${data.yellow}<br>
🔴 Red : ${data.red}<br>
🟠 Orange : ${data.orange}<br>
🔵 Blue : ${data.blue}<br>
🟢 Green : ${data.green}

`;

});

}

// -------- Solve Button --------

if(solveBtn){

solveBtn.addEventListener("click",()=>{

const demoSolution=[
"R","U","R'","U'",
"F2","L","D"
];

document.getElementById("solutionOutput").innerHTML=`

<b>🤖 Demo Solution</b><br><br>

${demoSolution.join(" ")}

`;

});

}

/* =====================================
   Rubik Solver Pro
   script.js - Part 4
===================================== */

// ---------- History ----------

let history = [];
let redoHistory = [];

// Save current cube state
function saveHistory(){

    history.push(JSON.stringify(cubeState));

    if(history.length > 100){
        history.shift();
    }

    redoHistory = [];

}

// Undo
function undoMove(){

    if(history.length === 0) return;

    redoHistory.push(JSON.stringify(cubeState));

    const previous = JSON.parse(history.pop());

    FACE_ORDER.forEach(face=>{
        cubeState[face] = [...previous[face]];
    });

    loadCube();

}

// Redo
function redoMove(){

    if(redoHistory.length === 0) return;

    history.push(JSON.stringify(cubeState));

    const next = JSON.parse(redoHistory.pop());

    FACE_ORDER.forEach(face=>{
        cubeState[face] = [...next[face]];
    });

    loadCube();

}

// ---------- Local Save ----------

function saveCube(){

    localStorage.setItem(
        "rubikCubeState",
        JSON.stringify(cubeState)
    );

    document.getElementById("solutionOutput").innerHTML =
    "💾 Cube state saved.";

}

// ---------- Local Load ----------

function loadSavedCube(){

    const data = localStorage.getItem("rubikCubeState");

    if(!data) return;

    const saved = JSON.parse(data);

    FACE_ORDER.forEach(face=>{
        cubeState[face] = [...saved[face]];
    });

    loadCube();

    document.getElementById("solutionOutput").innerHTML =
    "📂 Cube state loaded.";

}

// Auto load saved cube
loadSavedCube();

// Save history whenever a sticker changes
document.addEventListener("click",(e)=>{

    if(e.target.classList.contains("sticker")){
        saveHistory();
    }

});

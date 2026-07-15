/* =====================================
   Rubik Solver Pro
   solver.js - Part 1
===================================== */

const DEMO_MOVES = [
"R",
"U",
"R'",
"U'",
"F",
"R2",
"D",
"L'",
"F2",
"U2",
"R",
"D'",
"L",
"B",
"U",
"R'",
"F'",
"D2",
"L2",
"U'",
"R2"
];

function startSolver(){

    const check = validateCube();

    if(!check.valid){

        document.getElementById("solveStatus").textContent =
        check.message;

        return;

    }

    solveCube();

}

/* =====================================
   solver.js - Part 2
===================================== */

function solveCube(){

    const cube = exportCube();

    console.log(cube);

    document.getElementById("solveStatus").textContent =
    "Generating Solution...";

    setTimeout(()=>{

        loadDemoSolution();

    },500);

}

/* =====================================
   solver.js - Part 3
===================================== */

function loadDemoSolution(){

    startPlayer(DEMO_MOVES);

    document.getElementById("solveStatus").textContent =
    "Solution Ready";

}

/* =====================================
   solver.js - Part 4
===================================== */

function getSolutionMoves(){

    return [...DEMO_MOVES];

}

function clearSolution(){

    startPlayer([]);

}

/* =====================================
   solver.js - Part 5
===================================== */

window.addEventListener("DOMContentLoaded",()=>{

    resetPlayer();

});


/* =====================================
   solver.js - Part 6
   Facelet Converter
===================================== */

function cubeStateToFacelets() {

    const map = {
        white: "U",
        red: "R",
        green: "F",
        yellow: "D",
        orange: "L",
        blue: "B"
    };

    let result = "";

    FACE_KEYS.forEach(face => {

        cubeState[face].forEach(color => {

            result += map[color];

        });

    });

    return result;

}

/* =====================================
   solver.js - Part 7
===================================== */

function showFacelets(){

    console.log(cubeStateToFacelets());

}

/* =====================================
   solver.js - Part 8
===================================== */

function startRealSolver(){

    const facelets = cubeStateToFacelets();

    console.log("Facelets:", facelets);

    Cube.initSolver();

    const cube = Cube.fromString(facelets);

    const solution = cube.solve();

    console.log("Solution:", solution);

}


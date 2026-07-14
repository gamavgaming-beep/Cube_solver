/* =====================================
   Rubik Solver Pro
   solver.js - Part 1
===================================== */

const DEMO_SOLUTION = [
    "R",
    "U",
    "R'",
    "U'",
    "F2",
    "L",
    "D'",
    "R2",
    "U2"
];

function getDemoSolution() {
    return [...DEMO_SOLUTION];
}

function showSolution() {

    const output = document.getElementById("solutionOutput");

    if (!output) return;

    const moves = getDemoSolution();

    output.innerHTML = `
        <h3>🤖 Demo Solution</h3>
        <br>
        ${moves.join(" ")}
        <br><br>
        Total Moves : ${moves.length}
    `;

}

const solveButton = document.getElementById("solveBtn");

if (solveButton) {

    solveButton.addEventListener("click", () => {

        showSolution();

       startAnimation(getDemoSolution());
       
    });

}

/* =====================================
   Rubik Solver Pro
   solver.js - Part 3
===================================== */

function exportCubeState() {

    const data = {};

    FACE_ORDER.forEach(face => {
        data[face] = [...cubeState[face]];
    });

    console.log("Cube State:", data);

    return data;

}

function copyCubeState() {

    const text = JSON.stringify(exportCubeState(), null, 2);

    navigator.clipboard.writeText(text).then(() => {

        document.getElementById("solutionOutput").innerHTML =
        "📋 Cube State copied successfully.";

    });

}

function printCubeState() {

    const cube = exportCubeState();

    document.getElementById("solutionOutput").innerHTML =
    "<b>Cube Export Ready</b><br><br><pre>" +
    JSON.stringify(cube, null, 2) +
    "</pre>";

}

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

    });

}


/* =====================================
   Rubik Solver Pro
   app.js - Part 1
===================================== */

window.addEventListener("DOMContentLoaded", () => {

    console.log("Rubik Solver Pro Started");

    const solutionOutput = document.getElementById("solutionOutput");

    if (solutionOutput) {
        solutionOutput.innerHTML =
            "🟢 System Ready<br>Waiting for cube input...";
    }

    // Theme Button
    const themeBtn = document.getElementById("themeBtn");

    if (themeBtn) {

        themeBtn.addEventListener("click", () => {

            document.body.classList.toggle("light-theme");

            if (document.body.classList.contains("light-theme")) {
                themeBtn.innerHTML = "☀️";
            } else {
                themeBtn.innerHTML = "🌙";
            }

        });

    }

    // Reset Button
    const resetBtn = document.getElementById("resetBtn");

    if (resetBtn) {

        resetBtn.addEventListener("click", () => {

            location.reload();

        });

    }

});

/* =====================================
   Rubik Solver Pro
   app.js - Part 2
===================================== */

// Move Counter
let moveCount = 0;

function updateMoveCount() {
    const moveElement = document.getElementById("moveCount");
    if (moveElement) {
        moveElement.textContent = moveCount;
    }
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

// Validate Button
const validateBtn = document.getElementById("validateBtn");

if (validateBtn) {

    validateBtn.addEventListener("click", () => {

        document.getElementById("solutionOutput").innerHTML =
            "✅ Cube validation feature will be added in the next update.";

    });

}

// Solve Button
const solveBtn = document.getElementById("solveBtn");

if (solveBtn) {

    solveBtn.addEventListener("click", () => {

        moveCount = 20;

        updateMoveCount();

        document.getElementById("solutionOutput").innerHTML =
            "🤖 Solver engine will be connected in the next update.<br><br>Example Solution:<br>R U R' U' F2";

    });

}

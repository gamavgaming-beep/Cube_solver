
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

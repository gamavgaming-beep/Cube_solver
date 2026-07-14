/* =====================================
   Rubik Solver Pro
   validator.js
===================================== */

const REQUIRED_COLORS = [
    "white",
    "yellow",
    "red",
    "orange",
    "blue",
    "green"
];

function validateCubeState() {

    const count = {};

    REQUIRED_COLORS.forEach(color => {
        count[color] = 0;
    });

    document.querySelectorAll(".sticker").forEach(sticker => {

        const color = sticker.style.background;

        if (count.hasOwnProperty(color)) {
            count[color]++;
        }

    });

    let valid = true;
    let message = "";

    REQUIRED_COLORS.forEach(color => {

        if (count[color] !== 9) {

            valid = false;

            message += `${color}: ${count[color]}/9<br>`;

        }

    });

    return {
        valid,
        message
    };

}

const validateButton = document.getElementById("validateBtn");

if (validateButton) {

    validateButton.addEventListener("click", () => {

        const result = validateCubeState();

        const output = document.getElementById("solutionOutput");

        if (result.valid) {

            output.innerHTML =
                "✅ Cube color count is valid.<br>Ready to solve.";

        } else {

            output.innerHTML =
                "❌ Invalid Cube.<br><br>" + result.message;

        }

    });

}

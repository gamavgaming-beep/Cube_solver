/* =====================================
   Rubik Solver Pro
   validator.js - Part 1
===================================== */

function validateCube(){

    const result = {
        valid: true,
        message: "Cube is valid."
    };

    const total = {
        white:0,
        yellow:0,
        red:0,
        orange:0,
        blue:0,
        green:0
    };

    FACE_KEYS.forEach(face=>{

        cubeState[face].forEach(color=>{

            if(total[color] !== undefined){

                total[color]++;

            }

        });

    });

    for(const color in total){

        if(total[color] !== 9){

            result.valid = false;

            result.message =
            `${color.toUpperCase()} must appear exactly 9 times.`;

            break;

        }

    }

    return result;

}

/* =====================================
   validator.js - Part 2
===================================== */

function updateValidationStatus(){

    const status = document.getElementById("solveStatus");

    if(!status) return;

    const check = validateCube();

    status.textContent = check.message;

    if(check.valid){

        status.style.color = "#22c55e";

    }else{

        status.style.color = "#ef4444";

    }

}

/* =====================================
   validator.js - Part 3
===================================== */

document.addEventListener("click",()=>{

    updateValidationStatus();

});

window.addEventListener("DOMContentLoaded",()=>{

    updateValidationStatus();

});

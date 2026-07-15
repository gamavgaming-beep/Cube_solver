/* =====================================
   Rubik Solver Pro
   validator.js
   Version 2.0
===================================== */

"use strict";

const COLORS = [
    "white",
    "yellow",
    "red",
    "orange",
    "blue",
    "green"
];

function countCubeColors(){

    const total = {};

    COLORS.forEach(color=>{

        total[color]=0;

    });

    FACE_KEYS.forEach(face=>{

        cubeState[face].forEach(color=>{

            if(total.hasOwnProperty(color)){

                total[color]++;

            }

        });

    });

    return total;

}

function validateCube(){

    const count = countCubeColors();

    const result = {

        valid:true,

        message:"Cube Ready"

    };

    for(const color of COLORS){

        if(count[color]!==9){

            result.valid=false;

            result.message=
            `${color.toUpperCase()} : ${count[color]}/9`;

            return result;

        }

    }

    return result;

}

function updateValidationStatus(){

    const status =
    document.getElementById("solveStatus");

    if(!status) return;

    const check =
    validateCube();

    status.textContent =
    check.message;

    status.style.color =
    check.valid
    ? "#22c55e"
    : "#ef4444";

}

function isCubeReady(){

    return validateCube().valid;

}

window.addEventListener(

    "DOMContentLoaded",

    ()=>{

        updateValidationStatus();

    }

);

document.addEventListener(

    "click",

    ()=>{

        updateValidationStatus();

    }

);

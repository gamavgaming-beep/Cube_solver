/* =====================================
   Rubik Solver Pro
   color-picker.js - Part 1
===================================== */

const COLORS = [
    "white",
    "yellow",
    "red",
    "orange",
    "blue",
    "green"
];

let activeColor = "white";

const colorButtons = document.querySelectorAll(".color");

colorButtons.forEach(button => {

    button.addEventListener("click", () => {

        activeColor = button.dataset.color;

        selectedColor = activeColor;

        updateColorSelection(button);

    });

});

function updateColorSelection(activeButton){

    colorButtons.forEach(button => {

        button.classList.remove("active");

    });

    activeButton.classList.add("active");

}

function getSelectedColor(){

    return activeColor;

}

/* =====================================
   Rubik Solver Pro
   color-picker.js - Part 2
===================================== */

function resetColorSelection(){

    activeColor = "white";

    selectedColor = "white";

    colorButtons.forEach(button => {

        button.classList.remove("active");

        if(button.dataset.color === "white"){

            button.classList.add("active");

        }

    });

}

function getColorCount(face){

    const count = {
        white:0,
        yellow:0,
        red:0,
        orange:0,
        blue:0,
        green:0
    };

    cubeState[face].forEach(color=>{

        if(count[color] !== undefined){

            count[color]++;

        }

    });

    return count;

}

function refreshCurrentFace(){

    if(typeof loadFace === "function"){

        loadFace(currentFace);

    }

}

window.addEventListener("DOMContentLoaded",()=>{

    const whiteButton=document.querySelector('.color[data-color="white"]');

    if(whiteButton){

        whiteButton.click();

    }

});

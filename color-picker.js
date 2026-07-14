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

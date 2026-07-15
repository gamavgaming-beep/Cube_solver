/* =====================================
   Rubik Solver Pro
   app.js - Part 1
===================================== */

const FACE_NAMES = [
    "Top (U)",
    "Right (R)",
    "Front (F)",
    "Bottom (D)",
    "Left (L)",
    "Back (B)"
];

let currentFace = 0;

const wizard = document.getElementById("wizard");
const solveScreen = document.getElementById("solveScreen");

const stepTitle = document.getElementById("stepTitle");
const progressBar = document.getElementById("progressBar");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function updateWizardUI(){

    stepTitle.textContent =
        `Step ${currentFace + 1} / 6 • ${FACE_NAMES[currentFace]}`;

    progressBar.style.width =
        ((currentFace + 1) / 6 * 100) + "%";

    prevBtn.disabled = currentFace === 0;

    if(currentFace === 5){
        nextBtn.textContent = "Finish ✓";
    }else{
        nextBtn.textContent = "Next ➜";
    }

}

updateWizardUI();

/* =====================================
   Rubik Solver Pro
   app.js - Part 2
===================================== */

prevBtn.addEventListener("click", () => {

    if(currentFace > 0){

        currentFace--;

        updateWizardUI();

        if(typeof loadFace === "function"){
            loadFace(currentFace);
        }

    }

});

nextBtn.addEventListener("click", () => {

    if(currentFace < 5){

        currentFace++;

        updateWizardUI();

        if(typeof loadFace === "function"){
            loadFace(currentFace);
        }

    }else{

        wizard.classList.add("hidden");

        solveScreen.classList.remove("hidden");

        document.getElementById("solveStatus").textContent =
        "Ready to Solve";

        if(typeof startSolver === "function"){
            startSolver();
        }

    }

});

window.addEventListener("DOMContentLoaded", () => {

    if(typeof loadFace === "function"){
        loadFace(0);
    }

});

/* =====================================
   Rubik Solver Pro
   app.js - Part 3
===================================== */

function showWizard(){

    wizard.classList.remove("hidden");

    solveScreen.classList.add("hidden");

}

function showSolveScreen(){

    wizard.classList.add("hidden");

    solveScreen.classList.remove("hidden");

}

function resetApplication(){

    currentFace = 0;

    updateWizardUI();

    showWizard();

    if(typeof resetCube === "function"){

        resetCube();

    }

    if(typeof resetPlayer === "function"){

        resetPlayer();

    }

    document.getElementById("solveStatus").textContent =
    "Waiting...";

}

/* =====================================
   Rubik Solver Pro
   app.js - Part 4
===================================== */

window.addEventListener("keydown",(e)=>{

    if(e.key==="ArrowRight"){

        nextBtn.click();

    }

    if(e.key==="ArrowLeft"){

        prevBtn.click();

    }

});

/* =====================================
   Rubik Solver Pro
   app.js - Part 5
===================================== */

function updateStatistics(){

    document.getElementById("currentStep").textContent =
    currentFace + 1;

}

setInterval(updateStatistics,100);

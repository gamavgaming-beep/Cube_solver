/* =====================================
   Rubik Solver Pro
   wizard.js - Part 1
===================================== */

const FACE_KEYS = ["U","R","F","D","L","B"];

const FACE_DEFAULT = {
    U:"white",
    R:"red",
    F:"green",
    D:"yellow",
    L:"orange",
    B:"blue"
};

const cubeState = {};

FACE_KEYS.forEach(face=>{

    cubeState[face]=[];

    for(let i=0;i<9;i++){

        cubeState[face].push(FACE_DEFAULT[face]);

    }

});

let selectedColor="white";

function loadFace(index){

    const face=FACE_KEYS[index];

    const editor=document.getElementById("faceEditor");

    editor.innerHTML="";

    for(let i=0;i<9;i++){

        const sticker=document.createElement("div");

        sticker.className="sticker";

        sticker.dataset.face=face;

        sticker.dataset.index=i;

        sticker.style.background=cubeState[face][i];

        sticker.onclick=()=>{

            cubeState[face][i]=selectedColor;

            sticker.style.background=selectedColor;

        };

        editor.appendChild(sticker);

    }

}

/* =====================================
   Rubik Solver Pro
   wizard.js - Part 2
===================================== */

document.querySelectorAll(".color").forEach(btn=>{

    btn.addEventListener("click",()=>{

        selectedColor=btn.dataset.color;

        document.querySelectorAll(".color").forEach(c=>{

            c.style.outline="none";
            c.style.transform="scale(1)";

        });

        btn.style.outline="4px solid #ffffff";
        btn.style.transform="scale(1.12)";

    });

});

function resetCurrentFace(){

    const face=FACE_KEYS[currentFace];

    cubeState[face]=[];

    for(let i=0;i<9;i++){

        cubeState[face].push(FACE_DEFAULT[face]);

    }

    loadFace(currentFace);

}

function resetCube(){

    FACE_KEYS.forEach(face=>{

        cubeState[face]=[];

        for(let i=0;i<9;i++){

            cubeState[face].push(FACE_DEFAULT[face]);

        }

    });

    currentFace=0;

    if(typeof updateWizardUI==="function"){
        updateWizardUI();
    }

    loadFace(0);

}

function getCubeState(){

    return JSON.parse(JSON.stringify(cubeState));

}

/* =====================================
   Rubik Solver Pro
   wizard.js - Part 3
===================================== */

function isFaceComplete(face){

    if(!cubeState[face]) return false;

    return cubeState[face].length===9;

}

function isCubeComplete(){

    for(const face of FACE_KEYS){

        if(!isFaceComplete(face)){
            return false;
        }

    }

    return true;

}

function updateProgress(){

    if(typeof updateWizardUI==="function"){

        updateWizardUI();

    }

}

function exportCube(){

    return {

        U:[...cubeState.U],
        R:[...cubeState.R],
        F:[...cubeState.F],
        D:[...cubeState.D],
        L:[...cubeState.L],
        B:[...cubeState.B]

    };

}

function getFaceletString(){

    const map = {
        white: "U",
        red: "R",
        green: "F",
        yellow: "D",
        orange: "L",
        blue: "B"
    };

    let facelets = "";

    FACE_KEYS.forEach(face => {

        cubeState[face].forEach(color => {

            facelets += map[color];

        });

    });

    return facelets;

}

function printCube(){

    console.log(exportCube());

}

window.addEventListener("DOMContentLoaded",()=>{

    loadFace(0);

    document.querySelector(".color.white")?.click();

});

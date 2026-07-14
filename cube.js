/* =====================================
   Rubik Solver Pro
   cube.js - Part 1
===================================== */

function loadFace(faceIndex){

    const face = FACE_KEYS[faceIndex];

    const editor = document.getElementById("faceEditor");

    if(!editor) return;

    editor.innerHTML = "";

    editor.style.display = "grid";
    editor.style.gridTemplateColumns = "repeat(3,90px)";
    editor.style.gridTemplateRows = "repeat(3,90px)";
    editor.style.gap = "10px";
    editor.style.justifyContent = "center";

    for(let i=0;i<9;i++){

        const sticker = document.createElement("div");

        sticker.className = "sticker";

        sticker.dataset.face = face;

        sticker.dataset.index = i;

        sticker.style.background =
            cubeState[face][i];

        sticker.addEventListener("click",()=>{

            cubeState[face][i] = selectedColor;

            sticker.style.background = selectedColor;

        });

        editor.appendChild(sticker);

    }

}

/* =====================================
   Rubik Solver Pro
   cube.js - Part 2
===================================== */

function refreshFace(){

    loadFace(currentFace);

}

function setSticker(face,index,color){

    cubeState[face][index]=color;

}

function getSticker(face,index){

    return cubeState[face][index];

}

function fillFace(face,color){

    for(let i=0;i<9;i++){

        cubeState[face][i]=color;

    }

}

function resetCurrentFace(){

    const face=FACE_KEYS[currentFace];

    fillFace(face,FACE_DEFAULT[face]);

    refreshFace();

}

/* =====================================
   Rubik Solver Pro
   cube.js - Part 3
===================================== */

function resetCubeState(){

    FACE_KEYS.forEach(face=>{

        fillFace(face,FACE_DEFAULT[face]);

    });

}

window.addEventListener("DOMContentLoaded",()=>{

    resetCubeState();

    loadFace(0);

});

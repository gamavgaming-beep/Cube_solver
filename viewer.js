/* ==========================================
   Rubik Solver Pro
   viewer.js
   Part 1
   Cube Viewer Core
========================================== */

"use strict";

/* ---------- Viewer State ---------- */

let viewerCube = null;
let solutionMoves = [];
let currentMoveIndex = 0;

/* ---------- Colors ---------- */

const FACE_COLORS = {

    U: "#ffffff",
    R: "#ff3b30",
    F: "#34c759",
    D: "#ffd60a",
    L: "#ff9500",
    B: "#007aff"

};

/* ---------- Create Solved Cube ---------- */

function createViewerCube(){

    viewerCube = Cube.fromString(

        "UUUUUUUUU" +
        "RRRRRRRRR" +
        "FFFFFFFFF" +
        "DDDDDDDDD" +
        "LLLLLLLLL" +
        "BBBBBBBBB"

    );

}

/* ---------- Load Cube ---------- */

function loadViewerCube(facelets){

    viewerCube = Cube.fromString(facelets);

}

/* ---------- Reset ---------- */

function resetViewer(){

    createViewerCube();

    renderViewerCube();

}

/* ---------- Render ---------- */

function renderViewerCube(){

    const container =
    document.getElementById("viewerCube");

    if(!container) return;

    if(!viewerCube){

        createViewerCube();

    }

    container.innerHTML="";

    const facelets =
    viewerCube.asString();

    const grid =
    document.createElement("div");

    grid.className="viewer-grid";

    for(let i=0;i<54;i++){

        const sticker =
        document.createElement("div");

        sticker.className =
        "viewer-sticker";

        sticker.style.background =
        FACE_COLORS[facelets[i]];

        grid.appendChild(sticker);

    }

    container.appendChild(grid);

}

/* ---------- Startup ---------- */

window.addEventListener(

    "DOMContentLoaded",

    ()=>{

        createViewerCube();

        renderViewerCube();

    }

);

/* =====================================
   viewer.js - Part 2
   Navigation Engine
===================================== */

function nextMove() {

    if (solutionMoves.length === 0) return;

    if (currentMoveIndex < solutionMoves.length - 1) {

        currentMoveIndex++;

        updateViewer();

    }

}

function previousMove() {

    if (solutionMoves.length === 0) return;

    if (currentMoveIndex > 0) {

        currentMoveIndex--;

        updateViewer();

    }

}

function goToMove(index) {

    if (solutionMoves.length === 0) return;

    if (index < 0) index = 0;

    if (index >= solutionMoves.length)
        index = solutionMoves.length - 1;

    currentMoveIndex = index;

    updateViewer();

}

function firstMove() {

    goToMove(0);

}

function lastMove() {

    if (solutionMoves.length === 0) return;

    goToMove(solutionMoves.length - 1);

}

/* =====================================
   viewer.js - Part 3
   Button Events
===================================== */

window.addEventListener("DOMContentLoaded", () => {

    const nextBtn = document.getElementById("moveNext");
    const prevBtn = document.getElementById("movePrev");

    if (nextBtn) {

        nextBtn.onclick = () => {

            nextMove();

        };

    }

    if (prevBtn) {

        prevBtn.onclick = () => {

            previousMove();

        };

    }

    updateViewer();

});

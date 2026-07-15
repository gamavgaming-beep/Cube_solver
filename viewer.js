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

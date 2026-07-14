/* =====================================
   Rubik Solver Pro
   viewer.js - Part 1
===================================== */

let solutionMoves = [];

let currentMoveIndex = 0;

function loadSolution(moves){

    solutionMoves = [...moves];

    currentMoveIndex = 0;

    updateViewer();

}

function updateViewer(){

    const moveInfo =
    document.getElementById("moveInfo");

    const currentMove =
    document.getElementById("currentMove");

    if(solutionMoves.length===0){

        moveInfo.textContent="Move 0 / 0";

        currentMove.textContent="-";

        return;

    }

    moveInfo.textContent=
    `Move ${currentMoveIndex+1} / ${solutionMoves.length}`;

    currentMove.textContent=
    solutionMoves[currentMoveIndex];

}

/* =====================================
   viewer.js - Part 2
===================================== */

function nextMove(){

    if(currentMoveIndex < solutionMoves.length-1){

        currentMoveIndex++;

        updateViewer();

    }

}

function previousMove(){

    if(currentMoveIndex>0){

        currentMoveIndex--;

        updateViewer();

    }

}

/* =====================================
   viewer.js - Part 3
===================================== */

window.addEventListener("DOMContentLoaded",()=>{

    document
    .getElementById("moveNext")
    ?.addEventListener("click",nextMove);

    document
    .getElementById("movePrev")
    ?.addEventListener("click",previousMove);

});

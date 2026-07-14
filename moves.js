/* =====================================
   Rubik Solver Pro
   moves.js - Part 1
===================================== */

const MOVE_LIST = [];

function setMoves(moves){

    MOVE_LIST.length = 0;

    moves.forEach(move=>{

        MOVE_LIST.push(move);

    });

    currentMoveIndex = 0;

}

function getCurrentMove(){

    if(MOVE_LIST.length===0){

        return "-";

    }

    return MOVE_LIST[currentMoveIndex];

}

/* =====================================
   moves.js - Part 2
===================================== */

function nextPattern(){

    if(currentMoveIndex<MOVE_LIST.length-1){

        currentMoveIndex++;

        updateViewer();

    }

}

function previousPattern(){

    if(currentMoveIndex>0){

        currentMoveIndex--;

        updateViewer();

    }

}

/* =====================================
   moves.js - Part 3
===================================== */

function firstMove(){

    currentMoveIndex = 0;

    updateViewer();

}

function lastMove(){

    if(MOVE_LIST.length===0) return;

    currentMoveIndex = MOVE_LIST.length-1;

    updateViewer();

}

/* =====================================
   moves.js - Part 4
===================================== */

window.addEventListener("DOMContentLoaded",()=>{

    document
    .getElementById("moveNext")
    ?.addEventListener("click",nextPattern);

    document
    .getElementById("movePrev")
    ?.addEventListener("click",previousPattern);

});

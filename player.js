/* =====================================
   Rubik Solver Pro
   player.js - Part 1
===================================== */

let playerState = {

    current:0,

    total:0,

    solved:false

};

function resetPlayer(){

    playerState.current = 0;

    playerState.total = 0;

    playerState.solved = false;

}

function startPlayer(moves){

    playerState.current = 0;

    playerState.total = moves.length;

    playerState.solved = false;

    setMoves(moves);

    loadSolution(moves);

    updatePlayerUI();

}

/* =====================================
   player.js - Part 2
===================================== */

function updatePlayerUI(){

    document.getElementById("moveCount").textContent =
    playerState.total;

    document.getElementById("currentStep").textContent =
    currentMoveIndex + 1;

    if(playerState.total === 0){

        document.getElementById("solveStatus").textContent =
        "Waiting...";

    }else{

        document.getElementById("solveStatus").textContent =
        "Showing Solution";

    }

}

/* =====================================
   player.js - Part 3
===================================== */

function nextPlayerMove(){

    nextPattern();

    updatePlayerUI();

}

function previousPlayerMove(){

    previousPattern();

    updatePlayerUI();

}

/* =====================================
   player.js - Part 4
===================================== */

window.addEventListener("DOMContentLoaded",()=>{

    document
    .getElementById("moveNext")
    ?.addEventListener("click",nextPlayerMove);

    document
    .getElementById("movePrev")
    ?.addEventListener("click",previousPlayerMove);

});

/* =====================================
   Rubik Solver Pro
   animation.js
===================================== */

let animationMoves = [];
let animationIndex = 0;
let animationTimer = null;

function startAnimation(moves){

    stopAnimation();

    animationMoves = [...moves];
    animationIndex = 0;

    animationTimer = setInterval(nextMove, 800);

}

function nextMove(){

    if(animationIndex >= animationMoves.length){

        stopAnimation();

        document.getElementById("solutionOutput").innerHTML +=
        "<br><br>✅ Solve Animation Finished";

        return;

    }

    const move = animationMoves[animationIndex];

    document.getElementById("solutionOutput").innerHTML =
    `
    <b>🎬 Solving Cube</b><br><br>

    Step ${animationIndex+1} / ${animationMoves.length}

    <br><br>

    👉 ${move}
    `;

    animationIndex++;

}

function stopAnimation(){

    if(animationTimer){

        clearInterval(animationTimer);

        animationTimer = null;

    }

}

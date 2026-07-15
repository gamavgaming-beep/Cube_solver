/* ============================================
   Rubik Solver Pro
   cube-engine.js
   Part 1A - Cube Core
============================================ */

"use strict";

/*
Face Order

U = 0
R = 1
F = 2
D = 3
L = 4
B = 5

Sticker Index

0 1 2
3 4 5
6 7 8

Total = 54 stickers
*/

const FACE = {

    U:0,
    R:1,
    F:2,
    D:3,
    L:4,
    B:5

};

const FACE_NAME = [

    "U",
    "R",
    "F",
    "D",
    "L",
    "B"

];

const DEFAULT_COLORS = [

    "white",
    "red",
    "green",
    "yellow",
    "orange",
    "blue"

];

class CubeEngine{

    constructor(){

        this.state=[];

        this.history=[];

        this.pointer=-1;

        this.reset();

    }

    reset(){

        this.state=[];

        for(let face=0;face<6;face++){

            const arr=[];

            for(let i=0;i<9;i++){

                arr.push(DEFAULT_COLORS[face]);

            }

            this.state.push(arr);

        }

        this.history=[];

        this.pointer=-1;

    }

    clone(){

        return JSON.parse(JSON.stringify(this.state));

    }

    load(state){

        this.state=
        JSON.parse(JSON.stringify(state));

    }

    export(){

        return JSON.parse(JSON.stringify(this.state));

    }

    get(face,index){

        return this.state[face][index];

    }

    set(face,index,color){

        this.state[face][index]=color;

    }

}

/* ============================================
   Part 1B
   Face Rotation Utilities
============================================ */

CubeEngine.prototype.rotateFaceCW = function(face){

    const s = this.state[face];

    this.state[face] = [

        s[6], s[3], s[0],

        s[7], s[4], s[1],

        s[8], s[5], s[2]

    ];

};

CubeEngine.prototype.rotateFaceCCW = function(face){

    this.rotateFaceCW(face);

    this.rotateFaceCW(face);

    this.rotateFaceCW(face);

};

CubeEngine.prototype.rotateFace180 = function(face){

    this.rotateFaceCW(face);

    this.rotateFaceCW(face);

};

CubeEngine.prototype.copyRow = function(face,row){

    const i = row * 3;

    return [

        this.state[face][i],

        this.state[face][i+1],

        this.state[face][i+2]

    ];

};

CubeEngine.prototype.setRow = function(face,row,data){

    const i = row * 3;

    this.state[face][i]   = data[0];

    this.state[face][i+1] = data[1];

    this.state[face][i+2] = data[2];

};

CubeEngine.prototype.copyCol = function(face,col){

    return [

        this.state[face][col],

        this.state[face][col+3],

        this.state[face][col+6]

    ];

};

CubeEngine.prototype.setCol = function(face,col,data){

    this.state[face][col]   = data[0];

    this.state[face][col+3] = data[1];

    this.state[face][col+6] = data[2];

};

/* ============================================
   Part 1C
   History Manager
============================================ */

CubeEngine.prototype.saveHistory = function(){

    this.history.push(this.clone());

    this.pointer = this.history.length - 1;

};

CubeEngine.prototype.undo = function(){

    if(this.pointer <= 0) return false;

    this.pointer--;

    this.load(this.history[this.pointer]);

    return true;

};

CubeEngine.prototype.redo = function(){

    if(this.pointer >= this.history.length - 1)
        return false;

    this.pointer++;

    this.load(this.history[this.pointer]);

    return true;

};

CubeEngine.prototype.clearHistory = function(){

    this.history = [];

    this.pointer = -1;

};

CubeEngine.prototype.initializeHistory = function(){

    this.clearHistory();

    this.saveHistory();

};

/* ============================================
   Part 1D
   Move Dispatcher
============================================ */

CubeEngine.prototype.move = function(move){

    switch(move){

        case "U": this.U(); break;
        case "U'": this.Ui(); break;
        case "U2": this.U2(); break;

        case "R": this.R(); break;
        case "R'": this.Ri(); break;
        case "R2": this.R2(); break;

        case "L": this.L(); break;
        case "L'": this.Li(); break;
        case "L2": this.L2(); break;

        case "F": this.F(); break;
        case "F'": this.Fi(); break;
        case "F2": this.F2(); break;

        case "B": this.B(); break;
        case "B'": this.Bi(); break;
        case "B2": this.B2(); break;

        case "D": this.D(); break;
        case "D'": this.Di(); break;
        case "D2": this.D2(); break;

        default:
            console.warn("Unknown Move :",move);

    }

    this.saveHistory();

};




/* ============================================
   Initialize Cube Engine
============================================ */

window.engine = new CubeEngine();

window.engine.initializeHistory();

console.log("Cube Engine Ready");

"use strict"

document.addEventListener('keyup', clickControl);

function clickControl(event) {
    if(event.key === "ArrowUp") {
        console.log('вверх');
    } else if(event.key === "ArrowDown") {
        console.log('вниз');
    } else if(event.key === "ArrowLeft") {
        console.log('влево');
    } else if(event.key === "ArrowRight") {
        console.log('вправо');
    } else {
        console.log('нажата другая клавиша');
    }
}

const scoreDisplay =  document.querySelector('.score');
const resultDisplay = document.querySelector('.result');
const colorCell = [
    '#afa192',
    '#eee4da',
    '#ede0c8',
    '#f2b179',
    '#ffcea4',
    '#e8c064',
    '#ffab6e',
    '#fd9982',
    '#ead79c',
    '#76daff',
    '#beeaa5',
    '#d7d4f0',
];

class GameManager {
    constructor() {
        this.isGameOver = false;
        this.score = 0;
        this.board = null;
    }

    init() {
        this.board = new Board();
        document.addEventListener('keyup', clickControl);
    }

    checkIsGameOver() {
        console.log('checkIsGameOver()');
    }
}

class Board {
    constructor() {
        this.widthBoard = 4;
        this.squares = [];
        this.wrapper = document.querySelector('.grid-container');
    }

    init() {
        const fragment = document.createDocumentFragment();
     
        for (let i = 0; i < this.width * this.width; i++) {
             const square = document.createElement('div');
             square.innerHTML = '';
             square.className = 'grid-cell ';
     
             fragment.appendChild(square);
             squares.push(square);
         }
     
         this.wrapper.appendChild(fragment);
     }

     generateNewCell() {
        console.log('generateNewCell()');
     }

     addColours() {
         console.log('addColours()');
     }
}

class Cell {
    constructor() {
        this.value = '';
        this.dom = null;
    }

    getValue() {
        console.log('getValue()');
    }

    setValue() {
        console.log('setValue()');
    }
    
    getNewElement() {
        console.log('getNewElement()');
    }
}

const start = new GameManager();
start.init();


















/*
шаги:
1. создаем 16 ячеек, присваиваем каждой значение
2. добавляем стрелочки для перемещения блоков
3. написать функцию сложения значений

*/
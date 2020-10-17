//grid-template-columns: repeat(64, 1fr);
//     grid-template-rows: repeat(64, 1fr) ;
//assign the DOM container element to container variable
let main = document.getElementById('main');
let button = document.querySelector('button');
let container = document.getElementById('container');
let cell = document.querySelectorAll('.cell');

button.addEventListener('click', function () {
    let a = prompt('Please specify the number of rows and columns');
    if (a > 100) {
        alert ('The number should be less or equal to 100')
    }
    else {
        container.textContent = '';
        createGrid(a,a);
    }
});

//Creates cells tagged 'div'
function createCells () {
    a = document.createElement('div');
    a.setAttribute('class', 'cell');
    let brigh = 60;
    let hue = Math.ceil(Math.random()*360);
    let satur = Math.ceil(Math.random()*100);
    a.addEventListener('mouseenter', function () {

        brigh -=10;
        event.target.setAttribute('style', `background-color: 
        hsl(${hue}, ${satur}%, ${brigh}%);`);


    });
    return a;
}
//get a random number
function randomizeNumber () {
    return Math.ceil(Math.random()*360);
}
// Use hsl scheme
// creates elements, the number is specified by "cells" and attaches to element.
function populateGrid (cells) {
    for (let i = 0; i<cells; i++) {
        container.appendChild(createCells());
    }

}

// creates a grid with specified number of rows and columns and populates it with cells rows*columns
function createGrid (rows, columns) {
    container.setAttribute('style', `grid-template-columns: repeat(${columns}, 1fr); 
        grid-template-rows: repeat(${rows}, 1fr);`);
    populateGrid(rows*columns, container)
}

createGrid(16,16);
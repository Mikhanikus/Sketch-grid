//grid-template-columns: repeat(64, 1fr);
//     grid-template-rows: repeat(64, 1fr) ;
//assign the DOM container element to container variable
let create = document.getElementById('create');
let container = document.getElementById('container');
let rainbow = document.getElementById('rainbow');
let black = document.getElementById('black');
let status = 'rainbow';
let gridSize = 16;

// button that specifies the size of the grid
create.addEventListener('click', function () {
    gridSize = prompt('Please specify the number of rows and columns');
    if (gridSize > 100) {
        alert ('The number should be less or equal to 100')
    }
    else {
        container.textContent = '';
        createGrid(gridSize,gridSize,status);
    }
});
// changes to rainbow colors
rainbow.addEventListener('click', function () {
    status = 'rainbow';
    container.textContent = '';
    createGrid(gridSize,gridSize, 'rainbow');
});
// changes color to black and white
black.addEventListener('click', function () {
    status = 'black';
    container.textContent = '';
    createGrid(gridSize,gridSize, 'black');
});

//get a random number
function randomize (multiply) {
    return Math.ceil(Math.random()*multiply);
}

//Creates divs and sets color to each element
function createCells (hue, saturation, bright) {
    let thisBright = bright;
    a = document.createElement('div');
    a.addEventListener('mouseenter', function () {
        if (thisBright > 0) {
            thisBright -=10;
        }
        else {

        }
        event.target.setAttribute('style', `background-color: 
        hsl(${hue}, ${saturation}%, ${thisBright}%);`);
    });
    return a;
}
// creates cells, the number is specified by "cells" and attaches to element.
function populateGrid (cells, regime) {
    for (let i = 0; i<cells; i++) {
        if (regime === 'rainbow') {
            container.appendChild(createCells(randomize(360), randomize(100), 60));
        }
        if (regime === 'black') {
            container.appendChild(createCells(randomize(360), randomize(100), 0));
        }
    }

}

// creates a grid with specified number of rows and columns and populates it with cells rows*columns
function createGrid (rows, columns, regime) {
    container.setAttribute('style', `grid-template-columns: repeat(${columns}, 1fr); 
        grid-template-rows: repeat(${rows}, 1fr);`);
    populateGrid(rows*columns, regime)
}
//create default layout
createGrid(16,16, 'rainbow');
                                                        //assign dom elements to vars
let create = document.querySelector('input');
let container = document.getElementById('container');
let rainbow = document.getElementById('rainbow');
let black = document.getElementById('black');

//to store current grid values
let status = 'rainbow';
let gridSize = 16;

                                                        //Event listeners

// slider that specifies the size of the grid
create.addEventListener('input', function () {
    // get current grid size
    gridSize = create.value;
    //clear all the elements inside the container
    container.textContent = '';
    //display grid with given values
    createGrid(gridSize,gridSize,status);

});
// changes to rainbow
rainbow.addEventListener('click', function () {
    status = 'rainbow';
    //clear all the elements inside the container
    container.textContent = '';
    createGrid(gridSize,gridSize, 'rainbow');
});
// changes color to black and white
black.addEventListener('click', function () {
    status = 'black';
    //clear all the elements inside the container
    container.textContent = '';
    createGrid(gridSize,gridSize, 'black');
});

                                                        //Create a grid
//get a random number
function randomize (multiply) {
    return Math.ceil(Math.random()*multiply);
}

//Creates divs and sets color to each element
function createCells (hue, saturation, bright) {
    let thisBright = bright;
    let temp = document.createElement('div');
    temp.addEventListener('mouseenter', function () {
        //to prevent brightness from going less than 0
        if (thisBright > 0) {
            thisBright -=10;
        }
        else {

        }
        this.setAttribute('style', `background-color: 
        hsl(${hue}, ${saturation}%, ${thisBright}%);`);
    });
    return temp;
}
// creates cells, the number of cells is specified by "cells" and attaches to container.
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
//display default layout
createGrid(gridSize,gridSize, status);
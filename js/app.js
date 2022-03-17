// deprecated functions => worked on refactoring
var blockCell = document.querySelector("#invader"); //call the parent

//^FUNCTIONS
//&Create one cell
function makeOneCell() {
    var cell = document.createElement('div'); //create a new cell
    cell.classList.add('one-cell'); //give a class to the cell
    blockCell.appendChild(cell); //add to parent

    sizeCell(cell, "20");

    cell.addEventListener("click", function () {
        //element.classList.contains("nameofclass") => see if there is a curtain class
        if (cell.classList.contains("clicked")) {
            cell.classList.toggle("black");
        } else {
            cell.classList.add("clicked");
        }
    });
}

//&Apply size
function sizeCell(cell, sizePx) {
    cell.style.width = sizePx + "px";
    cell.style.height = sizePx + "px";
    /* cell.style.backgroundColor = '#f1f1f1'; */
}

//&Create grid
function makeGrid(n) {
    blockCell.style.setProperty('--grid-rows', n); //select rows on CSS
    blockCell.style.setProperty('--grid-cols', n); //select cols on CSS

    for (let c = 0; c < (n * n); c++) {
        makeOneCell();
    }

}

//&Clear board
function clearBoard() {
    var invaderBoard = document.querySelector("#invader");
    invaderBoard.innerHTML = "";
}

//&Create input
function createInputs() {
    var selectForm = document.querySelector('.configuration');
    var createInputGrid = document.createElement("input");
    var createInputBtn = document.createElement('button');
    //text
    createInputGrid.type = "text";
    createInputGrid.id = "input-grid"
    createInputGrid.placeholder = 'Your grid size';
    //button
    createInputBtn.id = "button";
    createInputBtn.innerHTML = "Submit";
    //appendchild
    selectForm.appendChild(createInputGrid);
    selectForm.appendChild(createInputBtn);
}

//&Value
function valueGrid() {
    var inputGridTxt = document.querySelector("#input-grid");
    var valueInputGrid = parseInt((inputGridTxt.value), 10);
    console.log(valueInputGrid);
    return valueInputGrid;
}


//&Get button
function buttonClick() {
    var getButton = document.querySelector("#button");
    getButton.addEventListener("click", function (event) {
        event.preventDefault();
        clearBoard();
        var getValue = valueGrid();
        console.log(getValue);
        makeGrid(getValue);
    });
}


//put the info in n
//clear board
//make grid
//create a new board


//^PLAY THE GAME


createInputs();
buttonClick();
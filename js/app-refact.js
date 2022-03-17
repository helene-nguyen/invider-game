const app = {
    //^VARIABLES
    blockCell: document.querySelector("#invader"),
    sizePx: 50,
    currentStyle: null,
    styles: [
        'plain',
        'empty',
        'light',
        'highlight',
    ],
    //^INIT
    init: function () {
        this.createInputs();
        this.buttonClick();
        this.createToggleBtn();
        this.selectStyle(app.styles[1]);
    },
    //^FUNCTIONS
    /**
     * 
     * @param {Number} cell //put type
     */
    //&Size cell
    sizeCell: function (cell) {
        cell.style.width = app.changeSizePx() + "px";
        cell.style.height = app.changeSizePx() + "px";
        /* cell.style.backgroundColor = '#f1f1f1'; */
    },
    //&Apply number of grid
    numberOfGrid: function () {
        var inputGridTxt = document.querySelector("#input-grid");
        var numberGrid = parseInt((inputGridTxt.value), 10);
        return numberGrid; //to take the value
    },
    //&Apply size
    changeSizePx: function () {
        var inputSizeTxt = document.querySelector('#input-px');
        var valueInputPx = parseInt((inputSizeTxt.value), 10);
        return valueInputPx;
    },
    //&Create one cell
    makeOneCell: function () {
        var cell = document.createElement('div'); //create a new cell
        cell.classList.add('one-cell'); //give a class to the cell
        app.blockCell.appendChild(cell); //add to parent

        app.sizeCell(cell);

        cell.addEventListener("click", (event) => {
            //element.classList.contains("nameofclass") => see if there is a curtain class
            /* cell.classList.toggle(app.styles[1]); */
            //get the event created when addEventListener
            let cell = event.target;

            for (let i = 0; i < app.styles.length; i++) {

                cell.classList.remove(app.styles[i]);

                /* for (const style of app.styles) {
                    cell.classList.remove(style);
                }
                cell.classList.toggle(app.styles); */
            };
            cell.classList.add(app.styles);
        });
        return cell;
    },

    //&Create grid
    makeGrid: function () {
        app.blockCell.style.setProperty('--grid-rows', app.numberOfGrid()); //select rows on CSS
        app.blockCell.style.setProperty('--grid-cols', app.numberOfGrid()); //select cols on CSS

        for (let c = 0; c < (app.numberOfGrid() * app.numberOfGrid()); c++) {
            app.makeOneCell();
        }

    },
    //&Clear board
    clearBoard: function () {
        var invaderBoard = document.querySelector("#invader");
        invaderBoard.innerHTML = "";
    },
    //&Create input
    createInputs: function () {
        var selectForm = document.querySelector('.configuration');
        var createInputGrid = document.createElement("input");
        var createInputPx = document.createElement('input');
        var createInputBtn = document.createElement('button');
        //grid
        createInputGrid.type = "number";
        createInputGrid.id = "input-grid"
        createInputGrid.placeholder = 'Your grid n x n';
        createInputGrid.min = 2;
        createInputGrid.max = 25;
        createInputGrid.value = 8;
        createInputGrid.required = true;
        //pixel
        createInputPx.type = "number"; //be careful about input type !!!
        createInputPx.id = "input-px"
        createInputPx.placeholder = 'Your grid size in px';
        createInputPx.min = 10;
        createInputPx.max = 50;
        createInputPx.value = 25;
        createInputPx.required = true;
        //button
        createInputBtn.id = "button";
        createInputBtn.innerHTML = "Submit";
        //appendchild
        selectForm.appendChild(createInputGrid);
        selectForm.appendChild(createInputPx);
        selectForm.appendChild(createInputBtn);
    },
    //&Get button
    buttonClick: function () {
        var getButtonElement = document.querySelector("#button");
        getButtonElement.addEventListener("click", function (event) {
            event.preventDefault();
            app.clearBoard();
            app.makeGrid();
        });
    },
    //&Create toggle buttons
    createToggleBtn: function () {
        var getToggle = document.querySelector(".toggle");
        getToggle.style.display = "flex";

        for (const style of app.styles) {
            var toggles = document.createElement("div");
            toggles.classList.add("toggle-btn");

            toggles.classList.add(style);

            toggles.dataset.styleClass = style;

            toggles.addEventListener('click', (event) => {
                const toggles = event.target;
                const styleClass = toggles.dataset.styleClass;
                app.selectStyle(styleClass);
            });

            getToggle.appendChild(toggles);

        }

    },
    selectStyle: function (style) {

        app.styles = style;

        const colorPaletteElement = document.querySelector(".toggle");
        const colorPaletteItemElements = colorPaletteElement.querySelectorAll(".toggle-btn");

        for (const toggles of colorPaletteItemElements) {
            toggles.classList.remove("toggle-click");
        }

        const toggles = colorPaletteElement.querySelector("." + style);
        toggles.classList.add("toggle-click");
    }

};


app.init();
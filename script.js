let colorMode = "black";
const container = document.querySelector('#container');
addGrid(16);
addButton();

function addGrid(size) {
    let i = 0;
    while (i < size) {
        const column = document.createElement('div');
        column.classList.add("column");
        container.appendChild(column);
        i++;
    }

    const allColumn = document.querySelectorAll('.column');
    allColumn.forEach((column) => {
        let j = 0;
        while (j < size) {
            const grid = document.createElement('div');
            grid.classList.add("grid");
            grid.addEventListener('mouseover',colorGrid);
            column.appendChild(grid);
            j++;
        }
    });
}

function colorGrid() {
    if (colorMode == "black") {
        this.style.backgroundColor = "black";
    } else if (colorMode == "color") {
        let red = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);
        this.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    } else {
        this.style.backgroundColor = "white"; 
    }
}

function addButton() {
    const topdiv = document.querySelector('#top');
    const sizebtn = document.createElement('button');
    sizebtn.textContent = "Change Size";
    sizebtn.addEventListener('click', changeSize);

    const resetbtn = document.createElement('button');
    resetbtn.textContent = "Reset";
    resetbtn.addEventListener('click', reset);

    const blackbtn = document.createElement('button');
    blackbtn.textContent = "Black";
    blackbtn.addEventListener('click', () => colorMode = "black");

    const whitebtn = document.createElement('button');
    whitebtn.textContent = "White";
    whitebtn.addEventListener('click', () => colorMode = "white");

    const colorbtn = document.createElement('button');
    colorbtn.textContent = "Color";
    colorbtn.addEventListener('click', () => colorMode = "color");

    topdiv.appendChild(sizebtn);
    topdiv.appendChild(resetbtn);
    topdiv.appendChild(blackbtn);
    topdiv.appendChild(whitebtn);
    topdiv.appendChild(colorbtn);
}

function changeSize() {
    let newSize = prompt("Enter size : (number of squares per side, max=100)", 16);
    if (newSize > 0 && newSize <= 100) {
        const allColumn = document.querySelectorAll(".column");
        allColumn.forEach(column => column.remove());
        addGrid(newSize);
    }
}

function reset() {
    const allGrid = document.querySelectorAll(".grid");
    allGrid.forEach(grid => grid.style.backgroundColor = "white");  
}

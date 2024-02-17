let size = 16;
const container = document.querySelector('#container');
addGrid(size);

function addGrid(size) {
    let i = 0;
    while (i < size) {
        let column = document.createElement('div');
        column.classList.add("column");
        container.appendChild(column);
        i++;
    }

    const allColumn = document.querySelectorAll('.column');
    allColumn.forEach((column) => {
        let j = 0;
        while (j < size) {
            let grid = document.createElement('div');
            grid.classList.add("grid");
            grid.addEventListener('mouseover',colorGrid);
            column.appendChild(grid);
            j++;
        }
    });
}

function colorGrid() {
    this.classList.add("colored");
}

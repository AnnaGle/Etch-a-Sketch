const gridContainer = document.querySelector('.gridContainer');
let columns = 16;
let rows = 16;

let grid = document.createElement('div');
grid.className = 'grid';
for (let i = 0; i < columns; ++i) {
    let column = document.createElement('div');
    column.className = 'column'
    for (let j = 0; j < rows; ++j) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        // cell.textContent = (i + 1) + '-' + (j + 1);
        column.appendChild(cell);
    }
        grid.appendChild(column);
    }
gridContainer.appendChild(grid);                     
console.log (grid)
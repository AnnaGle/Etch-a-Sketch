const gridContainer = document.querySelector('.gridContainer');
const button = document.querySelector('.button')

const randColor = () =>  {
    return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
}


function gridCreator(girdSize) {
    // let girdSize = 16;
    gridContainer.innerHTML = '';
    let grid = document.createElement('div');
    grid.className = 'grid';
    for (let i = 0; i < girdSize; ++i) {
        let column = document.createElement('div');
        column.className = 'column'
        for (let j = 0; j < girdSize; ++j) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            // cell.textContent = (i + 1) + '-' + (j + 1);
            column.appendChild(cell);
        }
        grid.appendChild(column);
    }
    gridContainer.appendChild(grid);
}
gridCreator(16)

gridContainer.addEventListener(
    "mouseover",
    (event) => {
        // highlight the mouseover target
        if (event.target.className === "cell")
            event.target.style.backgroundColor = randColor();
    },
    false,
);

//function that that shows prompt when button is clicked
button.addEventListener('click', () => {
    let getValue = prompt("Choose new number of squares for your board. It shouldn't be bigger than 100.")
    let valueAsNumber = parseFloat(getValue)
    // console.log(changeToNumber)
    if (valueAsNumber <= 100) {
        let girdSize = valueAsNumber
        gridCreator(girdSize)
    }
    else {
        alert("Too big number, try again!")
    }
})
const container = document.getElementById('container');
const clearButton = document.querySelector('#clearButton');

clearButton.addEventListener("click", () => {
    clearGrid();
    let nRow = prompt("Enter the new number of rows");
    let nCol = prompt("Enter the new number of columns");
    makeGrid(nRow, nCol);
});

function clearGrid() {
    while (container.childNodes.length != 0)
    container.removeChild(container.childNodes[0]);
}

function makeGrid(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (let c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";

    };
    hoverColor();
}

function hoverColor() {
    let items = document.querySelectorAll('.grid-item');
    items.forEach(item => {
        let r = randomColor();
        let g = randomColor();
        let b = randomColor();
        let brightness = 1;
        item.addEventListener('mouseenter', () => {
            item.style.backgroundColor = "rgb(" + r + "," + g + "," + b + "," + 1 + ")";
            item.style.filter = "brightness(" + brightness + ")";
            brightness -= 0.1;
            if (brightness <= 0) {
                brightness = 0;
            };
        });

        // item.addEventListener('mouseout', () => {
        //     item.style.backgroundColor = "white";
        //     // setTimeout(function() {
        //     //     item.style.backgroundColor = "white";
        //     // }, 500);
        // });
    });
};

function randomColor() {
    let color = Math.floor((Math.random() * 256));
    return color;
}

makeGrid(16, 16);




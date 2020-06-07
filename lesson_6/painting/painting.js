// Доработать графический редактор, начатый на занятии
// Увеличить поле
// Добавить возможность выбора цвета
"use strict";

let activeColor;
createPainting();
document.querySelector('.palette').rows[0].cells[0].click();

function createPainting() {
    let container = document.createElement('div');
    container.classList.add('painting-wrapper');
    let grid = createGrid();
    container.appendChild(grid);
    let palette = createPalette();
    container.appendChild(palette);
    document.body.appendChild(container);
}

function createGrid() {
    let grid = createTable(5, 5);
    grid.addEventListener('click', paint);
    return grid;
}


function createPalette() {
    let palette = createTable(2, 10);
    palette.classList.add('palette');
    palette.addEventListener('click', chooseColor);
    for (let i = 0; i < palette.rows.length; i++) {
        let row = palette.rows[i];
        for (let j = 0; j < row.cells.length; j++) {
            let cell = row.cells[j];
            let color = getRandomColor();
            cell.dataset.paletteColor = color;
            cell.style.backgroundColor = color;
        }
    }
    return palette;
}

function createTable(rows, cols) {
   let table = document.createElement('table');
   for (let i = 0; i < rows; i++) {
       let row = table.insertRow(i);
       for (let j = 0; j < cols; j++) {
           let cell = row.insertCell(j);
       }
   }
   return table;
}

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function chooseColor(e) {
    let el = e.target;
    if (el.tagName !== 'TD') return;
    activeColor = el.dataset.paletteColor;
}

function paint(e) {
    let el = e.target;
    if (el.tagName !== 'TD') return;
    console.log(activeColor);
    el.style.backgroundColor = activeColor;
}
// Доработать графический редактор, начатый на занятии
// Увеличить поле
// Добавить возможность выбора цвета
"use strict";

let activeColor;
createPainting();
document.querySelector('.palette').rows[0].cells[0].click();

function createPainting() {
    const container = document.createElement('div');
    container.classList.add('painting-wrapper');
    const grid = createGrid();
    container.appendChild(grid);
    const palette = createPalette();
    container.appendChild(palette);
    document.body.appendChild(container);
}

function createGrid() {
    const grid = createTable(5, 5);
    grid.addEventListener('click', paint);
    return grid;
}


function createPalette() {
    const palette = createTable(2, 10);
    palette.classList.add('palette');
    palette.addEventListener('click', chooseColor);
    for (let i = 0; i < palette.rows.length; i++) {
        let row = palette.rows[i];
        for (let j = 0; j < row.cells.length; j++) {
            const cell = row.cells[j];
            const color = getRandomColor();
            cell.dataset.paletteColor = color;
            cell.style.backgroundColor = color;
        }
    }
    return palette;
}

function createTable(rows, cols) {
   const table = document.createElement('table');
   for (let i = 0; i < rows; i++) {
       const row = table.insertRow(i);
       for (let j = 0; j < cols; j++) {
           const cell = row.insertCell(j);
       }
   }
   return table;
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function chooseColor(e) {
    const el = e.target;
    if (el.tagName !== 'TD') return;
    activeColor = el.dataset.paletteColor;
}

function paint(e) {
    const el = e.target;
    if (el.tagName !== 'TD') return;
    console.log(activeColor);
    el.style.backgroundColor = activeColor;
}
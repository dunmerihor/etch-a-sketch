function changeColorBlack(e) {
    e.target.style.backgroundColor = 'black';
}

function changeColorEraser(e) {
    e.target.style.backgroundColor = 'white';
}

function changeColorRainbow(e) {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    e.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}


function refreshGrid() {
    let size = prompt('Number of squares per side (min 4 squares, max 100 squres)');
    if (size >= 4 && size <= 100) {
        const sketchDiv = document.querySelector('.sketch');
        emptyContainer(sketchDiv);

        const pxSize = Math.round(480 / size);

        for (let i = 0; i < size; i++) {
            const row = document.createElement('div');
            row.style.display = 'flex';
        
            for (let j = 0; j < size; j++) {
                const pixel = document.createElement('span');
                pixel.classList.add('pixel');
                pixel.style.width = `${pxSize}px`;
                pixel.style.height = `${pxSize}px`;
                row.appendChild(pixel);
            }
        
            row.style.margin = '0px';
            row.style.padding = '0px';
            sketchDiv.appendChild(row);
        }
    }
    else {
        alert('Incorrect input');
    }
    const pixels = Array.from(document.querySelectorAll('.pixel'));
    pixels.forEach(pxl => pxl.addEventListener('mouseover', changeColorBlack));
}


function emptyContainer(container) {
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
}


function changeGridProperties(e) {
    const pixels = Array.from(document.querySelectorAll('.pixel'));

    if (e.target.id === 'black') {
        pixels.forEach(pxl => pxl.removeEventListener('mouseover', changeColorRainbow));
        pixels.forEach(pxl => pxl.removeEventListener('mouseover', changeColorEraser));
        pixels.forEach(pxl => pxl.addEventListener('mouseover', changeColorBlack));
    }

    else if (e.target.id === 'rainbow') {
        pixels.forEach(pxl => pxl.removeEventListener('mouseover', changeColorBlack));
        pixels.forEach(pxl => pxl.removeEventListener('mouseover', changeColorEraser));
        pixels.forEach(pxl => pxl.addEventListener('mouseover', changeColorRainbow));
    }

    if (e.target.id === 'eraser') {
        pixels.forEach(pxl => pxl.removeEventListener('mouseover', changeColorRainbow));
        pixels.forEach(pxl => pxl.removeEventListener('mouseover', changeColorBlack));
        pixels.forEach(pxl => pxl.addEventListener('mouseover', changeColorEraser));
    }
}


const sketchDiv = document.querySelector('.sketch');

for (let i = 0; i < 16; i++) {
    const row = document.createElement('div');
    row.style.display = 'flex';

    for (let j = 0; j < 16; j++) {
        const pixel = document.createElement('span');
        pixel.classList.add('pixel');
        row.appendChild(pixel);
    }

    row.style.margin = '0px';
    row.style.padding = '0px';
    sketchDiv.appendChild(row);
}

let regime = 'black';

const refreshButton = document.querySelector('#refresh');
const blackButton = document.querySelector('#black');
const rainbowButton = document.querySelector('#rainbow');
const eraserButton = document.querySelector('#eraser');
const pixels = Array.from(document.querySelectorAll('.pixel'));

blackButton.addEventListener('click', changeGridProperties);
rainbowButton.addEventListener('click', changeGridProperties);
eraserButton.addEventListener('click', changeGridProperties);

refreshButton.addEventListener('click', refreshGrid);
pixels.forEach(pxl => pxl.addEventListener('mouseover', changeColorBlack));

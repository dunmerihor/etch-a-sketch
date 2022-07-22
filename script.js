function changeColor(e) {
    e.target.style.backgroundColor = 'black';
}

function refreshGrid() {
    let size = prompt('Number of squares per side');
    if (size >= 4 && size <= 100) {
        const sketchDiv = document.querySelector('.sketch');
        emptyContainer(sketchDiv);

        for (let i = 0; i < size; i++) {
            const row = document.createElement('div');
            row.style.display = 'flex';
        
            for (let j = 0; j < size; j++) {
                const pixel = document.createElement('span');
                pixel.classList.add('pixel');
                row.appendChild(pixel);
            }
        
            row.style.margin = '0px';
            row.style.padding = '0px';
            sketchDiv.appendChild(row);
        }
    }
}

function emptyContainer(container) {
    while (container.firstChild) {
        container.removeChild(container.lastChild);
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

const refreshButton = document.querySelector('#refresh');
refreshButton.addEventListener('click', refreshGrid);
const pixels = Array.from(document.querySelectorAll('.pixel'));
pixels.forEach(pxl => pxl.addEventListener('mouseover', changeColor));

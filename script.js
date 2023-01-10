const gridSpace = document.querySelector(".grid-space");
let blackTiles = true;

function newGrid(size) {
    var child = gridSpace.lastElementChild; 
    while (child) {
            gridSpace.removeChild(child);
            child = gridSpace.lastElementChild;
        }
    if (size > 100) {
        alert("Too big");
        size = 16;
    } 
    for (let i=0;i < size * size; i++) {
        const div = document.createElement('div');
        div.classList.add('grid-square');
        div.style.width = `${960 / size}px`;
        div.style.height = `${960 / size}px`;
        gridSpace.appendChild(div)}
    const gridSquares = document.querySelectorAll(".grid-square")
    gridSquares.forEach(square => square.addEventListener('mouseover', changeColour))
    
}

function changeColour(element) {
    if (blackTiles === false) {
        r = Math.floor(Math.random() * (254 - 0 + 1)) + 0;
        g = Math.floor(Math.random() * (254 - 0 + 1)) + 0;
        b = Math.floor(Math.random() * (254 - 0 + 1)) + 0;
        element.target.style.backgroundColor= `rgb(${r}, ${g}, ${b})`;
    }
    else {
        element.target.style.backgroundColor= 'black';
    }
    element.stopPropagation();
}

newGrid(16);


const btton = document.querySelector(".grid-size")
btton.addEventListener('click', (e) => {
    const newSize = prompt("What size grid would you like?");
    newGrid(newSize);
    console.log(gridSpace.childNodes);
})

const colourScheme = document.querySelector(".colour-scheme");
colourScheme.addEventListener('click', (e) => blackTiles = !blackTiles);
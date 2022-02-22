const canvas = document.querySelector('#canvas');
let numPixels = 16;

for (let i = 0; i < canvasSize; i++){
    let pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixel.textContent = 'test';
    canvas.appendChild(pixel);
}

// Determine number of pixels required in the grid
// Assign each pixel a size so that it creates a neat grid
function drawCanvas(sideLength){

}

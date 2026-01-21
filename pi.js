import decimalData from "./decimals.json" with {"type": "json"};
import colorData from "./colors.json" with {"type": "json"};

window.addEventListener("DOMContentLoaded", () => {
    const canvaWidth = 1000;
    const canvaHeight = 1000;
    const pixSize = 10;

    const decimals = decimalData.values
        .replace(/\s+/g, "")
        .split("")
        .map(Number);
    console.log(decimals.length)
    const colors = colorData.values

    // creer une div pixel + un id personnalisé + background color
    const divRepresentation = document.getElementById("representation");
    const canva = document.createElement("canvas")
    canva.width = canvaWidth
    canva.height = canvaHeight
    divRepresentation.appendChild(canva)

    const pix = canva.getContext("2d");

    let xOrigin = 0;
    let yOrigin = 0;

    for (let i = 0; i < decimals.length; i++) {
        const colorPix = decimals[i]
        pix.fillStyle = colors[colorPix];
        pix.fillRect(xOrigin, yOrigin, pixSize, pixSize);
        xOrigin = xOrigin + pixSize;
        if (xOrigin === canvaWidth) {
            xOrigin = 0
            yOrigin = yOrigin + pixSize
        }
    }
})
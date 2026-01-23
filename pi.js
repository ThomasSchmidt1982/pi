/*************************************************************/
/* prog affichant les 10000 premieres decimales du nombre Pi */
/*************************************************************/

import decimalData from "./decimals.json" with {"type": "json"};
import colorData from "./colors.json" with {"type": "json"};

window.addEventListener("DOMContentLoaded", () => {

    // initialisations
    const CANVA_WIDTH = 1000;
    const CANVA_HEIGHT = 1000;
    const PIX_SIZE = 10;
    const decimals = decimalData.values
        .replace(/\s+/g, "")
        .split("")
        .map(Number);
    const colors = colorData.values

    // créer un canvas enfant de la div d'id representation
    const divRepresentation = document.getElementById("representation");
    const canva = document.createElement("canvas")
    canva.width = CANVA_WIDTH
    canva.height = CANVA_HEIGHT
    divRepresentation.appendChild(canva)
    const ctx = canva.getContext("2d");

    // boucle de balayage du tableau decimals + affichage des pixels
    let xOrigin = 0;
    let yOrigin = 0;
    for (let i = 0; i < decimals.length; i++) {
        const colorPix = decimals[i]
        ctx.fillStyle = colors[colorPix];
        ctx.fillRect(xOrigin, yOrigin, PIX_SIZE, PIX_SIZE);
        xOrigin += PIX_SIZE;
        if (xOrigin === CANVA_WIDTH) {
            xOrigin = 0
            yOrigin += PIX_SIZE
        }
    }
})
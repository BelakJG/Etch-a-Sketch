console.log("Hello, World!");
document.addEventListener("DOMContentLoaded", generateBoard);
document.querySelector("#boardRemake").addEventListener("click", remakeBoard);

const board = document.querySelector(".etchContainer");
const sizeInputForm = document.querySelector("#tileInput");
function generateBoard() {
    let numTilesPerRow = sizeInputForm.value;
    if (numTilesPerRow > 100) {
        numTilesPerRow = 100;
    }
    let totalTiles = numTilesPerRow ** 2;
    let tileSize = board.clientWidth / numTilesPerRow;
    for (let i = 0; i < totalTiles; i++) {
        const tile = document.createElement("div");
        tile.classList.add("etchTile");
        tile.style.backgroundColor = "White"
        tile.style.filter = "brightness(1)";
        tile.style.width = `${tileSize}px`;
        tile.style.height = `${tileSize}px`;

        tile.addEventListener("mouseover", () => {
            tile.style.backgroundColor = randomColor();
            tile.style.filter = darken(tile.style.filter);
        });

        board.append(tile);
    }
    console.log(`Board generated: ${totalTiles} tiles placed.`)
}

function darken(currentBright) {
    let num = currentBright.substring(currentBright.indexOf("(")+1, currentBright.length-1);
    const darkenRate = 0.1;
    level = parseFloat(num) - darkenRate;
    if (level < 0) {
        level = 0;
    }

    return `Brightness(${level})`;
}

function remakeBoard() {
    let tilesToRemove = document.querySelectorAll(".etchTile");
    board.replaceChildren();
    generateBoard();
}

function randomColor() {
    red = Math.random() * 256;
    green = Math.random() * 256;
    blue = Math.random() * 256;
    return `rgb(${red}, ${green}, ${blue})`;
}
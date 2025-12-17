console.log("Hello, World!");

let numTiles = 16;
const board = document.querySelector(".etchContainer");
for (let i = 0; i < numTiles; i++) {
    const tile = document.createElement("div");
    tile.classList.add("etchTile");
    tile.style.backgroundColor = "White"
    tile.style.filter = "brightness(1)";

    tile.addEventListener("mouseover", () => {
        tile.style.filter = darken(tile.style.filter);
    });

    board.append(tile);
}

function darken(currentBright) {
    num = currentBright.substring(currentBright.indexOf("(")+1, currentBright.length-1);
    level = parseFloat(num) - 0.2;
    if (level < 0) {
        level = 0;
    }

    return `Brightness(${level})`;
}
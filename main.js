console.log("Hello, World!");

let numTiles = 16;
const board = document.querySelector(".etchContainer");
for (let i = 0; i < numTiles; i++) {
    const tile = document.createElement("div");
    tile.classList.add("etchTile");
    board.append(tile);
}
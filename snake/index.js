const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");
let positionX = 0;
let positionY = 0;
const gridSize = 20;
const titleCount = 20;

window.onload = () => {
    document.addEventListener("keydown", keyPush)
    setInterval(game, 1000/15)
}

function keyPush(e) {
    switch (e.keycode){
        case 37 : 
            positionX -= 1;
            positionY += 0;
            break;
        case 38 : 
            positionX += 0;
            positionY -= 1;
            break;
        case 39 : 
            positionX += 1;
            positionY += 0;
            break;
        case 40 : 
            positionX += 0;
            positionY += 1;
            break;
    }
}

function game(){
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    ctx.fillStyle = "lime";
    ctx.fillRect(positionX * gridSize, positionY * gridSize, gridSize -2, gridSize -2);
}
let canvas;
let ctx;
canvas = document.createElement('canvas');
ctx = canvas.getContext("2d");
canvas.width = 900;
canvas.height = 900;
document.body.appendChild(canvas);

window.onload = () =>{
    loadImage();
    let horse = new Horse();
    horse.init();
    horse = new Horse();
    horse.init();
    horse = new Horse();
    horse.init();
    horse = new Horse();
    horse.init();
    horse = new Horse();
    horse.init();
    console.log(horseList);
    // render();
    setInterval(game, 1000);
    
    
}

let horseList = [];
function Horse(){
    this.x = 0;
    this.y = 0;
    this.init = function(){
        this.x = 0;
        if(horseList.length>=1){
            this.y = 480+(80*horseList.length)
        } else this.y = 480;
        horseList.push(this);
    }
    this.update = function(){
        this.x += 76;

        if(this.x >= canvas.width - 48){
            this.x = canvas.width-48;
        }
    }
}

// function render(){
//     for(let i =0 ; i< horseList.length; i++){
//         ctx.drawImage(horseImage, horseList[i].x, horseList[i].y);
//     }
// }

function game(){
    ctx.fillStyle = "black";
    ctx.fillRect(0,0, canvas.width, canvas.height);

    ctx.fillStyle = "green";
    ctx.fillRect(0, 480, canvas.width, 50);

    ctx.fillStyle = "brown";
    ctx.fillRect(0, 530, canvas.width, 30);
    ctx.fillStyle = "green";
    ctx.fillRect(0, 560, canvas.width, 50);

    ctx.fillStyle = "brown";
    ctx.fillRect(0, 610, canvas.width, 30);
    ctx.fillStyle = "green";
    ctx.fillRect(0, 640, canvas.width, 50);

    ctx.fillStyle = "brown";
    ctx.fillRect(0, 690, canvas.width, 30);
    ctx.fillStyle = "green";
    ctx.fillRect(0, 720, canvas.width, 50);

    ctx.fillStyle = "brown";
    ctx.fillRect(0, 770, canvas.width, 30);
    ctx.fillStyle = "green";
    ctx.fillRect(0, 800, canvas.width, 50);
    for(let i =0 ; i< horseList.length; i++){
        ctx.drawImage(horseImage, horseList[i].x, horseList[i].y);
        // ctx.fillStyle = "orange";
        // ctx.fillRect(0, 0, 20, 20);
    }
    for(let i = 0; i< horseList.length; i++) {
        horseList[i].update();
    }
}

function loadImage(){
    horseImage = new Image();
    horseImage.src = "말사진.png";
}

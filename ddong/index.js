let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

let gameOver = false;
let positionX = canvas.width/2-60;
let positionY = canvas.height-60;



let backgroundImage, enemyImage, iImage;
function loadImage(){
    backgroundImage = new Image();
    backgroundImage.src = './ddongbackground.jpeg';

    enemyImage = new Image();
    enemyImage.src = './ddong.png';

    iImage = new Image();
    iImage.src = "icons8-person-30.png";
}

function generateRandomValue(min, max){
    return Math.floor(Math.random()*(max-min+1));
}


let enemyList = [];
function Enemy(){
    this.x = 0;
    this.y = 0;
    this.init = function(){
        this.y = 0;
        this.x = generateRandomValue(0, canvas.width-48);
        enemyList.push(this);
    }
    this.update = function(){
        this.y += generateRandomValue(2,5);
        
        if(this.y >= canvas.height - 48){
            gameOver = true;
        }
    }
}

function createEnemy(){
    const interval = setInterval(function(){
        let e = new Enemy();
        e.init();
    }, 2000/*generateRandomValue(100,1000)*/)
}

let keysDown = {};
function setupKeyboardListener(){
    document.addEventListener("keydown",(e) => {
        keysDown[e.keyCode] = true;
    })
    document.addEventListener("keyup", (e) => {
        delete keysDown[e.keyCode];
        if(e.keyCode == 32){
            
        }
    })
}
function update(){
    if( 39 in keysDown) {
        positionX += 5;
    }
    if (37 in keysDown){
        positionX -= 5;
    }
    if(positionX <= 0) {
        positionX = 0;
    }
    if (positionX >= canvas.width - 60){
        positionX = canvas.width - 60;
    }
    for(let i =0; i<enemyList.length; i++){
        enemyList[i].update();
    }

    for(let i = 0; i<enemyList.length; i++){
        if((positionY == enemyList[i].y+50) && (positionX+30 <= enemyList[i].x+60 || positionX-30 >= enemyList[i].x)){
            gameOver = true;
        }
    }
}

function render(){
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(iImage, positionX, positionY ,60,60);
    for(let i = 0; i<enemyList.length; i++){
        ctx.drawImage(enemyImage, enemyList[i].x, enemyList[i].y);
    }
}

function main(){
    if(!gameOver){
        update();
    render();
    requestAnimationFrame(main);
    } else {
        alert("aaaaaaaaaaaaaak");
    }
}

loadImage();
setupKeyboardListener();
createEnemy();
main();
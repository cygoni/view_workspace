let canvas;
let ctx;
canvas = document.createElement('canvas');
ctx = canvas.getContext("2d");
canvas.width = 400;
canvas.height = 700;
document.body.appendChild(canvas);

let backgroundImage, spaceshipImage, bulletImage, enemyImage;
let gameOver = false;

let score = 0;
let spaceshipX = canvas.width/2 -32;
let spaceshipY = canvas.height-64;

let bulletList = [];
function Bullet(){
    this.x = 0;
    this.y = 0;
    this.init = function(){
        this.x = spaceshipX +18;
        this.y = spaceshipY;
        this.alive = true;
        bulletList.push(this);
    }
    this.update = function(){
        this.y -= 7;
    }

    this.checkHit = function() {
        for(let i = 0; i<enemyList.length; i++){
            if(this.y < enemyList[i].y && this.x>enemyList[i].x && this.x<=enemyList[i].x+40){
                score++;
                this.alive = false;
                enemyList.splice(i,1);
            }
        }
    }
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
        this.y += 2;

        if(this.y >= canvas.height - 48){
            gameOver = true;
        }
    }
}

function loadImage(){
    backgroundImage = new Image();
    backgroundImage.src="우주배경.jpg";

    spaceshipImage = new Image();
    spaceshipImage.src="icons8-space-60.png";

    bulletImage = new Image();
    bulletImage.src = "icons8-bullet-24.png";

    enemyImage = new Image();
    enemyImage.src = "icons8-space-50.png";
}

let keysDown = {};
function setupKeyboardListener(){
    document.addEventListener("keydown",(e) => {
        keysDown[e.keyCode] = true;
    })
    document.addEventListener("keyup", (e) => {
        delete keysDown[e.keyCode];
        if(e.keyCode == 32){
            createBullet();
        }
    })
}

function createEnemy(){
    const interval = setInterval(function(){
        let e = new Enemy();
        e.init();
    },1000)
}

function createBullet(){
    let b = new Bullet();
    b.init();
}

function update(){
    if( 39 in keysDown) {
        spaceshipX += 5;
    }
    if( 37 in keysDown) {
        spaceshipX -= 5;
    }
    if(spaceshipX <=0){
        spaceshipX = 0;
    }
    if(spaceshipX >= canvas.width-64){
        spaceshipX = canvas.width-64;
    }

    for(let i = 0; i<bulletList.length; i++){
        if(bulletList[i].alive){
        bulletList[i].update();
        bulletList[i].checkHit();}
    }
    for(let i =0; i<enemyList.length; i++){
        enemyList[i].update();
    }
}

function render(){
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height)
    ctx.drawImage(spaceshipImage, spaceshipX, spaceshipY)
    ctx.fillText(`Score:${score}`, 20, 20)
    ctx.fillStyle = "white";
    ctx.font = "20px Arial"
    for(let i = 0; i<bulletList.length; i++){
        if(bulletList[i].alive){
            ctx.drawImage(bulletImage, bulletList[i].x, bulletList[i].y);
        }
    }
    for(let i = 0; i<enemyList.length; i++){
        ctx.drawImage(enemyImage, enemyList[i].x, enemyList[i].y);
    }
}

function main() {
    if(!gameOver){
        update();
        render();
        requestAnimationFrame(main);
    } else {
        alert("GAME OVER!");
    }
}

loadImage();
setupKeyboardListener();
createEnemy();
main();
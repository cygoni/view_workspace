const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 480;
let backX = 0;
let rank = 0;
let frame = 0;
let maxFrame = 12;
let record = {min: 0, sec: 0, misec: 0, cnt: 0};
let timer = 0;

function setRecord() {
    let cnt = record.cnt++;
    let min = Math.floor(cnt / 3600);
    let sec = Math.floor(cnt %3600 / 60);
    let misec = cnt % 3600 % 60;
    if (min < 10) {
        min = "0" + min;
    }
    if (sec < 10) {
        sec = "0" + sec;
    }
    if (misec < 10) {
        misec = "0" + misec;
    }
    record.min = min;
    record.sec = sec;
    record.misec = misec;
}

let horseImage;
function loadImage(){
    horseImage = new Image();
    horseImage.src = "./horse12-removebg-preview.png";
}

function generateRandomValue(min, max){
    return Math.floor(Math.random()*(max-min+1));
}

let horseList = [];
function Horse(){
    this.x = 0;
    this.y = 0;
    this.time = "";
    this.init = function() {
        this.x = 0;
        this.count = 0;
        this.rank = 0;
        this.arrive = false;
        if(horseList.length > 0){
            this.y = canvas.height-50-(80*horseList.length);
        }else {
            this.y = canvas.height-50;
        }
        horseList.push(this);
    }

    this.update = function(){
        this.x += generateRandomValue(3,8);
        if(this.x+40 >= canvas.width && this.count == 0 && backX <800){
            this.count++;
            backX =800;
            this.x = this.x-canvas.width;
        }
        if(backX>=800 && this.count == 0 && this.x+40<canvas.width && this.x>400){
            this.x = this.x-canvas.width;
        }
        if(backX>=800 && this.x+40 >=0 && this.count == 0){
            this.count++;
        }
        //console.log(this.x)
        if(this.count == 1 && this.x+20 >= canvas.width-40){
            this.x = canvas.width-40;
            if(!this.arrive){
                this.time = `${record.min}:${record.sec}:${record.misec}`
                console.log(rank)
                console.log(this.time);
                rank++;
                this.rank = rank;
                this.arrive = true;
            }
        }
        
        if(this.arrive){
            ctx.fillStyle = "#ff0000";
            ctx.fillRect(canvas.width/2 -50, this.y-10, 80, 30);

            ctx.fillStyle = "white";
            ctx.fillText(`${this.rank}등`, canvas.width/2 -40, this.y+10);
            ctx.font = "40px bold";

            ctx.fillStyle = "black";
            ctx.fillText(`${this.time}`, canvas.width/2+15, this.y+20);
            ctx.font = "30px bold";
        }
    }
}

function createHorse(){
    for(let i =0; i<5; i++){
        let h = new Horse();
        h.init();
    }
}


function drawBackground(){  
    ctx.fillStyle = "black";
    ctx.fillRect(0,0, canvas.width, canvas.height, 30, 30);

    for(let i = 0 ; i < horseList.length; i++){
        ctx.fillStyle = "green";
        ctx.fillRect(0, 430-(i*80), canvas.width, 50);
        ctx.fillStyle = "brown";
        ctx.fillRect(0, 400-(i*80), canvas.width, 30);
    }
}

function drawBackground2(){
    ctx.fillStyle = "lightblue";
    ctx.fillRect(0,0, canvas.width, canvas.height, 30, 30);    

    for(let i = 0 ; i < horseList.length; i++){
        ctx.fillStyle = "green";
        ctx.fillRect(0, 430-(i*80), canvas.width, 50);
        ctx.fillStyle = "brown";
        ctx.fillRect(0, 400-(i*80), canvas.width, 30);
        ctx.fillStyle = "white";
        ctx.fillRect(canvas.width-30, 430-(i*80) , 30, 50);
        ctx.fillStyle = "black";
        ctx.fillRect(canvas.width-20, 430-(i*80) , 10, 50);
    }
}

function render(){
    if(backX<800) drawBackground();
    else if(backX>=800)  drawBackground2();
    for(let i =0; i<horseList.length; i++){
        if(!horseList[i].arrive){
        ctx.drawImage(horseImage, frame%4 * (161.25), Math.floor(frame/4)*129, (161.25), 129, horseList[i].x, horseList[i].y-18, 64, 64);
        frame = (frame+1)%(maxFrame);
        }
    }
}

function update(){
    for(let i = 0; i < horseList.length; i++){
        horseList[i].update();
    }

}

function main(){
    setInterval(setRecord(),1);
    render();
    update();
    //console.log(record)
    requestAnimationFrame(main);
    if(rank == 5) return;
}

loadImage();
createHorse();
main();
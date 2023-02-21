const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
const btn = document.querySelector('button');
const bet = document.querySelector('.bet');
const reset = document.querySelector('.reset');

// canvas.width = 800;
// canvas.height = 480;
let backX = 0;
let rank = 0;
let frame = 17;
let maxFrame = 24;
let record = {min: 0, sec: 0, misec: 0, cnt: 0};
let timer = 0;
let gameStart = false;

const offset = {
    x: 0,
    y: canvas.height-960
}

let backImage = new Image();
backImage.src = 'map.png';


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


const doux = new Image();
doux.src = 'DinoSprites - doux.png';

const mort = new Image();
mort.src = 'DinoSprites - mort.png';

const tard = new Image();
tard.src = 'DinoSprites - tard.png';

const vita = new Image();
vita.src = 'DinoSprites - vita.png';

function generateRandomValue(min, max){
    return Math.floor(Math.random()*(max-min+1));
}

let horseList = [];
function Horse(){
    this.x = 0;
    this.y = 0;
    this.time = "";
    this.init = function(){
        this.x = 0;
        this.y = offset.y - 12;
        this.count = 0;
        this.rank = 0;
        this.arrive = false;
        horseList.push(this);
    }

    this.update = function(){
        if(this.arrive){
            c.fillStyle = "black";
            c.fillText(`${this.rank}등`, 700 , this.y+10);
            //alert(this.time)
            c.font = "40px bold";
        } else {
            if(this.x <740) this.x += generateRandomValue(3, 8);
        else {
            this.time = `${record.min}:${record.sec}:${record.misec}`
            rank++;
            this.rank = rank;
            this.arrive = true;
        }
        }
    }

    
}

function createHorse(){
    for(let i = 0; i<4; i++){
        let h = new Horse();
        h.init();
    }
}

const sWidth = 24;
const sHeight = 24;
let stopFrame = 0;

function render(){
    c.drawImage(backImage, offset.x, offset.y);
    for(let i = 0; i<horseList.length; i++){
        if(!horseList[i].arrive && gameStart){
            if(i == 0) {
                c.drawImage(doux, sWidth * frame, 0, 24, 24, horseList[i].x, 412, 64, 64)
                if(frame<23) frame++;
                else frame = 17;
            } else if(i == 1) {
                c.drawImage(mort, sWidth * frame, 0, 24, 24, horseList[i].x, 312, 64, 64)
                if(frame<23) frame++;
                else frame = 17;
            } else if(i == 2) {
                c.drawImage(tard, sWidth * frame, 0, 24, 24, horseList[i].x, 212, 64, 64)
                if(frame<23) frame++;
                else frame = 17;
            } else if(i == 3) {
                c.drawImage(vita, sWidth * frame, 0, 24, 24, horseList[i].x, 112, 64, 64)
                if(frame<23) frame++;
                else frame = 17;
            }
        } else {
            if(i == 0) {
                c.drawImage(doux, sWidth * stopFrame, 0, 24, 24, horseList[i].x, 412, 64, 64)
                if(stopFrame<1) stopFrame++;
                else stopFrame = 0;
            } else if(i == 1) {
                c.drawImage(mort, sWidth * stopFrame, 0, 24, 24, horseList[i].x, 312, 64, 64)
                if(stopFrame<1) stopFrame++;
                else stopFrame = 0;
            } else if(i == 2) {
                c.drawImage(tard, sWidth * stopFrame, 0, 24, 24, horseList[i].x, 212, 64, 64)
                if(stopFrame<1) stopFrame++;
                else stopFrame = 0;
            } else if(i == 3) {
                c.drawImage(vita, sWidth * stopFrame, 0, 24, 24, horseList[i].x, 112, 64, 64)
                if(stopFrame<1) stopFrame++;
                else stopFrame = 0;
            }
        }
    }
}

function update(){
    for(let i =0; i < horseList.length; i++){
        horseList[i].update();
    }
    if(offset.x > -880) offset.x -=5;
    //if(offset.x <-400 && offset.x >-800) offset.x -=35
    
}

btn.addEventListener("click", () =>{
    console.log('start')
    gameStart = true;
    bet.style.visibility = "hidden";
})
function main(){
    if(!gameStart) {
        render();
        requestAnimationFrame(main);
    } else {
        setInterval(setRecord(),1);
        render();
        update();
        requestAnimationFrame(main);
        if(rank == 4){
            const end = document.querySelector('.endPage');
            end.style.visibility = "visible"
            const rank = document.querySelector('.rank');
            let rankOne;
            for(let i = 0; i < horseList.length; i++){
                if(horseList[i].rank ==1){
                    rankOne = horseList[i].image
                }
            }
            rank.innerHTML = `
                Winner <img src="vita1.png" alt="">
            `;
        }
    }
}

createHorse();
main();
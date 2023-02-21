const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

function drawback(){
    ctx.fillStyle = "#aaaaaa";
    ctx.fillRect(0,0, canvas.width, canvas.height);
}


function showMap(){

}
function main(){
    drawback();
    requestAnimationFrame(main);
}

drawback();
//main();
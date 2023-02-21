const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 480;

c.fillStyle = "white";
c.fillRect(0, 0, canvas.width, canvas.height);

c.fillStyle = "green";
c.fillRect(10, 50, canvas.width*0.66, canvas.height*0.50 + 50);


function drawLine(){
    c.beginPath();
c.strokeStyle = "white";
c.lineWidth = 5;
c.moveTo(10,canvas.height*0.66 + 10);
//c.lineTo(canvas.width/2, canvas.height/2);
c.quadraticCurveTo(180, 320, canvas.width*0.66/2, canvas.height*0.66/2);
c.stroke();
}


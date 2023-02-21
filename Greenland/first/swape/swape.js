class App{
    constructor(){
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = 480;
        this.canvas.height = 320;
        this.paddleHeight = 10;
        this.paddleWidth = 75;
        this.paddleX = (this.canvas.width - this.paddleWidth) / 2;
        this.rightPressed = false;
        this.leftPressed = false;
        this.x = this.canvas.width / 2;
        this.y = this.canvas.height -30;
        this.dx = 2;
        this.dy = -2;
        this.ballRadius = 10;
        document.addEventListener('keydown', this.keyDownHandler, false);
        document.addEventListener('keyup', this.keyUpHandler, false);
        
        //this.init();
        this.draw();
        //setInterval(this.draw(), 100);
    }

    
    // init(){
    //     this.draw();
    //     requestAnimationFrame(init)
    // }

    drawPaddle(){
        this.ctx.beginPath();
        this.ctx.rect(this.paddleX, this.canvas.height - this.paddleHeight, this.paddleWidth, this.paddleHeight);
        this.ctx.fillStyle = "#0095DD";
        this.ctx.fill();
        this.ctx.closePath();
    }

    keyDownHandler(e){
        if(e.key === "Right" || e.key === "ArrowRight"){
            this.rightPressed = true;
        } else if (e.key === "Left" || e.key === "ArrowLeft"){
            this.leftPressed = true;
        }
    }

    keyUpHandler(e) {
        if(e.key === "Right" || e.key === "ArrowRight"){
            this.rightPressed = false;
        } else if ( e.key === "Left" || e.key === "ArrowLeft"){
            this.leftPressed = false;
        }
    }

    draw(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.ballRadius, 0, Math.PI * 2);
        this.ctx.fillStyle = "#0095DD";
        this.ctx.fill();
        this.ctx.closePath();
        this.drawPaddle();
        if(this.rightPressed){
            console.log("r")
            this.paddleX += 7;
            if(this.paddleX + this.paddleWidth > this.canvas.width){
                this.paddleX = this.canvas.width - this.paddleWidth;
            }
        }
        else if (this.leftPressed){
            this.paddleX -= 7;
            if(this.paddleX < 0){
                this.paddleX = 0;
            }
        }
        this.x += this.dx;
        this.y += this.dy;
        if(this.x + this.dx > this.canvas.width - this.ballRadius || this.x + this.dx < this.ballRadius){
            this.dx = -this.dx;
        }
        if(this.y + this.dy > this.canvas.height - this.ballRadius || this.y + this.dy < this.ballRadius){
            this.dy = -this.dy;
        }
    }
}

const game = new App();
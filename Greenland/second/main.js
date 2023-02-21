class Main{
    constructor(){
        this.canvas = document.querySelector('canvas');
        this.ctx = canvas.getContext('2d');
        this.keyDown = {};

        window.addEventListener("keydown", (e) => {
            keyDown[e.key] = true;
        
        })
        window.addEventListener("keyup", (e) => {
            keyDown[e.key] = false;
        })

        this.drawback();
        this.drawPlayer();
        requestAnimationFrame(this.main);

    }

    drawback(){
        this.ctx.fillStyle = "Green";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    drawPlayer(){
        this.ctx.fillStyle = "white";
        this.ctx.fillRect(0, 0, 20, 20);
    }

    movePlayer(){
        if (keyDown["ArrowUp"]) {
            player.y -= player.speed;
        } else if (keyDown["ArrowRight"]) {
            player.x += player.speed;
        } else if (keyDown["ArrowDown"]) {
            player.y += player.speed;
        } else if (keyDown["ArrowLeft"]) {
            player.x -= player.speed;
        }
    
        if (player.x <= 0) player.x = 0;
        if (player.y <= 0) player.y = 0;
        if (player.x >= canvas.width - player.size) player.x = canvas.width - player.size;
        if (player.y >= canvas.height - player.size) player.y = canvas.height - player.size;
    
    }


    main(){
        console.log("hi");
    }
}

const game = new Main();
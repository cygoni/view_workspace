    const canvas = document.getElementById("game-canvas")
    const ctx = canvas.getContext("2d")
            
    window.onload = () => {
        document.addEventListener("keydown", keyPush)
        setInterval(game, 1000 / 15)
    }
    
    
    let positionX = 0, positionY = 0
    const gridSize = 40, tileCountY = 15, tileCountX = 20;
    
    function game() {
        
        console.log(positionX);
        if(positionX < 0) { 
            positionX = tileCountX - 1
        }
        // if(positionX > tileCountX - 1) {
        //     positionX = 0
        // }
        if(positionY < 0) {
            positionY = tileCountY - 1
        }
        if(positionY > tileCountY - 1) {
            positionY = 0
        }
        
        function map1(){
            ctx.fillStyle = "black"
            ctx.fillRect(0, 0, canvas.width, canvas.height)

            ctx.fillStyle = "red";
            ctx.fillRect(280, 280, gridSize, gridSize)
            if(positionX == 7 && positionY == 7){
            setTimeout(()=> {
                window.location.href = "shooting/shooting.html";
            }, 100)
            }
        }
        if(positionX<=20){
            map1();
        } else {
            map2();
        }
        
        function map2(){
            ctx.fillStyle = "grey"
            ctx.fillRect(0, 0, canvas.width, canvas.height)

            ctx.fillStyle = "blue";
            ctx.fillRect(400, 400, gridSize, gridSize)
    
            ctx.fillStyle = "blue";
            ctx.fillRect(320, 320, gridSize, gridSize)
        }
        //console.log(positionX , positionY)
        if(positionX === 10 && positionY === 10){
            setTimeout(() =>{
                //window.location.href ="www.google.com";
                window.location.href="snake/snake.html"
            },100)
        }
        if(positionX == 8 && positionY == 8){
            setTimeout(()=> {
                window.location.href = "wordle/wordle.html";
            }, 100)
        }

        ctx.fillStyle = "lime"
        ctx.fillRect(positionX * gridSize, positionY * gridSize, gridSize - 2, gridSize - 2)

    }
        
    function keyPush(evt) {
        switch(evt.keyCode) {
            case 37:
                positionX += -1;
                positionY += 0;
                break;
            case 38:
                positionX += 0;
                positionY += -1;
                break;
            case 39:
                positionX += 1;
                positionY += 0;
                break;
            case 40:
                positionX += 0;
                positionY += 1;
                break;   
        }
    }
    
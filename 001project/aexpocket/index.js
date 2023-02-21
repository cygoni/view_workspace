const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
//console.log(battle);

canvas.width = 800;
canvas.height = 480;

const collisionsMap = [];
for(let i = 0; i < collisions.length; i+=70){
    collisionsMap.push(collisions.slice(i, 70 + i));
}
const battleMap = [];
for(let i = 0; i < battle.length; i+=70){
    battleMap.push(battle.slice(i, 70 + i));
}

const boundaries = [];
const offset = {
    x: -850,
    y: -660
}
collisionsMap.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol === 1025){
        boundaries.push(new Boundary({position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
        }}))}
    })
})

const battles =[];
battleMap.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol === 1025){
        battles.push(new Boundary({position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
        }}))}
    })
})

//c.fillStyle = "white";
//c.fillRect(0, 0, canvas.width, canvas.height);

const image = new Image();
image.src = "Pellet Town.png";

const foregroundImage = new Image();
foregroundImage.src = "foreground.png";

const playerImage = new Image();
playerImage.src = "playerDown.png";

const playerUpImage = new Image();
playerUpImage.src = "playerUp.png";

const playerRightImage = new Image();
playerRightImage.src = "playerRight.png";

const playerLeftImage = new Image();
playerLeftImage.src = "playerLeft.png";


const player = new Sprite({
    position: {
        x: canvas.width / 2 - 192 / 4 / 2 ,
        y: canvas.height / 2 - 68 /2
    },
    image: playerImage,
    frames: {
        max: 4
    },
    sprites: {
        up: playerUpImage,
        down: playerImage,
        left: playerLeftImage,
        right: playerRightImage
    }
});

const background = new Sprite({
    position: {
        x: offset.x,
        y: offset.y
    },
    image: image
})
const foreground = new Sprite({
    position: {
        x: offset.x,
        y: offset.y
    },
    image: foregroundImage
})

const keys = {
    w: {
        pressed: false
    },
    a: {
        pressed: false
    },
    s: {
        pressed: false
    },
    d: {
        pressed: false
    }
}

const moveables = [background, ...boundaries, foreground]
function rectangularCollision({rectangle1, rectangle2}){
    return (
        rectangle1.position.x + rectangle1.width >= rectangle2.position.x && 
        rectangle1.position.x <= rectangle2.position.x + rectangle2.width &&
        rectangle1.position.y <= rectangle2.position.y -40 + rectangle2.height &&
        rectangle1.position.y + rectangle1.height >= rectangle2.position.y
    )
}


function animate() {
    
    window.requestAnimationFrame(animate);
    background.draw();
    boundaries.forEach(boundary => {
        boundary.draw();
    });
    player.draw();
    foreground.draw();

    let moving = true;
    player.moving = false;
    if(keys.w.pressed && lastKey === 'w') {
        player.moving = true;
        player.image = player.sprites.up;
        for(let i = 0; i < boundaries.length; i++){
            const boundary = boundaries[i]
            if(rectangularCollision({
                rectangle1: player,
                rectangle2: {...boundary, position: {
                    x: boundary.position.x,
                    y: boundary.position.y + 3
                }}
            })){
                //console.log("hio")
                moving = false;
                setTimeout(()=>{
                    window.location.href='../horserace2/horserace.html';
                }, 100)
                break;
            }
        }
        if(moving)
        moveables.forEach(moveable => {
            moveable.position.y += 3;
        })}
    else if (keys.a.pressed && lastKey === 'a') {
        player.moving = true;
        player.image = player.sprites.left;
        for(let i = 0; i < boundaries.length; i++){
            const boundary = boundaries[i]
            if(rectangularCollision({
                rectangle1: player,
                rectangle2: {...boundary, position: {
                    x: boundary.position.x + 3,
                    y: boundary.position.y
                }}
            })){
                console.log("hio")
                moving = false;
                break;
            }
        }
        if(moving)
        moveables.forEach(moveable => {
        moveable.position.x += 3;
    })}
    else if (keys.s.pressed && lastKey === 's') {
        player.moving = true;
        player.image = player.sprites.down;
        for(let i = 0; i < boundaries.length; i++){
            const boundary = boundaries[i]
            if(rectangularCollision({
                rectangle1: player,
                rectangle2: {...boundary, position: {
                    x: boundary.position.x,
                    y: boundary.position.y - 3
                }}
            })){
                console.log("hio")
                moving = false;
                break;
            }
        }
        if(moving)
        moveables.forEach(moveable => {
        moveable.position.y -= 3;
    })}
    else if (keys.d.pressed && lastKey === 'd') {
        player.moving = true;
        player.image = player.sprites.right;
        for(let i = 0; i < boundaries.length; i++){
            const boundary = boundaries[i]
            if(rectangularCollision({
                rectangle1: player,
                rectangle2: {...boundary, position: {
                    x: boundary.position.x - 3,
                    y: boundary.position.y
                }}
            })){
                console.log("hio")
                moving = false;
                break;
            }
        }
        if(moving)
        moveables.forEach(moveable => {
        moveable.position.x -= 3;
    })}
}
animate();

let lastKey = '';
window.addEventListener('keydown', (e) => {
    //console.log(e.key)
    switch (e.key) {
        case 'w','ArrowUp':
            keys.w.pressed = true;
            lastKey = 'w';
        break;
        case 'a','ArrowLeft':
            keys.a.pressed = true;
            lastKey = 'a';
        break;
        case 's','ArrowDown':
            keys.s.pressed = true;
            lastKey = 's';
        break;
        case 'd','ArrowRight':
            keys.d.pressed = true;
            lastKey = 'd';
        break;
        
    }
})
window.addEventListener('keyup', (e) => {
    //console.log(e.key)
    switch (e.key) {
        case 'w','ArrowUp':
            keys.w.pressed = false;
        break;
        case 'a','ArrowLeft':
            keys.a.pressed = false;
        break;
        case 's','ArrowDown':
            keys.s.pressed = false;
        break;
        case 'd','ArrowRight':
            keys.d.pressed = false;
        break;
        
    }
})

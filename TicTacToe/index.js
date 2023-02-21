let tds = document.querySelectorAll('td');
let turn = 0;
let win = false;


tds.forEach(td => {
    td.addEventListener('click', () => {
        //if(turn == 9) gameOver();
        if(turn == 9 || td.innerHTML == "X" || td.innerHTML == "O"){
            return;
        }
        let id = "#"+td.id;
        console.log(id)
        let click = document.querySelector(id);
        //console.log(td.id.slice(td.id.length-1))
        click.innerHTML = whoTurn();
        turn++;
        if(turn == 9) gameOver();
    });
    
});

function checkWin(){
    tds.forEach(td => {
        if(td.innerHTML == "X" || td.innerHTML == "O"){
            let num = td.id.slice(td.id.length-1);
            if(num == 2 || num == 5 || num == 8){
                checkRow(td.id);
            }
        }
    })
}

function checkRow(id){
    //if(ㅔ임)
}

function checkColumn(){

}

function checkX(){

}


function whoTurn() {
    if(turn%2 == 0){
        return "X";
    } else {
        return "O";
    }
}

function gameOver(){
    setTimeout(() => {
        alert("GAME OVER!"), 1
    })
    
}
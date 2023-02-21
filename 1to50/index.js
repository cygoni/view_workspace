class App {

    constructor(){
        this.nodeList = [];
        this.container = document.querySelector('.container');
        this.num = document.querySelector('.num');
        this.input = document.querySelector('input');
        this.timer = document.querySelector('.timer')
        this.record = {min:0, sec:0, miSec: 0, time: 0};
        this.gameTime = 0;
        this.front = [];
        this.back = [];
        this.isClick = [];

        this.showGame();
        console.log(this.front)
        console.log(this.back)
        console.log(this.isClick)
        this.createNodeList();

        this.input.addEventListener('click', () => {
            window.location.reload();
        })
    }

    setRecord(){
        let time = this.record.time++;
        let min = Math.floor(time / 3600);
        let sec = Math.floor(time % 3600 / 60);
        let miSec = time % 3600 % 60;
        if (min < 10) {
            min = "0" + min;
        }
        if (sec < 10) {
            sec = "0" + sec;
        }
        if (miSec < 10) {
            miSec = "0" + miSec;
        }
        this.timer.innerHTML = `${min} : ${sec} : ${miSec}`;
        this.record.min = min;
        this.record.sec = sec;
        this.record.miSec = miSec;
    }

    showGame() {
        for(let i = 1; i<26; i++){
            this.front.push(i);
            this.back.push(i+25);
            this.isClick.push(false);
        }

        for(let i = 0; i < 200; i++){
            for(let i = 0; i<200; i++){
                let x = parseInt(Math.random() * 25);
                let y = parseInt(Math.random() * 25);
                let temp = this.front[x];
                this.front[x] = this.front[y];
                this.front[y] =temp;
            }
            for(let i = 0; i<200; i++){
                let x = parseInt(Math.random() * 25);
                let y = parseInt(Math.random() * 25);
                let temp = this.back[x];
                this.back[x] = this.back[y];
                this.back[y] =temp;
            }
        }


        this.container.innerHTML = `
        <table>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </table>`;
    }

    createNodeList(){
        this.nodeList = [];
        const tds = document.querySelectorAll('td');
        let cnt = 0;
        for(let i = 0; i < tds.length; i++) {
            tds[i].innerHTML = this.front[i];
        }
        for(let i = 0; i< 5; i++){
            let arr = [tds[cnt], tds[cnt+1], tds[cnt+2], tds[cnt+3], tds[cnt+4]];
            cnt+=5;
            this.nodeList.push(arr);
        }
        let count = 1;
        this.nodeList.forEach((tds) => {
            tds.forEach((td) => {
                td.addEventListener('click', (e) => {
                    if(e.target.innerHTML != count+"") return;
                    this.playGame(e.target);
                    count++;
                    if(count == 51){
                        setTimeout(() => {
                            let re = `${this.record.min} : ${this.record.sec} : ${this.record.miSec}`;
                            this.timer.classList.add("recode");
                            let recode = document.querySelector('.recode');
                            recode.innerHTML = re;
                            // this.timer.innerHTML=`${this.record.min} : ${this.record.sec} : ${this.record.miSec}`;
                            clearInterval(this.gameTime);
                            //alert(re);
                        },100)
                        alert("GAME OVER!")
                    } else {
                        this.gameTime = setInterval(() => {
                            this.setRecord();
                        }, 1);
                    }
                    if(count<51) this.num.innerHTML = count;
                    else if(count == 51) this.num.innerHTML = "GAME OVER!"
                })
            })
        })
    }

    playGame(td){
        let index = -1;
        if(td.innerHTML <26) index = this.front.indexOf(parseInt(td.innerHTML));
        else index = this.back.indexOf(parseInt(td.innerHTML));
        console.log(td.innerHTML);
        console.log(index);
        if(!this.isClick[index]){
            td.innerHTML = this.back[index];
            this.isClick[index] = true;
        } else {
            td.style.visibility = 'hidden';
        }
    }

    
}

const game = new App();

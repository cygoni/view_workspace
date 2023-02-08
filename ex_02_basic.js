let myName = '조영곤';
console.log(myName)

function addNum(a,b){
    return a+b
}
let a = 10
let b = 3
console.log(`${a} + ${b} = ${addNum(10,3)}`)

//함수에 이름이 없는 함수 : 무명함수
let callMyName = function printName(name){
    console.log(name, "이야")
}

//함수 표현식: 함수를 변수의 값으로 사용 : 이름 정의해준 함수는 의미 없다
// 표현식에서 값으로 선언한 함수는 바로 호출 불가능, 변수 (식별자) 를 통해서만 그 함수 호출가능
//printName("유재석")
callMyName("아이유")

//함수의 표현식은 보통 화살표 함수로 많이 사용한다.
//1. function키워드를 생략한다.
//2. 매개 변수값이 1개면 () 생략가능, 1개 이상 생략 불가능
//3. 함수가 리턴값 1개만 있으면 {} 생략가능 근데 여러줄 있으면 중괄호 생략 불가능
let multiply = function(a,b){
    return a*b
}
console.log(multiply(10,3))

let minus = (a,b) => a-b
console.log(minus(10,3))

//자바스크립트 랜덤으로 값 가져오기
//Math.random() ---> 0.8765412545873521 : 무작위 0이하 실수값이 나온다
//parseInt(실수값) : --> 정수값
//자바스크립트 랜덤으로 값 가져오기
let randomNum = parseInt(Math.random())*10+1; //(0~9)+1 ==> 1~10
console.log(randomNum)

//1~100 사이의 숫자를 랜덤으로 저장하고 그 수가 짝수인지 홀수 인지 출력하는 checkNum함수를 만든후 호출
function checkNum(){
    let cnt = 0;
    while(true){
        let a = parseInt(Math.random()*100)+1
    // let b = parseInt(Math.random()*100)+1
    // let c = parseInt(Math.random()*100)+1
    // let d = parseInt(Math.random()*100)+1
    console.log(a)
    // console.log(b)
    // console.log(c)
    // console.log(d)
    if(a%2 === 0) console.log("짝수")
    else console.log("홀수")
    cnt++
    if(cnt === 4) break
    }
}
checkNum()

// 배열에 랜덤으로 -100 ~ 100 사이의 홀수 4개를 저장후 전부 홀수인지 검사하는 함수를 만드시오

let isOdd = num => num%2==0? 0 :1
let arr =[]
console.log(arr)
function setRandom(arr){
    let cnt = 0;
    while(true){
        arr[cnt] =  parseInt(Math.random()*201)-100
        cnt++;
        if(cnt == 4) break
    }
}
setRandom(arr)
console.log(arr)
function checkOdd(arr) {
    let cnt = 0;
    let odd = false;
    while(cnt<4){
        if(isOdd(arr[cnt]) == 0) return console.log("전부 홀수가 아닙니다.")
        cnt++;
        if(cnt == 4) odd = true;  
        if(odd) return console.log("전부 홀수입니다.")
    }
}
checkOdd(arr);


//배열에 랜덤으로 1 또는 7을 7개 저장한다. 단 7은 딱 3개만 저장한다.
// 당첨인지 출력하시오.
// 당첨은 7이 3개면 됨.

let lotto = [];
function setLotto(lotto){
    let win = false;
    for(i = 0; i<7; i++){
        let x = parseInt(Math.random()*2)+1
        if(!win){
            if(x==2) x = 7;
        lotto[i] = x
        let cnt = 0;
        for(j = 0; j <i; j++){
            if(lotto[j]==7){
                cnt++
            } else {
                cnt = 0;
            }
        }
        if(cnt ==3 ) win = true;
        } else {
            lotto[i] = 1;
        }
    }

    if(win){
        console.log("당첨")
    } else {
        console.log("까비")
    }
}
setLotto(lotto);
console.log(lotto)

// 내가 만든 정렬
// 거꾸로 저장
let numArr= [1001, 3423, 23, 32123, 123]
function mySort(arr) {
    arr.sort(function(a,b){
        return a-b
    })
}

mySort(numArr)
console.log(numArr)

function myReverse(arr){
    arr.sort(function(a,b){
        return b-a
    })
}
myReverse(numArr)
console.log(numArr)

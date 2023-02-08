const animals = ["뱀", "고양이", "강아지", "토끼"]

for(let i =0; i < animals.length; i++){
    console.log(animals[i])
}

//콜백함수는 화살표 함수만 사용할 수 있다.
//고차함수 : 콜백함수가 들어가 있는것 : 매개변수로 함수(화살표함수)를 줘야함

//forEach
console.log("===================")
animals.forEach((val) => console.log(val))

function myCallback(num){
    console.log(num)
}

function printAll(arr, callback){
    for(let i =0; i < arr.length; i++){
        callback(arr[i])
    }
}
printAll([1,2,3,4,5], myCallback)

let cat={kind : 'cat', age: 5}
let dog={kind:'dog', age: 4}
let rabbit={kind:"rabbit", age:0.5}
let hamster ={kind:'hamster', age:1}
let pets=[cat, dog, rabbit, hamster, cat]

//find 찾아라
//속성(key)값이 없거나 value없다고 에러를 띄우지 않는다
let res = pets.find((obj)=>obj.owner=="snake")
console.log(res)
res = pets.find((obj)=>obj.kind==='cat')
console.log(res)
res= pets.findIndex((obj)=>obj.kind==='cat')
console.log(res)

res = pets.every(obj => obj.kind==='cat')
console.log(res)
res = pets.some(obj => obj.kind==='cat')
console.log(res)
//res = pets.filter(obj=> )

let arr = [1,2,3,4,5]
res = arr.map(num=> num*10)
console.log(arr)
console.log(res)

let number = [0,5,4,1,100]
//오름차순
let text = ['hi', 'abc', 'ba', 'boy']
text.sort();
console.log(text)

number.sort((a,b) => a-b);
console.log(number)

//랜덤하게 배열1~100 10개 생성
let arr2 = []
function setArr2(arr){
    for(let i = 0; i<10; i++){
        let x = parseInt(Math.random()*100)+1
        // for(let j = 0; j<i; j++){
        //     if(arr[j]==x){
        //         i--
        //         continue
        //     }
        // }
        // arr[i] = x;
        if(!arr2.includes(x)) arr2[i] =x;
        else i--;
    }
}
setArr2(arr2)

//배열 값 출력 : forEach 사용

arr2.forEach((val) => console.log(val))

//배열 값중에 홀수만 따로 배열 만들기 filter 사용
let arr3 =[]
arr3 = (arr2.filter((a) => a%2==1))
console.log(arr3)

//배열의 총합 출력 reduce 사용

let sum = arr2.reduce((a,b) => a+b,0);
console.log(sum)


//  배열의 짝수들의 총합 : 2개 filter reduce 같이 사용

sum = arr2.filter((a) => a%2==0).reduce((a,b) =>a+b,0)
console.log(sum)

// 오름차순 정렬 : sort 사용
arr2.sort((a,b) => a-b)
console.log(arr2)

//객체 배열을 동물 나이순으로 내림차순 정렬

/*
let cat={kind : 'cat', age: 5}
let dog={kind:'dog', age: 4}
let rabbit={kind:"rabbit", age:0.5}
let hamster ={kind:'hamster', age:1}
let pets=[cat, dog, rabbit, hamster, cat]

*/

pets.sort((a,b)=> {
    if(a.age > b.age) return -1
    if(a.age < b.age) return 1
    return 0
})
console.log(pets)
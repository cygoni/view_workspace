// console.log("test");
// let num = 10;
// console.log(num);
// num = "test";
// console.log(num);
// num = true;
// console.log(num); 
// console.log("조영곤");

let myName="조영곤";
console.log(myName);
myName='조영곤';
let callName = `반가워 \n내이름은 ${myName} 이야. `;
console.log(callName);

let array = [1,2,3,4,5];
let arr2 = new Array(3);
console.log(arr2)
console.log(typeof arr2[0]) //[undefined undefined undefined]
arr2[0] = 1;
arr2[1] = 2;
arr2[2] = 3;
arr2[3] = 4;

console.log(arr2)
console.log(arr2.length)
delete arr2[1] // 순수하게 값만 삭제 : 해당 번지에 값의 공간은 empty === undefined로 남겨둠

console.log(arr2)

// 자바스크립트는 값은 자료형이 존재한다. 변수는 자료형이 존재하지 않는다.
// 자바스크립트의 배열은 여러 데이터탑입이 들어올 수 있다.
// js 배열 물리적으로 여러데이터 타입 가능하나 권장하지 않음
// 배열은 같은 자료형 타입끼리 사용하자!.
let arr = [1,"2", true, NaN, [10,20,30]]
console.log(arr)

// 클래스 자료형 타입 사용하는 이유 여러 데이터 타입 묶어주기 위해서
let kind = "cat"
let name = "나비"
let age = 9
let isPet = true
let ownerName = "조영곤"

let cat =[kind, name, age, isPet, ownerName]
console.log(cat[0])

// 리터럴 객체 (일시적으로 쓰는 거)
let navi = {
    kind : "cat",
    name : "나비",
    age : 9,
    isPet : true,
    ownerName : "yg"
}

console.log(navi.kind)
console.log(navi.age)

console.log(navi['name'])

// 객체의 속성값 추가하는 방법
navi['likes'] = ['잠자기', '간식먹기', '엄마랑 놀기']

console.log(navi.likes)

let yourName = myName
console.log("myName = " + myName)
console.log("yourName = " , yourName)

let dog = {
    name: '다롱이'
}

let otherDog = dog;
otherDog.name = "못난이"


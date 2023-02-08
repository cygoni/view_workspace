// 배열 사용하는 유용한 함수들

const animals = ["고양이", "강아지", "토끼"]
animals[3]="햄스터"
console.log(animals)

function printAll(arr){
    
    for(let i = 0; i < arr.length; i++ ){
        console.log(arr[i])
    }
}

//배열 사용하는 유용한 함수들
// 자바 : 배열 고정배열 / 자바스크립트는 가변배열
const animals = ["토끼", "고양이", "강아지", "토끼"]
console.log(animals)
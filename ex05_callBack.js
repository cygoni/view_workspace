// 콜백함수 : 콜백 callback : 내가 나중에 다시 부를께

// 콜백함수 : 자기 함수 호출부분 위임
// 그 해당함수 콜백 함수 호출부분 위임

function say_welcome(name){
    console.log(`반갑습니다 ${name}님`)
}

say_welcome("조영곤")

function say_bye(name){
    console.log(`안녕히가세요 ${name}님`)
}

say_bye("조영곤")

function intro(lastName, firstName, callback){
    let fullName = lastName + firstName
    callback(fullName)
}

//say_welcome 콜백 함수로 사용됨
// 콜백함수는 자기자신을 호출 x => 남에게 호출권을 넘겨준다
intro("조","영곤", say_welcome)
intro("조","영곤", say_bye)
intro("조","영균", name => console.log(name))
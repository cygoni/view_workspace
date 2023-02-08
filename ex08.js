console.log("test");
const checkBox = document.querySelector('input');
checkBox.addEventListener('click', event => {
    event.preventDefault(); // 기존에 체크박스를 클릭했던 이벤트를 막기
});

function createDiv() {
    const h1 = document.createElement('h1'); // <h1></h1>
    const childDiv = document.createElement('div'); // <div></div>
    childDiv.innerHTML = 'test1';// <div>test1</div>
    h1.appendChild(childDiv);  // <h1><div>test1</div></h1>
    document.body.appendChild(h1); //<body>...<h1><div>test1</div></h1> </body>
}

let cnt =1;
function creatDiv2() {
    let h1 = document.createElement('h1');
    h1.innerHTML = `<div>test${cnt}</div>`;
    document.body.appendChild(h1);
    cnt+=1;
}
checkBox.addEventListener('click', event => {
    creatDiv2();
});
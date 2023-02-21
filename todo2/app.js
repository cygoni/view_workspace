let items = document.querySelectorAll('.item');
const form = document.querySelector('.form-group');
const addBtn = document.querySelector('#addBtn');
const garbage = document.querySelector('#garbage');
const list = document.querySelector("#list")

addBtn.addEventListener('click', () => {
    let title = form.querySelector('#title');
    let content = document.querySelector('textarea')

    if(title.value.length == 0 || content.value.length == 0) {
        alert("제목과 내용 모두 입력하세요")
        return
    }
    const div = document.createElement('div')
    div.classList.add('item')
    div.innerHTML = `<h4 class="title">${title.value}</h4>
    <span class="msg">${content.value}</span>`
    div.setAttribute('draggable',true)
    list.appendChild(div);

    title.value = ""
    content.value = ""
    items = document.querySelectorAll('.item');
    console.log(items)
})

let dragList = ""
let dragNum = -1
items.forEach(i => {
    console.log(i)
    i.setAttribute('draggable', true)
    i.addEventListener('dragstart', t => {
        console.log('start')
        dragList = t.target.innerHTML
        console.log(dragList)
        
    })
})

garbage.addEventListener('dragover', e => e.preventDefault())
garbage.addEventListener('drop', e=>{
    console.log('delete')
    for(let i = 0; i<items.length; i++) {
        console.log(items.length)
        console.log(items[i].innerHTML)
        if(items[i].innerHTML == dragList) {
            list.removeChild(items[i]);
            items = document.querySelectorAll('.item');
            console.log(items);
            return
    }
    
}})
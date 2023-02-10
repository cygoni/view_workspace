const items = document.querySelectorAll('.item');
const form = document.querySelector('.form-group');
const addBtn = document.querySelector('button');
const garbage = document.querySelector('.garbage');

console.log(addBtn)
addBtn.addEventListener('click', () => {
    let title = form.getElementsByClassName('title').value;
    console.log(title);
})
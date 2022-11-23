let input = document.getElementById('name')
let myForm = document.querySelector('.my-form')

myForm.addEventListener('submit',onSubmit);

function onSubmit(e){
    e.preventDefault();
    localStorage.setItem('name',input.value)
}
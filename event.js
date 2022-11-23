let myForm = document.querySelector('.my-form')
let inputName = document.getElementById('name')
let inputEmail = document.getElementById('lname')

myForm.addEventListener('submit',onSubmit);

function onSubmit(e){
    e.preventDefault();
    localStorage.setItem('userName',inputName.value)
    localStorage.setItem('userEmail',inputEmail.value)
}
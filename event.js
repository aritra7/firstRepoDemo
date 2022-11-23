let myForm = document.querySelector('.my-form')
let inputName = document.getElementById('name')
let inputEmail = document.getElementById('lname')


var myObj ={
    name: 'William',
    email: 'Smith'
}

let myObj_serialized = JSON.stringify(myObj);


myForm.addEventListener('submit',onSubmit);

function onSubmit(e){
    e.preventDefault();
    // localStorage.setItem('userName',inputName.value)
    // localStorage.setItem('userEmail',inputEmail.value)
    localStorage.setItem('myObj',myObj_serialized);
    
}

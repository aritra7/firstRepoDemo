// let myForm = document.querySelector('.my-form')
// let inputName = document.getElementById('name')
// let inputEmail = document.getElementById('lname')


// var myObj ={
//     name: 'William',
//     email: 'Smith'
// }

// let myObj_serialized = JSON.stringify(myObj);


// myForm.addEventListener('submit',onSubmit);

// function onSubmit(e){
//     e.preventDefault();
//     // localStorage.setItem('userName',inputName.value)
//     // localStorage.setItem('userEmail',inputEmail.value)
//     localStorage.setItem('myObj',myObj_serialized);
    
// }

function saveToLocalStorage(event){
    event.preventDefault();
    const name = event.target.username.value;
    const email = event.target.emailId.value;
    // localStorage.setItem('name',name);
    // localStorage.setItem('email',email)
    const obj = {
        name,
        email
    }
    localStorage.setItem(obj.email,JSON.stringify(obj));
    showNewuserOnScreen(obj)
}

function showNewuserOnScreen(user){
    const parentNode = document.getElementById('listofusers');
    const childHTML = '<li> ${user.name} - ${user.email}</li>'
    parentNode.innerHTML = parentNode.innerHTML + childHTML;
}

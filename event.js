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
    const userDetailsObj = {
        name,
        email
    }
    localStorage.setItem(userDetailsObj.email,JSON.stringify(userDetailsObj));
    showNewUserOnScreen(userDetailsObj)
}

window.addEventListener("DOMContentLoaded", () => {
    const localStorageObj = localStorage;
    const localstoragekeys  = Object.keys(localStorageObj)

    for(var i =0; i< localstoragekeys.length; i++){
        const key = localstoragekeys[i]
        const userDetailsString = localStorageObj[key];
        const userDetailsObj = JSON.parse(userDetailsString);
        showNewUserOnScreen(userDetailsObj)
    }
})

function showNewUserOnScreen(user){
    const parentNode = document.getElementById('listOfUsers');
    const childHTML = `<li id=${user.email}> ${user.name} - ${user.email}
                            <button onclick=deleteUser('${user.email}')> Delete User </button>
                         </li>`

    parentNode.innerHTML = parentNode.innerHTML + childHTML;
}

function deleteUser(emailId){
    console.log(emailId)
    localStorage.removeItem(emailId);
    removeUserFromScreen(emailId);

}

function removeUserFromScreen(emailId){
    const parentNode = document.getElementById('listOfUsers');
    const childNodeToBeDeleted = document.getElementById(emailId);

    parentNode.removeChild(childNodeToBeDeleted)
}

let itemList = document.querySelector('#items')
// parent node
/*
console.log(itemList.parentNode.parentNode)
itemList.parentNode.style.background = '#f4f4f4'
*/
// parent element
/*
console.log(itemList.parentElement.parentElement)
itemList.parentElement.style.background = '#f4f4f4'
*/
// console.log(itemList.childNodes)

//console.log(itemList.children)
//itemList.children[2].style.backgroundColor = 'coral'

// first child
// console.log(itemList.firstChild)
// firstelementchild
// console.log(itemList.firstElementChild)
// itemList.firstElementChild.textContent = "Hello Text"

// last child
// console.log(itemList.lastChild)
//lastelementchild
// console.log(itemList.lastElementChild)
// itemList.lastElementChild.textContent = "Hello Text"

// next sibling
// console.log(itemList.nextSibling)
// console.log(itemList.nextElementSibling)

// console.log(itemList.previousSibling)
// console.log(itemList.previousElementSibling)
// itemList.previousElementSibling.style.color = 'coral'

let newDiv = document.createElement('div')
newDiv.className = 'hello'
newDiv.id = 'hello1'
newDiv.setAttribute('title','Hello Div')
// create text node
let newDivText = document.createTextNode('HEllo word')
// add text to div
newDiv.appendChild(newDivText)

let container = document.querySelector('header .container')
let h1 = document.querySelector('header h1')

//console.log(newDiv)

container.insertBefore(newDiv, h1)

let newListDiv = document.createElement('div')
let newListDivText = document.createTextNode('HEllo word 2')
newListDiv.appendChild(newDivText)
console.log(newListDiv)
let listContainer = document.querySelector('.list-group')
let h2 = document.querySelector('ul li')

listContainer.insertBefore(newListDiv,h2)
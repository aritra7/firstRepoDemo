/* console.log(document.domain)
console.log(document.URL)
console.log(document.title)
// document.title = 123
console.log(document.doctype)
console.log(document.head)
console.log(document.body)
//console.log(document.all)
console.log(document.all[10])
// console.log(document.all[10].textContent = 'Hello')
console.log(document.forms)
console.log(document.links)
console.log(document.images) */

var headerTitle = document.getElementById('header-title')
var header = document.getElementById('main-header')
// console.log(headerTitle)
// headerTitle.textContent = 'Hello'
// headerTitle.innerText = 'GoodBye'
// console.log(headerTitle.innerText)
// console.log(headerTitle.textContent) // difference between innerText textContent
// headerTitle.innerHTML = '<h3>Hello</h3>'
header.style.borderBottom = 'black solid 2px'
var addItems = document.getElementById('titleid')
addItems.style.color = "green"
addItems.style.fontSize = 'bold'

// get elements by class name
/*let items = document.getElementsByClassName('list-group-item')
console.log(items)
console.log(items[1])
items[1].textContent = 'Hello 2'
items[1].style.fontWeight = 'bold'
items[1].style.backgroundColor = 'yellow'

items[2].style.backgroundColor = 'green'

for(let i=0; i<items.length; i++){
    items[i].style.fontWeight = 'bold'
} */

// get element by tag name
let li = document.getElementsByTagName('li')
console.log(li)
console.log(li[1])
li[1].textContent = 'Hello 2'
li[1].style.fontWeight = 'bold'
li[1].style.backgroundColor = 'yellow'

li[2].style.backgroundColor = 'green'

for(let i=0; i<li.length; i++){
    li[i].style.fontWeight = 'bold'
}

let items = document.getElementsByClassName('list-group-item')

//for(let i=0; i<items.length; i++){
//    items[i].style.backgroundColor = 'grey' // item 5 not //working for getElementsByClassName
//}
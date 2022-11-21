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
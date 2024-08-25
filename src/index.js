import './css/style.css'

const input = document.querySelector('.item-input')
const btn = document.querySelector('.item-btn')
const list = document.querySelector('.item-list')

function addItem (value){
    const listItem = document.createElement('li')
    listItem.textContent = value
    return listItem
}

function removeItems(){
    while(list.lastElementChild) {
        list.removeChild(list.lastElementChild)
    }
}

function updateUI(items){
    const ul = document.createElement('ul')
    items.map(item=>{
        const li = addItem(item)
        ul.appendChild(li)
    })
    removeItems()
    list.appendChild(ul)
}

function clickHandler(){
    let items = JSON.parse(localStorage.getItem('todos'))
    if(!items) {
        items = []
    }
    items.push(input.value)
    input.value=''
    localStorage.setItem('todos',JSON.stringify(items))

    items = JSON.parse(localStorage.getItem('todos'))
    updateUI(items)
}

btn.addEventListener('click', clickHandler)
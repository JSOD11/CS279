const inputtdl = document.querySelector('.textarea')
const buttontdl = document.querySelector('.buttoninput')
const listtdl = document.querySelector('.todolist')

function clickButton(e) {
    e.preventDefault()
    addTodo()
}

// adding item to the todoList
function addTodo() {
    // create a new element of the list
    const itemall = document.createElement('div')
    itemall.classList.add('itemall')

    // enter the characters of the to do list item into the element
    const item = document.createElement('p')
    item.classList.add('item')
    item.innerText = inputtdl.value
    itemall.appendChild(item)

    // if the new item is empty, don't add it to the to do list (can't add null todos)
    if (inputtdl.value === '') return

    // create the checkbutton that can be found on the right side of the todo
    const urgentbutton = document.createElement("button")
    urgentbutton.innerHTML = '<i class="fa-solid fa-exclamation"></i>'
    urgentbutton.classList.add("urgent-button")
    // append button to element
    itemall.appendChild(urgentbutton)

    // create the checkbutton that can be found on the right side of the todo
    const checkbutton = document.createElement("button")
    checkbutton.innerHTML = '<i class="fa-solid fa-check"></i>'
    checkbutton.classList.add("check-button")
    // append button to element
    itemall.appendChild(checkbutton)

    // create the trash button that can be found on the right side of the todo
    const trashbutton = document.createElement("button")
    trashbutton.innerHTML = '<i class="fa-solid fa-trash"></i>'
    trashbutton.classList.add("trash-button")
    // append button to element
    itemall.appendChild(trashbutton)

    // append todo to list
    listtdl.appendChild(itemall)
    // reset input box to the empty string
    inputtdl.value = ''
}

// checking and delete todoList
function okdel(e) {
    const item = e.target

    // check button is clicked
    if (item.classList[0] === 'check-button') {
        const todolist = item.parentElement
        todolist.classList.toggle('checklist')
    }

    // trash button is clicked
    if (item.classList[0] === 'trash-button') {
        const todolist = item.parentElement
        todolist.remove()
    }
    
    // urgent button is clicked
    if (item.classList[0] === 'urgent-button') {
        const todolist = item.parentElement
        todolist.classList.toggle('urgentlist')
    }
}

// 
buttontdl.addEventListener('click', clickButton)
listtdl.addEventListener('click', okdel)
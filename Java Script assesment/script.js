const todoinput =document.getElementById("todo-input")
const list =document.getElementById("list")
const urlstring = decodeURIComponent(document.cookie)
const string = urlstring.split("=")
console.log(string)
const todos = JSON.parse(string[1])
console.log(todos)

window.addEventListener("load" , updatetodos())

function updatetodos() {
    list.innerHTML =""
    for (let todo of todos) {
        const li = document.createElement("li")
        li.innerText = todo
        list.appendChild(li)
    }
    // document.cookie = `todos=${JSON.stringify(todos)}`
}


document.cookie = `todos=["Read A Book", "Ride a Bike"]`

function addTodoList(){
    if(!todoinput.value) return alert("Input Some Value")
    todos.push(todoinput.value)
    todoinput.value=""
    updatetodos()
}
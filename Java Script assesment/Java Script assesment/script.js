const todoinput =document.getElementById("todo-input")
const list =document.getElementById("list")
let todos = ["Read A Book" ,"CLean The Room"];

window.addEventListener("load" , () =>{
    const urlstring = decodeURIComponent(document.cookie);
    const string = urlstring.split("=");
    if (string.length > 1){
        todos = JSON.parse(string[1]);
    }
    updatetodos();
})

function updatetodos() {
    list.innerHTML =""
    for (let todo of todos) {
        const li = document.createElement("li")
        li.innerText = todo
        list.appendChild(li)
    }
    document.cookie = `todos=${JSON.stringify(todos)}`
}

function addTodoList(){
    if(!todoinput.value) {
        return alert("Input Some Value");
    }
    todos.push(todoinput.value)
    todoinput.value=""
    updatetodos()
}
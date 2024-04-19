{/*
    <li>
          Finish Frontend Simplified
          <button class="todo__delete">
            x
          </button>
        </li>*/
}

const list = document.querySelector(".list")
const input = document.querySelector(".input")
let counter = 0

let todoList = [
    
]

function addTodo() {
    const task = {
        id: counter++,
        task: input.value
    }
    todoList.push(task)
    renderTodo()
    input.value = ""
}

function deleteTodo(id) {
    todoList = todoList.filter((element) => {    
        return element.id !== id
    })
   renderTodo()
}

function renderTodo () {
    list.innerHTML = todoList.map((element) => 
        `<li>
            ${element.task}
            <button class="todo__delete" onclick = "deleteTodo(${element.id})">
            x
            </button>
        </li>`
    ).join("")
}

renderTodo()
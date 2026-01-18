const loggedUser = localStorage.getItem("jelenlegi");
if (!loggedUser) window.location.href = "login.html";

const storageKey = `todos_${loggedUser}`;
let todos = JSON.parse(localStorage.getItem(storageKey)) || [];

const todoList = document.getElementById("todoList");

function saveTodos() {
    localStorage.setItem(storageKey, JSON.stringify(todos));
}

function renderTodos() {
    todoList.innerHTML = "";

    todos.forEach((todo, index) => {
        const li = document.createElement("li");

        li.classList.add(todo.priority);
        if (todo.done) li.classList.add("done");

        li.textContent = todo.text;

        li.onclick = () => toggleDone(index);

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";
        deleteBtn.onclick = (e) => {
            e.stopPropagation();
            deleteTodo(index);
        };

        li.appendChild(deleteBtn);
        todoList.appendChild(li);
    });
}

function addTodo() {
    const text = document.getElementById("todoText").value.trim();
    const priority = document.getElementById("priority").value;

    if (!text) {
        alert("A feladat szövege nem lehet üres!");
        return;
    }

    todos.push({
        text: text,
        priority: priority,
        done: false
    });

    document.getElementById("todoText").value = "";

    saveTodos();
    renderTodos();
}

function deleteTodo(index) {
    todos.splice(index, 1);
    saveTodos();
    renderTodos();
}

function toggleDone(index) {
    todos[index].done = !todos[index].done;
    saveTodos();
    renderTodos();
}

renderTodos();

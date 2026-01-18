const loggedUser = localStorage.getItem("jelenlegi");
if (!loggedUser) window.location.href = "login.html";

const storageKey = `shopping_${loggedUser}`;
let items = JSON.parse(localStorage.getItem(storageKey)) || [];

const shoppingList = document.getElementById("shoppingList");

function saveItems() {
    localStorage.setItem(storageKey, JSON.stringify(items));
}

function renderItems() {
    shoppingList.innerHTML = "";

    items.forEach((item, index) => {
        const li = document.createElement("li");

        if (item.done) li.classList.add("done");

        li.textContent = item.name;

        // Készre jelölés kattintással
        li.onclick = () => toggleDone(index);

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";
        deleteBtn.onclick = (e) => {
            e.stopPropagation();
            deleteItem(index);
        };

        li.appendChild(deleteBtn);
        shoppingList.appendChild(li);
    });
}

function addItem() {
    const name = document.getElementById("itemName").value.trim();

    if (!name) {
        alert("A termék neve nem lehet üres!");
        return;
    }

    items.push({
        name: name,
        done: false
    });

    document.getElementById("itemName").value = "";

    saveItems();
    renderItems();
}

function deleteItem(index) {
    items.splice(index, 1);
    saveItems();
    renderItems();
}

function toggleDone(index) {
    items[index].done = !items[index].done;
    saveItems();
    renderItems();
}

renderItems();
const loggedUser = localStorage.getItem("loggedUser");

if (!loggedUser) {
    window.location.href = "login.html";
}

const storageKey = `notes_${loggedUser}`;
let notes = JSON.parse(localStorage.getItem(storageKey)) || [];

const notesList = document.getElementById("notesList");
const noteText = document.getElementById("noteText");

function saveNotes() {
    localStorage.setItem(storageKey, JSON.stringify(notes));
}

function renderNotes() {
    notesList.innerHTML = "";

    notes.forEach((note, index) => {
        const li = document.createElement("li");
        li.textContent = note;

        const editBtn = document.createElement("button");
        editBtn.textContent = "Szerkesztés";
        editBtn.onclick = () => editNote(index);

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Törlés";
        deleteBtn.onclick = () => deleteNote(index);

        li.appendChild(editBtn);
        li.appendChild(deleteBtn);

        notesList.appendChild(li);
    });
}

function addNote() {
    const text = noteText.value.trim();
    if (!text) {
        alert("A jegyzet nem lehet üres!");
        return;
    }

    notes.push(text);
    noteText.value = "";
    saveNotes();
    renderNotes();
}

function deleteNote(index) {
    if (!confirm("Biztos törlöd a jegyzetet?")) return;
    notes.splice(index, 1);
    saveNotes();
    renderNotes();
}

function editNote(index) {
    const newText = prompt("Jegyzet módosítása:", notes[index]);
    if (newText === null || newText.trim() === "") return;

    notes[index] = newText.trim();
    saveNotes();
    renderNotes();
}

renderNotes();
const loggedUser = localStorage.getItem("jelenlegi");
if (!loggedUser) window.location.href = "login.html";

const storageKey = `notes_${loggedUser}`;
let notes = JSON.parse(localStorage.getItem(storageKey)) || [];

const notesList = document.getElementById("notesList");

function saveNotes() {
    localStorage.setItem(storageKey, JSON.stringify(notes));
}

function renderNotes() {
    notesList.innerHTML = "";

    notes.forEach((note, index) => {
        const li = document.createElement("li");

        li.innerHTML = `
            <strong>${note.title}</strong>
            <em>(${note.category})</em><br>
            ${note.text}
        `;

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
    const title = document.getElementById("noteTitle").value.trim();
    const text = document.getElementById("noteText").value.trim();
    const category = document.getElementById("noteCategory").value;

    if (!text) {
        alert("A jegyzet szövege nem lehet üres!");
        return;
    }

    notes.push({
        title: title || "Névtelen jegyzet",
        text: text,
        category: category
    });

    document.getElementById("noteTitle").value = "";
    document.getElementById("noteText").value = "";

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
    const newText = prompt("Jegyzet módosítása:", notes[index].text);
    if (newText === null || newText.trim() === "") return;

    notes[index].text = newText.trim();
    saveNotes();
    renderNotes();
}

renderNotes();

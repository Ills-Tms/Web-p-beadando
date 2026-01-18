document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("loginform");
    const fnevinput = document.getElementById("fnev");
    const jelsznput = document.getElementById("jelsz");

    if (!form || !fnevinput || !jelsznput) {
        console.error("Login form elemei hiányoznak!");
        return;
    }

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = fnevinput.value.trim();
        const password = jelsznput.value;

        let users = [];
        try {
            users = JSON.parse(localStorage.getItem("users")) || [];
        } catch {
            users = [];
        }

        if (users.length === 0) {
            alert("Nincs regisztrált felhasználó!");
            return;
        }

        const user = users.find(
            u => u.username === username && u.password === password
        );

        if (!user) {
            alert("Hibás felhasználónév vagy jelszó!");
            return;
        }

       
        localStorage.setItem("jelenlegi", user.username);
        alert("Sikeres bejelentkezés!");
        window.location.href = "main.html";
    });
});

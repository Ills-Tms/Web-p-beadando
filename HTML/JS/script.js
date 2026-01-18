document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("registerform");
    const fnevInput = document.getElementById("fnev");
    const emailInput = document.getElementById("email");
    const jelszoInput = document.getElementById("jelsz");

    if (!form || !fnevInput || !emailInput || !jelszoInput) {
        console.error("Hiányzó form elem!");
        return;
    }

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = fnevInput.value.trim();
        const email = emailInput.value.trim();
        const password = jelszoInput.value;

        if (username.length < 3) {
            alert("A felhasználónév legalább 3 karakter!");
            return;
        }

        if (!email.includes("@")) {
            alert("Hibás email cím!");
            return;
        }

        if (password.length < 4) {
            alert("A jelszó túl rövid!");
            return;
        }

        let users = [];
        try {
            users = JSON.parse(localStorage.getItem("users")) || [];
        } catch {
            users = [];
        }

        if (users.some(u => u.username === username)) {
            alert("Ez a felhasználónév már létezik!");
            return;
        }

        users.push({
            username: username,
            email: email,
            password: password
        });

        localStorage.setItem("users", JSON.stringify(users));

        alert("Sikeres regisztráció!");
        window.location.href = "login.html";
    });
});


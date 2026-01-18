const form =document.getElementById("registerform")



form.addEventListener("submit", function (event) {event.preventDefault()

    let users = JSON.parse(localStorage.getItem("felhasznalok"))

    const username = document.getElementById("fnev").value
    const email = document.getElementById("email").value
    const password = document.getElementById("jelsz").value
    
    
    const userExists = users.some(user => user.email === email || user.username === usernameR)
    
    const ujszemely = { 
        username: usernameR,
        email: email,
        password : password
    }
    
    users.push(ujszemely)
    localStorage.setItem("felhasznalok", JSON.stringify(users))
    
    window.location.href = "login.html"
})
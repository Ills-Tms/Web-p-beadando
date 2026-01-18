const form =document.getElementById("registerform")
localStorage.setItem("felhasznalok")={ 
        username: username,
        email: email,
        password : password}


form.addEventListener("submit", function (event) {event.preventDefault()

     const username = document.getElementById("fnev").value
    const email = document.getElementById("email").value
    const password = document.getElementById("jelsz").value





    if(localStorage.getItem("felhasznalok")!=[])
    {
    let users = JSON.parse(localStorage.getItem("felhasznalok"))
    }
    else
    {
        let users=[{

        }]
    }



   
    
    
    const fletezik = users.username.value === username
    const eletezik = users.email === email
    
    if(fletezik)
    {
        alert("felhasználónév már létezik")
    }

    if(eletezik)
    {
        alert("ezzel az emaillel létezik fiok")
    }


    const ujszemely = { 
        username: username,
        email: email,
        password : password
    }
    
    users.push(ujszemely)
    localStorage.setItem("felhasznalok", JSON.stringify(ujszemely))
    alert("sikeres regisztrácio")
    window.location.href = "login.html"
})
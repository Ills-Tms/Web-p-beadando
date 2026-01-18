const form =document.getElementById("loginform");
const fnev=document.getElementById("fnev");
const email=document.getElementById("email");
const jelsz=document.getElementById("jelszo");


form.addEventListener("submit" , function (event) {event.preventDefault()

    let username = localStorage.setItem("fnev",fnev)
    let useremail = localStorage.setItem("email",email)
    let userpass = localStorage.setItem("password",jelsz)





    localStorage.setItem("jelenlegi",username)
    alert("Sikeres bejelentkezés!");
    window.location.href="main.html";

 } )
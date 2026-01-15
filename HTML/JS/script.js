const form =document.getElementById("regform");
const fnev=document.getElementById("fnev");
const email=document.getElementById("email");
const jelsz=document.getElementById("jelszo");
const btn=document.getElementById("");

form.addEventListener("submit" , function (event) {event.preventDefault()

    let username = localStorage.setItem("fnev",fnev)
    let useremail = localStorage.setItem("email",email)
    let userpass = localStorage.setItem("password",jelsz)





    window.location.href="login.html";

 } )
const form =document.getElementById("regform");
const fnev=document.getElementById("fnev");
const email=document.getElementById("email");
const jelsz=document.getElementById("jelszo");
const btn=document.getElementById("");

form.addEventListener("submit" , function (event) {event.preventDefault()

    let username = localStorage.setItem("rfnev",fnev)
    let useremail = localStorage.setItem("remail",email)
    let userpass = localStorage.setItem("rpassword",jelsz)







    window.location.href="login.html";

 } )
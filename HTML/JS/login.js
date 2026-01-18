const form =document.getElementById("loginform");
const fnev=document.getElementById("fnev");
const email=document.getElementById("email");
const jelsz=document.getElementById("jelszo");


form.addEventListener("submit" , function (event) {event.preventDefault()

    let username = localStorage.setItem("rfnev",fnev)
    let useremail = localStorage.setItem("remail",email)
    let userpass = localStorage.setItem("rpassword",jelsz)







    window.location.href="main.html";

 } )
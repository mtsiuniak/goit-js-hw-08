'use strict';

const myForm = document.querySelector(".login-form")

myForm.addEventListener("submit", submitHandler)

function submitHandler(event) {
    event.preventDefault();

    const email = event.target.elements.email.value.trim();
    const password = event.target.elements.password.value.trim();

    if (email === "" || password === "") {
       return alert('All form fields must be filled in')
    } 
    console.log({ email, password })

    myForm.reset();
}





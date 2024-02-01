'use strict';

const input = document.querySelector("input");
const output = document.querySelector("span");
const field = document.querySelector("h1");
field.setAttribute("class", "result");

    
input.addEventListener("input", (event) => {
    if (event.currentTarget.value.trim() === '') {
            output.textContent = 'Anonymous';
        } else {
            output.textContent = event.currentTarget.value.trim();
        }
});







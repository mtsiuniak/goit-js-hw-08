'use strict';

const input = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const divContainer = document.getElementById('boxes');

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);
createBtn.classList.add("create-btn")
destroyBtn.classList.add("destroy-btn")

function createBoxes() {
  if (input.value >= 1 && input.value <= 100) {
    const amount = Number(input.value);
    clearBoxes();
    
    for (let i = 0; i < amount; i++) {
      const box = document.createElement('div');
      box.classList.add('box');
      box.style.backgroundColor = getRandomHexColor();
      box.style.width = `${30 + i * 10}px`;
      box.style.height = `${30 + i * 10}px`;
      divContainer.appendChild(box);
    }

    input.value = '';
    }
  }

  function destroyBoxes() {
    clearBoxes();
    input.value = '';
  }

  function clearBoxes() {
    while (divContainer.firstChild) {
      divContainer.removeChild(divContainer.firstChild);
    }
  }

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
} 

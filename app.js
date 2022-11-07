'use strict';

// Variables

const calContainer = document.querySelector('.calculator');
const keysBtn = document.querySelectorAll('.key');
const calculaion = document.querySelector('.computing');
const equality = document.querySelector('.key-big');
const result = document.querySelector('.result');
const clear = document.querySelector('.clear');
const displayBox = document.querySelector('.display-result');

//Operation and keys
const addtion = document.querySelector('.plus');
const multiplication = document.querySelector('.multi');
const subtraction = document.querySelector('.minus');
const division = document.querySelector('.divide');
const deleteBtn = document.querySelector('.deleting');

let firstValue = [];

keysBtn.forEach(function (key) {
  key.addEventListener('click', function (e) {
    firstValue.push(e.target.textContent);

    let collectedValue = firstValue.join('');

    calculaion.textContent = collectedValue;
  });
});

clear.addEventListener('click', function () {
  displayBox.innerHTML = '';
});

// deleteBtn.addEventListener('click', function () {
//   let collectedValues = firstValue.join('');

//   const colVal = collectedValues.split('');
//   console.log(colVal);
// });

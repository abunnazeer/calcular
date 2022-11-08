'use strict';

// Variables

const calContainer = document.querySelector('.calculator');
const keysBtn = Array.from(document.getElementsByClassName('key'));
const keysBtnx = document.querySelectorAll('.key');
const calculation = document.getElementById('computing');
const equality = document.querySelector('.key-big');
const result = document.querySelector('.result');
const clear = document.querySelector('.clear');
const displayBox = document.querySelector('.display-result');

//Operation and keys
const exec = document.querySelectorAll('.operate');
// const addtion = document.querySelector('.plus');
// const multiplication = document.querySelector('.multi');
// const subtraction = document.querySelector('.minus');
// const division = document.querySelector('.divide');
const deleteBtn = document.querySelector('.deleting');

let firstValue = [];

keysBtn.forEach(function (key, i) {
  key.addEventListener('click', function (e) {
    firstValue.push(e.target.textContent);
    if (key.contains(clear)) {
      firstValue = [];
      calculation.textContent = '';
      result.textContent = '';
      console.log('You have clear the calculation');
    } else if (key.contains(deleteBtn)) {
      Number(firstValue.splice(-1));
      console.log(firstValue.splice(-1));
      calculation.textContent = Number(firstValue.join(''));
    } else if (key.contains(equality)) {
      firstValue.pop();
      console.log(eval(firstValue.join('')));
      result.textContent = eval(firstValue.join(''));
    } else {
      calculation.textContent = firstValue.join('');
    }
  });
});

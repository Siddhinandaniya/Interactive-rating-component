'use strict';

'strict mode';
const radiobtns = document.querySelectorAll('.radiobtn');
const box1 = document.querySelector('.box-1');
const box2 = document.querySelector('.box-2');
const attri = document.querySelector('.attribution');
const submit = document.querySelector('.submit');
const showRatings = document.querySelector('.rating');

let arr = [];

for (let i = 0; i < radiobtns.length; i++) {
  radiobtns[i].addEventListener('click', function () {
    showRatings.outerHTML = radiobtns[i].value + ' ';
  });
}

submit.addEventListener('click', function () {
  box1.classList.add('hidden');
  box2.classList.remove('hidden');
  attri.classList.add('hidden');
});

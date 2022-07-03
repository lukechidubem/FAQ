'use strict';

const container = document.querySelector('.container');
const icons = document.querySelectorAll('.fa');

icons.forEach(icon => {
  icon.addEventListener('click', function (e) {
    icon.parentNode.classList.toggle('active');
  });
});

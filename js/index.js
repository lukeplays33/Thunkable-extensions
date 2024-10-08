
import { PichaiUX } from 'https://lukeplays33.github.io/Pichai-UX/imports.js';

window.onload = function () {
  document.body.style.removeProperty('background-image'); //why????????
  let pichai = new PichaiUX();
  pichai.initialize();
}

let hide = ['Settings', 'Discord Server', 'Support', 'Donate', 'About'];
let ignore = ['Recent', 'New', 'All', 'Home'];

let items = document.getElementsByTagName('A');
let i;
for (i of items) {
  i.addEventListener('click', function () {
    if (hide.includes(this.innerHTML)) {
      document.getElementById('docs').style.display = 'none';
      document.getElementById('bottom_nav').style.display = 'none';
    } else if (ignore.includes(this.innerHTML)) {
      document.getElementById('docs').style.display = 'none';
      document.getElementById('bottom_nav').style.display = 'flex';
    } else {
      document.getElementById('docs').style.display = 'flex';
      document.getElementById('bottom_nav').style.display = 'none';
    }

    document.getElementById('pages').src = this.href;
  });
}

document.getElementById('HomeButton').click();

let menu = document.getElementById('toggleMenu');
let drawer = document.getElementById('draawer');

menu.addEventListener('click', function () {
  if (menu.classList.contains('closed')) {
    menu.classList.remove('closed');
    menu.innerHTML = 'close';

    drawer.style.display = 'flex';
  } else {
    menu.classList.add('closed');
    menu.innerHTML = 'menu';

    drawer.style.display = 'none';
  }
});

if (screen.width < 600) {
  menu.click();
}
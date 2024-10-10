import { PichaiUX } from 'https://lukeplays33.github.io/Pichai-UX/imports.js';

window.onload = function () {
  document.body.style.removeProperty('background-image'); //why????????
  let pichai = new PichaiUX();
  pichai.initialize();

  document.documentElement.style.removeProperty('background-image'); //do it again to remove bg image from html so it doesn't look wierd
}
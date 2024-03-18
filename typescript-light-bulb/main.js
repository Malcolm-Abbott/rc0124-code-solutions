'use strict';
const $bulb = document.querySelector('.bulb');
const $body = document.querySelector('body');
if (!$body) throw new Error('The $body query failed');
$bulb?.addEventListener('click', () => {
  $bulb.classList.toggle('night');
  $body.classList.toggle('nightfall');
});

'use strict';
const $open = document.querySelector('.open-modal');
const $close = document.querySelector('.dismiss-modal');
const $dialog = document.querySelector('dialog');
if (!$open) throw new Error('The $open query failed');
if (!$close) throw new Error('The $open query failed');
if (!$dialog) throw new Error('The $open query failed');
$open.addEventListener('click', () => {
  $dialog.showModal();
});
$close.addEventListener('click', () => {
  $dialog.close();
});

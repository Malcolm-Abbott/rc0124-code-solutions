'use strict';
const $message = document.querySelector('.message');
if (!$message) throw new Error('The $message query failed');
const message = () => {
  $message.textContent = 'Hello there';
};
setTimeout(message, 2000);

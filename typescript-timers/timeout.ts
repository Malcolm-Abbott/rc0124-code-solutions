const $message = document.querySelector('.message');

if (!$message) throw new Error('The $message query failed');

const message = (): void => {
  $message.textContent = 'Hello there';
};

setTimeout(message, 2000);

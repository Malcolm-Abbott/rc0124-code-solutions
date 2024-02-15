function handleFocus(event: Event): void {
  console.log('focus event fired');
  const eventTarget = event.target as HTMLInputElement | HTMLTextAreaElement;
  console.log('eventTarget.name:', eventTarget.name);
}

function handleBlur(event: Event): void {
  console.log('blur event fired');
  const eventTarget = event.target as HTMLInputElement | HTMLTextAreaElement;
  console.log('eventTarget.name:', eventTarget.name);
}

function handleInput(event: Event): void {
  const eventTarget = event.target as HTMLInputElement | HTMLTextAreaElement;
  console.log('eventTarget.name:', eventTarget.name);
  console.log('eventTarget.value:', eventTarget.value);
}

const $name = document.querySelector('#user-name');
const $email = document.querySelector('#user-email');
const $message = document.querySelector('#user-message');

$name?.addEventListener('focus', handleFocus);
$name?.addEventListener('blur', handleBlur);
$name?.addEventListener('input', handleInput);

$email?.addEventListener('focus', handleFocus);
$email?.addEventListener('blur', handleBlur);
$email?.addEventListener('input', handleInput);

$message?.addEventListener('focus', handleFocus);
$message?.addEventListener('blur', handleBlur);
$message?.addEventListener('input', handleInput);

'use strict';
const $form = document.querySelector('form');
$form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const $formElements = $form.elements;
  const userName = $formElements.name.value;
  const userEmail = $formElements.email.value;
  const userMessage = $formElements.message.value;
  const values = {
    userName,
    userEmail,
    userMessage,
  };
  console.log('values:', values);
  $form.reset();
});

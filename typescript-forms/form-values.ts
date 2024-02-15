interface FormElements extends HTMLFormControlsCollection {
  name: HTMLInputElement;
  email: HTMLInputElement;
  message: HTMLTextAreaElement;
}

const $form = document.querySelector('form') as HTMLFormElement;

$form?.addEventListener('submit', (event: Event): void => {
  event.preventDefault();
  const $formElements = $form.elements as FormElements;
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

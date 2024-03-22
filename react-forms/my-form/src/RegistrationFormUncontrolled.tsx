import { FormEvent } from 'react';

export function RegistrationFormUncontrolled() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const currentTarget = event.currentTarget;
    const formData = new FormData(currentTarget);
    console.log(Object.fromEntries(formData));
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username: <input type="text" name="username"></input>
      </label>
      <label>
        Password: <input type="password" name="password"></input>
      </label>
      <button type="submit">Sign Up</button>
    </form>
  );
}

import { UsernameInput } from './UsernameInput';
import { PasswordInput } from './PasswordInput';
import { SubmitButton } from './SubmitButton';
import { FormEvent } from 'react';

export function RegistrationFormUncontrolled() {
  function handleSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    const currentTarget = e.currentTarget;
    const formData = new FormData(currentTarget);
    console.log(Object.fromEntries(formData));
    const { username, password } = Object.fromEntries(formData);
    console.log('username:', username);
    console.log('password:', password);
    currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="container ring-2 ring-slate-400 rounded-2xl grid justify-items-center my-10 gap-4 py-2">
        <h1 className="font-bold text-2xl ">Uncontrolled Form</h1>
        <UsernameInput />
        <PasswordInput />
        <SubmitButton />
      </div>
    </form>
  );
}

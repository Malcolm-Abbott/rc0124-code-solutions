import { PasswordInput2 } from './PasswordInput2';
import { SubmitButton } from './SubmitButton';
import { UsernameInput2 } from './UsernameInput2';
import { useState } from 'react';
import { FormEvent } from 'react';

export function RegistrationFormControlled() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    console.log(username);
    console.log(password);
    setUsername('');
    setPassword('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="container ring-2 ring-slate-400 rounded-2xl grid justify-items-center my-10 gap-4 py-2">
        <h1 className="font-bold text-2xl ">Controlled Form</h1>
        <UsernameInput2 user={username} setUser={setUsername} />
        <PasswordInput2 password={password} setPassword={setPassword} />
        <SubmitButton />
      </div>
    </form>
  );
}

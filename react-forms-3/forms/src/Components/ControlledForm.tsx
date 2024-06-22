import { Title } from './Title';
import { useState, FormEvent } from 'react';
import { Label } from './Label';
import { SubmitButton } from './SubmitButton';
import { ControlledInput } from './ControlledInput';

export function ControlledForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log('username:', username);
    console.log('password:', password);
    setUsername('');
    setPassword('');
  }

  return (
    <form
      className="grid place-items-center mt-10 gap-8 ring-2 ring-slate-500 container py-20 rounded-xl"
      onSubmit={handleSubmit}>
      <Title title="Controlled Form" />
      <label className="mt-8">
        <Label label="Username" />
        <ControlledInput
          type="text"
          name="username"
          value={username}
          setValue={setUsername}
        />
      </label>
      <label>
        <Label label="Password" />
        <ControlledInput
          type="password"
          name="password"
          value={password}
          setValue={setPassword}
        />
      </label>
      <div className="mt-4">
        <SubmitButton />
      </div>
    </form>
  );
}

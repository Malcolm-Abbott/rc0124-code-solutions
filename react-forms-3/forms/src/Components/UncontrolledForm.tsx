import { Input } from './Input';
import { Label } from './Label';
import { SubmitButton } from './SubmitButton';
import { Title } from './Title';
import { FormEvent } from 'react';

export function UncontrolledForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const currentTarget = event.currentTarget;
    const formData = new FormData(currentTarget);
    const data = Object.fromEntries(formData);
    console.log('data:', data);
    currentTarget.reset();
  }

  return (
    <form
      className="grid place-items-center mt-10 gap-8 ring-2 ring-slate-500 container py-20 rounded-xl"
      onSubmit={handleSubmit}>
      <Title title="Uncontrolled Form" />
      <label className="mt-8">
        <Label label="Username" />
        <Input type="text" name="username" />
      </label>
      <label>
        <Label label="Password" />
        <Input type="password" name="password" />
      </label>
      <div className="mt-4">
        <SubmitButton />
      </div>
    </form>
  );
}

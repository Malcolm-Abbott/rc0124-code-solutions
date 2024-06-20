import { Input } from './Input';
import { Label } from './Label';
import { Title } from './Title';

export function UncontrolledForm() {
  return (
    <form className="grid place-items-center mt-10 gap-8 ring-2 ring-slate-500 container py-20 rounded-xl">
      <Title title="Uncontrolled Form" />
      <label>
        <Label label="Username" />
        <Input type="text" />
      </label>
      <label>
        <Label label="Password" />
        <Input type="password" />
      </label>
    </form>
  );
}

import { Button } from './Button';

export function Home() {
  return (
    <div className="flex justify-center gap-x-28 mt-20">
      <Button formType="Controlled" />
      <Button formType="Uncontrolled" />
    </div>
  );
}

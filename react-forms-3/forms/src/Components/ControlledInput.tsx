type Props = {
  type: string;
  name: string;
  value: string;
  setValue: (arg1: string) => void;
};

export function ControlledInput({ type, name, value, setValue }: Props) {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className="border-2 border-slate-600 rounded-md h-10 w-80"
    />
  );
}

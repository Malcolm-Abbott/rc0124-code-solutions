type Props = {
  type: string;
  name: string;
  value: string;
  setValue: (arg1: string) => void;
  setIsActive: (arg1: boolean) => void;
};

export function Input({ type, name, value, setValue, setIsActive }: Props) {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onFocus={() => setIsActive(true)}
      onBlur={() => setIsActive(false)}
      className="border-2 border-slate-800 w-80 h-12 px-3"
    />
  );
}

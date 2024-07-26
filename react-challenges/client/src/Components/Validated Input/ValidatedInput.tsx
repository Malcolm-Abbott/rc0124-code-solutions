type Props = {
  value: string;
  setValue: (arg1: string) => void;
  isFocused: boolean;
  setIsFocused: (arg1: boolean) => void;
};

export function ValidatedInput({
  value,
  setValue,
  isFocused,
  setIsFocused,
}: Props) {
  return (
    <input
      className="border-2 border-slate-900 h-12 w-96 rounded-lg px-2"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      type="password"
      onFocus={() => setIsFocused(!isFocused)}
      onBlur={() => setIsFocused(!isFocused)}
    />
  );
}

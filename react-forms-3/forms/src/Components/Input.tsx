type Props = {
  type: string;
  name: string;
};

export function Input({ type, name }: Props) {
  return (
    <input
      type={type}
      name={name}
      className="border-2 border-slate-600 rounded-md h-10 w-80"
    />
  );
}

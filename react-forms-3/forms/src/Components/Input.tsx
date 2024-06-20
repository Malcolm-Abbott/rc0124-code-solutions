type Props = {
  type: string;
};

export function Input({ type }: Props) {
  return (
    <input
      type={type}
      name="username"
      className="border-2 border-slate-600 rounded-md h-10 w-80"
    />
  );
}

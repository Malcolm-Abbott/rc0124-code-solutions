type Props = {
  label: string;
};

export function Label({ label }: Props) {
  return <div className="text-xl font-semibold">{label}</div>;
}

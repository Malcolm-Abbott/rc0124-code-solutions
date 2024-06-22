type Props = {
  type: string;
  name: string;
  value: string;
};

export function InputControlled({ type, name, value }: Props) {
  return <input type={type} name={name} value={value} />;
}

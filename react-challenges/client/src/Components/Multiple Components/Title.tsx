type Props = {
  title: string;
};

export function Title({ title }: Props) {
  return <h1 className="text-6xl font-semibold mb-4">{title}</h1>;
}

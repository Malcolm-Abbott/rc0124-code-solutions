type Props = {
  title: string;
};

export function Title({ title }: Props) {
  return <h1 className="text-center text-4xl font-semibold">{title}</h1>;
}

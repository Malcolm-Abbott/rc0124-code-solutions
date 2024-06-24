type Props = {
  title: string;
};

export function Title({ title }: Props) {
  return <h1 className="mb-4 mt-10 text-4xl font-semibold">{title}</h1>;
}

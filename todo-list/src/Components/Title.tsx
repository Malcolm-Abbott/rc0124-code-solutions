type Props = {
  title: string;
};

export function Title({ title }: Props) {
  return <h1 className="mb-4">{title}</h1>;
}

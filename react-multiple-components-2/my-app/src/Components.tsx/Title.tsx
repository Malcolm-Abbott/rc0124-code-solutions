type Props = {
  title: string;
};

export function Title({ title }: Props) {
  return <h1 className="font-semibold text-4xl">{title}</h1>;
}

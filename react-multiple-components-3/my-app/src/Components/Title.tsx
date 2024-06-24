type Props = {
  title: string;
};

export function Title({ title }: Props) {
  return <h1 className="text-7xl text-center mb-3 mt-12">{title}</h1>;
}

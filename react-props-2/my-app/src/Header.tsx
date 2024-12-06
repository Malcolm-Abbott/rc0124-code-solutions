type Props = {
  textContent: string;
};

export function Header({ textContent }: Props) {
  return <h1 className="text-3xl font-bold mb-4">{textContent}</h1>;
}

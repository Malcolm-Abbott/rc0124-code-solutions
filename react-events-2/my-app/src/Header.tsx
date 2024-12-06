type Props = {
  headerText: string;
};

export function Header({ headerText }: Props) {
  return <h1 className="text-3xl font-bold">{headerText}</h1>;
}

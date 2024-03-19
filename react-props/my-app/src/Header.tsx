type Props = {
  headerText: string;
};

export function Header(props: Props) {
  return <h1>{props.headerText}</h1>;
}

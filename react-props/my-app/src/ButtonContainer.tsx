type Props = {
  buttonText: string;
};

export function ButtonContainer(props: Props) {
  return (
    <div>
      <button>{props.buttonText}</button>
    </div>
  );
}

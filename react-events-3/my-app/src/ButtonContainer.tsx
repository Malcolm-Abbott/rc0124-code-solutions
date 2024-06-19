type Props = {
  buttonText: string;
  handleClick: () => void;
};

export function ButtonContainer({ buttonText, handleClick }: Props) {
  return (
    <div>
      <button onClick={handleClick}>{buttonText}</button>
    </div>
  );
}

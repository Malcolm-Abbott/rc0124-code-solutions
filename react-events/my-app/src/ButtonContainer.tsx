type Props = {
  buttonText: string;
  onClick: () => void;
};

export function ButtonContainer({ buttonText, onClick }: Props) {
  return (
    <div>
      <button onClick={onClick}>{buttonText}</button>
    </div>
  );
}

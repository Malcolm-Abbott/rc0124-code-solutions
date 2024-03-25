type Props = {
  onNextClick: () => void;
};

export function Next({ onNextClick }: Props) {
  return (
    <button type="button" onClick={onNextClick}>
      Next
    </button>
  );
}

type Props = {
  onPrevClick: () => void;
};

export function Prev({ onPrevClick }: Props) {
  return (
    <button type="button" onClick={onPrevClick}>
      Prev
    </button>
  );
}

type Props = {
  onIndicatorClick: () => void;
};

export function Indicators({ onIndicatorClick }: Props) {
  return (
    <div className="indicators">
      <button type="button" onClick={onIndicatorClick}>
        0
      </button>
      <button type="button" onClick={onIndicatorClick}>
        1
      </button>
      <button type="button" onClick={onIndicatorClick}>
        2
      </button>
      <button type="button" onClick={onIndicatorClick}>
        3
      </button>
      <button type="button" onClick={onIndicatorClick}>
        4
      </button>
      <button type="button" onClick={onIndicatorClick}>
        5
      </button>
    </div>
  );
}

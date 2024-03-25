type Props = {
  onIndicatorClick: (arg0: number) => void;
  currentIndex: number;
  items: string[];
};

export function Indicators({ onIndicatorClick, currentIndex, items }: Props) {
  const buttons = items.map((item, index) => {
    return (
      <button
        key={index}
        type="button"
        onClick={() => {
          onIndicatorClick(index);
        }}
        className={currentIndex === index ? 'highlight' : ''}>
        {index}
      </button>
    );
  });
  return <div className="indicators">{buttons}</div>;
}

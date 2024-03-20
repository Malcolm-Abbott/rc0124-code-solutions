type Props = {
  className: string;
  onButtonClick: () => void;
  clicks: number;
};

export function Button({ className, onButtonClick, clicks }: Props) {
  return (
    <button onClick={onButtonClick} className={className}>
      Hot Button
      <div>Clicks: {clicks}</div>
    </button>
  );
}

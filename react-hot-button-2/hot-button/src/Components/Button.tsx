type Props = {
  color: string;
  clicks: number;
  onClick: () => void;
};

export function Button({ color, clicks, onClick }: Props) {
  return (
    <>
      <button
        className={`py-4 px-10 ring-2 ring-black shadow-xl ${color} text-lg`}
        onClick={onClick}>
        Hot Button
      </button>
      <h3 className="text-center mt-6 font-bold text-lg">Clicks: {clicks}</h3>
    </>
  );
}

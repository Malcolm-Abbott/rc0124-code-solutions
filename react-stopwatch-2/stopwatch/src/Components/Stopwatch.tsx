type Props = {
  counter: number;
  onClick: () => void;
};

export function Stopwatch({ counter, onClick }: Props) {
  return (
    <div
      className="size-96 ring-4 ring-black rounded-full grid place-items-center cursor-pointer"
      onClick={onClick}>
      <span className="font-bold text-5xl">{counter}</span>
    </div>
  );
}

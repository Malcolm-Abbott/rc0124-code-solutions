type Props = {
  count: number;
  setCount: (arg1: number) => void;
  isOn: boolean;
};

export function Stopwatch({ count, setCount, isOn }: Props) {
  function handleClick() {
    if (isOn) return;
    if (!isOn) setCount(0);
  }

  return (
    <div
      className="ring-4 ring-black rounded-full size-96 shadow-lg grid place-items-center font-semibold text-6xl cursor-pointer"
      onClick={handleClick}>
      {count}
    </div>
  );
}

type Props = {
  count: number;
  setCount: (arg1: number) => void;
  activeInterval: NodeJS.Timeout | undefined;
};

export function Clock({ count, setCount, activeInterval }: Props) {
  function handleClick() {
    if (!activeInterval) setCount(0);
  }

  return (
    <div
      className="size-80 rounded-full border-2 border-black ring-2 ring-black grid place-items-center cursor-pointer"
      onClick={handleClick}>
      <span className="font-semibold text-5xl">{count}</span>
    </div>
  );
}

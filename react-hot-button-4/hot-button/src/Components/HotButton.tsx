type Props = {
  clicks: number;
  setClicks: (arg1: number) => void;
};

export function HotButton({ clicks, setClicks }: Props) {
  let style;

  switch (true) {
    case clicks < 4:
      style = 'bg-violet-950 text-white';
      break;
    case clicks < 7:
      style = 'bg-violet-600 text-white';
      break;
    case clicks < 10:
      style = 'bg-red-400 text-white';
      break;
    case clicks < 13:
      style = 'bg-orange-400';
      break;
    case clicks < 16:
      style = 'bg-yellow-400';
      break;
  }

  function handleClick() {
    if (clicks === 18) return setClicks(0);
    return setClicks(clicks + 1);
  }

  return (
    <>
      <button
        type="button"
        className={`py-4 px-12 text-2xl ring-2 ring-slate-950 active:scale-95 tracking-wider font-semibold ${style}`}
        onClick={handleClick}>
        Hot Button
      </button>
    </>
  );
}

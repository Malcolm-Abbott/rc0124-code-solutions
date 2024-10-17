type Props = {
  count: number;
  setCount: (arg1: number) => void;
};

export function NextButton({ count, setCount }: Props) {
  function handleClick() {
    if (count === 2) return setCount(0);
    return setCount(count + 1);
  }

  return (
    <div className="basis-full flex justify-center">
      <button
        type="button"
        onClick={handleClick}
        className="ring-2 ring-slate-950 py-4 px-12 rounded-lg bg-gradient-to-r from-slate-950 to-slate-900 active:bg-gradient-to-l">
        Click for Next Image
      </button>
    </div>
  );
}

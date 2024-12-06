import { items } from '../Pages/Home';

type Props = {
  direction: string;
  setIndex: (arg1: number) => void;
  index: number;
};

export function Button({ direction, setIndex, index }: Props) {
  function increment() {
    index >= items.length - 1 ? setIndex(0) : setIndex(index + 1);
  }

  function decrement() {
    index === 0 ? setIndex(items.length - 1) : setIndex(index - 1);
  }

  return (
    <button
      className="px-16 py-4 bg-gradient-to-r from-slate-800 to-slate-600 text-white text-2xl hover:bg-gradient-to-l hover:ring-2 ring-slate-800"
      onClick={direction === 'Next' ? () => increment() : () => decrement()}>
      {direction}
    </button>
  );
}

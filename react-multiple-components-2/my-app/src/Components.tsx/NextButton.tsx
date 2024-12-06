import { items } from '../App';

type Props = {
  setIndex: (arg1: number) => void;
  index: number;
};

export function NextButton({ setIndex, index }: Props) {
  return (
    <button
      className="ring-1 ring-stone-700 text-2xl px-8 py-2 bg-gradient-to-r from-slate-500 to-slate-400 text-white hover:ring-2 hover:bg-gradient-to-l"
      onClick={() => setIndex((index + 1) % items.length)}>
      Next
    </button>
  );
}

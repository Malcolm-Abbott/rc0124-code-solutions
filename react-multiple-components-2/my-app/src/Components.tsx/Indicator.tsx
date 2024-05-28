type Props = {
  number: number;
  index: number;
  setIndex: (arg1: number) => void;
};

export function Indicator({ number, index, setIndex }: Props) {
  if (index === number) {
    return (
      <button className="text-3xl ring-1 ring-slate-700 px-4 bg-gradient-to-r from-slate-500 to-orange-300 text-white hover:bg-gradient-to-l">
        {number}
      </button>
    );
  } else {
    return (
      <button
        className="text-3xl ring-1 ring-slate-700 px-4 bg-gradient-to-r from-slate-500 to-slate-400 text-white hover:bg-gradient-to-l"
        onClick={() => setIndex(number)}>
        {number}
      </button>
    );
  }
}

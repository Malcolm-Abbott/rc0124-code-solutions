import { items } from './data';

type Props = {
  index: number;
  setIndex: (arg1: number) => void;
};

export function Numbers({ index, setIndex }: Props) {
  return (
    <div className="flex my-1">
      {items.map((item, i) => {
        return <Number index={index} key={i} i={i} setIndex={setIndex} />;
      })}
    </div>
  );
}

type NumberProps = {
  index: number;
  setIndex: (arg1: number) => void;
  i: number;
};

function Number({ index, setIndex, i }: NumberProps) {
  if (index === i)
    return (
      <div
        className="px-6 py-3 ring-2 ring-slate-900 text-white bg-gradient-to-r from-orange-700 to-slate-700 hover:bg-gradient-to-l cursor-pointer text-3xl font-semibold scale-105"
        onClick={() => setIndex(i)}>
        {i}
      </div>
    );

  return (
    <div
      className="px-6 py-3 ring-2 ring-slate-900 text-white bg-gradient-to-r from-slate-900 to-slate-700 hover:bg-gradient-to-l cursor-pointer text-3xl"
      onClick={() => setIndex(i)}>
      {i}
    </div>
  );
}

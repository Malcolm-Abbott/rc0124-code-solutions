type Props = {
  items: string[];
  setIndex: (arg1: number) => void;
  index: number;
};

export function Numbers({ items, setIndex, index }: Props) {
  return (
    <div className="flex mt-1">
      {items.map((item, i) => {
        if (index === i)
          return (
            <div
              className="px-8 text-3xl py-4 bg-gradient-to-r from-amber-500 to-amber-700 text-white cursor-pointer hover:bg-gradient-to-l ring-1 ring-amber-900 hover:ring-2 mb-1"
              key={i}
              onClick={() => setIndex(i)}>
              {i}
            </div>
          );
        return (
          <div
            className="px-8 text-3xl py-4 bg-gradient-to-r from-slate-800 to-slate-600 text-white cursor-pointer hover:bg-gradient-to-l ring-1 ring-slate-800 hover:ring-2 mb-1"
            key={i}
            onClick={() => setIndex(i)}>
            {i}
          </div>
        );
      })}
    </div>
  );
}

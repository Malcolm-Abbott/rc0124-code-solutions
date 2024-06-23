type Props = {
  items: string[];
};

export function Numbers({ items }: Props) {
  return (
    <div className="flex mt-1">
      {items.map((item, index) => {
        return (
          <div className="px-8 text-3xl py-4 bg-gradient-to-r from-slate-800 to-slate-600 text-white cursor-pointer hover:bg-gradient-to-l ring-1 ring-slate-800 hover:ring-2 mb-1">
            {index}
          </div>
        );
      })}
    </div>
  );
}

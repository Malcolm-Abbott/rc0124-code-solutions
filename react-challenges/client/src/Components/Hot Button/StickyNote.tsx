type Props = {
  count: number;
};

export function StickyNote({ count }: Props) {
  return (
    <div className="bg-yellow-200 px-10 py-5 ring-2 ring-slate-900 shadow-xl border-2 border-slate-900 rounded-full">
      <h1 className="text-2xl font-semibold text-center">{count}</h1>
    </div>
  );
}

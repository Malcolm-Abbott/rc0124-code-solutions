type Props = {
  direction: string;
};

export function Button({ direction }: Props) {
  return (
    <button className="px-16 py-4 bg-gradient-to-r from-slate-800 to-slate-600 text-white text-2xl hover:bg-gradient-to-l hover:ring-2 ring-slate-800">
      {direction}
    </button>
  );
}

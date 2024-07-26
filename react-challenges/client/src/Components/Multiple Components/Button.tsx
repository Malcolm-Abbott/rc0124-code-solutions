type Props = {
  text: string;
  onClick: () => void;
};

export function Button({ text, onClick }: Props) {
  return (
    <button
      className="px-8 py-3 text-4xl font-semibold ring-2 ring-slate-900 shadow-lg bg-gradient-to-r from-slate-900 to-slate-700 text-white hover:scale-105 hover:bg-gradient-to-l"
      onClick={onClick}>
      {text}
    </button>
  );
}

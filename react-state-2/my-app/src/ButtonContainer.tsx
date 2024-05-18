type Props = {
  buttonText: string;
  onClick: () => void;
};

export function ButtonContainer({ buttonText, onClick }: Props) {
  return (
    <div>
      <button
        className="bg-gradient-to-r from-slate-900 to-slate-500 text-white p-4 rounded-lg shadow-xl hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-l ring-2 ring-slate-900"
        onClick={onClick}>
        {buttonText}
      </button>
    </div>
  );
}

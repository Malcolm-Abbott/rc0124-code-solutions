type Props = {
  buttonText: string;
  onClick: () => void;
};

export function ButtonContainer({ buttonText, onClick }: Props) {
  return (
    <div>
      <button
        className="bg-gradient-to-r from-slate-900 to-slate-600 p-4 rounded-lg shadow-lg text-white ring-2 ring-slate-900 hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-l"
        onClick={onClick}>
        {buttonText}
      </button>
    </div>
  );
}

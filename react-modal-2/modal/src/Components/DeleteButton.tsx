type Props = {
  setIsActive: (arg1: boolean) => void;
};

export function DeleteButton({ setIsActive }: Props) {
  return (
    <button
      type="button"
      className="text-white bg-gradient-to-r from-slate-900 to-slate-700 px-12 py-4 text-2xl shadow-lg rounded-2xl hover:bg-gradient-to-l hover:ring-2 ring-slate-900 tracking-wider font-semibold"
      onClick={() => setIsActive(true)}>
      Delete
    </button>
  );
}

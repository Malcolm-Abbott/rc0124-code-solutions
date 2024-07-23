type Props = {
  text: string;
};

export function ModalButton({ text }: Props) {
  const style =
    text === 'Cancel' ? 'bg-blue-700 ring-blue-800' : 'bg-red-600 ring-red-700';

  return (
    <button
      className={`${style} text-white px-10 py-3 font-semibold tracking-wider text-xl rounded-lg shadow-lg hover:ring-1`}>
      {text}
    </button>
  );
}

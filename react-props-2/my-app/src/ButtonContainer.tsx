type Props = {
  text: string;
};

export function ButtonContainer({ text }: Props) {
  return (
    <div>
      <button className="p-4 rounded-md text-white bg-slate-900 shadow-md hover:scale-105 hover:shadow-xl">
        {text}
      </button>
    </div>
  );
}

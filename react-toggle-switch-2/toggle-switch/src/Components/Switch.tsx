type Props = {
  status: string;
  onClick: () => void;
  side: string;
};

export function Switch({ status, onClick, side }: Props) {
  return (
    <div className="flex">
      <div
        className="h-12 w-32 bg-lime-500 rounded-3xl ring-2 ring-black cursor-pointer relative shadow-xl"
        onClick={onClick}>
        <div
          className={`h-full w-3/6 bg-white rounded-3xl ring-2 ring-black absolute ${side}`}></div>
      </div>
      <h1 className="grid place-items-center pl-8 font-bold text-lg">
        {status}
      </h1>
    </div>
  );
}

type Props = {
  status: string;
  onClick: () => void;
};

export function Switch({ status, onClick }: Props) {
  return (
    <div className="flex">
      <div
        className="h-12 w-32 bg-lime-500 rounded-3xl ring-2 ring-black cursor-pointer"
        onClick={onClick}>
        <div className="h-full w-3/6 bg-white rounded-3xl ring-2 ring-black"></div>
      </div>
      <h1 className="grid place-items-center pl-8 font-bold text-lg">
        {status}
      </h1>
    </div>
  );
}

type Props = {
  position: string;
};

export function ToggleBall({ position }: Props) {
  return (
    <div
      className={`ring-2 ring-black w-3/6 rounded-full h-full bg-white absolute ${position}`}></div>
  );
}

type Props = {
  isOn: boolean;
  setIsOn: (arg1: boolean) => void;
};

export function ToggleSwitch({ isOn, setIsOn }: Props) {
  const position = isOn ? 'right-0 border-l-2' : 'left-0 border-r-2';
  const color = isOn ? 'bg-lime-700' : 'bg-gray-400';

  return (
    <div
      className={`h-16 w-40 rounded-full border-2 border-black ring-2 ring-black relative cursor-pointer ${color}`}
      onClick={() => setIsOn(!isOn)}>
      <div
        className={`absolute rounded-full w-1/2 h-full bg-white border-black ring-2 ring-black ${position}`}></div>
    </div>
  );
}

type Props = {
  isOn: boolean;
};

export function Status({ isOn }: Props) {
  return (
    <div className="flex items-center">
      <h1 className="text-2xl font-semibold">{isOn ? 'ON' : 'OFF'}</h1>
    </div>
  );
}

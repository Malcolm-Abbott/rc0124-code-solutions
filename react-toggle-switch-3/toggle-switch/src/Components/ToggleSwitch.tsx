import { useState } from 'react';
import { ToggleBall } from './ToggleBall';
import { ToggleText } from './ToggleText';

export function ToggleSwitch() {
  const [isOn, setIsOn] = useState(false);

  const style = isOn ? 'bg-lime-500' : 'bg-slate-400';
  const position = isOn ? 'right-0' : '';

  return (
    <div className="flex gap-x-16">
      <div
        className={`ring-2 ring-black w-48 h-20 rounded-full ${style} relative`}
        onClick={() => setIsOn(!isOn)}>
        <ToggleBall position={position} />
      </div>
      <ToggleText status={isOn ? 'ON' : 'OFF'} />
    </div>
  );
}

import { Status } from './Status';
import { ToggleSwitch } from './ToggleSwitch';
import { useState } from 'react';

export function ToggleSwitchPage() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className="h-screen flex">
      <div className="m-auto flex gap-x-8">
        <ToggleSwitch isOn={isOn} setIsOn={setIsOn} />
        <Status isOn={isOn} />
      </div>
    </div>
  );
}

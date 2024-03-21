import './ToggleContainer.css';
import { useState } from 'react';

const toggleContainerClassName: string[] = ['on', 'off'];
const toggleSwitchClassName: string[] = ['toggle-on', 'toggle-off'];
const label: string[] = ['ON', 'OFF'];

export function ToggleContainer() {
  const [index, setIndex] = useState(0);

  function handleClick() {
    if (index >= toggleContainerClassName.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }
  return (
    <>
      <div
        className={`toggle-container ${toggleContainerClassName[index]}`}
        onClick={handleClick}>
        <div className={`toggle-switch ${toggleSwitchClassName[index]}`}></div>
      </div>
      <h2>{label[index]}</h2>
    </>
  );
}

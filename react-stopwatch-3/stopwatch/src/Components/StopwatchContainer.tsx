import { Stopwatch } from './Stopwatch';
import { FaPlay, FaPause } from 'react-icons/fa';
import { useState } from 'react';

export function StopwatchContainer() {
  const [isOn, setIsOn] = useState(false);
  const [count, setCount] = useState(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout>();

  function toggleIsOn() {
    setIsOn(!isOn);
  }

  function handleClick() {
    toggleIsOn();
    if (isOn) clearInterval(intervalId);
    if (!isOn) {
      setIntervalId(
        setInterval(() => {
          setCount((prev) => prev + 1);
        }, 1000)
      );
    }
  }

  return (
    <div className="flex h-screen">
      <div className="m-auto">
        <Stopwatch count={count} setCount={setCount} isOn={isOn} />
        <div className="flex justify-center text-4xl mt-8">
          {isOn ? (
            <FaPause onClick={() => handleClick()} className="cursor-pointer" />
          ) : (
            <FaPlay onClick={() => handleClick()} className="cursor-pointer" />
          )}
        </div>
      </div>
    </div>
  );
}

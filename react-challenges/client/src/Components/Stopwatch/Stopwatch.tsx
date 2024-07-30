import { FaPlay, FaPause } from 'react-icons/fa';
import { Clock } from './Clock';
import { useState } from 'react';

export function Stopwatch() {
  const [count, setCount] = useState(0);
  const [activeInterval, setActiveInterval] = useState<NodeJS.Timeout>();

  function increment() {
    setCount((prev) => prev + 1);
  }

  function handleClick() {
    if (!activeInterval) {
      const intervalID = setInterval(increment, 1000);
      setActiveInterval(intervalID);
    } else {
      clearInterval(activeInterval);
      setActiveInterval(undefined);
    }
  }

  return (
    <div className="space-y-8">
      <Clock
        count={count}
        setCount={setCount}
        activeInterval={activeInterval}
      />
      <div className="flex justify-center">
        {activeInterval ? (
          <FaPause
            className="text-4xl cursor-pointer"
            onClick={() => handleClick()}
          />
        ) : (
          <FaPlay
            className="text-4xl cursor-pointer"
            onClick={() => handleClick()}
          />
        )}
      </div>
    </div>
  );
}

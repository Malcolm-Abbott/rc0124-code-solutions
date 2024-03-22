import './StopwatchContainer.css';
import { useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import { FaPause } from 'react-icons/fa';

const play = <FaPlay />;
const pause = <FaPause />;
const icons = [play, pause];

export function StopWatch() {
  const [index, setIndex] = useState(0);
  const [count, setCount] = useState(0);
  const [activeInterval, setActiveInterval] = useState<NodeJS.Timeout>();

  function startCount() {
    setCount((prevCount) => prevCount + 1);
  }

  function handleClick() {
    if (index >= icons.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }

    if (!activeInterval) {
      const intervalID = setInterval(startCount, 1000);
      setActiveInterval(intervalID);
    }
    if (activeInterval) {
      clearInterval(activeInterval);
      setActiveInterval(undefined);
    }
  }

  function reset() {
    if (!activeInterval) setCount(0);
  }

  return (
    <>
      <div className="stopwatch-container" onClick={reset}>
        <h1>{count}</h1>
      </div>
      <div className="fa-icon" onClick={handleClick}>
        {icons[index]}
      </div>
    </>
  );
}

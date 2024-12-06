import { useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import { FaPause } from 'react-icons/fa';
import { Stopwatch } from './Components/Stopwatch';

function App() {
  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(false);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout>();

  function handlePlay() {
    setIsOn(!isOn);
    setIntervalId(
      setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000)
    );
  }

  function handlePause() {
    setIsOn(!isOn);
    clearInterval(intervalId);
  }

  function handleReset() {
    if (!isOn) setCount(0);
  }

  return (
    <div className="flex h-screen">
      <div className="m-auto">
        <Stopwatch counter={count} onClick={handleReset} />
        <div className="flex justify-center my-12">
          {isOn ? (
            <FaPause
              className="text-5xl cursor-pointer"
              onClick={handlePause}
            />
          ) : (
            <FaPlay className="text-5xl cursor-pointer" onClick={handlePlay} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

import { FaGreaterThan, FaLessThan } from 'react-icons/fa';
import { Images } from './Images';
import { useState, useEffect } from 'react';
import { images } from './data';
import { Circles } from './Circles';

export function Carousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalID = setInterval(increment, 3000);
    return () => clearInterval(intervalID);
  });

  function decrement() {
    setIndex((index - 1 + images.length) % images.length);
  }

  function increment() {
    setIndex((index + 1) % images.length);
  }

  return (
    <div className="border-2 border-black p-10 flex items-center">
      <FaLessThan
        className="text-3xl cursor-pointer"
        onClick={() => decrement()}
      />
      <div>
        <Images index={index} />
        <Circles index={index} setIndex={setIndex} />
      </div>
      <FaGreaterThan
        className="text-3xl cursor-pointer"
        onClick={() => increment()}
      />
    </div>
  );
}

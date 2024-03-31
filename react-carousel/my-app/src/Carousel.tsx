import './Carousel.css';
import { FaLessThan } from 'react-icons/fa';
import { FaGreaterThan } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { Circle } from './Circle';

interface Image {
  src: string;
  alt: string;
}

type Props = {
  images: Image[];
};

export function Carousel({ images }: Props) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const intervalID = setInterval(() => {
      setIndex((index + 1) % images.length);
    }, 3000);
    return () => clearInterval(intervalID);
  });

  function circleClickHandler(activeIndex: number) {
    setIndex(activeIndex);
  }

  return (
    <div className="carousel-container">
      <FaLessThan
        size={60}
        className="fa-less-than"
        onClick={() => setIndex((index - 1 + images.length) % images.length)}
      />
      <div className="col-full">
        <img src={images[index].src} alt={images[index].alt} />
      </div>
      <div className="circle-container">
        <Circle
          images={images}
          currentIndex={index}
          onCircleClick={circleClickHandler}
        />
      </div>
      <FaGreaterThan
        size={60}
        className="fa-greater-than"
        onClick={() => setIndex((index + 1) % images.length)}
      />
    </div>
  );
}

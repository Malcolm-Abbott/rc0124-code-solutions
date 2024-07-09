import { FaGreaterThan, FaLessThan } from 'react-icons/fa';
import { Image } from './Image';
import { useState, useEffect } from 'react';
import { Circles } from './Circles';

export function CarouselContainer() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((index + 1) % images.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [index]);

  const images = [
    {
      src: '/images/fushiguro.webp',
      alt: 'Megumi Fushiguro',
    },
    {
      src: '/images/inumaki.webp',
      alt: 'Toge Inumaki',
    },
    {
      src: '/images/itadori.webp',
      alt: 'Yuji Itadori',
    },
    {
      src: '/images/kugisaki.webp',
      alt: 'Nobara Kugisaki',
    },
    {
      src: '/images/panda.webp',
      alt: 'Panda',
    },
    {
      src: '/images/zen-in.webp',
      alt: "Maki Zen'in",
    },
  ];

  function increment() {
    if (index < images.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  function decrement() {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(images.length - 1);
    }
  }

  return (
    <div className="border-2 border-black px-12 py-6 flex container flex-wrap">
      <div className="basis-1/3 flex items-center justify-start">
        <FaLessThan
          className="text-4xl cursor-pointer"
          onClick={() => decrement()}
        />
      </div>
      <div className="basis-1/3">
        <Image src={images[index].src} alt={images[index].alt} />
      </div>
      <div className="basis-1/3 flex items-center justify-end">
        <FaGreaterThan
          className="text-4xl cursor-pointer"
          onClick={() => increment()}
        />
      </div>
      <div className="basis-full flex justify-center gap-x-4 mt-4">
        <Circles images={images} index={index} />
      </div>
    </div>
  );
}

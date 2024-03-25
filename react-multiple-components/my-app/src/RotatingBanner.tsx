import './RotatingBanner.css';
import { Prev } from './Prev';
import { useState } from 'react';
import { Indicators } from './Indicators';
import { Next } from './Next';
import { Banner } from './Banner';

type Props = {
  items: string[];
};

export function RotatingBanner({ items }: Props) {
  const [index, setIndex] = useState(0);

  function prevHandler() {
    setIndex((index - 1 + items.length) % items.length);
  }

  function indicatorHandler(buttonIndex: number) {
    setIndex(buttonIndex);
  }

  function nextHandler() {
    setIndex((index + 1) % items.length);
  }

  return (
    <>
      <Banner item={items[index]} />
      <Prev onPrevClick={prevHandler} />
      <Indicators
        onIndicatorClick={indicatorHandler}
        currentIndex={index}
        items={items}
      />
      <Next onNextClick={nextHandler} />
    </>
  );
}

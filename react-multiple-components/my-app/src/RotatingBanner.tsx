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
    setIndex(0);
    return index;
  }

  function indicatorHandler() {
    return index;
  }

  function nextHandler() {
    return index;
  }

  return (
    <>
      <Banner item={items[index]} />
      <Prev onPrevClick={prevHandler} />
      <Indicators onIndicatorClick={indicatorHandler} />
      <Next onNextClick={nextHandler} />
    </>
  );
}

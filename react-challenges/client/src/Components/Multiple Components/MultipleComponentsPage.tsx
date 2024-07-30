import { items } from './data';
import { useState } from 'react';
import { Title } from './Title';
import { Button } from './Button';
import { Numbers } from './Numbers';

export function MultipleComponentsPage() {
  const [index, setIndex] = useState(0);

  function decrement() {
    index === 0 ? setIndex(items.length - 1) : setIndex(index - 1);
  }

  function increment() {
    index === items.length - 1 ? setIndex(0) : setIndex(index + 1);
  }

  return (
    <div className="flex h-screen">
      <div className="m-auto grid place-items-center gap-y-1">
        <Title title={items[index]} />
        <Button text="Prev" onClick={decrement} />
        <Numbers index={index} setIndex={setIndex} />
        <Button text="Next" onClick={increment} />
      </div>
    </div>
  );
}

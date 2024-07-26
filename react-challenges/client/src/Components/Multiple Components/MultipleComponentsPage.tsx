import { items } from './data';
import { useState } from 'react';
import { Title } from './Title';
import { Button } from './Button';

export function MultipleComponentsPage() {
  const [index, setIndex] = useState(0);

  function decrement() {
    index === 0 ? setIndex(items.length - 1) : setIndex(index - 1);
  }

  return (
    <div className="flex h-screen">
      <div className="m-auto grid place-items-center gap-y-1">
        <Title title={items[index]} />
        <Button text="Prev" onClick={decrement} />
      </div>
    </div>
  );
}

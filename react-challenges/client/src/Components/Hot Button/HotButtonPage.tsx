import { HotButton } from './HotButton';
import { useState } from 'react';
import { StickyNote } from './StickyNote';

export function HotButtonPage() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex h-screen">
      <div className="m-auto space-y-20">
        <HotButton count={count} setCount={setCount} />
        <StickyNote count={count} />
      </div>
    </div>
  );
}

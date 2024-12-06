import { useState } from 'react';

export function Button() {
  const [clicks, setClicks] = useState(0);

  let temp;
  switch (true) {
    case clicks < 4:
      temp = 'bg-violet-950 text-white';
      break;
    case clicks < 7:
      temp = 'bg-violet-500 text-white';
      break;
    case clicks < 10:
      temp = 'bg-red-500 text-white';
      break;
    case clicks < 13:
      temp = 'bg-amber-600';
      break;
    case clicks < 16:
      temp = 'bg-yellow-300';
      break;
    default:
      temp = '';
  }

  return (
    <button
      className={`ring-2 ring-slate-950 px-16 py-6 text-2xl font-semibold shadow-xl ${temp}`}
      onClick={() => setClicks(clicks + 1)}>
      Hot Button
    </button>
  );
}

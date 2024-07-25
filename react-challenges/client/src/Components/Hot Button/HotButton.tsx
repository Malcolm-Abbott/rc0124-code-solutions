import { useState } from 'react';

export function HotButton() {
  const [count, setCount] = useState(0);
  let color = '';

  switch (true) {
    case count < 4:
      color = 'bg-indigo-900 text-white';
      break;
    case count < 7:
      color = 'bg-indigo-600 text-white';
      break;
    case count < 10:
      color = 'bg-red-400 text-white';
      break;
    case count < 13:
      color = 'bg-orange-300';
      break;
    case count < 16:
      color = 'bg-yellow-400';
      break;
    default:
      color = 'bg-white';
  }

  return (
    <button
      className={`px-10 py-5 ring-2 ring-slate-900 text-2xl font-semibold shadow-xl ${color} border-2 border-slate-900`}
      onClick={() => setCount(count + 1)}>
      Hot Button
    </button>
  );
}

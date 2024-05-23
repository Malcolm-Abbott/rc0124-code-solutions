import { useState } from 'react';
import { Button } from './Components/Button';

function App() {
  const [count, setCount] = useState(0);

  function clickHandler(): void {
    setCount(count + 1);
  }

  let color = 'bg-violet-950 text-white';

  switch (true) {
    case count < 4:
      color = 'bg-violet-950 text-white';
      break;
    case count < 7:
      color = 'bg-violet-700 text-white';
      break;
    case count < 10:
      color = 'bg-rose-400 text-white';
      break;
    case count < 13:
      color = 'bg-orange-400 text-black';
      break;
    case count < 16:
      color = 'bg-yellow-300 text-black';
      break;
    default:
      color = 'bg-white text-black';
  }

  return (
    <div className="flex h-screen">
      <div className="m-auto">
        <Button color={color} clicks={count} onClick={clickHandler} />
      </div>
    </div>
  );
}

export default App;

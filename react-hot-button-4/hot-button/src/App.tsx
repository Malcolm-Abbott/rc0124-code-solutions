import { useState } from 'react';
import { HotButton } from './Components/HotButton';
import { Counter } from './Components/Counter';

function App() {
  const [clicks, setClicks] = useState(0);

  return (
    <>
      <div className="h-screen flex">
        <div className="m-auto space-y-8">
          <HotButton clicks={clicks} setClicks={setClicks} />
          <Counter clicks={clicks} />
        </div>
      </div>
    </>
  );
}

export default App;

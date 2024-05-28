import { useState } from 'react';
import { RotatingBanner } from './Components.tsx/RotatingBanner';

export const items = [
  'Aardvark',
  'Bengal',
  'Caterpillar',
  'Dromedary',
  'Elephant',
  'Ferret',
];

function App() {
  const [index, setIndex] = useState(0);

  return (
    <div className="flex h-screen">
      <div className="m-auto">
        <RotatingBanner
          title={items[index]}
          index={index}
          setIndex={setIndex}
        />
      </div>
    </div>
  );
}

export default App;

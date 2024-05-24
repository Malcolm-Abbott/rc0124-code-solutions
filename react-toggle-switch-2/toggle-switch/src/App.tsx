import { useState } from 'react';
import { Switch } from './Components/Switch';

function App() {
  const [isOn, setIsOn] = useState(true);

  return (
    <div className="flex h-screen">
      <div className="m-auto">
        <Switch
          onClick={() => setIsOn(!isOn)}
          status={isOn ? 'ON' : 'OFF'}
          side={isOn ? 'left-0' : 'right-0'}
        />
      </div>
    </div>
  );
}

export default App;

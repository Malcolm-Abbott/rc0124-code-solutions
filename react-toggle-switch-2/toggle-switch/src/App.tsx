import { useState } from 'react';
import { Switch } from './Components/Switch';

function App() {
  const [isOn, setIsOn] = useState(true);

  // function clickHandler():void {
  //   setIsOn(!isOn);
  //   console.log(isOn);
  // }

  return (
    <div className="flex h-screen">
      <div className="m-auto">
        <Switch onClick={() => setIsOn(!isOn)} status={isOn ? 'ON' : 'OFF'} />
      </div>
    </div>
  );
}

export default App;

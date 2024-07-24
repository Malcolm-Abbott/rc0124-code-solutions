import { DeleteButton } from './Components/DeleteButton';
import { StaticModal } from './Components/StaticModal';
import { useState } from 'react';

function App() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="flex h-screen">
      <div className="m-auto">
        <DeleteButton setIsActive={setIsActive} />
        <StaticModal isActive={isActive} setIsActive={setIsActive} />
      </div>
    </div>
  );
}

export default App;

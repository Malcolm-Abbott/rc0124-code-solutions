import { DeleteButton } from './Components/DeleteButton';
import { StaticModal } from './Components/StaticModal';

function App() {
  return (
    <div className="flex h-screen">
      <div className="m-auto">
        <DeleteButton />
        <StaticModal />
      </div>
    </div>
  );
}

export default App;

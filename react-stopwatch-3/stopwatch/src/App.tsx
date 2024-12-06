import { StopwatchContainer } from './Components/StopwatchContainer';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<StopwatchContainer />} />
    </Routes>
  );
}

export default App;

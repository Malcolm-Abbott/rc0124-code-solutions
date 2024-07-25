import { Route, Routes } from 'react-router-dom';
import { Home } from './Components/Home Section/Home';
import { NavBar } from './Components/Home Section/NavBar';
import { useState } from 'react';

function App() {
  const [isActive, setIsActive] = useState(false);

  return (
    <Routes>
      <Route
        path="/"
        element={<NavBar isActive={isActive} setIsActive={setIsActive} />}>
        <Route
          index
          element={<Home isActive={isActive} setIsActive={setIsActive} />}
        />
      </Route>
    </Routes>
  );
}

export default App;

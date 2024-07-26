import { Route, Routes } from 'react-router-dom';
import { Home } from './Components/Home Section/Home';
import { NavBar } from './Components/Home Section/NavBar';
import { useState } from 'react';
import { HotButtonPage } from './Components/Hot Button/HotButtonPage';
import { ToggleSwitchPage } from './Components/Toggle Switch/ToggleSwitchPage';
import { StopwatchPage } from './Components/Stopwatch/StopwatchPage';
import { ValidatedInputPage } from './Components/Validated Input/ValidatedInputPage';

function App() {
  const [isActive, setIsActive] = useState(false);

  return (
    <Routes>
      <Route
        path="/"
        element={<NavBar isActive={isActive} setIsActive={setIsActive} />}>
        <Route index element={<Home />} />
        <Route path="hot-button" element={<HotButtonPage />} />
        <Route path="toggle-switch" element={<ToggleSwitchPage />} />
        <Route path="stopwatch" element={<StopwatchPage />} />
        <Route path="validated-input" element={<ValidatedInputPage />} />
      </Route>
    </Routes>
  );
}

export default App;

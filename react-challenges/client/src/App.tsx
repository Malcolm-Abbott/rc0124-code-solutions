import { Route, Routes } from 'react-router-dom';
import { Home } from './Home Section/Home';
import { NavBar } from './Home Section/NavBar';

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;

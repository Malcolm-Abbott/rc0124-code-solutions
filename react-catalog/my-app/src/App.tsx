import './App.css';
import { Route, Routes } from 'react-router-dom';
import { NavBar } from './Components/NavBar';
import { Catalog } from './Pages/Catalog';
import { Details } from './Pages/Details';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Catalog />} />
          <Route path="details/:productId" element={<Details />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

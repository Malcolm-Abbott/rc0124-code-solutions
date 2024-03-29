import './App.css';
import { Route, Routes } from 'react-router-dom';
import { NavBar } from './Components/NavBar';
import { Catalog } from './Pages/Catalog';
import { Details } from './Pages/Details';
import { About } from './Pages/About';
import { NotFound } from './Pages/NotFound';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Catalog />} />
          <Route path="details/:productId" element={<Details />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

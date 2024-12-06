import { Route, Routes } from 'react-router-dom';
import { Header } from './Components/Header';
import { Home } from './Components/Home';
import { ControlledForm } from './Components/ControlledForm';
import { UncontrolledForm } from './Components/UncontrolledForm';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="controlled" element={<ControlledForm />} />
        <Route path="uncontrolled" element={<UncontrolledForm />} />
      </Route>
    </Routes>
  );
}

export default App;

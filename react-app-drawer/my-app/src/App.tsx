import { Route, Routes } from 'react-router-dom';
import { About } from './pages/About';
import { Catalog } from './pages/Catalog';
import { NotFound } from './pages/NotFound';
import { ProductDetails } from './pages/ProductDetails';
import { AppDrawer } from './components/AppDrawer';
import { useState } from 'react';

const menuItems = [
  { name: 'About', iconUrl: '/hylian-emblem.svg', path: '/about' },
  { name: 'Catalog', iconUrl: '/catalog.png', path: '/' },
];

export function App() {
  const [isOpen, setIsOpen] = useState(false);

  function navHandler() {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          <AppDrawer
            menuItems={menuItems}
            isActive={isOpen}
            onNavClick={navHandler}
          />
        }>
        <Route index element={<Catalog />} />
        <Route path="details/:productId" element={<ProductDetails />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

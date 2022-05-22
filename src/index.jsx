import React from 'react';
import { createRoot } from 'react-dom/client';
import Domu from './Domu';
import Kontakt from './Kontakt';
import Oprojektu from './Oprojektu';
import Onas from './Onas';
import './style.css';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';

const App = () => {
  return (
    <>
      <header>
        <button className="nav-btn"></button>
        <nav>
          <Link to="/Domu">Domů</Link>
          <Link to="/Oprojektu">O projektu</Link>
          <Link to="/Onas">O nás</Link>
          <Link to="/Kontakt">Kontakt</Link>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

createRoot(document.querySelector('#app')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Domu />} />
        <Route path="domu" element={<Domu />} />
        <Route path="oprojektu" element={<Oprojektu />} />
        <Route path="onas" element={<Onas />} />
        <Route path="kontakt" element={<Kontakt />} />
        <Route
          path="*"
          element={
            <main style={{ padding: '3rem' }}>
              <p>Tady není vůbec nic!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>,
);

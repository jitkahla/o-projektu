import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const App = () => (
  <div class="bg-img">
    <header>
      <button class="nav-btn"></button>
      <nav>
        <a href="">Domů</a>
        <a href="">O projektu</a>
        <a href="">O nás</a>
        <a href="">Kontakt</a>
      </nav>
    </header>
    <main>
      <div class="container">
        <h1>Máničky a soudruzi</h1>
        <p>
          Mrkni na naši časovou osu a zjisti něco o komunismu v Československu
        </p>
        <button class="start">Start</button>
      </div>
    </main>
    <footer></footer>
  </div>
);

createRoot(document.querySelector('#app')).render(<App />);

import React from 'react';
import logo from './logo.svg';
import holly from './holly.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={holly} className="App-logo" alt="logo" />
        <p>
          Happy Birthday Sucka
        </p>
        <a
          className="App-link"
          href="https://google.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Fun BirthDay Link
        </a>
      </header>
    </div>
  );
}

export default App;

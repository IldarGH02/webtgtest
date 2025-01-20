import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import { initData, initDataUser } from '@telegram-apps/sdk';

function App() {
  useEffect(() => {
    
    console.log((window as any).Telegram.WebApp.initData);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={`${logo}`} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

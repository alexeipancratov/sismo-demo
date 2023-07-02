import React from 'react';
import logo from './logo.svg';
import './App.css';
import { AuthType, SismoConnectButton } from '@sismo-core/sismo-connect-react';
import { config } from './sismo-connect-config';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <SismoConnectButton
          config={config}
          // request proof of Github ownership
          auths={[{ authType: AuthType.VAULT }]}
          onResponseBytes={(response: string) => {
            // call your contract with the response as bytes
          }}
        />
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

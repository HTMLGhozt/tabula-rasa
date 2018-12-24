import React from 'react';

import { NotificationCard } from './Notifications';
import { MainProvider, Container } from './Container';
import logo from '../logo.svg';
import './App.css';

const App = () => (
  <MainProvider>
    <div className="App">
      <header className="App-header">
        <Container>
          {(({ notification, clearNotification }) => (
            notification
            && <NotificationCard {...{ notification, clearNotification }} />
          ))}
        </Container>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
  </MainProvider>
);

export default App;

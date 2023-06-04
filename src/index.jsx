import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import ThemeProvider from './components/ThemeProvider';
import UserProvider from './components/UserProvider';

const axe = require('@axe-core/react');

const USER_DATA = [
  {
    id: 0,
    name: 'Jo',
    email: 'jo@email.com',
    password: 'password123',
    homeCity: 'New York',
  },
  {
    id: 1,
    name: 'Coco',
    email: 'coco@email.com',
    password: 'password123',
    homeCity: 'Frankfurt',
  },
];

const root = ReactDOM.createRoot(document.getElementById('root'));
if (process.env.NODE_ENV !== 'production') {
  axe(React, ReactDOM, 1000);
}
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <UserProvider users={USER_DATA}>
        <App />
      </UserProvider>
    </ThemeProvider>
  </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const axe = require('@axe-core/react');

const root = ReactDOM.createRoot(document.getElementById('root'));
if (process.env.NODE_ENV !== 'production') {
  axe(React, ReactDOM, 1000);
}
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

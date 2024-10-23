// File: src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Import your CSS for styling
import App from './App'; // Import the App component

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

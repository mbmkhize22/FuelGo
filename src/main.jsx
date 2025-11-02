import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css'; // ✅ your global or Tailwind CSS

// Root render — this attaches the App to your index.html <div id="root">
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

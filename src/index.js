import { CanvasContext } from './context/CanvasContext';
import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App';
import './style/index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>

    <CanvasContext>
      <App />
    </CanvasContext>

  </React.StrictMode>
);

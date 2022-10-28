import { CanvasContext } from './context/CanvasContext';
import { Toaster } from 'react-hot-toast'
import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App';
import './style/index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>

    <CanvasContext>
      
      <Toaster
        position="top-right"
        reverseOrder={false}
      />

      <App />
      
    </CanvasContext>

  </React.StrictMode>
);

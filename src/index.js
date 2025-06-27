import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AOS from 'aos';
import './index.css'
import 'aos/dist/aos.css'; // Certifique-se de importar o CSS do AOS


AOS.init({
  once: true,  // A animação será executada apenas uma vez
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


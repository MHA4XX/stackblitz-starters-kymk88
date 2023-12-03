import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import Car from './Car';
import Navbar from './navbar';

const root = createRoot(document.getElementById('app'));

root.render(
  <StrictMode>
    <Navbar />
    <App />
    <Car />
    
  </StrictMode>
);

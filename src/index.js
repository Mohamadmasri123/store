import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ProductContext from './contexts/ProductContext';
import SidebarContext  from './contexts/SidebarContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SidebarContext>
  <ProductContext>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ProductContext>
  </SidebarContext>
);

// src/App.jsx
import React from 'react';
import Cart from './components/cart';
import ProductList from './components/ProductList';

const App = () => {
  return (
    <div>
      <h1>Shopping Cart</h1>
      <ProductList />
      <Cart />
    </div>
  );
};

export default App;

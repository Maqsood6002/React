// src/components/ProductList.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/counter/counterSlice';

const ProductList = () => {
  const dispatch = useDispatch();
  const products = [
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' },
  ];

  return (
    <div>
      <h2>Product List</h2>
      {products.map((product) => (
        <div key={product.id}>
          <p>{product.name}</p>
          <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;

import React from 'react';
import Product from './Product';
import './main.css'

const Main = (props) => {
  const { products, onAdd } = props;
  return (
    <main className="block col-2">
      <h2>Products</h2>
      <hr />
      <div className="product">
        {products.map((product) => (
          <Product key={product.id} product={product} onAdd={onAdd}></Product>
        ))}
      </div>
    </main>
  );
}

export default Main;
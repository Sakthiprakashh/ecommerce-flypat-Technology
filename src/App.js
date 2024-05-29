import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(data => setProducts(data.products)) // Assuming the API response is an object with a 'products' array
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="App">
      <h1>Products</h1>
      <div className="product-list">
        {products.map(product => (
          <div className="card" key={product.id}>
            <img src={product.thumbnail} alt={product.name} />
            <div className="card-body">
              <h2>{product.title}</h2>
              <p>Description: {product.description}</p>
              <p>Price: {product.price}</p> 
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    axios
      .get('http://localhost:5000/products', {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, [token]);

  return (
    <div>
      <h1>Your Products</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Regular Price</th>
            <th>Deal Price</th>
            <th>Tax</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>{product.name}</td>
              <td>{product.regularPrice}</td>
              <td>{product.dealPrice}</td>
              <td>{product.tax}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductPage;

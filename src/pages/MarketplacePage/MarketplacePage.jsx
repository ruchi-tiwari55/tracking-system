import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Location from '../../../src/assets/location.png';
import Chilie from '../../../src/assets/red1.png';
import './MarketplacePage.css';

function Product() {
  const [data, setData] = useState([]);
  const newDate = new Date();

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch('https://fakestoreapi.com/products/');
      const products = await result.json();
      setData(products.slice(0, 5));
    };

    fetchData();
  }, []);

  return (
    <div className="product-container">
      <div className="product-grid">
        {data.map((item) => (
          <div className="product-card" key={item.id}>
            <Link to={`/product/${item.id}`}>
              <img src={Chilie} alt="product image" className="product-image" />
            </Link>
            <div className="product-details">
              <div className="price">
                ₹{item.price}
              </div>
              <Link to={`/product/${item.id}`} className="product-title">
                {item.title}
              </Link>
              <div className="additional-info">
                <span className="location">
                  <img src={Location} alt="Location" className="location-icon" />
                  Pune
                </span>
                <span className="date">
                  {newDate.toDateString().split(' ')[2]} {newDate.toDateString().split(' ')[1]}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;

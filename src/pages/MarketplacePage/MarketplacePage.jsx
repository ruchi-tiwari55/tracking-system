import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Location from '../../../src/assets/location.png';
import Chilie from '../../../src/assets/red1.png';

function Product() {
  const [data, setData] = useState([]);
  const newDate = new Date();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('https://fakestoreapi.com/products/');
      setData(result.data.slice(0, 5));
    };

    fetchData();
  }, []);

  return (
    <div className="container my-4">
      <div className="row">
        {data.map((item) => (
          <div className="col-12 col-md-6 col-lg-3 mb-4" key={item.id}>
            <div
              className="card"
              style={{ marginTop: "20%", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", width: "90%" }}
            >
              <Link to={`/product/${item.id}`}>
                <img
                  src={Chilie}
                  className="card-img-top"
                  alt="product image"
                  style={{ height: '150px', objectFit: 'cover' }}
                />
              </Link>
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <span className="font-weight-bold">
                    ₹{item.price}
                  </span>
                  <span>Chilli</span>
                </div>
                <Link to={`/product/${item.id}`}>
                  <p className="card-title text-truncate mt-2">
                    {item.title}
                  </p>
                </Link>
                <div className="d-flex justify-content-between mt-2">
                  <span className="d-flex align-items-center">
                    <img
                      src={Location}
                      alt="Location"
                      style={{ width: '16px', height: '16px', marginRight: '4px' }}
                    />
                    Pune
                  </span>
                  <span>
                    {newDate.toDateString().split(' ')[2]} {newDate.toDateString().split(' ')[1]}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;

// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import Location from '../../../src/assets/location.png';
// import Chilie from '../../../src/assets/red1.png';
// import './MarketplacePage.css';

// function Product() {
//   const [data, setData] = useState([]);
//   const newDate = new Date();

//   useEffect(() => {
//     const fetchData = async () => {
//       const result = await fetch('https://fakestoreapi.com/products/');
//       const products = await result.json();
//       setData(products.slice(0, 5));
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="product-container">
//       <div className="product-grid">
//         {data.map((item) => (
//           <div className="product-card" key={item.id}>
//             <Link to={`./MarketplacePageDetails/${item.id}`}>
//               <img src={Chilie} alt="product image" className="product-image" />
//             </Link>
//             <div className="product-details">
//               <div className="price">
//                 ₹{item.price}
//               </div>
//               <Link to={`./MarketplacePageDetails/${item.id}`} className="product-title">
//                 {item.title}
//               </Link>
//               <div className="additional-info">
//                 <span className="location">
//                   <img src={Location} alt="Location" className="location-icon" />
//                   Pune
//                 </span>
//                 <span className="date">
//                   {newDate.toDateString().split(' ')[2]} {newDate.toDateString().split(' ')[1]}
//                 </span>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Product;


import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LocationIcon from '../../../src/assets/location.png';
import ProductImage from '../../../src/assets/red1.png';
import './MarketplacePage.css';

function MarketplaceProduct() {
  const [products, setProducts] = useState([]);
  const newDate = new Date();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products/');
      const productData = await response.json();
      setProducts(productData.slice(0, 5));
    };

    fetchProducts();
  }, []);

  return (
    <div className="marketplace-container">
      <div className="marketplace-grid">
        {products.map((product) => (
          <div className="marketplace-card" key={product.id}>
            <Link to={`/MarketplacePage/${product.id}`}>
              <img
                src={ProductImage}
                alt="Product"
                className="marketplace-image"
              />
            </Link>
            <div className="marketplace-details">
              <div className="marketplace-price">₹{product.price}</div>
              <Link
                to={`/MarketplacePage/${product.id}`}
                className="marketplace-title"
              >
                {product.title}
              </Link>
              <div className="marketplace-info">
                <span className="marketplace-location">
                  <img
                    src={LocationIcon}
                    alt="Location"
                    className="marketplace-location-icon"
                  />
                  Pune
                </span>
                <span className="marketplace-date">
                  {newDate.toDateString().split(' ')[2]}{' '}
                  {newDate.toDateString().split(' ')[1]}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MarketplaceProduct;


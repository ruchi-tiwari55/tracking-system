import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Chilie from '../../assets/red1.png'; // This will be the main product image
import User from '../../assets/user.png';
import gjhy from '../../assets/gjhy.png';
import './MarketplacePageDetails.css';
import Navbar from '../../components/home/Navbar';

function ProductDetailsPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [mainImage, setMainImage] = useState(Chilie); // State to hold the main image
  const thumbnailImages = [Chilie, Chilie, Chilie, Chilie, Chilie, Chilie, Chilie, Chilie]; // Sample thumbnails

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`https://fakestoreapi.com/products/${productId}`);
      setProduct(result.data);
    };

    fetchData();
  }, [productId]);

  const handleThumbnailClick = (image) => {
    setMainImage(image); // Update the main image when a thumbnail is clicked
  };

  return (

       <div>
      <Navbar />
    
    <section className='product-details-page'>
      <div className='product-card'>
        <div className='product-image-wrapper'>
          <img src={mainImage} alt='ecommerce' className='product-image' />
          <div className='thumbnail-wrapper'> {/* Wrapper for the thumbnails */}
            {thumbnailImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index}`}
                className='thumbnail-image'
                onClick={() => handleThumbnailClick(image)} // Click event to change main image
              />
            ))}
          </div>
        </div>
        <hr className='product-divider' />
        <div className='product-info-wrapper'>
          <div className='user-contact-info'>
            <img className='icon-image' src={gjhy} alt='icon' />
            <span className='user-details'>
              <img className='user-avatar' src={User} alt='User' />
              Sneha Saxena
            </span>
            <button className='contact-button'>Contact Us</button>
          </div>
          <hr className='product-divider' />
          <div className='product-info'>
            <h5 className='product-price'>₹{product.price}</h5>
            <p className='product-name'>{product.title}</p>
            <span className='product-category'>Chilli</span>
          </div>
          <hr className='product-divider' />
          <div className='product-description'>
            <p>Descriptions -</p>
            <hr className='product-divider' />
            <p>SUPER SPICY RED CHILIES AT YOUR DOORSTEP. GRAB IT TODAY OR REGRET IT TOMORROW.</p>
            <hr className='product-divider' />
            <p>Address - Atta, Atta Market, Pocket E, Sector 18, Noida, Uttar Pradesh 201301</p>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}

export default ProductDetailsPage;









// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import Chilie from '../../assets/red1.png';
// import User from '../../assets/user.png';
// import gjhy from '../../assets/gjhy.png';
// import './MarketplacePageDetails.css';

// function ProductDetailsPage() {
//   const { productId } = useParams();
//   const [product, setProduct] = useState({});

//   useEffect(() => {
//     const fetchData = async () => {
//       const result = await axios.get(`https://fakestoreapi.com/products/${productId}`);
//       setProduct(result.data);
//     };

//     fetchData();
//   }, [productId]);

//   return (
//     <section className='product-details-page'>
//       <div className='product-card'> {/* Encapsulating the details in a card */}
//         <div className='product-image-wrapper'>
//           <img src={Chilie} alt='ecommerce' className='product-image' />
//         </div>
//         <hr className='product-divider' />
//         <div className='product-info-wrapper'>
//           <div className='user-contact-info'>
//             <img className='icon-image' src={gjhy} alt='icon' />
//             <span className='user-details'>
//               <img className='user-avatar' src={User} alt='User' />
//               Sneha Saxena
//             </span>
//             <button className='contact-button'>Contact Us</button>
//           </div>
//           <hr className='product-divider' />
//           <div className='product-info'>
//             <h5 className='product-price'>₹{product.price}</h5>
//             <p className='product-name'>{product.title}</p>
//             <span className='product-category'>Chilli</span>
//           </div>
//           <hr className='product-divider' />
//           <div className='product-description'>
//             <p>Descriptions -</p>
//             <hr className='product-divider' />
//             <p>SUPER SPICY RED CHILIES AT YOUR DOORSTEP. GRAB IT TODAY OR REGRET IT TOMORROW.</p>
//             <hr className='product-divider' />
//             <p>Address - Atta, Atta Market, Pocket E, Sector 18, Noida, Uttar Pradesh 201301</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default ProductDetailsPage;

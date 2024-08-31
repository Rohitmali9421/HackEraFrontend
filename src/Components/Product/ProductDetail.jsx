import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../Contexts/UserContext';
import ProductDeatailFeatures from './ProductDeatailFeatures';

function ProductDetail() {
  const { addToCart } = useAuth();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const startTimeRef = useRef(null);

  // Fetch product data based on the product ID from the URL
  const fetchProduct = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/products?_id=${id}`);
      const data = response.data?.[0];
      setProduct(data);
    } catch (error) {
      console.error('Failed to fetch product info:', error);
    }
  };

  const handleAddToCart = async (e) => {
    e.preventDefault();
    addToCart(id);
  };

  useEffect(() => {
    fetchProduct();
    startTimeRef.current = Date.now();

    const handleBeforeUnload = async () => {
      const endTime = Date.now();
      const timeSpent = endTime - startTimeRef.current;

      if (product) {
        try {
          await axios.patch('http://localhost:8000/user/updateRecomandationdata', {
            view_time: timeSpent / 1000, // Time spent in seconds
            product_name: product.title,
            product_id: product._id,
            liked: 0,
            visit_count: 1,
          });
        } catch (error) {
          console.error('Failed to send user progress:', error);
        }
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      handleBeforeUnload(); // To handle component unmount
    };
  }, [id, product]);

  return (
    <div className='w-full grid grid-cols-1 md:grid-cols-2 my-4'>
      <div className='flex justify-center items-center'>
        <img className='w-52 md:w-80 lg:w-96' src={product?.image?.url} alt="Product Image" loading='lazy' />
      </div>
      <div className='flex flex-col mx-8 md:mx-12 lg:mx-20 my-5'>
        <h1 className='font-bold my-2'>{product?.title}</h1>
        <h1 className='font-semibold'>₹{product?.price}</h1>
        <p className='text-sm'>{product?.description}</p>
        <button
          onClick={handleAddToCart}
          className="text-white hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 my-4 bg-blue-700 focus:outline-none"
        >
          Add To Cart
        </button>
        <ProductDeatailFeatures />
      </div>
    </div>
  );
}

export default ProductDetail;

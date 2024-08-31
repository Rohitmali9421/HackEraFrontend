import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../Contexts/UserContext';
import ProductDeatailFeatures from './ProductDeatailFeatures';
import { IdleTimerProvider, useIdleTimer } from 'react-idle-timer';

function ProductDetail() {
  const { addToCart } = useAuth();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [viewStartTime, setViewStartTime] = useState(Date.now());

  const fetchProduct = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/products?_id=${id}`);
      setProduct(response.data?.[0] || null); // Handle case where no product is returned
    } catch (error) {
      console.error('Failed to fetch product info:', error);
    }
  };

  const handleaddToCart = async (e) => {
    e.preventDefault();
    if (product) {
      addToCart(id);
    }
  };

  const handleOnIdle = () => {
    if (!product) return;

    const viewTime = Math.floor((Date.now() - viewStartTime) / 1000); // in seconds

    // Send the view time to the server
    axios.patch('http://localhost:8000/user/updateRecomandationdata', {
      product_id: product._id,
      product_name: product.title,
      view_time: viewTime,
      liked: 0, // You can update this based on user interaction if needed
    }).catch(error => {
      console.error('Failed to record view time:', error);
    });
  };

  useEffect(() => {
    fetchProduct();

    // Handle cleanup on component unmount
    return () => {
      if (product) {
        const viewTime = Math.floor((Date.now() - viewStartTime) / 1000); // in seconds
        axios.patch('http://localhost:8000/api/user/updateRecomandationdata', {
          product_id: product._id,
          product_name: product.title,
          view_time: viewTime,
          liked: 0,
        }).catch(error => {
          console.error('Failed to record view time on unmount:', error);
        });
      }
    };
  }, [id, product, viewStartTime]);

  return (
    <IdleTimerProvider
      timeout={60000} // 1 minute
      onIdle={handleOnIdle}
    >
      <div className='w-full grid grid-cols-1 md:grid-cols-2 my-4'>
        <div className='flex justify-center items-center'>
          <img
            className='w-52 md:w-80 lg:w-96'
            src={product?.image?.url}
            alt="Product Image"
            loading='lazy'
          />
        </div>
        <div className='flex flex-col mx-8 md:mx-12 lg:mx-20 my-5'>
          <h1 className='font-bold my-2'>{product?.title}</h1>
          <h1 className='font-semibold'>₹{product?.price}</h1>
          <p className='text-sm'>{product?.description}</p>
          <button
            onClick={handleaddToCart}
            className="text-white hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 my-4 bg-blue-700 focus:outline-none"
          >
            Add To Cart
          </button>
          <ProductDeatailFeatures />
        </div>
      </div>
    </IdleTimerProvider>
  );
}

export default ProductDetail;

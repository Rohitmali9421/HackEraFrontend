import React, { useEffect, useState } from 'react'
import Card from '../Card';
import CardScrollLayout from '../CardScrollLayout';
import axios from 'axios';
import { Link } from 'react-router-dom';
function Trending() {
    const[Products,setProduct]=useState(null)
    const fetchDefaultProducts = async (type) => {
        try {
            const response = await axios.get(`http://localhost:8000/api/products?category=${type}`);
            setProduct(response.data);
        } catch (error) {
            console.error('Failed to fetch Popular Products info:', error);
        }
    };
    useEffect(()=>{
        fetchDefaultProducts("66d387ae8a602b371294dab3")
    })
    return (
        <div className='w-full pt-10 border-t'>
            <div className='flex w-full justify-center'>
                <h1 className='font-bold text-4xl '>Just  </h1>
                <h1 className='font-bold text-4xl pl-2 text-purple-500'>Trending</h1>
            </div>
            <CardScrollLayout>
            {Products?.map((product) => (
                <Link to={`product/${product._id}`}>
                    <Card imageURL={product.image.url} key={product._id} name={product.title} />
                    </Link>
                ))}
            </CardScrollLayout>

        </div>
    )
}

export default Trending

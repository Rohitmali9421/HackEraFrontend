import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';


function Product() {
    const [popularProduct, setPopularProduct] = useState(null);
    const [subfilter, handleSubfilterChange] = useState('');
    const fetchDefaultProducts = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/products');
            setPopularProduct(response.data);
        } catch (error) {
            console.error('Failed to fetch Popular Products info:', error);
        }
    };
        const fetchProducts = async (type) => {
            try {
                const response = await axios.get(`http://localhost:8000/api/products?type=${type}`);
                setPopularProduct(response.data);
            } catch (error) {
                console.error(`Failed to fetch ${type} Products info:`, error);
            }
        };

        const fetchAllProducts = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/products');
                setPopularProduct(response.data);
            } catch (error) {
                console.error('Failed to fetch Popular Products info:', error);
            }
        };

        const fetchMobile = async () => {
            await fetchProducts('Mobiles');
        };

        const fetchLaptop = async () => {
            await fetchProducts('Laptops');
        };

        const fetchCloth = async () => {
            await fetchProducts('Cloths');
        };

        const fetchWatch = async () => {
            await fetchProducts('Watches');
        };

        const fetchAll = async () => {
            await fetchAllProducts();
        };
    const [activeTag, setActiveTag] = useState('All');

    const handleTagClick = (tag) => {
        setActiveTag(tag);
    };

    useEffect(() => {
        fetchDefaultProducts();
    }, []);

    if (!popularProduct) {
        return (
            <div className='w-full h-screen flex items-center justify-center'>
                <div className="w-24 h-24 border-8 border-dashed rounded-full animate-spin border-purple-600"></div>
            </div>
        )
    }
    return (
        <div className="bg-white  pb-10 flex flex-col items-center ">
            <div className="nav flex w-full h-20 bg-purple-50 items-center justify-center underline">
                <label
                    className={`mx-4 cursor-pointer ${activeTag === 'Mobiles' ? 'text-purple-500 font-bold' : 'text-black'}`}
                    onClick={() =>{ handleTagClick('Mobiles') ; fetchMobile()}}
                >
                    Mobiles
                </label>
                <label
                    className={`mx-4 cursor-pointer ${activeTag === 'Laptops' ? 'text-purple-500 font-bold' : 'text-black'}`}
                    onClick={() => {handleTagClick('Laptops') ; fetchLaptop()}}
                >
                    Laptops
                </label>
                <label
                    className={`mx-4 cursor-pointer ${activeTag === 'Cloths' ? 'text-purple-500 font-bold' : 'text-black'}`}
                    onClick={() => {handleTagClick('Cloths') ; fetchCloth()}}
                >
                    Cloths
                </label>
                <label
                    className={`mx-4 cursor-pointer ${activeTag === 'Watches' ? 'text-purple-500 font-bold' : 'text-black'}`}
                    onClick={() => {handleTagClick('Watches') ; fetchWatch()}}
                >
                    Watches
                </label>
                <label
                    className={`mx-4 cursor-pointer ${activeTag === 'All' ? 'text-purple-500 font-bold' : 'text-black'}`}
                    onClick={() => { handleTagClick('All') ; fetchAll()}}
                >
                    All
                </label>
                <div className="relative">

                    <label htmlFor="subfilter" className="mx-4 cursor-pointer">Subfilter:</label>
                    <select
                        id="subfilter"
                        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                        onChange={(e) => handleSubfilterChange(e.target.value)}
                    >
                        <option value="">All</option>
                        <option value="price">Price (low to high)</option>
                        <option value="price">Price (high to low)</option>
                        <option value="price">Rating (low to high)</option>
                        <option value="price">Rating (high to low)</option>
                        <option value="price">A-Z</option>
                        <option value="price">Z-A</option>
                    </select>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-3 mt-3 mx-8 max-w-[1300px]">

                {popularProduct?.map((product) => (
                    <ProductCard
                        key={product._id}
                        id={product._id}
                        imageUrl={product.image.url}
                        title={product.title}
                        price={product.price}
                    />
                ))}
            </div>
        </div >
    );
}

export default Product;

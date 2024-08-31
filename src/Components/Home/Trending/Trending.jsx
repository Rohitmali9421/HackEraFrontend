import React from 'react'
import Card from '../Card';
import CardScrollLayout from '../CardScrollLayout';
function Trending() {

    return (
        <div className='w-full pt-10 border-t'>
            <div className='flex w-full justify-center'>
                <h1 className='font-bold text-4xl '>Just  </h1>
                <h1 className='font-bold text-4xl pl-2 text-purple-500'>Trending</h1>
            </div>
            <CardScrollLayout>
                <Card imageURL="https://www.fireboltt.com/cdn/shop/files/Black_01_53a058b5-640b-450b-af00-901dff5815e6_540x.png?v=1720530551" name="Maverick" />
                <Card imageURL="https://www.fireboltt.com/cdn/shop/files/Black_01_53a058b5-640b-450b-af00-901dff5815e6_540x.png?v=1720530551" name="Maverick" />
                <Card imageURL="https://www.fireboltt.com/cdn/shop/files/Black_01_53a058b5-640b-450b-af00-901dff5815e6_540x.png?v=1720530551" name="Maverick" />
                <Card imageURL="https://www.fireboltt.com/cdn/shop/files/Black_01_53a058b5-640b-450b-af00-901dff5815e6_540x.png?v=1720530551" name="Maverick" />
            </CardScrollLayout>

        </div>
    )
}

export default Trending

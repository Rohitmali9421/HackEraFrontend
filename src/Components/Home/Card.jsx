import React from 'react'

function Card({ imageURL, name }) {
    return (
        <div className='min-w-60      mx-auto'>
            <div className='mx-3 py-3 bg-gray-100 rounded-xl'>
                <img className=' mx-auto p-4' src={imageURL} alt="" />
                <h1 className='text-center font-bold pt-2 text-2xl'>{name}</h1>
                <p className='text-center text-xs font-medium'>35.55mm Display | BT Calling</p>
                <h1 className='text-center font-bold pt-2 text-xl'>₹1,999</h1>
                <div className='flex justify-center mb-4'>
                    <button className='text-center font-bold w-full mt-2 mx-4 py-2 rounded-xl  text-lg text-white bg-purple-600'>View Product</button>
                </div>

            </div>
        </div>
    )
}
export default Card

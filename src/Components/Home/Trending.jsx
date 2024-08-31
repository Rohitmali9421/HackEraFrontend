import React from 'react'
import ProductCard from '../Product/ProductCard'

const Trending= () => {
  return (
     <>
     <h1 className='text-center  font-bold text-3xl hover:text-4xl duration-300 my-5'>TrendingProducts  </h1>
     <div className='flex gap-4 justify-center'>

     <ProductCard/>
     <ProductCard/>
     <ProductCard/>
     <ProductCard/>

     </div>
   

     
     </>
  )
}

export default Tranding
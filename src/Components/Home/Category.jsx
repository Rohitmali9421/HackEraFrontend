import React from 'react'

function Category() {
  return (
    <div className='w-full pt-10 pb-6'>
      <div className='flex w-full justify-center'>
        <h1 className='font-bold text-2xl md:text-4xl '>Shop By  </h1>
        <h1 className='font-bold text-2xl md:text-4xl pl-2 text-orange-600'>Categories</h1>
      </div>
      <div className='grid w-full px-3  gap-3 grid-cols-3 md:grid-cols-4 mt-8'>
        <div className='col-span-3  md:col-span-2'>
          <img src="https://www.fireboltt.com/cdn/shop/files/Cellular_calling_9f3eb9ed-fcac-4d9d-bffa-598421d588c9_1024x1024.jpg?v=1721281545" className=' object-cover h-full' alt="" />
        </div>
        <div className='  '>
          <img src="https://www.fireboltt.com/cdn/shop/files/luxe_edition_1024x1024.jpg?v=1720816544" className=' object-cover h-full' alt="" />
        </div>
        <div className='  row-span-2'>
          <img src="https://www.fireboltt.com/cdn/shop/files/Bt_Calling_1_1024x1024.jpg?v=1721974891" className=' object-cover h-full' alt="" />
        </div>
        <div className=' '>
          <img src="https://www.fireboltt.com/cdn/shop/files/outdoor_series_1024x1024.jpg?v=1720816561" className=' object-cover h-full' alt="" />
        </div>
        <div className=' '>
          <img src="https://www.fireboltt.com/cdn/shop/files/amoled_display_10e57672-7a30-45da-9f2a-62b453d10a3c_1024x1024.jpg?v=1720816578" className=' object-cover h-full' alt="" />
        </div>
        <div className=' '>
          <img src="https://www.fireboltt.com/cdn/shop/files/Audio_Series_1024x1024.jpg?v=1720816592" className=' object-cover h-full' alt="" />
        </div>
      </div>
    </div>
  )
}

export default Category

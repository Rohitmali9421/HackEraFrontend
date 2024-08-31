import React from 'react'

function Category() {
  return (
    <div className='w-full pt-10 pb-6'>
      <div className='flex w-full justify-center'>
        <h1 className='font-bold text-2xl md:text-4xl '>Shop By  </h1>
        <h1 className='font-bold text-2xl md:text-4xl pl-2 text-purple-500'>Categories</h1>
      </div>
      <div className='grid w-full px-3  gap-3 grid-cols-3 md:grid-cols-4 mt-8'>
        <div className='col-span-3  md:col-span-2'>
          <img src="https://www.fireboltt.com/cdn/shop/files/Cellular_calling_9f3eb9ed-fcac-4d9d-bffa-598421d588c9_1024x1024.jpg?v=1721281545" className=' object-cover h-full' alt="" />
        </div>
        <div className='  '>
          <img src="https://img.freepik.com/free-photo/green-sofa-white-living-room-with-blank-table-mockup_43614-835.jpg?t=st=1725133396~exp=1725136996~hmac=90e972e91c842c70fe2db7631c8c3b136e2c056f74907a9827a3601879e9ad1c&w=740" className=' object-cover h-full' alt="" />
        </div>
        <div className='  row-span-2'>
          <img src="https://img.freepik.com/free-photo/high-angle-books-wooden-table_23-2149678908.jpg?t=st=1725133806~exp=1725137406~hmac=bca31c62008878efb29c8729d1834ddbcf9710549ae270786a2638923075f42d&w=360" className=' object-cover h-full' alt="" />
        </div>
        <div className=' '>
          <img src="https://img.freepik.com/free-photo/still-life-hanging-bag_23-2151009066.jpg?t=st=1725133725~exp=1725137325~hmac=69d66f7c7651cc25025351158f5ccaef5d60939c80e2b13b432ec9370ba47cb7&w=996" className=' object-cover h-full' alt="" />
        </div>
        <div className=' '>
          <img src="https://img.freepik.com/free-photo/view-computer-monitor-display-with-desk_23-2150757529.jpg?t=st=1725134153~exp=1725137753~hmac=5df6ab5af88a230081a4355fc44b787c84e737d7a187a2d5939363d9484e6d2b&w=996" className=' object-cover h-full' alt="" />
        </div>
        <div className=' '>
          <img src="https://www.fireboltt.com/cdn/shop/files/Audio_Series_1024x1024.jpg?v=1720816592" className=' object-cover h-full' alt="" />
        </div>
      </div>
    </div>
  )
}

export default Category

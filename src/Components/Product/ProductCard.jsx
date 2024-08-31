import React, { useState } from 'react'
import ReactStars from 'react-stars'
import { CiHeart } from 'react-icons/ci';
import { AiFillHeart } from 'react-icons/ai';


const ProductCard = () => {


  const [isLiked, setIsLiked] = useState(false); // State to manage heart icon color
  const [likeCount, setLikeCount] = useState(0); // State to manage like count

  const handleLike = () => {
    if (!isLiked) {
      setLikeCount(likeCount + 1); // Increase like count on click
      setIsLiked(true); // Set liked state to true
    }
  };

  const handleDoubleClick = () => {
    if (isLiked) {
      setLikeCount(likeCount - 1); // Decrease like count on double-click
      setIsLiked(false); // Set liked state to false
    }
  };


    const ratingChanged = (newRating) => {
        console.log(newRating)
      }

  return (

    <>
    <div className='w-[270px] '>
    <div className="rounded-md border">
          <img
            src="https://images.unsplash.com/photo-1588099768523-f4e6a5679d88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHwxMTM4MTU1NXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
            alt="Laptop"
            className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
          />
          <div className="p-4">
            <h1 className="inline-flex items-center text-lg font-semibold">Nike Airmax v2</h1>
            <p className="mt-3 text-sm text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
            </p>
            <div className="mt-4">
            <ReactStars
  count={5}
  onChange={ratingChanged}
  size={24}
  color2={'#ffd700'} />

            </div >

    <div className='flex justify-between px-4'>
    <div>
              $50
           </div>
           <div
                onClick={handleLike}
                onDoubleClick={handleDoubleClick}
                className="cursor-pointer flex items-center space-x-1"
              >
                {isLiked ? <AiFillHeart size={"24px"} color="red" /> : <CiHeart size={"24px"} />}
                <span>{likeCount}</span>
              </div>
    </div>
          
           

            <button
              type="button"
              className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Add to Cart
            </button>
          </div>
        </div>
    </div>
    
    </>
  )
}

export default ProductCard
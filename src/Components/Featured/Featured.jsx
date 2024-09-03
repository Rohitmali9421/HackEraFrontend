import React, { useState } from 'react';
import ReactStars from 'react-stars';
import { CiHeart } from 'react-icons/ci';
import { AiFillHeart } from 'react-icons/ai';

const Featured = () => {
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
    console.log(newRating);
  };
  return (

    <>
    <div>
    <div className='flex w-full justify-center pb-6'>
                <h1 className='font-bold text-4xl '>Featured  </h1>
                <h1 className='font-bold text-4xl pl-2 text-purple-500'> Product</h1>
            </div>
    <div className=' md:flex' >
        {/* first card  */}
        <div className="w-[300px] m-auto hover:scale-105 duration-300 shadow-lg">
        <div className="rounded-md border">
           <div className="sketchfab-embed-wrapper m-auto ">
      <iframe
        title="Vintage Books"
        frameBorder="0"
        allowFullScreen
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        src="https://sketchfab.com/models/302b305da68f4ecfabaf59b05ab60a9a/embed"
      >
      </iframe>
      <p style={{ fontSize: "13px", fontWeight: "normal", margin: "5px", color: "#4A4A4A" }}>
        <a
          href="https://sketchfab.com/3d-models/vintage-books-302b305da68f4ecfabaf59b05ab60a9a?utm_medium=embed&utm_campaign=share-popup&utm_content=302b305da68f4ecfabaf59b05ab60a9a"
          target="_blank"
          rel="nofollow"
          style={{ fontWeight: "bold", color: "#1CAAD9" }}
        >
         
        </a>{" "}
      
        <a
          href="https://sketchfab.com/leaguestudio?utm_medium=embed&utm_campaign=share-popup&utm_content=302b305da68f4ecfabaf59b05ab60a9a"
          target="_blank"
          rel="nofollow"
          style={{ fontWeight: "bold", color: "#1CAAD9" }}
        >
         
        </a>{" "}
       
        <a
          href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=302b305da68f4ecfabaf59b05ab60a9a"
          target="_blank"
          rel="nofollow"
          style={{ fontWeight: "bold", color: "#1CAAD9" }}
        >
         
        </a>
      </p>
    </div>
          <div className="p-4">
            <h1 className="inline-flex items-center text-lg font-semibold">Books v2</h1>
            <p className="mt-3 text-sm text-gray-600"></p>
            <div className="mt-4">
              <ReactStars count={5} onChange={ratingChanged} size={24} color2={'#ffd700'} />
            </div>
            <div className="flex justify-between px-3">
              <div>$50</div>
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
              className="mt-4 w-full rounded-sm bg-purple-500 px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
        {/* second card  */}
        <div className="w-[300px] m-auto hover:scale-105 duration-300 shadow-lg">
        <div className="rounded-md border">
        <div className="sketchfab-embed-wrapper">
      <iframe
        title="I Phone 11 Pro 3D Model"
        className="w-full h-49"
        frameBorder="0"
        allowFullScreen
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        src="https://sketchfab.com/models/93ce4127344948e49d6644b2fbd5fc5b/embed"
      ></iframe>
      <p className="text-sm font-normal mt-2 text-gray-600">
        <a
          href="https://sketchfab.com/3d-models/i-phone-11-pro-3d-model-93ce4127344948e49d6644b2fbd5fc5b?utm_medium=embed&utm_campaign=share-popup&utm_content=93ce4127344948e49d6644b2fbd5fc5b"
          target="_blank"
          rel="nofollow"
          className="font-semibold text-blue-500"
        >
        </a>{" "}
        <a
          href="https://sketchfab.com/shadowsudip?utm_medium=embed&utm_campaign=share-popup&utm_content=93ce4127344948e49d6644b2fbd5fc5b"
          target="_blank"
          rel="nofollow"
          className="font-semibold text-blue-500"
        >
        </a>{" "}
    
        <a
          href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=93ce4127344948e49d6644b2fbd5fc5b"
          target="_blank"
          rel="nofollow"
          className="font-semibold text-blue-500"
        >
        
        </a>
      </p>
    </div>
          <div className="p-4">
            <h1 className="inline-flex items-center text-lg font-semibold">Phone v2</h1>
            <p className="mt-3 text-sm text-gray-600"></p>
            <div className="mt-4">
              <ReactStars count={5} onChange={ratingChanged} size={24} color2={'#ffd700'} />
            </div>
            <div className="flex justify-between px-3">
              <div>$50</div>
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
              className="mt-4 w-full rounded-sm bg-purple-500 px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
        {/* third card  */}
        <div className="w-[300px] m-auto hover:scale-105 duration-300 shadow-lg">
        <div className="rounded-md border">
        <div className="sketchfab-embed-wrapper">
      <iframe
        title="Game Ready Laptop Model (Made for Unreal Engine)"
        className="w-full h-49"
        frameBorder="0"
        allowFullScreen
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        src="https://sketchfab.com/models/02f468a7c4754c46b17d87e881f6080c/embed"
      ></iframe>
      <p className="text-xs font-normal mt-1 text-gray-600">
        <a
          href="https://sketchfab.com/3d-models/game-ready-laptop-model-made-for-unreal-engine-02f468a7c4754c46b17d87e881f6080c?utm_medium=embed&utm_campaign=share-popup&utm_content=02f468a7c4754c46b17d87e881f6080c"
          target="_blank"
          rel="nofollow"
          className="font-semibold text-blue-500"
        >
        </a>{" "}

        <a
          href="https://sketchfab.com/mayur_?utm_medium=embed&utm_campaign=share-popup&utm_content=02f468a7c4754c46b17d87e881f6080c"
          target="_blank"
          rel="nofollow"
          className="font-semibold text-blue-500"
        >
        </a>{" "}
        <a
          href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=02f468a7c4754c46b17d87e881f6080c"
          target="_blank"
          rel="nofollow"
          className="font-semibold text-blue-500"
        >
        </a>
      </p>
    </div>
          <div className="p-4">
            <h1 className="inline-flex items-center text-lg font-semibold">Laptop v2</h1>
            <p className="mt-3 text-sm text-gray-600"></p>
            <div className="mt-4">
              <ReactStars count={5} onChange={ratingChanged} size={24} color2={'#ffd700'} />
            </div>
            <div className="flex justify-between px-3">
              <div>$50</div>
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
              className="mt-4 w-full rounded-sm bg-purple-500 px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
        {/* fourth  card  */}
        <div className="w-[300px] m-auto hover:scale-105 duration-300 shadow-lg">
        <div className="rounded-md border">
        <div className="sketchfab-embed-wrapper">
      <iframe
        title="male_shirt"
        className="w-full h-49"
        frameBorder="0"
        allowFullScreen
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        src="https://sketchfab.com/models/d07e6116140745f69b26ef8f266351d8/embed"
      ></iframe>
      <p className="text-xs font-normal mt-2 text-gray-600">
        <a
          href="https://sketchfab.com/3d-models/male-shirt-d07e6116140745f69b26ef8f266351d8?utm_medium=embed&utm_campaign=share-popup&utm_content=d07e6116140745f69b26ef8f266351d8"
          target="_blank"
          rel="nofollow"
          className="font-semibold text-blue-500"
        >
        </a>
        <a
          href="https://sketchfab.com/wasimrahii98?utm_medium=embed&utm_campaign=share-popup&utm_content=d07e6116140745f69b26ef8f266351d8"
          target="_blank"
          rel="nofollow"
          className="font-semibold text-blue-500"
        >
        </a>
   
        <a
          href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=d07e6116140745f69b26ef8f266351d8"
          target="_blank"
          rel="nofollow"
          className="font-semibold text-blue-500"
        >
        
        </a>
      </p>
    </div>
          <div className="p-4">
            <h1 className="inline-flex items-center text-lg font-semibold">T shirt</h1>
            <p className="mt-3 text-sm text-gray-600"></p>
            <div className="mt-4">
              <ReactStars count={5} onChange={ratingChanged} size={24} color2={'#ffd700'} />
            </div>
            <div className="flex justify-between px-3">
              <div>$50</div>
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
              className="mt-4 w-full rounded-sm bg-purple-500 px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >

              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default Featured;
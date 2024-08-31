import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";
import StarRating from "./StarRating";

export default function LittleCarousel() {
    const data = [
        {
            name: "Alice Johnson",
            title: "Amazing Product!",
            date: "April 12, 2023",
            review: "This product exceeded my expectations! The quality is fantastic, and the customer service was very responsive. Highly recommend!",
            stars: 5
        },
        {
            name: "Michael Smith",
            title: "Good Value for Money",
            date: "March 15, 2023",
            review: "Overall, I'm satisfied with my purchase. It offers great value for the price. However, shipping took a bit longer than expected.",
            stars: 4
        },
        {
            name: "Samantha Lee",
            title: "Not as Expected",
            date: "February 8, 2023",
            review: "The product looks different than what was advertised. It's not terrible, but I had higher expectations based on the pictures.",
            stars: 3
        },
        {
            name: "Daniel Martinez",
            title: "Excellent Service!",
            date: "January 25, 2023",
            review: "The customer service team was incredibly helpful and made the whole experience smooth. The product works perfectly.",
            stars: 5
        },
        {
            name: "Laura Thompson",
            title: "Decent, but Room for Improvement",
            date: "December 30, 2022",
            review: "The product does its job, but there are a few areas that could use improvement. The material feels a bit cheap.",
            stars: 3
        },
    ];

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        pauseOnHover: false,
    };
    return (
        <Slider {...settings} className=" w-[100%] lg:w-[40%] h-60 flex items-end justify-end ">
            {
                data.map((key, index) => {
                    const starCount = key.starts
                    let i=0;
                    return (
                        <div key={index}
                            className="flex flex-col gap-5 text-black  h-40 max-w-md w-full bg-white shadow-xl  p-5 rounded-md mt-8  hover:scale-105 hover:duration-150 duration-150"
                        >
                            <div className="flex flex-row justify-between w-full">
                                <div className="flex flex-row justify-between w-full">
                                    <p className="text-xs">{key.name}</p>
                                    <p className="text-xs">{key.date}</p>
                                </div>
                            </div>
                            <div className="flex flex-row justify-between w-full">
                                <h3 className="text-xl font-bold">{key.title}</h3>

                                <div className="text-xs">
                                    <div className="flex flex-row">
                                    <StarRating rating={4.5} />


                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4 text-yellow-200"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                d="M9.049 2.927c.3-.916 1.603-.916 1.902 0l1.286 3.953a1.5 1.5 0 001.421 1.033h4.171c.949 0 1.341 1.154.577 1.715l-3.38 2.458a1.5 1.5 0 00-.54 1.659l1.286 3.953c.3.916-.757 1.67-1.539 1.145l-3.38-2.458a1.5 1.5 0 00-1.76 0l-3.38 2.458c-.782.525-1.838-.229-1.539-1.145l1.286-3.953a1.5 1.5 0 00-.54-1.659l-3.38-2.458c-.764-.561-.372-1.715.577-1.715h4.171a1.5 1.5 0 001.421-1.033l1.286-3.953z"
                                            ></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div className="text-sm">
                                {key.review}
                            </div>
                        </div>
                    )
                })
            }

        </Slider>
    );
}
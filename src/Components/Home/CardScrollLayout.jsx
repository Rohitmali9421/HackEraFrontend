import React from 'react';
import Slider from "react-slick";

function CardScrollLayout({ children }) {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1.2,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className='overflow-x-clip mt-8 mx-4 pb-6'>
            <Slider {...settings}>
                {children}
            </Slider>
        </div>
    );
}

export default CardScrollLayout;

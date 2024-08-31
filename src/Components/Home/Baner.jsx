import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';

function Baner() {
  const [smallBaner, setSmallBaner] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;

    if (element) {
      const onWidthChange = (entries) => {
        for (let entry of entries) {
          const width = entry.contentRect.width;
          if (width < 700) {
            setSmallBaner(true);
          } else {
            setSmallBaner(false);
          }
        }
      };

      const resizeObserver = new ResizeObserver(onWidthChange);
      resizeObserver.observe(element);

      return () => {
        resizeObserver.unobserve(element);
        resizeObserver.disconnect();
      };
    }
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
  };

  if (smallBaner) {
    return (
      <div className='slider-container overflow-x-clip' ref={elementRef}>
        <Slider {...settings} className="">
          <div className="hidden md:inline-block">
            <img src="https://img.freepik.com/free-photo/showing-cart-trolley-shopping-online-sign-graphic_53876-133967.jpg?t=st=1725082374~exp=1725085974~hmac=717862925af62cdcc41123b2f3fee3d28a09da64f897c791d5a7e0beedf9d1ca&w=826"  loading="lazy" alt="" />
          </div>
          <div className="hidden md:inline-block">
            <img src="https://res.cloudinary.com/dhturqqs5/image/upload/v1722354804/Firebolt-landing-page/g7gtyvpccinxez2c3udj.webp" loading="lazy" alt="" />
          </div>
        </Slider>
      </div>
    )
  } else {
    return (
      <div className='slider-container overflow-x-clip' ref={elementRef}>
        <Slider {...settings} className="">
          <div className="hidden md:inline-block">
            <img src="https://res.cloudinary.com/dhturqqs5/image/upload/v1722354344/Firebolt-landing-page/aryh5hsv6wfmrnlvqkow.webp" loading="lazy" alt="" />
          </div>
          <div className="hidden md:inline-block">
            <img src="https://res.cloudinary.com/dhturqqs5/image/upload/v1722354494/Firebolt-landing-page/uy10cadhffjr0vtobnue.webp" loading="lazy" alt="" />
          </div>
          <div className="hidden md:inline-block">
            <img src="https://res.cloudinary.com/dhturqqs5/image/upload/v1722354545/Firebolt-landing-page/qm8drxjmmagi0q8lm30z.webp" loading="lazy" alt="" />
          </div>
          <div className="md:inline-block">
            <img src="https://res.cloudinary.com/dhturqqs5/image/upload/v1722354626/Firebolt-landing-page/loaunylxycvy9fgcztvm.webp" loading="lazy" alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}

export default Baner;

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
    fade: true,
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
            <img src="https://res.cloudinary.com/dhturqqs5/image/upload/v1722354886/Firebolt-landing-page/uislflgwxi9dwt0ngkkb.webp"  loading="lazy" alt="" />
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





import React from 'react';
import Slider from "react-slick";

const PartniyorSlider = ({className, children}) => {
    
    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 1000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 840,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },

          {
            breakpoint: 540,
            settings: {
              slidesToShow: 1.5,
              slidesToScroll: 1,
              initialSlide: 1
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
        <div className="w-100">
            <Slider {...settings} className={`w-100 head-slider slick-dots-style ${className ? className : ''}`}>{children}</Slider>
        </div> 
    )    
}

export default PartniyorSlider;

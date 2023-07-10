import React from 'react';
import Slider from "react-slick";

const TeamSlider = ({className, children}) => {
    
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
          
            }
          },
          {
            breakpoint: 840,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },

          {
            breakpoint: 540,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
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

export default TeamSlider;




import React from 'react';
import Slider from "react-slick";

const TrainingSlider = ({className, children}) => {
    
    var settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
     

        responsive: [
          {
            breakpoint: 1300,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              arrows: false,
              infinite: true,
              autoplaySpeed: 1000,
              speed: 500,
              autoplay: true,
      

            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              arrows: false,

            }
          },
          {
            breakpoint: 840,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2,
              arrows: false,

            }
          },

          {
            breakpoint: 540,
            settings: {
              slidesToShow: 1.5,
              slidesToScroll: 1,
              initialSlide: 1,
              arrows: false,

            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1.2,
              slidesToScroll: 1,
              arrows: false,

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

export default TrainingSlider;

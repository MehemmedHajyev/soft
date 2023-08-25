import React from 'react';
import Slider from "react-slick";

const Carousel = ({className, children}) => {
    
    var settingsMain = {
        dots: true,
        arrows: false,
        infinite: true,
        // draggable: true,
        fade: true,
        speed: 2000,
        touchThreshold: 190,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2500,

       
    };

    return ( 
        <div className="w-100">
            <Slider {...settingsMain} className={`w-100 head-slider slick-dots-style ${className ? className : ''}`}>{children}</Slider>
        </div> 
    )    
}

export default Carousel;
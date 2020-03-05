import React from 'react';
import Slider from "react-slick";

import slide__one from '../../resources/images/slide__one.jpg'
import slide__two from '../../resources/images/slide__two.jpg';
import slide__three from '../../resources/images/slide__three.jpg';

const Carousel = () => {

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500
    }
    return (
        <div className="carousel_wrapper"
        style={{
            height: `${window.innerHeight}px`,
            overflow: 'hidden'
        }}>

        <Slider {...settings}>

            <div>
                <div className= "carousel_image"
                style={{
                    background: `url(${slide__one})`,
                    height: `${window.innerHeight}px`
                }}>
                </div>
            </div>
            <div>
                <div className= "carousel_image"
                style={{
                    background: `url(${slide__two})`,
                    height: `${window.innerHeight}px`
                }}>
                </div>
            </div>
            <div>
                <div className= "carousel_image"
                style ={{
                    background: `url(${slide__three})`,
                    height: `${window.innerHeight}px`
                }}>
                </div>
            </div>
        </Slider>
            
        </div>
    );
};

export default Carousel;
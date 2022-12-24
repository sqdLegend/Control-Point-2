


import React, { useEffect, useRef, useState } from 'react';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './style.css';

import sliderimage1 from './images/img_1.jpg';
import sliderimage2 from './images/img_2.jpg';
import sliderimage3 from './images/img_3.jpg';
import sliderimage4 from './images/img_4.jpg';

function Intro(props) {


    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };

    const [scroll, Setscroll] = useState(false);

    const windwoWasscrolled = () =>{
        if(window.scrollY>=30)
        {
            Setscroll(true);
        }
    }

    window.addEventListener('scroll', windwoWasscrolled);

  

    
    return (
        <div  className='intro'>
            <div className='intro_blue_block'></div>

            <div className='intro_slider'>
                <div className='intro_container'>

                    <div className='intro_slider_holder'>

                        <div className={scroll ? 'intro_slider_left intro_slider_left_appear' : 'intro_slider_left'}>
                            <Slider {...settings}>

                                <div className='intro_slider_left_info'>
                                    <div className='intro_slider_left_info_title'>Welcome</div>
                                    <div className='intro_slider_left_info_text'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ipsa nulla sed quis rerum amet natus quas necessitatibus.
                                    </div>
                                    <div className='intro_slider_left_info_button'>Get started</div>
                                </div>

                                <div className='intro_slider_left_info'>
                                    <div className='intro_slider_left_info_title'>high quality website templates</div>
                                    <div className='intro_slider_left_info_text'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ipsa nulla sed quis rerum amet natus quas necessitatibus.
                                    </div>
                                    <div className='intro_slider_left_info_button'>Get started</div>
                                </div>

                                <div className='intro_slider_left_info'>
                                    <div className='intro_slider_left_info_title'>we do things right.</div>
                                    <div className='intro_slider_left_info_text'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ipsa nulla sed quis rerum amet natus quas necessitatibus.
                                    </div>
                                    <div className='intro_slider_left_info_button'>Get started</div>
                                </div>

                                <div className='intro_slider_left_info'>
                                    <div className='intro_slider_left_info_title'>we do awesome things</div>
                                    <div className='intro_slider_left_info_text'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ipsa nulla sed quis rerum amet natus quas necessitatibus.
                                    </div>
                                    <div className='intro_slider_left_info_button'>Get started</div>
                                </div>

                                
                            </Slider>
                        </div>

                        <div className={scroll ? 'intro_slider_right intro_slider_right_appear' : 'intro_slider_right'}>
                            <Slider {...settings}>

                                <div className='intro_slider_right_img'>
                                    <img src={sliderimage1}/>
                                </div>

                                <div className='intro_slider_right_img'>
                                    <img src={sliderimage2}/>
                                </div>

                                <div className='intro_slider_right_img'>
                                    <img src={sliderimage3}/>
                                </div>

                                <div className='intro_slider_right_img'>
                                    <img src={sliderimage4}/>
                                </div>
                            </Slider>
                        </div>

                        
                        
                    </div>

                </div>


            </div>
        </div>
    );
}


export default Intro;
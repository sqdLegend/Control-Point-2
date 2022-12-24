

import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './style.css';


import sliderimage1 from './images/person_1.jpg';
import sliderimage2 from './images/person_2.jpg';
import sliderimage3 from './images/person_3.jpg';
import sliderimage4 from './images/person_4.jpg';


function Testimonials() {

    var settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };

    return (
        <div className='testimonials'>
            <div className='testimonials_container'>
                <div className='testimonials_top_block'>

                    <div className='testimonials_top_block_title'>testimonials</div>
                    <div className='testimonials_top_block_text'>
                        Natus totam voluptatibus animi aspernatur ducimus quas obcaecati
                        mollitia quibusdam temporibus culpa dolore
                        molestias blanditiis consequuntur sunt nisi.
                    </div>
                </div>

                <div className='testimonials_slider'>
                    <div className='testimonials_container'>

                        <div className='testimonials_slider_holder'>

                            <div className='testimonials_slider_left'>
                                <Slider {...settings}>

                                    <div className='testimonials_slider_left_info'>
                                        
                                        <div className='testimonials_slider_left_info_text'>
                                            "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                             Dignissimos corrupti, obcaecati repudiandae, animi ad quos.
                                              Eius expedita ipsa qui autem."
                                        </div>
                                        <div className='testimonials_slider_left_info_author'>Jean Doe</div>
                                        
                                    </div>

                                    <div className='testimonials_slider_left_info'>
                                        
                                        <div className='testimonials_slider_left_info_text'>
                                            "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                             Dignissimos corrupti, obcaecati repudiandae, animi ad quos.
                                              Eius expedita ipsa qui autem."
                                        </div>
                                        <div className='testimonials_slider_left_info_author'>Rober Kenneth</div>
                                        
                                    </div>

                                    <div className='testimonials_slider_left_info'>
                                        
                                        <div className='testimonials_slider_left_info_text'>
                                            "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                             Dignissimos corrupti, obcaecati repudiandae, animi ad quos.
                                              Eius expedita ipsa qui autem."
                                        </div>
                                        <div className='testimonials_slider_left_info_author'>Gregg Pollach</div>
                                        
                                    </div>

                                    <div className='testimonials_slider_left_info'>
                                        
                                        <div className='testimonials_slider_left_info_text'>
                                            "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                             Dignissimos corrupti, obcaecati repudiandae, animi ad quos.
                                              Eius expedita ipsa qui autem."
                                        </div>
                                        <div className='testimonials_slider_left_info_author'>Joshua Smith</div>
                                        
                                    </div>

                                    

                                   

                                    

                                   

                                    


                                </Slider>
                            </div>

                            <div className='testimonials_slider_right'>
                                <Slider {...settings}>

                                    <div className='testimonials_slider_right_img'>
                                        <img src={sliderimage1} />
                                    </div>

                                    <div className='testimonials_slider_right_img'>
                                        <img src={sliderimage2} />
                                    </div>

                                    <div className='testimonials_slider_right_img'>
                                        <img src={sliderimage3} />
                                    </div>

                                    <div className='testimonials_slider_right_img'>
                                        <img src={sliderimage4} />
                                    </div>
                                </Slider>
                            </div>



                        </div>

                    </div>


                </div>
            </div>
        </div>
    );
}

export default Testimonials;
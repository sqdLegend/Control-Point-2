

import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { InView, useInView } from 'react-intersection-observer';
import './style.css';
import { useEffect } from 'react';


function Projects(props) {

    const [slideShow, SetSlideShow] = useState(4);

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: slideShow,
        slidesToScroll: 1,
        autoplay: true,
      };


    window.addEventListener('scroll', ()=>{
        if(window.innerWidth<=1024)
        {
            SetSlideShow(3);
        }
       
        if(window.innerWidth<=768)
        {
            SetSlideShow(2);
        }
        if(window.innerWidth>1024)
        {
            SetSlideShow(4);
        }
    })

    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0.5,
        triggerOnce: true
      });




    return (
        <div className='projects'>
            
            <div ref={ref} className={inView ? 'projects_top projects_top_animation' : 'projects_top'}>
                
                <div className='projects_container'>
                    <div className='projects_top_title'>our projects</div>
                    <div className='projects_top_text'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Rem possimus distinctio ex. Natus totam voluptatibus animi
                        aspernatur ducimus quas obcaecati mollitia quibusdam temporibus
                        culpa dolore molestias blanditiis consequuntur sunt nisi.
                    </div>
                </div>
            </div>
            <div className='projects_slider'>
                <Slider {...settings}>

                        
                            <div className='slider_row_item slide1'>
                                <div className='slider_row_item_overlayer'>
                                    <div className='slider_row_item_text'>
                                        <div className='slider_row_item_text_big_text'>Project Name</div>
                                        <div className='slider_row_item_text_big_text'> here</div>
                                        <div className='slider_row_item_text_small_text'>Design</div>
                                    </div>
                                </div>
                            </div>

                            <div className='slider_row_item slide2'>
                                <div className='slider_row_item_overlayer'>
                                    <div className='slider_row_item_text'>
                                        <div className='slider_row_item_text_big_text'>Project Name</div>
                                        <div className='slider_row_item_text_big_text'> here</div>
                                        <div className='slider_row_item_text_small_text'>illustration</div>
                                    </div>
                                </div>
                            </div>

                            <div className='slider_row_item slide3'>
                                <div className='slider_row_item_overlayer'>
                                    <div className='slider_row_item_text'>
                                        <div className='slider_row_item_text_big_text'>Project Name</div>
                                        <div className='slider_row_item_text_big_text'>here</div>
                                        <div className='slider_row_item_text_small_text'>Branding</div>
                                    </div>
                                </div>
                            </div>

                            <div className='slider_row_item slide4'>
                                <div className='slider_row_item_overlayer'>
                                    <div className='slider_row_item_text'>
                                        <div className='slider_row_item_text_big_text'>Project Name</div>
                                        <div className='slider_row_item_text_big_text'> here</div>
                                        <div className='slider_row_item_text_small_text'>Web Development</div>
                                    </div>
                                </div>
                            </div>

                            <div className='slider_row_item slide3'>
                                <div className='slider_row_item_overlayer'>
                                    <div className='slider_row_item_text'>
                                        <div className='slider_row_item_text_big_text'>Project Name</div>
                                        <div className='slider_row_item_text_big_text'>here</div>
                                        <div className='slider_row_item_text_small_text'>Branding</div>
                                    </div>
                                </div>
                            </div>

                            <div className='slider_row_item slide1'>
                                <div className='slider_row_item_overlayer'>
                                    <div className='slider_row_item_text'>
                                        <div className='slider_row_item_text_big_text'>Project Name</div>
                                        <div className='slider_row_item_text_big_text'> here</div>
                                        <div className='slider_row_item_text_small_text'>Design</div>
                                    </div>
                                </div>
                            </div>

                         
                        

                        

                </Slider>
            </div>
        </div>
    );
}


export default Projects;


import React from "react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './style.css';

/*Images*/
import imageslider1 from './images/refresh.png';
import imageslider2 from './images/download.png'
import imageslider4 from './images/messenger.png'
import imageslider3 from './images/monitor.png'
import { useState } from "react";

function Services() {


    const [showsSLide, SetShowSlide] = useState(4);
    
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: showsSLide,
        slidesToScroll: 1,
        autoplay: true,
    };
    
    
    window.addEventListener('scroll', () =>{
        if(window.innerWidth<=1024)
        {
            SetShowSlide(3);
        }

        if(window.innerWidth<=768)
        {
            SetShowSlide(2);
        }
        if(window.innerWidth>1024)
        {
            SetShowSlide(4);
        }

    });



    return (
        <div className="services" id="services">
            <div className="services_top_block">
                <div className="services_container">
                    <div className="services_top_block_title">Services</div>
                    <div className="services_top_block_text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Rem possimus distinctio ex. Natus totam voluptatibus animi aspernatur
                        ducimus quas obcaecati mollitia quibusdam temporibus culpa dolore molestias
                        blanditiis consequuntur sunt nisi.
                    </div>
                </div>
            </div>

            <div className="services_slider">
                <Slider {...settings}>

                    <div className="services_slider_item_holder">

                        <div className="services_slider_row_item">

                            <div className="services_slider_row_item_progressbar">
                                <div className="row_item_progressbar_layer"></div>
                            </div>

                            <div className="services_slider_row_item_info">
                                <div className="services_slider_row_item_info_cirlce">
                                    <img src={imageslider1} />
                                </div>
                                <div className="services_slider_row_item_info_title">Creative Design</div>
                                <div className="services_slider_row_item_info_text">
                                    Natus totam voluptatibus animi aspernatur ducimus
                                    quas obcaecati mollitia quibusdam temporibus culpa
                                    dolore molestias blanditiis consequuntur sunt nisi.
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="services_slider_item_holder">

                        <div className="services_slider_row_item">

                            <div className="services_slider_row_item_progressbar">
                                <div className="row_item_progressbar_layer"></div>
                            </div>

                            <div className="services_slider_row_item_info">
                                <div className="services_slider_row_item_info_cirlce">
                                    <img src={imageslider2} />
                                </div>
                                <div className="services_slider_row_item_info_title">Wordpress Integration</div>
                                <div className="services_slider_row_item_info_text">
                                    Natus totam voluptatibus animi aspernatur ducimus
                                    quas obcaecati mollitia quibusdam temporibus culpa
                                    dolore molestias blanditiis consequuntur sunt nisi.
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="services_slider_item_holder">

                        <div className="services_slider_row_item">

                            <div className="services_slider_row_item_progressbar">
                                <div className="row_item_progressbar_layer"></div>
                            </div>

                            <div className="services_slider_row_item_info">
                                <div className="services_slider_row_item_info_cirlce">
                                    <img src={imageslider3} />
                                </div>
                                <div className="services_slider_row_item_info_title">web development</div>
                                <div className="services_slider_row_item_info_text">
                                    Natus totam voluptatibus animi aspernatur ducimus
                                    quas obcaecati mollitia quibusdam temporibus culpa
                                    dolore molestias blanditiis consequuntur sunt nisi.
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="services_slider_item_holder">

                        <div className="services_slider_row_item">

                            <div className="services_slider_row_item_progressbar">
                                <div className="row_item_progressbar_layer"></div>
                            </div>

                            <div className="services_slider_row_item_info">
                                <div className="services_slider_row_item_info_cirlce">
                                    <img src={imageslider4} />
                                </div>
                                <div className="services_slider_row_item_info_title">HTML5/CSS3</div>
                                <div className="services_slider_row_item_info_text">
                                    Natus totam voluptatibus animi aspernatur ducimus
                                    quas obcaecati mollitia quibusdam temporibus culpa
                                    dolore molestias blanditiis consequuntur sunt nisi.
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="services_slider_item_holder">

                        <div className="services_slider_row_item">

                            <div className="services_slider_row_item_progressbar">
                                <div className="row_item_progressbar_layer"></div>
                            </div>

                            <div className="services_slider_row_item_info">
                                <div className="services_slider_row_item_info_cirlce">
                                    <img src={imageslider2} />
                                </div>
                                <div className="services_slider_row_item_info_title">Wordpress Integration</div>
                                <div className="services_slider_row_item_info_text">
                                    Natus totam voluptatibus animi aspernatur ducimus
                                    quas obcaecati mollitia quibusdam temporibus culpa
                                    dolore molestias blanditiis consequuntur sunt nisi.
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="services_slider_item_holder">

                        <div className="services_slider_row_item">

                            <div className="services_slider_row_item_progressbar">
                                <div className="row_item_progressbar_layer"></div>
                            </div>

                            <div className="services_slider_row_item_info">
                                <div className="services_slider_row_item_info_cirlce">
                                    <img src={imageslider3} />
                                </div>
                                <div className="services_slider_row_item_info_title">web development</div>
                                <div className="services_slider_row_item_info_text">
                                    Natus totam voluptatibus animi aspernatur ducimus
                                    quas obcaecati mollitia quibusdam temporibus culpa
                                    dolore molestias blanditiis consequuntur sunt nisi.
                                </div>
                            </div>

                        </div>
                    </div>



                </Slider>
            </div>

            
        </div>
    );
}

export default Services;


import React from 'react';
import './style.css';

function Footer()
{


    return(

        <div className='footer'>

            <div className='footer_container'>

                <div className='footer_grid'>

                    <div className='footer_grid_item'>
                        <div className='footer_grid_item_title'>About us</div>
                        <div className='footer_grid_item_text'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Porro consectetur ut hic ipsum et veritatis corrupti.
                            Itaque eius soluta optio dolorum temporibus in, atque,
                            quos fugit sunt sit quaerat dicta.
                        </div>
                    </div>

                    <div className='footer_grid_item'>
                        <div className='footer_grid_item_title'>Links</div>
                        <div className='footer_grid_item_links'>

                            <div className='footer_item_link'>
                                <a>Home</a>
                            </div>

                            <div className='footer_item_link'>
                                <a>Projects</a>
                            </div>

                            <div className='footer_item_link'>
                                <a>Process</a>
                            </div>

                            <div className='footer_item_link'>
                                <a>Testimonials</a>
                            </div>

                            <div className='footer_item_link'>
                                <a>Servrices</a>
                            </div>

                        </div>
                    </div>

                    <div className='footer_grid_item'>
                        <div className='footer_grid_item_title'>Subscribe</div>
                        <div className='footer_grid_item_text'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Nesciunt incidunt iure iusto architecto? Numquam, natus?
                        </div>
                        <div className='footer_grid_item_form'>
                            < input placeholder='Email' className='footer_grid_item_form_input' />
                            <button className='footer_grid_item_form_button'>Subscribe</button>
                        </div>
                    </div>

                </div>

                <div className='footer_bottom'>
                    Copyright ©2022 All rights reserved | This template is made with &#x2764;  by Colorlib
                </div>
            </div>
        </div>
    );



}

export default Footer;
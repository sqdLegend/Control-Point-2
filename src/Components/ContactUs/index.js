import React from "react";
import './style.css';
import contactImage from './images/about_1.jpg';

function ContactUs()
{

    return(
        <div className="contact_us">
            <div className="contact_container">

                <div className="contact_flex">
                    <div className="contact_flex_left">

                        <div className="contact_left_title">
                            CONTACT US
                        </div>
                        <div className="contact_left_text">
                            Natus totam voluptatibus animi aspernatur ducimus quas
                            obcaecati mollitia quibusdam temporibus
                            culpa dolore molestias blanditiis consequuntur sunt nisi.
                        </div>

                        <div className="contact_form">

                            <div className="short_input_block">
                                <input className="short_input" placeholder="First Name"></input>
                                <input className="short_input" placeholder="Last Name"></input>
                            </div>

                            <div className="input_block">
                                <input className="long_input" placeholder="Subject"></input>
                            </div>

                            <div className="input_block">
                                <input className="long_input" placeholder="Email"></input>
                            </div>

                            <div className="input_block">
                                <textarea className="input_textarea" placeholder="Write you message here."></textarea>
                            </div>

                            <button className="contact_form_button">Send message</button>

                           
                        </div>
                    </div>
                    <div className="contact_flex_right">
                        <img src={contactImage}/>
                    </div>
                </div>

            </div>
        </div>
    );
}


export default ContactUs;
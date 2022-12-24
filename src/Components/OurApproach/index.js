
import React from "react";
import './style.css';

import { useInView } from 'react-intersection-observer';

import Glasses from "./images/glasses.svg";
import Arc from "./images/arc.png";
import Monitor from "./images/monitor.png";

function Approach()
{

    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0.4,
        triggerOnce: true,
      });


    return(
        <div className="Approach">

            <div className="approach_container">

                <div ref={ref} className={ inView ? 'approach_top_block approaches_top_animation' : 'approach_top_block'}>
                    
                    <div className="approach_top_block_title">Our Approach</div>
                    <div className="approach_top_block_text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                         Rem possimus distinctio ex. Natus totam voluptatibus animi aspernatu
                         r ducimus quas obcaecati mollitia quibusdam temporibus culpa dolore molestias
                          blanditiis consequuntur sunt nisi.
                    </div>
                </div>

                <div className="approach_cards">

                    

                    <div ref={ref} className={inView ? 'approach_card approach_card1_animation': 'approach_card'}>
                        <div className="approach_card_image">
                            <img src={Glasses}/>
                        </div>
                        <div className="approach_card_title">
                            DATA GATHERING
                        </div>

                        <div className="approach_card_text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Rem possimus distinctio ex. Natus totam voluptatibus animi
                            aspernatur ducimus quas obcaecati mollitia quibusdam temporibus
                            culpa dolore molestias blanditiis consequuntur sunt nisi.
                        </div>
                    </div>

                    <div className={inView ? 'approach_card approach_card2_animation': 'approach_card'}>
                        <div className="approach_card_image">
                            <img src={Arc}/>
                        </div>
                        <div className="approach_card_title">
                            IMPLEMENTATION
                        </div>

                        <div className="approach_card_text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Rem possimus distinctio ex. Natus totam voluptatibus animi
                            aspernatur ducimus quas obcaecati mollitia quibusdam temporibus
                            culpa dolore molestias blanditiis consequuntur sunt nisi.
                        </div>
                    </div>

                    <div className={inView ? 'approach_card approach_card3_animation': 'approach_card'}>
                        <div className="approach_card_image">
                            <img src={Monitor}/>
                        </div>
                        <div className="approach_card_title">
                            LAUNCH
                        </div>

                        <div className="approach_card_text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Rem possimus distinctio ex. Natus totam voluptatibus animi
                            aspernatur ducimus quas obcaecati mollitia quibusdam temporibus
                            culpa dolore molestias blanditiis consequuntur sunt nisi.
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );



}

export default Approach;
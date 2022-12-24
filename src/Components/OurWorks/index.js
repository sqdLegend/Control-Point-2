

import React, { useEffect } from "react";
import './style.css';
import Tick from './images/checkmark.png';
import worksImage from './images/img_1.jpg';
import Arc from './images/arc.png';
import { InView, useInView } from 'react-intersection-observer';

function OurWorks(props) {


    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0.3,
        triggerOnce: true,
      });


    return (
        <div className='our_works'>
            <div className="works_container">

                <div className="works_flex">

                    <div ref={ref} className={inView ? 'works_flex_left works_flex_left_animation' : 'works_flex_left'}>

                        <div className="works_flex_left_title">
                            LOVE OUR WORKS
                        </div>

                        <div className="works_flex_left_text">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Rem possimus distinctio ex. Natus totam voluptatibus animi aspernatur
                                ducimus quas obcaecati mollitia quibusdam temporibus culpa dolore molestias
                                blanditiis consequuntur sunt nisi.
                            </p>
                            <p>
                                Aperiam neque id, illum laudantium autem vero quae debitis
                                tempora modi. Ipsa molestias enim in rem et incidunt beatae
                                fugit, ab quam optio atque maiores facere est quidem, veritatis commodi.
                            </p>
                        </div>

                        <div className="works_flex_left_lables">

                            <div className="lables_item">
                                <img src={Tick} />
                                <span>Aperiam neque id illum laudantium</span>
                            </div>

                            <div className="lables_item">
                                <img src={Tick} />
                                <span>Maiores facere est quidem</span>
                            </div>

                            <div className="lables_item">
                                <img src={Tick} />
                                <span>Laudantium autem vero</span>
                            </div>

                        </div>
                    </div>

                    <div className={inView ? 'works_flex_right works_flex_right_animation' : 'works_flex_right'}>
                        <img src={worksImage}/>
                        <div className="works_flex_right_card">

                            <img src={Arc} />

                            <div className="works_flex_right_card_title">
                                 PIXEL PERFECT TEMPLATES
                            </div>

                            <div className="works_flex_right_card_text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                 Obcaecati commodi aspernatur eum eius inventore facilis.
                            </div>

                            <div className="works_flex_right_card_sub_text">
                                <span className="simple_text">Visit</span>
                                <span className="red_text">Colorib</span>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default OurWorks;
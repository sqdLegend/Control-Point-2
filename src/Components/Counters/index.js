


import React, { useState } from 'react';

import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import { useInView } from 'react-intersection-observer';
import './style.css';


import counterImage1 from './images/refresh.png';
import counterImage2 from './images/download.png';
import counterImage3 from './images/monitor.png';
import counterImage4 from './images/messenger.png';

function Counters() {


    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0.3,
        triggerOnce: true,
      });


    const [onEnter, SetOnEnter] = useState(false);

    return (
        <ScrollTrigger onEnter={() => SetOnEnter(true)}>
            { onEnter &&  <div className='counters'>
                <div className='counters_container'>
                    <div className='counters_holder'>

                        <div ref={ref}  className={inView ? 'counters_item counters_item1_animation' : 'counters_item'}>

                            <div className='counter_item_img'>
                                <img src={counterImage1} />
                            </div>

                            <div className='counter_item_info'>
                                <div className='counter_item_info_number'>
                                    <CountUp start={0} end={360} duration={5} delay={0} />
                                </div>
                                <div className='counter_item_info_text'>Creativity</div>
                            </div>

                        </div>

                        <div ref={ref} className={inView ? 'counters_item counters_item2_animation' : 'counters_item'}>

                            <div className='counter_item_img'>
                                <img src={counterImage2} />
                            </div>

                            <div className='counter_item_info'>
                                <div className='counter_item_info_number'>
                                    <CountUp start={0} end={4500} duration={5} delay={0} />
                                </div>
                                <div className='counter_item_info_text'>WordPress Themes</div>
                            </div>

                        </div>

                        <div ref={ref}  className={inView ? 'counters_item counters_item3_animation' : 'counters_item'}>

                            <div className='counter_item_img'>
                                <img src={counterImage3} />
                            </div>

                            <div className='counter_item_info'>
                                <div className='counter_item_info_number'>
                                    <CountUp start={0} end={120} duration={5} delay={0} />
                                </div>
                                <div className='counter_item_info_text'>HTML5/CSS3</div>
                            </div>

                        </div>

                        <div ref={ref}  className={inView ? 'counters_item counters_item4_animation' : 'counters_item'}>

                            <div className='counter_item_img'>
                                <img src={counterImage4} />
                            </div>

                            <div className='counter_item_info'>
                                <div className='counter_item_info_number'>
                                    <CountUp start={0} end={3913} duration={5} delay={0} />
                                </div>
                                <div className='counter_item_info_text'>Bootstrap</div>
                            </div>

                        </div>

                    </div>
                </div>
            </div> }
        </ScrollTrigger>

    );
}


export default Counters;
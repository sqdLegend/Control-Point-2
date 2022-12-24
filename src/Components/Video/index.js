

import React, { useState } from 'react';

import './style.css';

import playButton from './images/play.png';
import video from './images/video.mp4';

function Video()
{

    const [showVideo, SetShowVideo] = useState(false);

    const Show = () =>{
        SetShowVideo(true)
    }

    return(
        <div className='video'>
            <div className='video_container'>

                <div onClick={Show} className='video_image'>
                    <div className='play_button'>
                        <img src= {playButton}/>
                    </div>
                </div>
            </div>

                <div onClick={() =>{SetShowVideo(false)}} className={showVideo ? 'video_mp4 show' : 'video_mp4'}>
                     <video className='video_track' onClick={el => el.stopPropagation()} controls   src={video}></video>
                </div>
        </div>
    );
}

export default Video;
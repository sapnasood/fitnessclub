import React from 'react';
import './video.css';

const Player = ()=>{
return (
  <div className='video'>
  <video id="background-video" autoPlay loop >
       <source src='https://campgladiator.com/upload/files/CG_Website_2018_2_.mp4' type="video/mp4" />
       Your browser does not support the video tag.
   </video>
   </div>  
)
}

export default Player;

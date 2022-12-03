import React from 'react';
import Box from './Box';
import image1 from '../images/wifi.png';
import image2 from '../images/schedule.png';

function Services() {
  return (
    <div id='services'>
        <div className='s-heading'>
            <h1> Configurations </h1>
            <p> Let's configurate our software </p>
        </div>
        <div className='b-container'>
            <Box image={image1} alt='image1' button='Wifi'/>
            <Box image={image2} alt='image2' button='Schedule'/>
        </div>

    </div>
  )
}

export default Services;
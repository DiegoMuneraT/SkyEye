import React from 'react'
import featureImage from '../images/features.png'

function Features() {
  return (
    <div id='features'>
      <div className='features-model'>
        <img src={featureImage} alt='feature-img'/>
      </div>
      <div className='features-text'>
        <h2> Features </h2>
        <h3> Some tools that our <span>Software</span> has </h3>
        <p>
          Signal To Image: Conversion of signal to image of NOAAS <br/>
          AI analize: Use of AI to analize images from sky <br/> 
          Websdr: Web interfaces for sdr on kit
        </p>
        <a href='https://sky--eye.herokuapp.com/tools.html' target="_blank"><button>View More</button></a>
      </div>
    </div>
  )
}

export default Features
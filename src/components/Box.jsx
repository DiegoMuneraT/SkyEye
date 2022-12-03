import React from 'react'

function Box(props) {
  return (
    <div>
        <div className='s-box'>
            <div className='s-b-img'>
                <img src={props.image} alt={props.alt}/>
            </div>
            <div className='s-b-text'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Minima odit sapiente aspernatur sed quam, error, magnam</p>
                <a href='/' className='cv-btn'>{props.button}</a>
            </div>
        </div>
    </div>
  )
}

export default Box;
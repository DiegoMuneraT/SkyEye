import React from 'react'
import Navbar from './Navbar';

function Header() {
  return (
    <div id='main'>
        <Navbar />
        <div className='title'>
            <h1>It's <span>SkyEye</span> project</h1>
            <p className='details'>
                Satellite images help to identify environmental
                phenomena occurring on the surface of the planet
                so that the proper measures can be taken
            </p>
            <p className='details'>
                However, accessing and processing satellite data
                is often seen as inaccessible for the people who 
                need it the most
            </p>
            <p className='details'>
                SkyEye is a tiny replicable, affordable, and easy to use
                kit that allows connection to climatological satellites and
                enables users to access an AI system to process the data and
                detect climatological and/or landscape anomalies that may lead
                to accident prevention and detection of illegal activities in 
                remote areas
            </p>
            <p className='details'>
                Our main motivation is allowing communities to properly protect their
                territories from illegal activities and natural disasters
            </p>
        </div>
    </div>
  )
}

export default Header;
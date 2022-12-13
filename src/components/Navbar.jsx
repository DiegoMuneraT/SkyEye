import React from 'react'
import {Link} from 'react-scroll'
import logo from '../images/logo.png'

function Navbar() {
  return (
    <div>
        <nav>
            <Link to='main' className='logo'>
                <img src={logo} alt='logo'/>
            </Link>
            <input className='menu-btn' type='checkbox' id='menu-btn'/>
            <label className='menu-icon' for='menu-btn'>
                <span className='nav-icon'></span>
            </label>
            <ul className='menu'>
                <li><Link to='main' className='active'> Home </Link></li>
                <li><Link to='features'> Features </Link></li>
                <li><Link to='services'> Configurations </Link></li>
                <li><Link to='reports'> Reports </Link></li>
                <li><a href='https://github.com/jero98772/LambdaCard-NasaSpaceAppsChalleng' target="_blank"> Code </a></li>
            </ul>
            <Link to='/' className='App'>App</Link>
        </nav>
    </div>
  )
}
export default Navbar;
import React from 'react'
import globeicon from '../images/globe-icon.png'
export default function Navbar () {
    return (
        <nav className='navbar'>
            <img className='navbar--icon' src={globeicon} alt="A World Icon" />
            <p className='navbar--text'>my travel journal.</p>
        </nav>
    )
}
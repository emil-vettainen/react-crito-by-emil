import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import BtnLinks from '../ui/BtnLinks'
import SocialMedia from './SocialMedia'

const MainMenu = () => {
    const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="main-menu">
    <button onClick={() => setMenuOpen(!menuOpen)} className={menuOpen ? 'fixed': ''}>
        {menuOpen ? (<i className="fa-light fa-xmark-large"></i>) : (<i className="fa-light fa-bars-staggered"></i>) }
    </button>
    <nav className={`primary-navigation ${menuOpen ? 'show' : ''}`}>
        <ul>
            <li><NavLink className="underline" to="/">Home</NavLink></li>
            <li><NavLink className="underline" to="/service">Service</NavLink></li>
            <li><NavLink className="underline" to="/news">News</NavLink></li>
            <li><NavLink className="underline" to="/contact">Contact</NavLink></li>
        </ul>
        <div className="login-button">
            <BtnLinks title="Login" url="/login" />
        </div>

        {menuOpen? (
           <SocialMedia />
        ):''}
    </nav>
</div>
  )
}

export default MainMenu
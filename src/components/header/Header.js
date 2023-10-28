import React from 'react'
import './Header.css'
import Logo from '../../assets/icons/Logo-header.svg'
import { Link, NavLink } from 'react-router-dom'
import BtnLinks from '../ui/BtnLinks'
import SocialIcons from '../ui/SocialIcons'

const Header = () => {
  return (
    <header>
        <div className="container">
            <Link to="/"><img src={Logo} alt="Crito-logo" /></Link>
            <div className="menu">
                <div className="top-menu">
                    <div className="contact">
                        <div className="contact-info">
                            <a href="/"><i className="fa-regular fa-phone-volume" aria-hidden="true"></i>+46 (8) 121 470
                                50</a>
                        </div>
                        <div className="contact-info">
                            <a href="/"><i className="fa-regular fa-envelope-dot" aria-hidden="true"></i>info@crito.com</a>
                        </div>
                        <div className="contact-info last">
                            <a href="/"><i className="fa-regular fa-location-dot" aria-hidden="true"></i>Sveavägen 31, 111
                                34 STOCKHOLM</a>
                        </div>
                    </div>
                    <div className="social-media">
                        <ul>
                            <SocialIcons title="Facebook" url="https://facebook.com" icon="fa-brands fa-facebook" />
                            <SocialIcons title="Twitter" url="https://twitter.com" icon="fa-brands fa-twitter" />
                            <SocialIcons title="Instagram" url="https://instagram.com" icon="fa-brands fa-instagram" />
                            <SocialIcons title="Linkedin" url="https://linkedin.com" icon="fa-brands fa-linkedin" />  
                        </ul>
                    </div>
                </div>
                <div className="main-menu">
                    <button aria-label="Toggle Menu"><i className="fa-light fa-bars-staggered" aria-hidden="true"></i></button>
                    <nav className="primary-navigation">
                        <ul>
                            <li><NavLink className="underline" to="/">Home</NavLink></li>
                            <li><NavLink className="underline" to="/service">Service</NavLink></li>
                            <li><NavLink className="underline" to="/news">News</NavLink></li>
                            <li><NavLink className="underline" to="/contact">Contact</NavLink></li>
                        </ul>

                        <div className="login-button">
                            <BtnLinks title="Login" url="/" />
                        </div>

                    </nav>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header
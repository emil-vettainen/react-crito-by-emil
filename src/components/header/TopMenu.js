import React from 'react'
import SocialMedia from './SocialMedia'
import { Link } from 'react-router-dom'


const TopMenu = () => {
  return (
    <div className="top-menu">
        <div className="contact">
            <div className="contact-info">
                <Link to="/"><i className="fa-regular fa-phone-volume" aria-hidden="true"></i>+46 (8) 121 470
                    50</Link>
            </div>
            <div className="contact-info">
                <Link to="/"><i className="fa-regular fa-envelope-dot" aria-hidden="true"></i>info@crito.com</Link>
            </div>
            <div className="contact-info last">
                <Link to="/"><i className="fa-regular fa-location-dot" aria-hidden="true"></i>Sveavägen 31, 111
                    34 STOCKHOLM</Link>
            </div>
        </div>
       <SocialMedia />
    </div>
)
}

export default TopMenu
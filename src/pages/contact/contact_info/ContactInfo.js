import React from 'react'
import './ContactInfo.css'

const ContactInfo = () => {
  return (
    <section className="connect">
            <div className="container">

                <div className="connect-card">
                    <div className="connect-icon">
                        <i className="fa-solid fa-location-dot"></i>
                    </div>
                    <div className="connect-info">
                        <h4>Visit us</h4>
                        <a href="https://enrio.se" target="_blank" rel="noreferrer noopener">Sveavägen 31<br />111 34 STOCKHOLM</a>
                    </div>
                </div>

                <div className="connect-card">
                    <div className="connect-icon">
                        <i className="fa-solid fa-phone"></i>
                    </div>
                    <div className="connect-info">
                        <h4>Call us</h4>
                        <a href="tel:031" target="_blank" rel="noreferrer noopener">+48 (8) 121 470 51</a>
                        <a href="tel:031" target="_blank" rel="noreferrer noopener">+48 (8) 121 470 50</a>
                    </div>
                </div>

                <div className="connect-card">
                    <div className="connect-icon">
                        <i className="fa-solid fa-envelope"></i>
                    </div>
                    <div className="connect-info">
                        <h4>Email us</h4>
                        <a href="mailto:info@crito.com" target="_blank" rel="noreferrer noopener">info@crito.com</a>
                        <a href="mailto:support@cito.com" target="_blank" rel="noreferrer noopener">support@crito.com</a>
                    </div>
                </div>

                
            </div>
        </section>
    )
}

export default ContactInfo
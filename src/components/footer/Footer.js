import React from 'react'
import './Footer.css'
import FooterLogo from '../../assets/icons/Logo-footer.svg'
import { Link } from 'react-router-dom'
import SocialIcons from '../ui/SocialIcons'

const Footer = () => {
  return (
    <footer>
        <section className="footer">
            <div className="container">
                <div className="footer-about">
                    <Link to="/"><img src={FooterLogo} alt="Crito-logo" /></Link>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati voluptas
                        voluptates!
                        Voluptates laborum nam ratione minus necessitatibus, iure praesentium.</p>
                </div>
                <div className="company">
                    <h2>Company</h2>
                    <nav>
                        <ul>
                            {/* <li><Link href="/">About</Link></li>
                            <li><Link href="/">Features</Link></li>
                            <li><Link href="/">Works</Link></li>
                            <li><Link href="/">Career</Link></li> */}
                        </ul>
                    </nav>
                </div>
                <div className="help">
                    <h2>Help</h2>
                    <nav>
                        <ul>
                            {/* <li><Link href="/">Customer Support</Link></li>
                            <li><Link href="/">Delivery Details</Link></li>
                            <li><Link href="/">Terms & Conditions</Link></li>
                            <li><Link href="/">Privacy Policy</Link></li> */}
                        </ul>
                    </nav>
                </div>
                <div className="resources">
                    <h2>Resources</h2>
                    <nav>
                        <ul>
                            {/* <li><a href="#">Free eBooks</a></li>
                            <li><a href="#">Development Tutorial</a></li>
                            <li><a href="#">How to - Blog</a></li>
                            <li><a href="#">Youtube Playlist</a></li> */}
                        </ul>
                    </nav>
                </div>
                <div className="link">
                    <h2>Link</h2>
                    <nav>
                        <ul>
                            {/* <li><a href="#">Free eBooks</a></li>
                            <li><a href="#">Development Tutorial</a></li>
                            <li><a href="#">How to - Blog</a></li>
                            <li><a href="#">Youtube Playlist</a></li> */}
                        </ul>
                    </nav>
                </div>
            </div>
        </section>

        
        <div className="footer-bottom">
            <div className="container">
                <p>&copy; 2023 Crito - Consulting Company Inc. All Rights Reserved.</p>
                <ul aria-label="social links" className="social-links">
                    
                    <SocialIcons title="Facebook" url="https://facebook.com" icon="fa-brands fa-facebook" />
                    <SocialIcons title="Twitter" url="https://twitter.com" icon="fa-brands fa-twitter" />
                    <SocialIcons title="Instagram" url="https://instagram.com" icon="fa-brands fa-instagram" />
                    <SocialIcons title="Linkedin" url="https://linkedin.com" icon="fa-brands fa-linkedin" />  

                </ul>

            </div>
        </div>

    </footer>
  )
}

export default Footer
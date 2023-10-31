import React from 'react'
import './AboutCompany.css'
import BtnLinks from '../../../components/ui/BtnLinks'
import { Link } from 'react-router-dom'
import AboutImg from '../../../assets/images/about.jpg'

const AboutCompany = () => {
  return (
    <section className="about-company">
            <div className="container">

                <div className="about-img">
                    <img src={AboutImg} alt="Picture of Samantha walking in the company hallway" />
                    <div className="img-info">
                        <h4>Samantha Brown, <span>Founder</span></h4>
                        <p>"Lorem ipsum dolor sit amet consectetur<br /> adipisicing elit."</p>
                    </div>
                </div>

                <article className="about-info">
                    <h3>about company</h3>
                    <h2>we are business consulting & credit repair experts</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quas assumenda esse
                        obcaecati? Ex esse error voluptates iure vel totam eos.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse quasi incidunt adipisci
                        accusantium libero provident voluptate amet.</p>
                    <div className="about-buttons">
                        <BtnLinks title="Learn more" url="/about" />
                        <Link className="play" to="/about/intro-video" aria-label="link to intro video"><i
                                className="fa-sharp fa-solid fa-play" aria-hidden="true"></i>Intro Video</Link>
                    </div>
                </article>

            </div>
        </section>
  )
}

export default AboutCompany
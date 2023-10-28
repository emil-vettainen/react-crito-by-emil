import React from 'react'
import '../showcase/showcase.css'
import ShowcaseImg from '../../../assets/images/hero.png'
import BtnLinks from '../../../components/ui/BtnLinks'


const Showcase = () => {
  return (
    <section className="hero">
        <div className="container">
            <div className="hero-info">
                <h1>we provide the best business solutions</h1>
                <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
                <BtnLinks title="Get Consulting" url="/" />
                <BtnLinks type="transparent" title="Learn More" url="/" />
            </div>
            <img src={ShowcaseImg} className="hero-img" alt="guy with suit, thinking while looking at his ipad" /> 
        </div>
    </section>
  )
}

export default Showcase
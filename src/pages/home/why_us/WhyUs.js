import React from 'react'
import './WhyUs.css'

const WhyUs = () => {
  return (
    <section className="why-us">
            <div className="container">
               
                <div className="us-info col-12 col-lg-6 col-xl-5 col-xxl-4">
                    <h3>why choose us</h3>
                    <h2>Why we are the best business consulting agency</h2>

                    <div className="us-icon-grid">
                        <div className="us-icon-info">
                           
                            <img src="/icons/process.svg" alt="Illustration of thumbs up." />
                            <div className="icon-txt">
                                <h4>Process Exellence</h4>
                                <p>Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                        </div>

                        <div className="us-icon-info">
                            <img src="/icons/strategic.svg" alt="Illustration of hexagon." />
                            <div className="icon-txt">
                                <h4>Strategic Planning</h4>
                                <p>Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                        </div>

                        <div className="us-icon-info">
                            <img src="/icons/experience.svg" alt="Illustration of design tool." />
                            <div className="icon-txt">
                                <h4>Experience Design</h4>
                                <p>Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                        </div>

                        <div className="us-icon-info">
                            <img src="/icons/ai.svg" alt="Illustration of AI." />
                            <div className="icon-txt">
                                <h4>Artificial Inteligence</h4>
                                <p>Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="us-img  ">
                    <img src="/images/why-choose-us.jpg"
                        alt="Picture of two colleagues conversing in a conference room" />
                </div>
            </div>

        </section>
  )
}

export default WhyUs
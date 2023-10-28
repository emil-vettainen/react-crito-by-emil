import React from 'react'
import './Features.css'
import BtnLinks from '../../../components/ui/BtnLinks'
import FeaturesCard from './FeaturesCard'



const Features = () => {
    const OurFeatures = [
        {src:'wow', alt: 'wow', title: 'Business Advice', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'},
        {src:'wow', alt: 'wow', title: 'Startup Business', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'},
        {src:'wow', alt: 'wow', title: 'Financial Advice', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'},
        {src:'wow', alt: 'wow', title: 'Risk Managemnt', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'}
    ]
  return (
    <section className="features">
            <div className="border-around">
                <div className="container">
                    <article className="features-info">
                        <h3>features</h3>
                        <h2>Our Accounting is trusted by thousand of companies</h2>
                        <BtnLinks title="Learn more" url="/features" />
                    </article>
                    <div className="features-grid">
                        {
                            OurFeatures.map((feature, index) => (
                                <FeaturesCard key={index} src={feature.src} alt={feature.alt} title={feature.title} description={feature.description} />
                            ))
                        }
                    </div>
                </div>
            </div>
    </section>
  )
}

export default Features
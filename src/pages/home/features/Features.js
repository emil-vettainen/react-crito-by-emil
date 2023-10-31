import React, { useEffect, useState } from 'react'
import './Features.css'
import BtnLinks from '../../../components/ui/BtnLinks'
import FeaturesCard from './FeaturesCard'




const Features = () => {
    const [features, setFeatures] = useState ([])

    useEffect (() => {
        const get = () => {

            const features = [
                {id: '1', src: 'm' , alt: 'wow', title: 'Business Advice', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'},
                {id: '2', src: 'm', alt: 'wow', title: 'Startup Business', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'},
                {id: '3', src: 'm', alt: 'wow', title: 'Financial Advice', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'},
                {id: '4', src: 'm', alt: 'wow', title: 'Risk Managemnt', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'}
            ]
    
            setFeatures(features)
        }

        get()


    }, [])

    

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
                            features.map((feature) => (
                                <FeaturesCard key={feature.id} src={feature.src} alt={feature.alt} title={feature.title} description={feature.description} />
                            ))
                        }
                    </div>
                </div>
            </div>
    </section>
  )
}

export default Features
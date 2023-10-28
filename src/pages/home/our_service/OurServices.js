import React from 'react'
import './OurServices.css'
import ServiceCard from './ServiceCard'
import BtnLinks from '../../../components/ui/BtnLinks'

const OurServices = () => {
  const services = [
    { title: 'Business Advice', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.', url: '/services/business-advice'},
    { title: 'Startup Business', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.', url: '/services/startup-business'},
    { title: 'Financial Advice', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.', url: '/services/financial-advice'},
    { title: 'Risk Management', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.', url: '/services/risk-management'}
  ]
  return (
    <section className="our-services">
      <div className="container">
        <h3>Our Services</h3>
        <h2>we provide the best service for consulting</h2>

        <div className="service-box-grid">
          {
            services.map((service, index) => (
              <ServiceCard key={index} title={service.title} description={service.description} url={service.url} />
            ))
          }
        </div>

        <div className="btn-browse-services">
          <BtnLinks title="Browse services" url="/" type="transparent" />
        </div>
      </div>
    </section>
  )
}

export default OurServices
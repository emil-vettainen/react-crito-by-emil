import React, { useEffect, useState } from 'react'
import './OurServices.css'
import ServiceCard from './ServiceCard'
import BtnLinks from '../../../components/ui/BtnLinks'

const OurServices = () => {

  const [services, setServices] = useState([])

  useEffect (() => {
    const getServices = () => {

      const services = [
        { id: '1', title: 'Business Advice', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.', url: '/services/business-advice'},
        { id: '2', title: 'Startup Business', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.', url: '/services/startup-business'},
        { id: '3', title: 'Financial Advice', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.', url: '/services/financial-advice'},
        { id: '4', title: 'Risk Management', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.', url: '/services/risk-management'}
      ]

      setServices(services)

    }

    getServices()


  }, [])


  
  return (
    <section className="our-services">
      <div className="container">
        <h3>Our Services</h3>
        <h2>we provide the best service for consulting</h2>

        <div className="service-box-grid">
          {
            services.map((service) => (
              <ServiceCard key={service.id} title={service.title} description={service.description} url={service.url} />
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
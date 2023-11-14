import React from 'react'
import './OurServices.css'
import ServicesCard from '../../../components/ServicesCard'
import BtnLinks from '../../../components/ui/BtnLinks'

const OurServices = () => {
    const services = [
        { id: '1', title: 'Business Advice', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.', url: '/services/business-advice'},
        { id: '2', title: 'Startup Business', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.', url: '/services/startup-business'},
        { id: '3', title: 'Financial Advice', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.', url: '/services/financial-advice'},
        { id: '4', title: 'Risk Management', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.', url: '/services/risk-management'}
    ]   

  return (
        <section className="our-services">
            <div className="container">
                <h3>Our Services</h3>
                <h2>we provide the best service for consulting</h2>
                <div className="service-box-grid">
                    {services.map((service) => <ServicesCard key={service.id} {...service} /> )}
                </div>
                <div className="btn-browse-services">
                    <BtnLinks title="Browse services" url="/services" type="transparent" />
                </div>
            </div>
        </section>
    )
}

export default OurServices
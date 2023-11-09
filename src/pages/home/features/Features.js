import React from 'react'
import './Features.css'
import BtnLinks from '../../../components/ui/BtnLinks'
import FeatureCard from '../../../components/features_card/FeatureCard'
import BusinessAdviceIcon from './../../../assets/icons/features/b-advice.svg'
import StartupBusinessIcon from './../../../assets/icons/features/startup-b.svg'
import FinancialAdviceIcon from './../../../assets/icons/features/f-advice.svg'
import RiskManagementIcon from './../../../assets/icons/features/risk-m.svg'



const Features= () => {
    const featuresList = [
        {id: '1', src: BusinessAdviceIcon , alt: 'wow', title: 'Business Advice', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'},
        {id: '2', src: StartupBusinessIcon, alt: 'wow', title: 'Startup Business', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'},
        {id: '3', src: FinancialAdviceIcon, alt: 'wow', title: 'Financial Advice', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'},
        {id: '4', src: RiskManagementIcon, alt: 'wow', title: 'Risk Managemnt', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'}
    ]

  return (
        <section className="features">
                <div className="border-around">
                    <div className="container">
                        <article className="features-info">
                            <h3>features</h3>
                            <h2>our accounting is trusted by thousand of companies</h2>
                            <BtnLinks title="Learn more" url="/features" />
                        </article>
                        <div className="features-grid">
                            {featuresList.map((feature) => <FeatureCard key={feature.id} {...feature} />)}
                        </div>
                    </div>
                </div>
        </section>
    )
}

export default Features
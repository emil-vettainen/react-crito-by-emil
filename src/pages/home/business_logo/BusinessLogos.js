import React from 'react'
import './BusinessLogos.css'
import PaperzLogo from '../../../assets/icons/paperz.svg'
import DorfusLogo from '../../../assets/icons/dorfus.svg'
import MartinoLogo from '../../../assets/icons/martino.svg'
import SquareLogo from '../../../assets/icons/square.svg'
import GobanaLogo from '../../../assets/icons/gobana.svg'
import BusinessLogo from '../../../components/business_logos/BusinessLogo'


const BusinessLogos = () => {
    const logos = [
        {id: 1, src: PaperzLogo, alt: 'Paperz'},
        {id: 2, src: DorfusLogo, alt: 'Dorfus'},
        {id: 3, src: MartinoLogo, alt: 'Martino'},
        {id: 4, src: SquareLogo, alt: 'Square'},
        {id: 5, src: GobanaLogo, alt: 'Gobana'}
    ]

  return (
        <div className="business-logo">
            <div className="container">
                <div className="business-logo-grid">
                    {logos.map((logo) => <BusinessLogo key={logo.id} {...logo}/>)}
                </div>
            </div>
        </div>
    )
}

export default BusinessLogos
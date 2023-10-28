import React from 'react'
import PaperzLogo from '../../../assets/icons/paperz.svg'
import DorfusLogo from '../../../assets/icons/dorfus.svg'
import MartinoLogo from '../../../assets/icons/martino.svg'
import SquareLogo from '../../../assets/icons/square.svg'
import GobanaLogo from '../../../assets/icons/gobana.svg'
import BusinessLogo from '../../../components/ui/BusinessLogo'
import './BusinessLogos.css'



const BusinessLogos = () => {

    const logos = [
        {src: PaperzLogo, alt: 'Paperz'},
        {src: DorfusLogo, alt: 'Dorfus'},
        {src: MartinoLogo, alt: 'Martino'},
        {src: SquareLogo, alt: 'Square'},
        {src: GobanaLogo, alt: 'Gobana'}
    ]

  return (
    
    <div className="business-logo">
            <div className="container">
                <div className="business-logo-grid">
                    {
                        logos.map((logo, index) => (
                            <BusinessLogo key={index} src={logo.src} alt={logo.alt} />
                        ))
                    }
                    
                </div>
            </div>
        </div>
  )
}

export default BusinessLogos
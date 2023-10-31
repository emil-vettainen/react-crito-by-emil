import React from 'react'

const WhyUsIcon = ({src, alt, title, description}) => {
  return (
    <div className="us-icon-info">        
        <img src={src} alt={alt} />
        <div className="icon-txt">
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default WhyUsIcon
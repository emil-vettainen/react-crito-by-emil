import React from 'react'

const WhyUsIcons = (props) => {
  return (
    <div className="us-icon-info">        
        <img src={props.src} alt={props.alt} />
        <div className="icon-txt">
            <h4>{props.title}</h4>
            <p>{props.description}</p>
        </div>
    </div>
  )
}

export default WhyUsIcons
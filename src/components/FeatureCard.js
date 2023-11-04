import React from 'react'

const FeaturesCard = (props) => {
    
    return (
        <div className="features-card">
            <img src={props.src} alt={props.alt} />
            <h4>{props.title}</h4>
            <p>{props.description}</p>
        </div>
    )
}

export default FeaturesCard
















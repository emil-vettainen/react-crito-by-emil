import React from 'react'

const FeaturesCard = ({src, alt, title, description}) => {
    return (
        <div className="features-card">
            <img src={src} alt={alt} />
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    )
}

export default FeaturesCard
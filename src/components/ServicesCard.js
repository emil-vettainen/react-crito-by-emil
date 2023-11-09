import React from 'react'
import { Link } from 'react-router-dom'

const ServicesCard = ({title, description, url}) => {

  

  return (
    <>
    <Link className="clickable" to={url} aria-label="Learn more about business advice">
        <article className="service-card">
            <h4>{title}</h4>
            <p>{description}</p>
            <i className="fa-regular fa-arrow-right" aria-hidden="true"></i>
        </article>
    </Link>
    </>
  )
}

export default ServicesCard
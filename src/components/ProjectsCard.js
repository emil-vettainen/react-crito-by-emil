import React from 'react'
import { Link } from 'react-router-dom'

const ProjectsCard = (props) => {
  return (
    <Link className="clickable" to={props.url}>
        <article className="blog-card" aria-label="link to grow your business">
            <img src={props.src} alt={props.alt} />
            <div className="blog-info">
                <h4>{props.title}</h4>
                <div className="blog-button">
                    <p>Read more<i className="fa-regular fa-arrow-up-right" aria-hidden="true"></i></p>
                </div>
            </div>
        </article>
    </Link>
  )
}

export default ProjectsCard
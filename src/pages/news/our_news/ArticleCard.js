import React from 'react'
import { Link } from 'react-router-dom'


const ArticleCard = ({id, title, content, month, day, category, imageUrl}) => {
  return (
    
    <Link className="clickable" to={`/news/${id}`} >
        <article className="article-news-card">
            <img className="card-img" src={imageUrl}
                alt={title} />
            <div className="card-date">
            <p><span>{day}</span><br />{month}</p>
            </div>
            <div className="card-info">
                <p>{category}</p>
                <h4>{title}</h4>
                <p>{content}
                </p>
            </div>
        </article>
    </Link>
    
  )
}

export default ArticleCard
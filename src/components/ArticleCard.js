import React from 'react'
import { Link } from 'react-router-dom'


const ArticleCard = (props) => {
  return (
    <Link className="clickable" to={`/news/${props.id}`} >
        <article className="article-news-card">
            <img className="card-img" src={props.imageUrl}
                alt={props.title} />
            <div className="card-date">
            <p><span>{props.day}</span><br />{props.month}</p>
            </div>
            <div className="card-info">
                <p>{props.category}</p>
                <h4>{props.title}</h4>
                <p>{props.content}
                </p>
            </div>
        </article>
    </Link>
  )
}

export default ArticleCard
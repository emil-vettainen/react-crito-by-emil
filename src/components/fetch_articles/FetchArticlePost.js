import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

import './FetchArticlePost.css'
import { useArticles } from '../../contexts/ArticlesContext'
import ArticlesCategory from '../ArticlesCategory'

const FetchArticlePost = () => {
    const {id} = useParams();
    const {articles, article, fetchArticle, clearArticle, isLoading, error} = useArticles()
   
   
    useEffect (() => {
        fetchArticle(id)
        return () => clearArticle ()
    }, [id])



    if (isLoading) {
        return (
            <div className='container loading'>
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        ) 
    }

    if (error) {
        return (
            <div className='mt-5 text-center'>Something went wrong, please refresh your browser and try agian</div>
        )
    }


  return (
    <section className="article">
        <div className="container">
            <article className="">
                <div className="article-info">
                    <h2>{article.title}</h2>
                    <p>{article.formattedDate}</p>
                    <p>{article.category}</p>
                    <p>{article.author}</p>
                </div>

                <div className="article-content">
                    <img src={article.imageUrl} alt="" />
                    <p>{article.content}</p>
                </div>
                
                <div className="article-category">
                    <Link to="#" >Digitalization</Link>
                    <Link to="#">School</Link>
                    <Link to="#">It</Link>
                    <Link to="#">Design</Link>
                    <Link to="#">Work</Link>
                    <Link to="#">Tech</Link>
                </div>
            
            </article>


            <aside className="">
                <div className="search-post">
                    <input type="text" placeholder="Type to search..." />
                    <i className="fa-regular fa-magnifying-glass"></i>
                </div>
                <div className="recent-post">
                    <p>Recent Posts</p>
                    <ul>
                        {
                            articles.slice(0, 4).map((article) => (
                                <li key={article.id}> 
                                    <Link to={`/news/${article.id}`}>
                                        {article.title} 
                                        <span>{article.day} {article.month}</span>
                                    </Link>
                                </li>
                            ))
                          
                        }
                      
                          
                    </ul>
                </div>
                <div className="categories-post">
                    <p>Categoires</p>
                <ul>
                    <ArticlesCategory />
                </ul>
                </div>
            </aside>
        </div>  
    </section>
  )
}

export default FetchArticlePost
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import './FetchArticlePost.css'
import { useArticles } from '../../contexts/ArticlesContext'

const FetchArticlePost = () => {
    const {id} = useParams();
    const {article, fetchArticle, clearArticle, isLoading, error} = useArticles()
   
   
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
            <div>Try again</div>
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
                    <a href="#">Digitalization</a>
                    <a href="#">School</a>
                    <a href="#">It</a>
                    <a href="#">Design</a>
                    <a href="#">Work</a>
                    <a href="#">Tech</a>

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
                    <li>
                        <a href="#">
                            How To Blow Through Capital At An Incredible Rate
                            <span>Jan 14, 2020</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Design Studies That Everyone Should Know About?
                            <span>Jan 14, 2020</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            How did we get 1M+ visitors in 30 days without anything!
                            <span>Jan 14, 2020</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Figma On Figma: How we Built Our Website Design System
                            <span>Jan 14, 2020</span>
                        </a>
                    </li>
                   
                </ul>

                </div>

                <div className="categories-post">
                    <p>Categoires</p>
                <ul>
                
                    <li>
                        <a href="#">
                            Technology - <span>20 Post</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Freelancing - <span>07 Post</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Writing - <span>16 Post</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Marketing - <span>11 Post</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Business - <span>35 Post</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Education - <span>14 Post</span>
                        </a>
                    </li>
                </ul>

                </div>
                
                

            </aside>
            


        </div>

      
    </section>
  )
}

export default FetchArticlePost
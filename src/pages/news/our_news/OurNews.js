import React from 'react'
import './OurNews.css'
import FetchArticles from '../../../components/fetch_articles/FetchArticles';






const OurNews = () => {

   

  return (
    <section className='article-news'>
        <div className='container'>
          <h2>Our news & articles</h2>
            
          <FetchArticles url="https://win23-assignment.azurewebsites.net/api/articles" enableSwiper={false} />

        </div>
    </section>
  )
}

export default OurNews
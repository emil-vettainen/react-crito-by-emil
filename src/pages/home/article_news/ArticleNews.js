import React from 'react'
import './ArticleNews.css'
import FetchArticles from '../../../components/fetch_articles/FetchArticles'
import BtnLinks from '../../../components/ui/BtnLinks'


const ArticleNews = () => {
  return (
        <section className="article-news">
            <div className="container">
                <div className="news-head">
                    <h3>Article & News</h3>
                    <h2>Get Every Single Articles & News</h2>
                    <BtnLinks title="Browse articles" url="/news" type="transparent" />
                </div>
              <FetchArticles enableSwiper={true} />
            </div>
        </section>
    )
}

export default ArticleNews
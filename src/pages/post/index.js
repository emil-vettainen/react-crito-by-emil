import React from 'react'
import Header from '../../components/header/Header'
import ArticleNews from '../home/article_news/ArticleNews'
import FetchArticlePost from '../../components/fetch_articles/FetchArticlePost'
import TopSection from '../../components/top_section/TopSection'
import Footer from '../../components/footer/Footer'
import './SingleArticle.css'


const index = () => {
    return (
        <>
        <Header />
        <main className='single-article'>
            <TopSection title="News & Articles" url="news" />
            <FetchArticlePost />
            <ArticleNews />
        </main>
        <Footer />
        </>
    )
}

export default index
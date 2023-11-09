import React from 'react'

import Header from '../../components/header/Header'


import ArticleNews from '../home/article_news/ArticleNews'
import FetchArticlePost from '../../components/fetch_articles/FetchArticlePost'
import TopSection from '../../components/top_section/TopSection'


const index = () => {


  
  return (
    <>
    <Header />
    <TopSection title="News & Articles" url="news" />
    <FetchArticlePost />
    <ArticleNews />
    
    
    
    
    </>
  )
}

export default index
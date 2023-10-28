import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import TopSection from '../../components/top_section/TopSection'
import OurNews from './our_news/OurNews'
import SignForm from '../../components/ui/SignForm'


const News = () => {
  return (
    <>
    <Header />
    <TopSection title="News & Articles" />
    <OurNews url="https://win23-assignment.azurewebsites.net/api/articles" />
    <SignForm />
    <Footer />
    </>
  )
}

export default News
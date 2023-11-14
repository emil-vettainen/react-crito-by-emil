import React from 'react'
import Header from '../../components/header/Header'

import TopSection from '../../components/top_section/TopSection'
import OurNews from './our_news/OurNews'
import SignForm from '../../components/contact_form/signup/SignForm'
import Footer from '../../components/footer/Footer'



const News = () => {
  return (
        <>
        <Header />
        <main>
            <TopSection title="News & Articles" url="news" />
            <OurNews />
            <SignForm />
        </main>
        <Footer />
        </>
    )
}

export default News
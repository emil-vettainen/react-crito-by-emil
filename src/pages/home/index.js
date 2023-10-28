import React from 'react'
import Header from '../../components/header/Header'
import Showcase from './showcase/Showcase'
import Footer from '../../components/footer/Footer'
import BusinessLogos from './business_logo/BusinessLogos'
import Features from './features/Features'
import SignForm from '../../components/ui/SignForm'
import AboutCompany from './about_company/AboutCompany'
import OurService from './our_service/OurServices'
import WhyUs from './why_us/WhyUs'
import ProjectCase from './project_case/ProjectCase'
import Team from './team/Team'
import Testimonials from './testimonials/Testimonials'
import ArticleNews from './article_news/ArticleNews'




const Home = () => {
  return (
    <>
    <Header />
    <main>
        <Showcase />
        <BusinessLogos />
        <Features />
        <AboutCompany />
        <OurService />
        <WhyUs />
        <ProjectCase />
        <Team />
        <Testimonials />
        <ArticleNews />
        <SignForm />
    </main>
    <Footer />
    </>
  )
}
export default Home
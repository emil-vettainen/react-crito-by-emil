import React from 'react'
import Header from '../../components/header/Header'
import TopSection from '../../components/top_section/TopSection'
import ContactForm from './contact_form/ContactForm'
import Footer from '../../components/footer/Footer'
import ContactInfo from './contact_info/ContactInfo'
import ContactMap from './contact_map/ContactMap'


const Contact = () => {
  return (
        <>
        <Header />
        <main>
            <TopSection title="Let´s Connect" url="contact" />
            <ContactInfo />
            <ContactForm />
            <ContactMap />
        </main>
        <Footer />
        </>
    )
}

export default Contact
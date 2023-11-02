import React from 'react'
import Header from '../../components/header/Header'
import TopSection from '../../components/top_section/TopSection'
import ContactForm from './contact_form/ContactForm'

const Contact = () => {
  return (
    <>
        <Header />
        <TopSection title="Let´s Connect" url="contact" />
        <ContactForm />
    </>
  )
}

export default Contact
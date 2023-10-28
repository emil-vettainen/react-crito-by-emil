import React from 'react'
import './TopSection.css'

const TopSection = ({title}) => {
  return (
    <section className="hero-connect">
        <div className="container">
            <a href="/index.html">Home</a>
            <a className="active" href="/contact.html">Contact</a>
            <h1>{title}</h1>
        </div>
    </section>
  )
}

export default TopSection
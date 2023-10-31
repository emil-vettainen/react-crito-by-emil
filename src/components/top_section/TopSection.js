import React from 'react'
import './TopSection.css'
import { NavLink } from 'react-router-dom'

const TopSection = ({title, url}) => {
  return (
    <section className="hero-connect">
        <div className="container">
            <NavLink to={`/`}>Home</NavLink>
            <NavLink to={`/${url}`}>{url}</NavLink>
            <h1>{title}</h1>
        </div>
    </section>
  )
}

export default TopSection
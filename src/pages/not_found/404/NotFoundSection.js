import React from 'react'
import './NotFoundSection.css'
import BtnLinks from '../../../components/ui/BtnLinks'

const NotFoundSection = () => {
  return (
    <div className='container notfound'>
        <h2>"We apologize for the inconvenience, but it appears that the page you were looking for doesn't exist."</h2>
        <BtnLinks title="Back to home" url="/" />
    </div>
  )
}

export default NotFoundSection
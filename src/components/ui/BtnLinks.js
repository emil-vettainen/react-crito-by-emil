import React from 'react'
import { Link } from 'react-router-dom'

const BtnLinks = ({type, title, url}) => {

    const getLinkClassName = () => {
        switch(type) {
            case 'transparent':
                return 'button-transparent'
            default:
                return 'button'
                
        }
    }
  return (
    <Link className={getLinkClassName()} to={url}>{title}<i className="fa-regular fa-arrow-up-right" aria-hidden="true"></i></Link>
  )
}

export default BtnLinks
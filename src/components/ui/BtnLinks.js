import React from 'react'
import { Link } from 'react-router-dom'

const BtnLinks = (props) => {

    const getLinkClassName = () => {
        switch(props.type) {
            case 'transparent':
              return 'button-transparent'
            case 'dark':
              return 'button-dark'
            default:
              return 'button'
        }
    }
  return (
    <Link className={getLinkClassName()} to={props.url}>{props.title}<i className="fa-regular fa-arrow-up-right" aria-hidden="true"></i></Link>
  )
}

export default BtnLinks
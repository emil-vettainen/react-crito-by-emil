import React from 'react'


const SocialIcons = (props) => {
  return (
    
    <li>
      <a href={props.url} aria-label={props.title} target="_blank" rel="noreferrer noopener">
          <i className={props.icon} aria-hidden="true" title={props.title}></i>
      </a>
    </li>
    
  )
}

export default SocialIcons
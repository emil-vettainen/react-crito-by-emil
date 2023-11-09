import React from 'react'


const SocialIcons = ({title, url, icon}) => {
  return (
    
    <li>
      <a href={url} aria-label={title} target="_blank" rel="noreferrer noopener">
          <i className={icon} aria-hidden="true" title={title}></i>
      </a>
    </li>
    
  )
}

export default SocialIcons
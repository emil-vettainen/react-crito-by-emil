import React from 'react'
import SocialIcons from '../ui/SocialIcons'

const SocialMedia = () => {
  return (
    <div className="social-media">
    <ul>
        <SocialIcons title="Facebook" url="https://facebook.com" icon="fa-brands fa-facebook" />
        <SocialIcons title="Twitter" url="https://twitter.com" icon="fa-brands fa-twitter" />
        <SocialIcons title="Instagram" url="https://instagram.com" icon="fa-brands fa-instagram" />
        <SocialIcons title="Linkedin" url="https://linkedin.com" icon="fa-brands fa-linkedin" />  
    </ul>
</div>
  )
}

export default SocialMedia
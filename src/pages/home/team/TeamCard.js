import React from 'react'

const TeamCard = ({src, alt, name, title}) => {
  return (
    <div className="team-card">
        <img src={src}alt={alt} />
        <div className="team-info">
            <h4>{name}</h4>
            <p>{title}</p>
        </div>
    </div>
  )
}

export default TeamCard
import React from 'react'

const TeamCard = (props) => {
    return (
        <div className="team-card">
            <img src={props.src}alt={props.alt} />
            <div className="team-info">
                <h4>{props.name}</h4>
                <p>{props.title}</p>
            </div>
        </div>
    )
}

export default TeamCard
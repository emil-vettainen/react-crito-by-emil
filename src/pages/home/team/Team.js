import React, { useEffect, useState } from 'react'
import './Team.css'
import TeamCard from './TeamCard'
import KristineImg from '../../../assets/images/team_members/kristine.jpg'
import MarkImg from '../../../assets/images/team_members/mark.jpg'
import KimberlyImg from '../../../assets/images/team_members/kimberly.jpg'
import JustinImg from '../../../assets/images/team_members/justin.jpg'
import BtnLinks from '../../../components/ui/BtnLinks'



const Team = () => {


    const [teamMembers, setTeamMembers] = useState([])

    useEffect (() => {

        const getTeamMembers = () => {
            const teamMembers = [
                {id: '1', src: KristineImg, alt: 'Illustration of thumbs up.', name: 'Kristine Palmer', title: 'Chef Operation Officer'},
                {id: '1', src: MarkImg, alt: 'Illustration of thumbs up.', name: 'Mark Aubri', title: 'Senior Consultant'},
                {id: '1', src: KimberlyImg, alt: 'Illustration of thumbs up.', name: 'Kimberly Hansen', title: 'Senior Consultant'},
                {id: '1', src: JustinImg , alt: 'Illustration of thumbs up.', name: 'Justin Willoman', title: 'Senior Tech Consultant'},
                
            ]

            setTeamMembers(teamMembers)
        }

        getTeamMembers()
    }, [])



  return (
    <section className="team">
    <div className="container">
        <div className="team-txt">
            <h3>Meet Our Team</h3>
            <h2>Experience Team Members</h2>
            <BtnLinks title="Browse team" url="/team" />
        </div>
        <div className="team-grid">
            
            {
                teamMembers.map((teamMember) => (
                    <TeamCard key={teamMember.id} src={teamMember.src} alt={teamMember.alt} name={teamMember.name} title={teamMember.title} />
                ))
            }
            
        </div>
       
    </div>
</section>
  )
}

export default Team
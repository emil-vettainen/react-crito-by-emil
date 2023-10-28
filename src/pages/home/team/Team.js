import React from 'react'
import './Team.css'

const Team = () => {
  return (
    <section className="team">
    <div className="container">
        <div className="team-txt">
            <h3>Meet Our Team</h3>
            <h2>Experience Team Members</h2>
            <a className="button" href="#" aria-label="link to learn more about our team">Learn more<i
                    className="fa-regular fa-arrow-up-right" aria-hidden="true"></i></a>
        </div>
        <div className="team-grid">
            <div className="team-card">
                <img src="/images/team-members/kristine.jpg" alt="Profile picture of Kristine Palmer." />
                <div className="team-info">
                    <h4>Kristine Palmer</h4>
                    <p>Chef Operation Officer</p>
                </div>
            </div>
            <div className="team-card">
                <img src="/images/team-members/mark.jpg" alt="Profile picture of Mark Aubri." />
                <div className="team-info">
                    <h4>Mark Aubri</h4>
                    <p>Senior Consultant</p>
                </div>
            </div>
            <div className="team-card">
                <img src="/images/team-members/kimberly.jpg" alt="Profile picture of Kimberly Hansen." />
                <div className="team-info">
                    <h4>Kimberly Hansen</h4>
                    <p>Senior Consultant</p>
                </div>
            </div>
            <div className="team-card">
                <img src="/images/team-members/justin.jpg" alt="Profile picture of Justin Willoman." />
                <div className="team-info">
                    <h4>Justin Willoman </h4>
                    <p>Senior Tech Consultant</p>
                </div>
            </div>
        </div>
       
    </div>
</section>
  )
}

export default Team
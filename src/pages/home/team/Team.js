import React, { useEffect, useState } from 'react'
import './Team.css'
import TeamCard from '../../../components/TeamCard'
import KristineImg from '../../../assets/images/team_members/kristine.jpg'
import MarkImg from '../../../assets/images/team_members/mark.jpg'
import KimberlyImg from '../../../assets/images/team_members/kimberly.jpg'
import JustinImg from '../../../assets/images/team_members/justin.jpg'
import BtnLinks from '../../../components/ui/BtnLinks'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



const Team = () => {
    const [teamMembers, setTeamMembers] = useState([])

    useEffect (() => {
        const getTeamMembers = () => {
            const teamMembers = [
                {id: '1', src: KristineImg, alt: 'Illustration of thumbs up.', name: 'Kristine Palmer', title: 'Chef Operation Officer'},
                {id: '2', src: MarkImg, alt: 'Illustration of thumbs up.', name: 'Mark Aubri', title: 'Senior Consultant'},
                {id: '3', src: KimberlyImg, alt: 'Illustration of thumbs up.', name: 'Kimberly Hansen', title: 'Senior Consultant'},
                {id: '4', src: JustinImg , alt: 'Illustration of thumbs up.', name: 'Justin Willoman', title: 'Senior Tech Consultant'},
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

                <div className='slider'>

                    <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    navigation={{
                        clickable: true
                    }}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        320: {
                        slidesPerView: 1.1,
                        slidesPerGroup: 1,
                        spaceBetween: 10,
                        },
                        576: {
                            slidesPerView: 1,
                            slidesPerGroup: 1,
                            spaceBetween: 10,
                        },
                        768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                        slidesPerGroup: 2,
                        },
                        1200: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                        slidesPerGroup: 4,
                        },
                    }}

                    className='mySwiper'
                    >
                        
                        {teamMembers.map((teamMember) => (
                            <SwiperSlide key={teamMember.id}>
                            <TeamCard {...teamMember}/>
                            </SwiperSlide> 
                        ))}

                    </Swiper>

                    {/* <i className='button-next-slide fa-solid fa-angle-right'></i>          
                    <i className='button-prev-slide fa-solid fa-angle-left'></i>           */}

                </div>


            </div>
        </section>
    )
}

export default Team
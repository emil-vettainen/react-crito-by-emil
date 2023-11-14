import React from 'react'
import './Team.css'
import TeamCard from '../../../components/TeamCard'
import KristineImg from '../../../assets/images/team_members/kristine.jpg'
import MarkImg from '../../../assets/images/team_members/mark.jpg'
import KimberlyImg from '../../../assets/images/team_members/kimberly.jpg'
import JustinImg from '../../../assets/images/team_members/justin.jpg'
import BtnLinks from '../../../components/ui/BtnLinks'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



const Team = () => {

    const teamMembers = [
        {id: '1', src: KristineImg, alt: 'Kristine Palmer', name: 'Kristine Palmer', title: 'Chef Operation Officer'},
        {id: '2', src: MarkImg, alt: 'Mark Aubri', name: 'Mark Aubri', title: 'Senior Consultant'},
        {id: '3', src: KimberlyImg, alt: 'Kimberly Hansen', name: 'Kimberly Hansen', title: 'Senior Consultant'},
        {id: '4', src: JustinImg , alt: 'Justin Willoman', name: 'Justin Willoman', title: 'Senior Tech Consultant'},
    ]

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
                    modules={[Navigation, Pagination, A11y]}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        320: {
                            slidesPerView: 2.2,
                            slidesPerGroup: 1,
                            spaceBetween: 10,
                        },
                        576: {
                            slidesPerView: 2.2,
                            slidesPerGroup: 1,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 3.3,
                            spaceBetween: 20,
                            slidesPerGroup: 1,
                        },
                        1200: {
                            slidesPerView: 4,
                            spaceBetween: 30,
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
                </div>
            </div>
        </section>
    )
}

export default Team
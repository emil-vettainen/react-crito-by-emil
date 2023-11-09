import React, { useEffect, useState } from 'react'
import './WhyUs.css'
import WhyUsImg from '../../../assets/images/why-choose-us.jpg'
import WhyUsIcons from '../../../components/WhyUsIcons'
import aiIcon from '../../../assets/icons/why_choose_us/ai.svg'
import processIcon from '../../../assets/icons/why_choose_us/process.svg'
import hexagonIcon from '../../../assets/icons/why_choose_us/strategic.svg'
import designIcon from '../../../assets/icons/why_choose_us/experience.svg'

const WhyUs = () => {
    const [lists, setLists] = useState([])

    useEffect (() => {
        const getList = () => {
            const lists = [
                {id: '1', src: processIcon, alt: 'Illustration of thumbs up.', title: 'Process Excellence', description: 'Lorem, ipsum dolor sit amet consectetur.'},
                {id: '2', src: hexagonIcon, alt: 'Illustration of hexagon.', title: 'Strategic Planning', description: 'Lorem, ipsum dolor sit amet consectetur.'},
                {id: '3', src: designIcon, alt: 'Illustration of design tool.', title: 'Experience Design', description: 'Lorem, ipsum dolor sit amet consectetur.'},
                {id: '4', src: aiIcon, alt: 'Illustration of AI.', title: 'Artificial Inteligence', description: 'Lorem, ipsum dolor sit amet consectetur.'}
            ]
            setLists(lists)
        }
        getList()
    }, [])


  return (
        <section className="why-us">
            <div className="container">
                <div className="us-info col-12 col-lg-6 col-xl-5 col-xxl-4">
                    <h3>why choose us</h3>
                    <h2>Why we are the best business consulting agency</h2>
                    <div className="us-icon-grid">
                        {lists.map((list) => <WhyUsIcons key={list.id} {...list} />)}
                    </div>
                </div>
                <div className="us-img">
                    <img src={WhyUsImg}
                        alt="two colleagues conversing in a conference room" />
                </div>
            </div>
        </section>
    )
}

export default WhyUs
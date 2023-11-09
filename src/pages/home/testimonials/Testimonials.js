import React, { useEffect, useState } from 'react'
import './Testimonials.css'
import StarIcon from './../../../assets/icons/Star.svg'
import AmandaImg from './../../../assets/images/testimonial/Amanda.png'
import CassandraImg from './../../../assets/images/testimonial/Cassandra.png'
import JackImg from './../../../assets/images/testimonial/Jack.png'
import TestimonialsCard from '../../../components/TestimonialsCard'
import BtnLinks from './../../../components/ui/BtnLinks'

const Testimonials = () => {
    const [reviews, setReviews] = useState([])

    useEffect (() => {
      const getReviews= () => {
        const reviews = [
            { 
                id: '1', 
                src: StarIcon, 
                alt: 'Illustration of 5/5 starrate.', 
                review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, addignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate", 
                clientName: 'Cassandra Warren', 
                clientTitle: 'Business Manager, Dorfus',
                clientImg: CassandraImg
            },
            { 
                id: '2', 
                src: StarIcon, 
                alt: 'Illustration of 5/5 starrate.', 
                review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, addignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate", 
                clientName: 'Amanda Tulling', 
                clientTitle: 'Senior Developer, Square',
                clientImg: AmandaImg
            },
            { 
                id: '3', 
                src: StarIcon, 
                alt: 'Illustration of 5/5 starrate.', 
                review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, addignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate", 
                clientName: 'Jack McDogglas', 
                clientTitle: 'Key Account Manager, Gobana',
                clientImg: JackImg
            },
        ]
        setReviews(reviews)
      }
      getReviews()
    }, [])


  return (
        <section className="testimonial">
            <div className="ram-left-right">
                <div className="container">
                    <div className="testimonial-txt">
                        <h3>Testimonial</h3>
                        <h2>What Our Clients Says</h2>
                    </div>
                    <div className="testimonial-grid">
                        {reviews.map((review) => <TestimonialsCard key={review.id} {...review} /> )}
                    </div>
                    <div className="all-reviews">
                        <BtnLinks title="All Reviews" url="/reviews" typ="dark" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials
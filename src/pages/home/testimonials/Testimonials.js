import React from 'react'
import './Testimonials.css'

const Testimonials = () => {
  return (
    <section className="testimonial">
            <div className="ram-left-right">
                <div className="container">
                    <div className="testimonial-txt">
                        <h3>Testimonial</h3>
                        <h2>What Our Clients Says</h2>
                    </div>

                    <div className="testimonial-grid">

                        <article className="review">
                            <div className="review-txt">
                                <img src="/icons/Star.svg" alt="Illustration of 5/5 starrate." />
                                <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad
                                    dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam
                                    voluptate"</p>
                            </div>
                            <div className="review-maker">
                                <img className="review-img" src="/images/testimonial/Cassandra.png"
                                    alt="Profile picture of Cassandra Warren." />
                                <div className="review-name">
                                    <h4>Cassandra Warren</h4>
                                    <p>Business Manager, Dorfus</p>
                                </div>
                            </div>
                        </article>

                        <article className="review">
                            <div className="review-txt">
                                <img src="/icons/Star.svg" alt="5 of 5 starrate." />
                                <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad
                                    dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam
                                    voluptate"</p>
                            </div>
                            <div className="review-maker">
                                <img className="review-img" src="/images/testimonial/Amanda.png"
                                    alt="Profile picture of Amanda Tulling." />
                                <div className="review-name">
                                    <h4>Amanda Tulling</h4>
                                    <p>Senior Developer, Square</p>
                                </div>
                            </div>
                        </article>

                        <article className="review">
                            <div className="review-txt">
                                <img src="/icons/Star.svg" alt="5 of 5 starrate." />
                                <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad
                                    dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam
                                    voluptate"</p>
                            </div>
                            <div className="review-maker">
                                <img className="review-img" src="/images/testimonial/Jack.png"
                                    alt="Profile picture of Jack McDogglas." />
                                <div className="review-name">
                                    <h4>Jack McDogglas</h4>
                                    <p>Key Account Manager, Gobana</p>
                                </div>
                            </div>
                        </article>

                    </div>
                    <div className="all-reviews">
                        <a aria-label="all reviews" className="button" href="#">All Reviews<i className="fa-regular fa-arrow-up-right" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Testimonials
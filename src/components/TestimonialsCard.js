import React from 'react'

const TestimonialsCard = (props) => {
  return (
        <article className="review">
            <div className="review-txt">
                <img src={props.src} alt={props.alt} />
                <p>{props.review}</p>
            </div>
            <div className="review-maker">
                <img className="review-img" src={props.clientImg}
                    alt={props.clientName} />
                <div className="review-name">
                    <h4>{props.clientName}</h4>
                    <p>{props.clientTitle}</p>
                </div>
            </div>
        </article>  
    )
}

export default TestimonialsCard
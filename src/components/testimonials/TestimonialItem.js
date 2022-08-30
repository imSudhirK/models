import React from "react";

// assests 
import testimonials5 from '../../assests/testimonials/testimonials-5.jpg'


const TestimonialItem = () => {
    return (
        <div className="testimonial-item">
            <img src={testimonials5} className="testimonial-img" alt="" />
            <h3>John Larson</h3>
            <h4>Entrepreneur</h4>
            <div className="stars">
                <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
            </div>
            <p>
                <i className="bi bi-quote quote-icon-left"></i>
                Quis quorum aliqua sint quem legam fore sunt eram  nisi cillum quid.
                <i className="bi bi-quote quote-icon-right"></i>
            </p>
        </div>
    )
}

export default TestimonialItem;
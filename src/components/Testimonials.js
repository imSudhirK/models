// libraries
import React from "react";

// style css
import './Testimonials.css';

// assests 
import testimonials1 from '../assests/testimonials/testimonials-1.jpg'
import testimonials2 from '../assests/testimonials/testimonials-2.jpg'
import testimonials3 from '../assests/testimonials/testimonials-3.jpg'
import testimonials4 from '../assests/testimonials/testimonials-4.jpg'
import testimonials5 from '../assests/testimonials/testimonials-5.jpg'

// swiper 
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from 'swiper';
import 'swiper/css'
import 'swiper/css/pagination';


import { useSelector } from "react-redux";

// driver function
const Testimonials = () => {
    const Open = useSelector(state => state.rh_sidebar.isOpened);

    return (
        <div className={`testimonials ${Open}`}> {/*TODO: fade up*/}

            <div className="header">
                <h2>Testimonials</h2>
                <p>Quam sed id excepturi </p>
            </div>

            <div className="swiper">
                <Swiper
                    modules={[Autoplay, Pagination]}
                    loop={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false
                    }}
                    slidesPerView={1}
                    breakpoints={{
                        1000: {
                            slidesPerView: 2,
                            spaceBetween: 50
                        }
                    }}
                    pagination={{
                        el: '.swiper-pagination',
                        type: 'bullets',
                        clickable: true
                    }}
                    scrollbar={{ draggable: true }} // TODO
                >
                    <div className="swiper-wrapper">
                        <SwiperSlide>
                            <div className="testimonial-item">
                                <img src={testimonials1} className="testimonial-img" alt="" />
                                <h3>Saul Goodman</h3>
                                <h4>Ceo &amp; Founder</h4>
                                <div className="stars">
                                    <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                                </div>
                                <p>
                                    <i className="bi bi-quote quote-icon-left"></i>
                                    Proin iaculis purus consequat sem cure digni ssim
                                    <i className="bi bi-quote quote-icon-right"></i>
                                </p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="testimonial-item">
                                <img src={testimonials2} className="testimonial-img" alt="" />
                                <h3>Sara Wilsson</h3>
                                <h4>Designer</h4>
                                <div className="stars">
                                    <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                                </div>
                                <p>
                                    <i className="bi bi-quote quote-icon-left"></i>
                                    Export tempor illum tamen malis malis eram quae irulpa.
                                    <i className="bi bi-quote quote-icon-right"></i>
                                </p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="testimonial-item">
                                <img src={testimonials3} className="testimonial-img" alt="" />
                                <h3>Jena Karlis</h3>
                                <h4>Store Owner</h4>
                                <div className="stars">
                                    <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                                </div>
                                <p>
                                    <i className="bi bi-quote quote-icon-left"></i>
                                    Enim nisi quem export duis labore cillum quae magn
                                    <i className="bi bi-quote quote-icon-right"></i>
                                </p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="testimonial-item">
                                <img src={testimonials4} className="testimonial-img" alt="" />
                                <h3>Matt Brandon</h3>
                                <h4>Freelancer</h4>
                                <div className="stars">
                                    <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                                </div>
                                <p>
                                    <i className="bi bi-quote quote-icon-left"></i>
                                    Fugiat enim eram quae cillum dolore dolor amet nulllum veniam.
                                    <i className="bi bi-quote quote-icon-right"></i>
                                </p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
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
                        </SwiperSlide>
                    </div>

                    <div className="swiper-pagination"></div>
                </Swiper>
            </div>
        </div>
    )
}

export default Testimonials;
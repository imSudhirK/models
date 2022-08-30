// libraries
import React from "react";

// style css
import './Testimonials.css';


// swiper 
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from 'swiper';
import 'swiper/css'
import 'swiper/css/pagination';


import { useSelector } from "react-redux";
import TestimonialItem from "./TestimonialItem";

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
                        
                        <SwiperSlide><TestimonialItem /></SwiperSlide>
                        <SwiperSlide><TestimonialItem /></SwiperSlide>
                        <SwiperSlide><TestimonialItem /></SwiperSlide>
                        <SwiperSlide><TestimonialItem /></SwiperSlide>
                        <SwiperSlide><TestimonialItem /></SwiperSlide>
                    </div>

                    <div className="swiper-pagination"></div>
                </Swiper>
            </div>
        </div>
    )
}

export default Testimonials;
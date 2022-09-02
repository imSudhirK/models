import React from "react";
import background from '../../assests/blog/blog-1.jpg';
import './DetailCard2.css'
const DetailCard2 = () => {
    return (
        <section id="about" className="about">
            <div className="container aos-init aos-animate" data-aos="fade-up">

                <div className="row position-relative">

                    <div className="col-lg-7 about-img"
                        style={{ backgroundImage: `url(${background})` }}>
                    </div>

                    <div className="col-lg-7">
                        <h2>Consequatur eius et magnam</h2>
                        <div className="our-story">
                            <h4>Est 1988</h4>
                            <h3>Our Story</h3>
                            <p>Inventore aliquam beatae at et id alias. Ipsa dolores amet consequuntur minima quia maxime autem. Quidem id sed ratione. Tenetur provident autem in reiciendis rerum at dolor. Aliquam consectetur laudantium temporibus dicta minus dolor.</p>
                            <ul>
                                <li><i className="bi bi-check-circle"></i> <span>Ullamco laboris nisi ut aliquip ex ea commo</span></li>
                                <li><i className="bi bi-check-circle"></i> <span>Duis aute irure dolor in reprehenderit in</span></li>
                                <li><i className="bi bi-check-circle"></i> <span>Ullamco laboris nisi ut aliquip ex ea</span></li>
                            </ul>
                            <p>Vitae autem velit excepturi fugit. Animi ad non. Eligendi et non nesciunt suscipit repellendus porro in quo eveniet. Molestias in maxime doloremque.</p>

                            <div className="watch-video d-flex align-items-center position-relative">
                                <i className="bi bi-play-circle"></i>
                                <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" className="glightbox stretched-link">Watch Video</a>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default DetailCard2;
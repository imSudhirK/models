import React from "react";
import './DetailCard.css'

import background from '../../assests/blog/blog-1.jpg';

const DetailCard = () => {
    return (
        <section id="alt-services" className="alt-services">
            <div className="container aos-init aos-animate" data-aos="fade-up">

                <div className="row justify-content-around gy-4">
                    <div className="col-lg-6 img-bg aos-init aos-animate"  
                        style={{backgroundImage: `url(${background})`}}
                        data-aos="zoom-in" data-aos-delay="100"></div>

                    <div className="col-lg-5 d-flex flex-column justify-content-center">
                        <h3>Enim quis est voluptatibus aliquid consequatur fugiat</h3>
                        <p>Esse voluptas cumque vel exercitationem. Reiciendis est hic accusamus. Non ipsam et sed minima temporibus laudantium. Soluta voluptate sed facere corporis dolores excepturi</p>

                        <div className="icon-box d-flex position-relative aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                            <i className="bi bi-easel flex-shrink-0"></i>
                            <div>
                                <h4><a href="" className="stretched-link">Lorem Ipsum</a></h4>
                                <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                            </div>
                        </div>
                        {/* <!-- End Icon Box --> */}

                        <div className="icon-box d-flex position-relative aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                            <i className="bi bi-patch-check flex-shrink-0"></i>
                            <div>
                                <h4><a href="" className="stretched-link">Nemo Enim</a></h4>
                                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                            </div>
                        </div>
                        {/* <!-- End Icon Box --> */}

                        <div className="icon-box d-flex position-relative aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
                            <i className="bi bi-brightness-high flex-shrink-0"></i>
                            <div>
                                <h4><a href="" className="stretched-link">Dine Pad</a></h4>
                                <p>Explicabo est voluptatum asperiores consequatur magnam. Et veritatis odit. Sunt aut deserunt minus aut eligendi omnis</p>
                            </div>
                        </div>
                        {/* <!-- End Icon Box --> */}

                        <div className="icon-box d-flex position-relative aos-init aos-animate" data-aos="fade-up" data-aos-delay="400">
                            <i className="bi bi-brightness-high flex-shrink-0"></i>
                            <div>
                                <h4><a href="" className="stretched-link">Tride clov</a></h4>
                                <p>Est voluptatem labore deleniti quis a delectus et. Saepe dolorem libero sit non aspernatur odit amet. Et eligendi</p>
                            </div>
                        </div>
                        {/* <!-- End Icon Box --> */}

                    </div>
                </div>

            </div>
        </section>
    )
}
export default DetailCard;
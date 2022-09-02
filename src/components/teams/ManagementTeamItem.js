import React from "react";
import img1 from '../../assests/blog/blog-1.jpg'

const ManagementTeamItem = () => {
    return (
        <div class="col-xl-4 col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
            <div class="post-item position-relative h-100">

                <div class="post-img position-relative overflow-hidden">
                    <img src={img1} class="img-fluid" alt="" />
                </div>

                <div class="post-content d-flex flex-column">

                    <h3 class="post-title">Name Of officia</h3>
                    <h5> position of officia</h5>


                </div>

            </div>
        </div>

    )
}
export default ManagementTeamItem;
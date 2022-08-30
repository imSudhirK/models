import React from "react";
import blog5 from '../../assests/blog/blog-5.jpg';

const MilestoneItem = () => {
    return (
        <div className="col-xl-4 col-md-6">
            <div className="post-item position-relative h-100">

                <div className="post-img position-relative overflow-hidden">
                    <img src={blog5} className="img-fluid" alt="" />
                    <span className="post-date">September 17</span>
                </div>

                <div className="post-content d-flex flex-column">

                    <h3 className="post-title">Accusamus quaerat</h3>

                    <p>
                        In itaque assumenda aliquam voluptatem qui temporibus 
                        iusto nisi quia. Autem vitae quas aperiam nesciunt totam 
                        mollitia tempora odio omnis. Ipsa odit sit ut amet dolorem
                        necessitatibus. Quo ullam ut corrupti autem consequuntur .
                    </p>
                </div>
            </div>
        </div>
    )
}

export default MilestoneItem;
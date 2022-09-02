import React from "react";
import './ManagementTeam.css'
import ManagementTeamItem from "./ManagementTeamItem";

const ManagementTeam = () => {
    return (
        <section id="recent-blog-posts" class="recent-blog-posts">
            <div class="container aos-init aos-animate" data-aos="fade-up">

                <div class=" section-header">
                    <h2>Recent Blog Posts</h2>
                    <p>In commodi voluptatem excepturi quaerat nihil error autem voluptate ut et officia consequuntu</p>
                </div>

                <div class="row gy-5">

                    <ManagementTeamItem/>
                    <ManagementTeamItem/>
                    <ManagementTeamItem/>                
                </div>

            </div>
        </section>
    )
}

export default ManagementTeam;
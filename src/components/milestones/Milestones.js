import React from "react";
import './Milestones.css'

import MilestoneItem from "./MilestoneItem";
import { useSelector } from "react-redux";



const Milestones = () => {
    const Open = useSelector(state => state.rh_sidebar.isOpened);
    return (
        <div className={`milestones ${Open}`}>

            <div className="header">
                <h2>Milestones</h2>
                <p>Quam sed id excepturi </p>
            </div>

            <div className="row gy-4 posts-list">

                {/* <!-- Begin post list item --> */}

                <MilestoneItem />
                <MilestoneItem />
                <MilestoneItem />
                <MilestoneItem />
                <MilestoneItem />
                <MilestoneItem />

                {/* <!-- End post list item --> */}

            </div>
            {/* <!-- End milestones posts list --> */}

            <div className="milestones-pagination">
                <ul className="justify-content-center">
                    <li><a href="#">1</a></li>
                    <li className="active"><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                </ul>
            </div>
            {/* <!-- End milestones pagination --> */}

        </div>
    )
}

export default Milestones;
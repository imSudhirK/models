import React from "react";
import './Divisions.css'

import { useSelector } from "react-redux";

const Divisions = () => {
    const Open = useSelector(state => state.rh_sidebar.isOpened);

    return (
        <div className={`divisions ${Open}`}>
            <h5 style={{ color: "#FF5733" }}> this is Divisions</h5>
            <h5 style={{ color: "var(--secondary)" }}> this is Divisions</h5>
            <h5 style={{ color: "#FF5733" }}> this is Divisions something is writted here</h5>
        
        </div>
    )
}

export default Divisions;
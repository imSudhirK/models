// libraries
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// custom functions
import { handle_sidebar } from '../redux/Exporter';

// css style
import './Navigation.css';

// assets 
import logo from '../assests/icons/logo.png';

// icons
import { FaBars, FaAward } from 'react-icons/fa';
import { MdDashboard, MdMasks, MdContacts } from 'react-icons/md';
import { IoLayers } from 'react-icons/io5';
import { TiGroup } from 'react-icons/ti';
import { TbEngine } from 'react-icons/tb';
import { GiBullseye } from 'react-icons/gi';


// master function
const Navigation = () => {

    // vars and helper functions
    const dispatch = useDispatch();
    const Open = useSelector(state => state.rh_sidebar.isOpened);

    // things to render
    return (
        <div className="navigation">

            {/* <!-- Sidebar Start --> */}
            <div className={`sidebar pe-4 pb-3 ${Open}`}>
                <nav className="navbar">
                    <div className="d-flex align-items-center ms-4 mb-4">
                        <div className="position-relative">
                            <img src={logo} alt="" style={{ width: "150px" }} />
                        </div>
                    </div>
                    <div className="navbar-nav w-100">
                        <Link className="nav-item nav-link active" to='/'>
                            <div className="align-middle">
                            <i><MdDashboard size={20}/></i>Dashboard
                            </div>
                        </Link>
                        <Link className="nav-item nav-link" to='/divisions'>
                            <i><IoLayers size={20}/></i>Divisions
                        </Link>
                        <Link className="nav-item nav-link active" to='/about_us'>
                            <i><TiGroup size={20}/></i>About Us
                        </Link>
                        <Link className="nav-item nav-link active" to='/divisions'>
                            <i><TbEngine size={20}/></i>Products
                        </Link>
                        <Link className="nav-item nav-link active" to='/divisions'>
                            <i><GiBullseye size={20} /></i>Careers
                        </Link>
                        <Link className="nav-item nav-link active" to='/divisions'>
                            <i><FaAward size={20} /></i>Awards and Clients
                        </Link>
                        <Link className="nav-item nav-link active" to='/divisions'>
                            <i><MdMasks size={20} /></i>We Care
                        </Link>
                        <Link className="nav-item nav-link active" to='/divisions'>
                            <i><MdContacts size={20} /></i>Contacts
                        </Link>
                        <Link className="nav-item nav-link active" to='/workspace'>
                            <i><MdContacts size={20} /></i>workspace
                        </Link>

                        <a href="index.html" className="nav-item nav-link active">
                            <i className="fa fa-tachometer-alt me-2"></i>
                            Dashboard</a>
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i><FaBars /></i>Elements</a>
                            <div className="dropdown-menu bg-transparent border-0">
                                <a href="button.html" className="dropdown-item">Buttons</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            {/* <!-- Sidebar End --> */}

            {/* <!-- Content Start --> */}
            <div className={`nav-content ${Open}`}>
                {/* <!-- Navbar Start --> */}
                <nav className="navbar navbar-expand sticky-top px-4 py-0">
                    <div className="sidebar-toggler"
                        onClick={() => dispatch(handle_sidebar())}>
                        <FaBars size={20} style={{ color: '#FF5733' }} />
                    </div>

                    <div className="navbar-nav align-items-center ms-auto">
                        <h5>Menon & Menon Ltd.</h5>
                    </div>
                </nav>
                {/* <!-- Navbar End --> */}

            </div>
            {/* <!-- Content End --> */}

        </div>
    )
}

export default Navigation;
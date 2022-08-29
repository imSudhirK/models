import React, { useState } from "react";
import './Navigation.css';

import logo from '../assests/icons/logo.png';

const Navigation = () => {

    const [Open, setOpened] = useState('')
    const handle_sidebarToggler = () => {
        if (Open === '') {
            setOpened('open')
        } else {
            setOpened('')
        }
    }


    return (

        <div className="container-fluid position-relative d-flex p-0">


            {/* <!-- Sidebar Start --> */}
            <div className={`sidebar pe-4 pb-3 ${Open}`}>
                <nav className="navbar">
                    <div className="d-flex align-items-center ms-4 mb-4">
                        <div className="position-relative">
                            <img src={logo} alt="" style={{ width: "150px"}} />
                        </div>
                    </div>
                    <div className="navbar-nav w-100">
                        <a href="index.html" className="nav-item nav-link active"><i className="fa fa-tachometer-alt me-2"></i>Dashboard</a>
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i className="fa fa-laptop me-2"></i>Elements</a>
                            <div className="dropdown-menu bg-transparent border-0">
                                <a href="button.html" className="dropdown-item">Buttons</a>

                            </div>
                        </div>
                        <a href="widget.html" className="nav-item nav-link"><i className="fa fa-th me-2"></i>Widgets</a>
                        <a href="form.html" className="nav-item nav-link"><i className="fa fa-keyboard me-2"></i>Forms</a>
                        <a href="table.html" className="nav-item nav-link"><i className="fa fa-table me-2"></i>Tables</a>
                        <a href="chart.html" className="nav-item nav-link"><i className="fa fa-chart-bar me-2"></i>Charts</a>
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i className="far fa-file-alt me-2"></i>Pages</a>
                            <div className="dropdown-menu bg-transparent border-0">
                                <a href="signin.html" className="dropdown-item">Sign In</a>

                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            {/* <!-- Sidebar End --> */}


            {/* <!-- Content Start --> */}
            <div className={`content ${Open}`}>
                {/* <!-- Navbar Start --> */}
                <nav className="navbar navbar-expand sticky-top px-4 py-0">
                    <div href="#" className="sidebar-toggler flex-shrink-0"
                        onClick={handle_sidebarToggler}>
                        <i className="fa fa-bars"></i>
                    </div>

                    <div className="navbar-nav align-items-center ms-auto">
                        <h5>Menon & Menon Ltd.</h5>
                    </div>
                </nav>
                {/* <!-- Navbar End --> */}

            </div>
            {/* <!-- Content End --> */}


            {/* <!-- Back to Top --> */}
            <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>
        </div>
    )
}

export default Navigation;
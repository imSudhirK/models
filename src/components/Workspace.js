import React, { useState } from "react";
import Contact2 from "./contact/Contact2";
import DetailCard from "./details/DetailCard";
import DetailCard2 from "./details/DetailCard2";
import Pagination from "./pagination/Pagination";
import ManagementTeam from "./teams/ManagementTeam";

const Workspace = () => {

    // pagintion
    const [currPage, setCurrPage] = useState(1);
    const paginate = (pageNum) =>{
        setCurrPage(pageNum)
    }

    return(
        <>
        <Contact2/>
        {/* <Pagination itemsPerPage={3} totalItems ={30} paginate={paginate}/> */}
        </>
    )
}

export default Workspace;
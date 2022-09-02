import React from "react";

const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className="pagination justify-content-center">
                <li className="page-item disabled">
                    <a className="page-link" href="#" tabIndex="-1">Previous</a>
                </li>
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <a className="page-link"
                            onClick={() => paginate(number)}>{number}</a>
                    </li>

                ))}
                <li className="page-item">
                    <a className="page-link" href="#">Next</a>
                </li>
            </ul>
        </nav>
    )
}
export default Pagination;
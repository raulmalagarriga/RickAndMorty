import React from 'react';
import './pagination.css';

const Pagination = ({
    pageNumber, 
    prevPage, 
    nextPage, 
    selectPage1,
    selectPage2,
    selectPage3
}) => {
    return ( 
        <>
            <div className='paginationDiv'>
                <ul className='pagination'>
                    <li className='page-item'>
                        <button className='btn btn-purple' onClick={prevPage}>
                            prev.
                        </button>
                    </li>
                    <li className='page-item'>
                        <button className='btn btn-purple' onClick={selectPage1}>
                            {pageNumber + 1}
                        </button>
                    </li>
                    <li className='page-item'>
                        <button className='btn btn-purple' onClick={selectPage2}>
                            {pageNumber + 2}
                        </button>
                    </li>
                    <li className='page-item'>
                        <button className='btn btn-purple' onClick={selectPage3}>
                            {pageNumber + 3}
                        </button>
                    </li>
                    <li className='page-item'>
                        <button className='btn btn-purple' onClick={nextPage}>
                            next.
                        </button>
                    </li>
                </ul>
            </div>
        </>
     );
}
 
export default Pagination;
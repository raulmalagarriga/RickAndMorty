import React from 'react';
import './pagination.css';

const Pagination = ({
    pageNumber, 
    prevPage, 
    nextPage, 
    selectPage1 = null,
    selectPage2,
    selectPage3
}) => {
    return ( 
        <>
            <div className='paginationDiv'>
                <ul className='pagination'>
                    <li className='page-item'>
                        <button className='btn btn-purple' onClick={prevPage}>
                            Prev.
                        </button>
                    </li>
                    {selectPage1 === null ? (
                        <></>
                    ) : (
                        <>
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
                        </>
                    )}
                    <li className='page-item'>
                        <button className='btn btn-purple' onClick={nextPage}>
                            Next.
                        </button>
                    </li>
                </ul>
            </div>
        </>
     );
}
 
export default Pagination;
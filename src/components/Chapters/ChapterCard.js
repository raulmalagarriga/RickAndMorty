import React from 'react';
import { Link } from 'react-router-dom';

const ChapterCard = ({
    id,
    name,
    air_date
}) => {
    return ( 
    <div>
        <div className="card text-white bg-dark mb-3 card-chapters">
            <div className="card-header">Chapter {id} </div>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">First broadcast: {air_date}</p>
                <Link to={`/chapters/${id}`} className='link-link1'>More...</Link>
            </div>
            </div>
    </div> 
    );
}
 
export default ChapterCard;
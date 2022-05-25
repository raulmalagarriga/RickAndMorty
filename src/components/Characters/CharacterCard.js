import React from 'react';
import { Link } from 'react-router-dom';
import './characters.css';

const CharacterCard = ({
    id,
    name,
    status,
    imageURL,
}) => {
    return (
        <>
        <div className='col'>
            <div className='col card card-content animate__animated animate__fadeIn'>  
                    <div className='row no-gutters'>
                        <div className='col-4'>
                            <img src={imageURL} className='card-img' alt={name}/>
                        </div>
                        <div className='col-8'>
                            <div className='card-body'>
                                <h5 className='card-tittle'>{name}</h5>
                                <p className='card-text'>{status}</p>
                                <Link to={`/characters/${id}`} className='link-link'>More...</Link>
                            </div>
                        </div>
                        <div className='col-12'>
                            
                        </div>
                    </div>

                
            </div>
        </div>
        </> 
     );
}
 
export default CharacterCard;
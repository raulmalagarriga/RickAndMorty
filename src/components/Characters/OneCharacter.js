import React, { useEffect , useState} from 'react'
import { useParams , useNavigate } from 'react-router-dom';
import { getOneCharacter } from '../../functions/requestApi';
import Navbar from '../NavBar/Navbar';
import './oneCharacter.css';

const OneCharacter = () => {
    const navigate = useNavigate();
    const params = useParams()
    const [character , setCharacter] = useState(null);

    useEffect( () => {
        getOneCharacter(params.id , setCharacter);
    } , [params.id])
    const handleReturn = () => {
        navigate(-1); //-1: go to the previous page
    }
    return ( 
        <div>
            <Navbar />
            <div className='container-card'>
                {
                    character !== null ? (
                        <div  className='row mt-5'>
                            <div className='col-4'>
                                <img src={character.data.image} alt={character.data.name} className='img-thumbnail div-purple animate__animated animate__fadeInLeft'/>
                            </div>
                            <div className='col-8 animate__animated animate__fadeIn' >
                                <h3>{character.data.name}</h3>
                                <ul className='list-group list-group-flush'>
                                    <li className='list-item'><b>Status:</b> {character.data.status}</li>
                                    <li className='list-item'><b>Specie:</b> {character.data.species}</li>
                                    <li className='list-item'><b>Location:</b> {character.data.location.name}</li>
                                </ul>
                                <h5 className='mt-3'>Origins</h5>
                                <p className='p-c'>{character.data.origin.name}</p>
                                <button 
                                className='btn btn-purple-out'
                                onClick={handleReturn}
                                >
                                Return
                                </button>
                            </div>
                            </div>
                    ) : (
                        <h1>Waiting for connection...</h1>
                    )
                }
            </div>
        </div>
     );
}
 
export default OneCharacter;
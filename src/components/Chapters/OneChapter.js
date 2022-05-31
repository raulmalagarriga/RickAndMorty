import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getOneChapter } from '../../functions/requestApi';
import Navbar from '../NavBar/Navbar';
import './oneChapter.css';

const OneChapter = () => {
    const navigate = useNavigate();
    const params = useParams();
    const [chapter , setChapter] = useState(null);
    const [charactersOnChapter , setCharactersOnChapter] = useState(null);

    useEffect( () => {
        getOneChapter(params.id , setChapter);
        //console.log(chapter);
    },[params.id]);
    console.log(chapter);

    const handleReturn = () => {
        navigate(-1); //-1: go to the previous page
    }
    //To get characters imgages:
    // set an urls array to fecth later
    let urlsArrayCharacters = [];
    if( chapter !== null){
        urlsArrayCharacters = chapter.characters.map(character => (
           character
        ))
    }
    console.log(urlsArrayCharacters);
    //With Promise.all method , i fetch the urls arrays and set it in the state
    useEffect( () => {
        const fecthAll = async(urls) => {
            const res = await Promise.all(urls.map(u => fetch(u)));
            let jsons = await Promise.all(res.map(r => r.json()));
            console.log(jsons);
            setCharactersOnChapter(jsons);
        }
        if(urlsArrayCharacters !== undefined){
            fecthAll(urlsArrayCharacters);
        }
    },[chapter]);
    console.log(charactersOnChapter);
    const toCharacter = (id) => {
        navigate(`/characters/${id}`);
    }
    return ( 
        <div>
            <Navbar />
            <div className='container-card'>
                {
                        chapter !== null ? (
                            <div  className='row mt-5'>
                                <div className='col-4 animate__animated animate__fadeInLeft'>
                                <h3>{chapter.name}</h3>
                                <ul className='list-group list-group-flush'>
                                        <li className='list-item'><b>Air date:</b> {chapter.air_date}</li>
                                        <li className='list-item'><b>Episode:</b> {chapter.episode}</li>
                                    </ul>
                                </div>
                                <div className='col-8 animate__animated animate__fadeIn' >
                                    <h3>Characters:</h3>
                                    <div className='row row-cols-1 row-cols-md-5 g-4 dv-char'>
                                        {
                                            charactersOnChapter !== null ? (
                                                charactersOnChapter.map( (characterData ) => (
                                                    <div key={characterData.id}>
                                                        {/* <h6>{characterData.name}</h6> */}
                                                        <img 
                                                            src={characterData.image}
                                                            alt={characterData.name}
                                                            className='img-thumbnail div-purple1 animate__animated animate__fadeIn'
                                                            onClick={() => toCharacter(characterData.id)}
                                                        />    
                                                    </div>
                                                ))
                                            ) : (
                                                <h1>Waiting for connection...</h1>
                                            )
                                        }
                                    </div>
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
 
export default OneChapter;
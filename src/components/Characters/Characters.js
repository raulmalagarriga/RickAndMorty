import React , {useEffect , useState} from 'react'
//funtions and custom hooks
import { useForm } from '../../hooks/useForm';
import { allCharacters  , getDinamicCharacters} from '../../functions/requestApi';
//components
import CharacterCard from './CharacterCard';
import Navbar from '../NavBar/Navbar';
import Pagination from '../Pagination/Pagination';
import Hero from '../Home/Hero';
//Images
import rickMortyCamp from '../../assets/rickMortyCamp.jpg';
import './characters.css';
//AOS
import AOS from 'aos';
import 'aos/dist/aos.css';
import SearchBar from '../SearchBar/SearchBar';

const Characters = () => {
    //AOS init
    AOS.init();
    const[characters , setCharacters] = useState(null);
    const[pageNumber, updatePageNumber] = useState(1);
    //useForm
    const initialForm = {
        search: '',
    }
    const [Formvalues , handleInputChange ] = useForm(initialForm);
    const {search} = Formvalues;
    

    useEffect( () => {
        allCharacters(setCharacters , pageNumber);
    } , [pageNumber]);
    // console.log(characters);
    useEffect( () => {
        getDinamicCharacters(setCharacters , search)
    }, [search]);

    //Pagination
    const nextPage = () =>{
        updatePageNumber(pageNumber + 1);
        console.log(pageNumber);
    }
    const prevPage = () =>{
        if(pageNumber !== 1){
            updatePageNumber(pageNumber - 1);
        }
    }
    const selectPage1 = () =>{
        updatePageNumber(pageNumber + 1);
    }
    const selectPage2 = () =>{
        updatePageNumber(pageNumber + 2);
    }
    const selectPage3 = () =>{
        updatePageNumber(pageNumber + 3);
    }
    
    return ( 
        <div className='animate__animated animate__fadeIn'>
            <Navbar />   
            <Hero imageSrc={rickMortyCamp} tittle={'Characters _______'} />    
            <SearchBar name={search} handleInput={handleInputChange}/>
            <div className='container-characters'>
                <div 
                    className='row row-cols-1 row-cols-md-3 g-4' 
                    data-aos='fade-up'
                    data-aos-duration='1000'
                >
                    { characters !== null ? (
                        characters.map(character => ( 
                            <CharacterCard
                                key={character.id} 
                                id={character.id}
                                name={character.name}
                                status={character.status}
                                imageURL={character.image}
                                specie={character.specie}
                                location={character.location.name}
                            />
                        ))
                    ) : (
                        <>
                            <h1>Waiting for connection...</h1>
                        </>
                    )}
                </div>
            </div>
            {
                search === '' ? (
                    <div className='pagination'>
                            <Pagination
                            pageNumber={pageNumber}
                            prevPage={prevPage}
                            nextPage={nextPage}
                            selectPage1={selectPage1}
                            selectPage2={selectPage2}
                            selectPage3={selectPage3}
                            />
                    </div>
                    ) : (
                        <></>
                    )
            }
        </div>
     );
}
 
export default Characters;
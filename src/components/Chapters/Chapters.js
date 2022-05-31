import React , {useState , useEffect} from 'react';
//Functions
import { getAllChapters, getDinamicChapters } from '../../functions/requestApi';
//Components
import Navbar from '../NavBar/Navbar';
import Hero from '../Home/Hero';
import SearchBar from '../SearchBar/SearchBar';
import ChapterCard from './ChapterCard';
//Images
import backBlue from '../../assets/backgroundBlue.jpg';
//Styles and animations
import AOS from 'aos';
import 'aos/dist/aos.css';
import './chapters.css';
import Pagination from '../Pagination/Pagination';
import { useForm } from '../../hooks/useForm';

const Chapters = () => {
    //AOS init
    AOS.init();
    
    const [pageNumber , updatePageNumber] = useState(1);
    const [chapters , setChapters] = useState(null);
    //useForm
    const initialForm = {
        search: '',
    }
    const [Formvalues , handleInputChange ] = useForm(initialForm);
    const {search} = Formvalues;
    
    //getAllChaptersOnPageLoad
    useEffect( () => {
        getAllChapters(setChapters , pageNumber);
    },[pageNumber]);
    console.log(chapters);
    //getChaptersBySearchBar
    useEffect( () => {
        getDinamicChapters(setChapters , search);
    },[search])
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
            <Hero imageSrc={backBlue} tittle={'Chapters _______'} /> 
            <SearchBar name={search} handleInput={handleInputChange}/>
            <div className='container-chapters'>
                <div 
                    className='row row-cols-1 row-cols-md-3 g-4' 
                    data-aos='fade-up'
                    data-aos-duration='1000'
                >
                     {
                    chapters !== null ? (
                        chapters.map( chapter => (
                            <ChapterCard 
                                key={chapter.id}
                                id={chapter.id}
                                name={chapter.name}
                                air_date={chapter.air_date}
                            />
                        ))
                    ) : (
                        <h1>Waiting for connection...</h1>
                    )
                    }
                </div>
            </div>
            {
                search === '' ? (
                    <div className='pagination'>
                            <Pagination
                            pageNumber={pageNumber}
                            prevPage={ prevPage }
                            nextPage={ nextPage }
                            selectPage1={ selectPage1 }
                            selectPage2={ selectPage2 }
                            selectPage3={ selectPage3 }
                            />
                    </div>
                    ) : (
                        <></>
                    )
            }
        </div>
     );
}
 
export default Chapters;
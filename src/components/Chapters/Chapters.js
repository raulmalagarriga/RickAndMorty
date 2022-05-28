import React , {useState , useEffect} from 'react';
//Functions
import { getAllChapters } from '../../functions/requestApi';
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

const Chapters = () => {
    //AOS init
    AOS.init();
    const [pageNumber , setPageNumber] = useState(1);
    const [chapters , setChapters] = useState(null);

    useEffect( () => {
        getAllChapters(setChapters , pageNumber);
    },[pageNumber]);
    console.log(chapters);

    return ( 
        <div className='animate__animated animate__fadeIn'>
            <Navbar />
            <Hero imageSrc={backBlue} tittle={'Chapters _______'} /> 
            <SearchBar />
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
        </div>
     );
}
 
export default Chapters;
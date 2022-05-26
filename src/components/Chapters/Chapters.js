import React from 'react';
import Navbar from '../NavBar/Navbar';
import backBlue from '../../assets/backgroundBlue.jpg';
import moon from '../../assets/moon.jpg';
import Hero from '../Home/Hero';

const Chapters = () => {
    return ( 
        <div className='animate__animated animate__fadeIn'>
            <Navbar />
            <Hero imageSrc={backBlue} tittle={'Chapters _______'} /> 
        </div>
     );
}
 
export default Chapters;
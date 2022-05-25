import background1 from '../../assets/background-1.jpg';   
import rickmorty1 from '../../assets/rickmorty1.png';
import rickmorty2 from '../../assets/rickmorty2.png';
import Hero from './Hero'; 
import Navbar from '../NavBar/Navbar';
import Slider from "./Slider";
import '../../App.css';

const Home = () => {

  return (
    <div className='App animate__animated animate__fadeIn'>
      <Navbar/>
      <Hero imageSrc={background1} tittle={'Rick and Morty Wiki'} />
      <Slider
        imageSrc={rickmorty2}
        title={"Characters"}
        subtitle={
          "Search all characters of Rick & Morty!"
        }
      />
      <Slider
        imageSrc={rickmorty1}
        title={"Chapters"}
        subtitle={"All the chapters' info are here!"}
        flipped={true}
      />
    </div>
  );
}

export default Home;

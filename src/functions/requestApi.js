import axios from "axios";
import swal from 'sweetalert';

const allCharacters = async(setCharacters , pageNumber) => {
    const request = await axios.get(`https://rickandmortyapi.com/api/character/?page=${pageNumber}`);
    setCharacters(request.data.results); 
}
const getDinamicCharacters = async(setSearch , inputValue) => {
    const request = await axios.get(`https://rickandmortyapi.com/api/character/?name=${inputValue}`)
    .catch(error => {
        swal({
            title: "No results found",
            icon: "error",
            button: "Ok",
          });
          console.log(error);
    })
    setSearch(request.data.results);
}
const getOneCharacter = async(id , setCharacter) => { 
    const request = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
    setCharacter(request);
}
const getAllChapters = async(setChapters , pageNumber) => {
    const request = await axios.get(`https://rickandmortyapi.com/api/episode?page=${pageNumber}`);
    setChapters(request.data.results);

}

export {allCharacters , getDinamicCharacters , getOneCharacter , getAllChapters};

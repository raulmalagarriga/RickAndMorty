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
export {allCharacters , getDinamicCharacters};

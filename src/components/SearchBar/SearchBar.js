import React from 'react';
import './search.css';

const SearchBar = ({name , handleInput}) => {
    return ( 
    <div className='div-search'>
        <input 
            type='text'
            placeholder='Search a character'
            name='search'
            className='input-search'
            value={name}
            onChange={handleInput}
            autoComplete='off'
            autoFocus
        />
    </div> 
    );
}
 
export default SearchBar;
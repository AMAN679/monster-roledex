import React from 'react';
import './search-box.styles.css';

export const SearchBox = ({ placeholder, handleOnChange }) => (

    <input className="search" type="text" placeholder={placeholder} onChange={handleOnChange} />


);
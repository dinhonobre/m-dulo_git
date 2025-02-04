import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ onSearch, isSearchVisible }) => { // Adiciona a prop isSearchVisible
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
        onSearch(event.target.value); // Envia a pesquisa ao App.js
    };

    return (
        <nav className="navbar">
            <h1>Travel Guide</h1>
            {isSearchVisible && ( // Renderiza a barra de busca apenas se isSearchVisible for verdadeiro
                <div className="search-container">
                    <input
                        type="text"
                        placeholder="Search for attractions"
                        value={searchTerm}
                        onChange={handleSearch}
                        className="search-bar"
                    />
                </div>
            )}
            <ul>
                <li><Link to="/attractions">Attractions</Link></li>
                <li><Link to="/filters">Filters</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;

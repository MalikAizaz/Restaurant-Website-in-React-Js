import React, { useState } from 'react';
import './Search.css'; // Import your CSS file for search bar styles

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    // Perform search logic here (e.g., filter data based on search term)
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="search-input"
      />
      
      <button className="search-button">Search</button>
    </div>
  );
};

export default SearchBar;

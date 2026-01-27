import React from "react";
import "./Searchbar.scss";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <button>OUR RANGE</button>
      <p>Sewage Treatment Plant</p>
      <p>Effluent Treatment Plant</p>
      <p>Organic Waste Composter</p>
      <p>Water Treatment Plant</p>
      <div class="search-container">
        
        <input type="search" placeholder="Search Products/Services" />
        <i class="ri-search-line"></i>
      </div>
    </div>
  );
};

export default SearchBar;

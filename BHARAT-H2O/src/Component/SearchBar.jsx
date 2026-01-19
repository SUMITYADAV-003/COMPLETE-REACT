import React, { useState } from "react";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
   const handleSearch = () => {
    console.log("Searching for:", searchValue);
    alert(`Searching for: ${searchValue}`);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };
  
  return (
    <div className="flex  justify-between">
      <h3>Our range &nbsp; |</h3>
      <p>Sewage Treatment Plant</p>
      <p>Effluent Treatment Plant</p>
      <p>
        Organic Waste <br />
        Composter
      </p>
      <p>Water Treatment Plant</p>
       <div className="relative">
            <i className="ri-search-line absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl"></i>
            <input 
              type="text"
              placeholder="Search products, services..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onKeyPress={handleKeyPress}
              className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
    </div>
  );
};

export default SearchBar;

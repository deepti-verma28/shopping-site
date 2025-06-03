'use client';
import Image from 'next/image';
import React, { useState } from 'react';

const items = [
  "Red Dress",
  "Blue Gown",
  "Party Wear Dress",
  "Casual Dress",
  "Evening Dress",
  "Floral Dress",
  "Summer Dress",
  "Black Dress",
];

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (value) => {
    setQuery(value);      
    setShowDropdown(false); 
  };

  return (
    <div className="relative w-full max-w-[350px] mx-auto">
      {/* Search input box */}
      <div className="flex px-4 py-2 rounded-md border-2 border-grey-500 overflow-hidden bg-white">
        <input
          type="text"
          placeholder="Search Something..."
          className="w-full outline-none bg-transparent text-gray-600 text-sm"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setShowDropdown(true);
          }}
        />
        <Image src='/assets/images/search.png' 
        alt="search"
        width={20}
        height={20}
        />
        
      </div>

      {/* Suggestions Dropdown */}
      {query && showDropdown && (
        <ul className="absolute z-50 top-full left-0 right-0 bg-white border border-gray-300 rounded-md mt-1 shadow-lg max-h-60 overflow-auto">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => (
              <li
                key={index}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleSelect(item)}
              >
                {item}
              </li>
            ))
          ) : (
            <li className="px-4 py-2 text-gray-500">No results found</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;

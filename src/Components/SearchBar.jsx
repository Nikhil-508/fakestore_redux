import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="relative w-full md:w-1/2">
      <input
        type="text"
        placeholder="Search Products..."
        className="border border-gray-300 p-3 pl-10 rounded-lg shadow-md w-full focus:ring-2 focus:ring-blue-500 transition"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <FaSearch className="absolute left-3 top-4 text-blue-500" />
    </div>
  );
};

export default SearchBar;

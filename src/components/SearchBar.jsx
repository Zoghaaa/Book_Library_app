import React from 'react';
import { FaSearch } from 'react-icons/fa';

export default function SearchBar({ searchQuery, setSearchQuery, handleSearch }) {
    return (
        <form onSubmit={handleSearch} className="flex items-center w-[100%] bg-black border border-gray-300 rounded-full shadow-md p-2 transition duration-400 hover:bg-gray-600 mr-4">
            <input
                type="text"
                placeholder="Search for books, authors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-grow bg-transparent text-lg italic placeholder-gray-400 focus:outline-none text-white"
            />
            <button type="submit" className="bg-transparent">
                <FaSearch size={20} color="white" />
            </button>
        </form>
    );
}

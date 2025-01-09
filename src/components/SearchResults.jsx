import React, { useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const SearchResults = () => {
    const location = useLocation();
    const books = location.state?.books || [];
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = direction === "down" ? 300 : -300; // Vertical scrolling
            scrollRef.current.scrollBy({ top: scrollAmount, behavior: "smooth" });
        }
    };

    return (
        <div className="h-screen w-screen bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col items-center">
            {/* Header Section */}
            <header className="mt-8">
                <h1 className="text-4xl font-bold text-white text-center tracking-wider">
                    Search Results
                </h1>
                <div className="w-24 h-1 bg-purple-500 mx-auto mt-2 rounded-full"></div>
                <p className="text-gray-300 text-lg mt-3 text-center">
                    Find your next read below!
                </p>
            </header>

            {/* Results Section */}
            <div className="relative w-full max-w-7xl p-6 mt-10 flex flex-col items-center">
                {/* Vertical Arrows for Small Screens */}
                <button
                    onClick={() => scroll("up")}
                    className="bg-purple-700 text-white rounded-full p-3 hover:bg-purple-600 transition duration-200 shadow-lg mb-4 md:hidden"
                >
                    &#9650; {/* Up Arrow */}
                </button>

                {/* Scrollable Container */}
                <motion.div
                    ref={scrollRef}
                    className="flex flex-col overflow-y-auto space-y-6 py-4 scrollbar-hide w-full h-[50vh] md:h-auto md:flex-row md:overflow-x-auto md:space-x-6 md:space-y-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {books.length > 0 ? (
                        books.map((book) => {
                            const bookKey = book.id;

                            return (
                                <Link
                                    to={`/book/${bookKey}`}
                                    className="block flex-shrink-0 w-full md:w-64"
                                    key={bookKey}
                                >
                                    <motion.div
                                        className="bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-110 hover:rotate-3 hover:shadow-2xl cursor-pointer"
                                        whileHover={{ scale: 1.05 }} // Slightly enlarge on hover
                                        whileTap={{ scale: 0.95 }} // Slightly shrink on tap
                                    >
                                        {book.volumeInfo.imageLinks?.thumbnail ? (
                                            <img
                                                src={book.volumeInfo.imageLinks.thumbnail}
                                                alt={book.volumeInfo.title}
                                                className="w-full h-48 object-cover"
                                            />
                                        ) : (
                                            <div className="w-full h-48 bg-gray-700 flex items-center justify-center">
                                                <p className="text-gray-400">No Image</p>
                                            </div>
                                        )}
                                        <div className="p-4">
                                            <h3 className="text-lg font-bold text-white truncate">
                                                {book.volumeInfo.title || "Title not available"}
                                            </h3>
                                            <p className="italic text-sm text-gray-400">
                                                Author: {book.volumeInfo.authors?.join(", ") || "N/A"}
                                            </p>
                                        </div>
                                    </motion.div>
                                </Link>
                            );
                        })
                    ) : (
                        <p className="text-center text-gray-400 w-full">
                            No results found.
                        </p>
                    )}
                </motion.div>

                {/* Down Arrow */}
                <button
                    onClick={() => scroll("down")}
                    className="bg-purple-700 text-white rounded-full p-3 hover:bg-purple-600 transition duration-200 shadow-lg mt-4 md:hidden"
                >
                    &#9660; {/* Down Arrow */}
                </button>
            </div>
        </div>
    );
};

export default SearchResults;

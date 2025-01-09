import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

const BookDetails = () => {
    const { bookId } = useParams();
    const [bookDetails, setBookDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        const fetchBookDetails = async () => {
            try {
                const response = await fetch(`https://www.googleapis.com/books/v1/volumes/${bookId}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch book details");
                }
                const data = await response.json();
                setBookDetails(data);
            } catch (error) {
                console.error("Error fetching book details:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchBookDetails();
    }, [bookId]);

    const toggleFavorite = () => {
        setIsFavorite((prev) => !prev);
    };

    if (loading) {
        return 
    }

    if (!bookDetails) {
        return <p className="text-center text-gray-300 bg-gray-900">No details available for this book.</p>;
    }

    const { volumeInfo } = bookDetails;

    return (
        <div className="bg-gray-900 text-white min-h-screen w-screen p-8">
            <div className="max-w-6xl mx-auto flex flex-wrap lg:flex-nowrap items-center gap-8">
                {/* Book Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="flex-shrink-0"
                >
                    <img
                        src={volumeInfo.imageLinks?.thumbnail}
                        alt={volumeInfo.title}
                        className="w-64 h-96 rounded shadow-lg"
                    />
                </motion.div>

                {/* Book Details */}
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex-1"
                >
                    <h1 className="text-4xl font-bold mb-4">{volumeInfo.title}</h1>
                    {volumeInfo.authors && (
                        <p className="text-xl italic mb-4">Author: {volumeInfo.authors.join(", ")}</p>
                    )}
                    {volumeInfo.publisher && (
                        <p className="text-lg mb-4">Publisher: {volumeInfo.publisher}</p>
                    )}
                    {volumeInfo.publishedDate && (
                        <p className="text-lg mb-4">Published: {volumeInfo.publishedDate}</p>
                    )}
                    {volumeInfo.description && (
                        <div className="text-justify text-lg">
                            {volumeInfo.description.replace(/<[^>]+>/g, "")} {/* Remove HTML tags */}
                        </div>
                    )}

                    {/* Favorite Button */}
                    <div className="mt-6">
                        <button
                            onClick={toggleFavorite}
                            className={`px-6 py-2 rounded font-bold ${
                                isFavorite
                                    ? "bg-red-500 hover:bg-red-400"
                                    : "bg-gray-700 hover:bg-gray-600"
                            } transition`}
                        >
                            {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default BookDetails;

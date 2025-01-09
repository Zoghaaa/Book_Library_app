import React from "react";
import { motion } from "framer-motion";

export default function HorrorBooks() {
  const books = [
    {
      id: 1,
      title: "The Shining",
      author: "Stephen King",
      description: "A chilling horror novel set in a haunted hotel.",
      image: "/assets/the-shining.jpg",
    },
    {
      id: 2,
      title: "It",
      author: "Stephen King",
      description: "A group of children confront a terrifying entity.",
      image: "/assets/it.jpg",
    },
    {
      id: 3,
      title: "The Haunting of Hill House",
      author: "Shirley Jackson",
      description: "A story of four strangers at a haunted mansion.",
      image: "/assets/the-haunting-of-hill-house.jpg",
    },
    {
      id: 4,
      title: "The Exorcist",
      author: "William Peter Blatty",
      description: "A chilling tale of possession and exorcism.",
      image: "/assets/the-exorcist.jpg",
    },
  ];

  // Define motion variants for animations
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-slate-800">Horror Books</h1>
        <p className="text-slate-600 mt-2">Get ready for a spine-chilling read.</p>
      </div>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.2 }} // Animates children sequentially
      >
        {books.map((book) => (
          <motion.div
            key={book.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
            variants={cardVariants}
            whileHover={{ scale: 1.05 }} // Slight zoom on hover
            whileTap={{ scale: 0.95 }} // Slight shrink on tap
          >
            <img
              src={book.image}
              alt={book.title}
              className="h-56 w-full object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">{book.title}</h2>
              <p className="text-sm text-gray-600">By {book.author}</p>
              <p className="text-gray-700 mt-2">{book.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
}

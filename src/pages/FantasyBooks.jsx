import React from "react";
import { motion } from "framer-motion";

export default function FantasyBooks() {
  const books = [
    {
      id: 1,
      title: "Harry Potter and the Sorcerer's Stone",
      author: "J.K. Rowling",
      description: "A young wizard's first year at Hogwarts School of Witchcraft and Wizardry.",
      image: "/assets/harry-potter.jpg",
    },
    {
      id: 2,
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      description: "The adventure of Bilbo Baggins as he joins a group of dwarves to reclaim their treasure.",
      image: "/assets/the-hobbit.jpg",
    },
    {
      id: 3,
      title: "A Game of Thrones",
      author: "George R.R. Martin",
      description: "A battle for the throne begins in the Seven Kingdoms of Westeros.",
      image: "/assets/a-game-of-thrones.jpg",
    },
    {
      id: 4,
      title: "The Name of the Wind",
      author: "Patrick Rothfuss",
      description: "The story of a gifted young man who becomes a legendary figure.",
      image: "/assets/the-name-of-the-wind.jpg",
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
        <h1 className="text-3xl font-bold text-slate-800">Fantasy Books</h1>
        <p className="text-slate-600 mt-2">Step into magical worlds full of adventure.</p>
      </div>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.2 }} // Animates children with a stagger effect
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

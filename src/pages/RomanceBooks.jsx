import React from "react";
import { motion } from "framer-motion";

export default function RomanceBooks() {
  const books = [
    {
      id: 1,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      description: "A timeless love story set in the Regency era.",
      image: "/assets/pride-and-prejudice.jpg",
    },
    {
      id: 2,
      title: "The Fault in Our Stars",
      author: "John Green",
      description: "A poignant and romantic tale of two cancer-stricken teens.",
      image: "/assets/the-fault-in-our-stars.jpg",
    },
    {
      id: 3,
      title: "Outlander",
      author: "Diana Gabaldon",
      description: "A time-traveling romance between a 1940s woman and a Scottish Highlander.",
      image: "/assets/outlander.jpg",
    },
    {
      id: 4,
      title: "Me Before You",
      author: "Jojo Moyes",
      description: "A story of love and loss as a woman cares for a quadriplegic man.",
      image: "/assets/me-before-you.jpg",
    },
  ];

  // Animation variants for book cards
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0 },
  };

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-slate-800">Romance Books</h1>
        <p className="text-slate-600 mt-2">Fall in love with unforgettable stories.</p>
      </div>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.2 }}
      >
        {books.map((book) => (
          <motion.div
            key={book.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
            variants={cardVariants}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.95 }}
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

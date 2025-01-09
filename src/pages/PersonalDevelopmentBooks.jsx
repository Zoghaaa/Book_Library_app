import React from "react";
import { motion } from "framer-motion";

export default function PersonalDevelopmentBooks() {
  const books = [
    {
      id: 1,
      title: "Atomic Habits",
      author: "James Clear",
      description: "An Easy & Proven Way to Build Good Habits & Break Bad Ones.",
      image: "/assets/atomic-habits.jpg",
    },
    {
      id: 2,
      title: "The Power of Now",
      author: "Eckhart Tolle",
      description: "A Guide to Spiritual Enlightenment.",
      image: "/assets/the-power-of-now.jpg",
    },
    {
      id: 3,
      title: "Think and Grow Rich",
      author: "Napoleon Hill",
      description: "The Landmark Bestseller.",
      image: "/assets/think-and-grow-rich.jpg",
    },
    {
      id: 4,
      title: "Deep Work",
      author: "Cal Newport",
      description: "Rules for Focused Success in a Distracted World.",
      image: "/assets/deep-work.jpg",
    },
  ];

  // Animation variants for card transitions
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-slate-800">
          Personal Development Books
        </h1>
        <p className="text-slate-600 mt-2">
          Discover life-changing reads to inspire and transform you.
        </p>
      </div>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.2 }} // Sequential animation for children
      >
        {books.map((book) => (
          <motion.div
            key={book.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
            variants={cardVariants}
            whileHover={{ scale: 1.05, translateY: -10 }} // Subtle lift on hover
            whileTap={{ scale: 0.95 }} // Shrink effect on tap
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

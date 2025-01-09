import React from "react";
import { motion } from "framer-motion";

export default function HumorBooks() {
  const books = [
    {
      id: 1,
      title: "The Hitchhiker's Guide to the Galaxy",
      author: "Douglas Adams",
      description: "A comedic sci-fi adventure across the galaxy.",
      image: "/assets/the-hitchhikers-guide.jpg",
    },
    {
      id: 2,
      title: "Good Omens",
      author: "Neil Gaiman and Terry Pratchett",
      description: "A hilarious tale of an angel and demon teaming up to prevent Armageddon.",
      image: "/assets/good-omens.jpg",
    },
    {
      id: 3,
      title: "Bossypants",
      author: "Tina Fey",
      description: "A funny memoir by the comedian Tina Fey.",
      image: "/assets/bossypants.jpg",
    },
    {
      id: 4,
      title: "The Rosie Project",
      author: "Graeme Simsion",
      description: "A quirky love story about a socially awkward professor.",
      image: "/assets/the-rosie-project.jpg",
    },
  ];

  // Motion variants for animations
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-slate-800">Humor Books</h1>
        <p className="text-slate-600 mt-2">Laugh out loud with these funny books.</p>
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
            whileHover={{ scale: 1.05, rotate: 2 }} // Adds a playful rotation on hover
            whileTap={{ scale: 0.95, rotate: -2 }} // Adds a subtle reverse rotation on tap
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

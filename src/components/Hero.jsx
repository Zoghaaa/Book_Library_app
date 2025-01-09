import { motion } from 'framer-motion';
import AnimatedCharacters from './AnimatedCharacters';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar'; // Import SearchBar
import SearchResults from './SearchResults';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
    const [searchQuery, setSearchQuery] = useState('');
    const [books, setBooks] = useState([]); // State to store search results
    const [loading, setLoading] = useState(false); // Loading state
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu
    const navigate = useNavigate(); // React Router navigate function

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!searchQuery.trim()) {
            alert("Please enter a search query.");
            return;
        }

        setLoading(true); // Set loading to true

        try {
            const response = await fetch(
                `https://www.googleapis.com/books/v1/volumes?q=${searchQuery.trim()}&maxResults=10`
            );

            if (!response.ok) {
                throw new Error("Failed to fetch data from Google Books API.");
            }

            const data = await response.json();

            if (data.items && data.items.length > 0) {
                navigate('/searchresult', { state: { books: data.items } }); // Navigate with results
            } else {
                alert('No results found.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        } finally {
            setLoading(false); // Stop loading spinner
        }
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <main className="h-screen w-screen bg-white bg-cover bg-center sm:bg-none overflow-hidden">
            <div className="relative px-6 w-full h-full">
              {/* Navbar with SearchBar */}
<nav className="flex items-center justify-between py-4 bg-white shadow-md">
    {/* Search Bar on the Left */}
    <div className="flex items-center">
        <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            handleSearch={handleSearch}
            className="w-40 sm:w-[10rem] md:w-[10rem]" // Fixed width for small screens
        />
    </div>

    {/* Hamburger Icon on the Right */}
    <div className="block lg:hidden">
        <button onClick={toggleMobileMenu} className="focus:outline-none">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
        </button>
    </div>
  
    {/* Links for Larger Screens */}
    <div className="hidden lg:flex items-center space-x-24 mr-10">
        <Link to="/" className="text-gray-800 font-bold ml-5">Home</Link>
        <Link to="/categories" className="text-gray-800 font-bold">Categories</Link>
        <Link to="/contactUs" className="text-gray-800 font-bold">Contact Us</Link>
    </div>
</nav>
  {isMobileMenuOpen && (
                    <div className="lg:hidden flex flex-col space-y-2 mt-4 bg-white shadow-md p-4">
                        <Link to="/" className="text-gray-800 font-bold">Home</Link>
                        <Link to="/categories" className="text-gray-800 font-bold">Categories</Link>
                        <Link to="/contactUs" className="text-gray-800 font-bold">Contact Us</Link>
                    </div>
                )}
                {/* Main Content */}
                <div className="grid grid-cols-12 grid-rows-6 h-[90%] gap-4 pb-2 pt-6">
                    <motion.div
                        className="flex flex-col gap-8 sm:gap-5 col-span-12 sm:col-span-6 sm:row-span-7 pt-24 sm:pt-28"
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1, transition: { staggerChildren: 0.03 } },
                        }}
                    >
                        <AnimatedCharacters
                            text="Discover Your Next Favorite Book"
                            className="font-extrabold text-6xl text-slate-700 text-center sm:text-start font-gentium uppercase tracking-tighter transform scale-y-125"
                        />
                        <AnimatedCharacters
                            text="From timeless classics to modern bestsellers, explore a world of stories, knowledge, and inspiration. Start your reading adventure today!"
                            className="text-slate-700 text-center sm:text-start"
                        />

                        {/* Book Results Section */}
                        <div className="p-4">
                            {loading && (
                                <div className="flex items-center justify-center mt-6">
                                    {/* Loading Spinner or Message */}
                                    Loading...
                                </div>
                            )}
                             {books.length > 0 && !loading && (
                                <SearchResults books={books} />
                             )}
                        </div>
                    </motion.div>


                    {/* Other Divs: Hidden on small screens */}
                    <motion.div
                        className="hidden sm:block sm:col-span-4 sm:row-span-2 sm:col-start-7 bg-slate-300 rounded-xl bg-[url('/assets/image9.jpg')] bg-cover bg-center shadow-custom"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
                    >
                    </motion.div>

                    <motion.div
                        className="hidden sm:block sm:col-span-2 sm:row-span-5 sm:col-start-7 sm:row-start-3 bg-[url('/assets/20-Cozy-Room-Decor-Ideas-for-Fall-and-Winter-Beautiful-Dawn-Designs.jpg')] shadow-custom bg-cover rounded-xl"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
                    ></motion.div>

                    <motion.div
                        className="hidden sm:block sm:col-span-2 sm:row-span-3 sm:col-start-11 sm:row-start-1 bg-gray-800 rounded-xl bg-[url('/assets/image5.jpg')] bg-cover shadow-custom"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
                    ></motion.div>

                    <motion.div
                        className="hidden sm:block sm:col-span-2 sm:row-span-3 sm:col-start-9 sm:row-start-5 bg-green-400 rounded-xl bg-[url('/assets/image6.jpg')] bg-cover shadow-custom"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
                    >
                    </motion.div>

                    <motion.div
                        className="hidden sm:block sm:col-span-2 sm:row-span-4 sm:col-start-11 sm:row-start-4 bg-blue-400 rounded-xl bg-[url('/assets/image7.jpg')] bg-cover bg-center shadow-custom"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
                    >
                    </motion.div>

                    <motion.div
                        className="hidden sm:block sm:col-span-2 sm:row-span-2 sm:col-start-9 sm:row-start-3 bg-yellow-200 rounded-xl bg-[url('/assets/book.jpg')] bg-cover bg-center shadow-custom"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
                    >
                    </motion.div>
                </div>
            </div>
        </main>
    );
}

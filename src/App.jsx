import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookDetails from './components/BookDetails';
import Hero from '@/components/Hero.jsx';
import SearchResults from './components/SearchResults';
import ContactUs from './components/ContactUs';
import Categories from './components/Categories';
import PersonalDevelopmentBooks from './pages/PersonalDevelopmentBooks';
import HumorBooks from './pages/HumorBooks';
import RomanceBooks from './pages/RomanceBooks';
import HorrorBooks from './pages/HorrorBooks';
import FantasyBooks from './pages/FantasyBooks';







const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/searchresult" element={<SearchResults />} />
        <Route path="/book/:bookId" element={<BookDetails />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/personal-development" element={<PersonalDevelopmentBooks />} />
        <Route path="/humour" element={<HumorBooks />} />
        <Route path="/romance" element={<RomanceBooks />} />
        <Route path="/horror" element={<HorrorBooks />} />
        <Route path="/fantasy" element={<FantasyBooks />} />



        



        

      
      </Routes>
    </Router>
  );
};

export default App;

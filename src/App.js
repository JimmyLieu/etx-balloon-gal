import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Gallery from './components/Gallery';
import About from './components/About';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import LoadingScreen from './components/LoadingScreen';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/fonts.css';
import Admin from './components/Admin';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="App">
        <LoadingScreen isLoading={isLoading} />
        <Header />
        <Navbar />
        <div className="page-content">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Gallery from './components/Gallery';
import LoadingScreen from './components/LoadingScreen';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
            </>
          } />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

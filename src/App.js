import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import LoadingScreen from './components/LoadingScreen';
import { useState, useEffect } from 'react';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  // Starts 1 second delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <LoadingScreen isLoading={isLoading} />
      <Header />
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;

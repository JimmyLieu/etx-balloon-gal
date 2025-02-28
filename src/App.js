import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import LoadingScreen from './components/LoadingScreen';
import { useState, useEffect } from 'react';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Start transition after 1 second
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <LoadingScreen isLoading={isLoading} />
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;

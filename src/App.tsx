import React, { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { fetchUpcomingFixtures } from './services/api';
import { Fixture, ApiError } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import MatchList from './components/MatchList';

function App() {
  const [matches, setMatches] = useState<Fixture[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadMatches();
  }, []);

  const loadMatches = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const data = await fetchUpcomingFixtures();
      setMatches(data.response);
      
      if (data.response.length === 0) {
        toast('No matches scheduled for today', {
          icon: '⚽',
          duration: 4000
        });
      }
    } catch (err) {
      const apiError = err as ApiError;
      setError(apiError.message);
      toast.error(apiError.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Toaster 
        position="top-right"
        toastOptions={{
          style: {
            background: '#363636',
            color: '#fff',
          },
        }}
      />
      <Header />
      
      <main className="container mx-auto px-4 py-8 flex-1">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Today's Matches</h2>
        </div>
        <MatchList matches={matches} isLoading={isLoading} />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
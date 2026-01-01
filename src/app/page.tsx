// app/page.js
'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import LoadingAnimation from './Loading';
import PageContent from './components/PageContent';
import Header from './components/Header';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Auto hide after 3 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    // ESC key to skip
    const handleKeyPress = (e:any) => {
      if (e.key === 'Escape') {
        setIsLoading(false);
        clearTimeout(timer);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingAnimation key="loading" />
        ) : (
          <div key="content" className="min-h-screen">
            <Header />
            <PageContent />
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
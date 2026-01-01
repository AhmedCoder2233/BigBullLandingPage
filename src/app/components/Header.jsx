// components/Header.js
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { 
  Menu, 
  X, 
  ChevronRight,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
    { name: 'Career', href: '#career' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar for Contact Info - Only on Desktop */}
      <div className="hidden lg:block bg-gradient-to-r from-red-900/20 to-black border-b border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-2 text-sm">
            <div className="flex items-center space-x-6">
              <a href="tel:+15551234567" className="flex items-center text-gray-300 hover:text-white transition-colors">
                <Phone size={14} className="mr-2 text-red-400" />
                <span>USA: +1 (555) 123-4567</span>
              </a>
              <a href="mailto:info@bigbulldigital.com" className="flex items-center text-gray-300 hover:text-white transition-colors">
                <Mail size={14} className="mr-2 text-red-400" />
                <span>info@bigbulldigital.com</span>
              </a>
            </div>
            <div className="flex items-center">
              <MapPin size={14} className="mr-2 text-red-400" />
              <span className="text-gray-300">Global Offices: USA • PK • UAE • UK</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className={`sticky top-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-black/90 backdrop-blur-xl shadow-2xl shadow-red-900/10 border-b border-red-900/20' 
            : 'bg-black/80 backdrop-blur-lg border-b border-gray-800/50'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <motion.a
              href="#home"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center space-x-3 group"
            >
              <div className="relative">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg shadow-red-900/30 group-hover:shadow-red-900/50 transition-shadow">
                  <Image
                    src="/logo.png"
                    alt="Big Bull Digital"
                    width={32}
                    height={32}
                    className="object-contain"
                    priority
                  />
                </div>
                {/* Animated Ring */}
                <motion.div
                  animate={{
                    rotate: 360,
                    scale: [1, 1.05, 1]
                  }}
                  transition={{
                    rotate: {
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    },
                    scale: {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                  className="absolute -inset-2 border-2 border-red-500/30 rounded-xl pointer-events-none"
                />
              </div>
              <div>
                <h1 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent">
                  BIG BULL DIGITAL
                </h1>
                <div className="h-1 w-8 bg-gradient-to-r from-red-600 to-red-400 rounded-full group-hover:w-12 transition-all duration-300"></div>
              </div>
            </motion.a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 text-gray-300 hover:text-white transition-colors text-sm font-medium rounded-lg relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-red-600 to-red-400 group-hover:w-3/4 transition-all duration-300"></span>
                </motion.a>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="ml-4 px-6 py-2.5 bg-gradient-to-r from-red-600 to-red-700 rounded-lg font-semibold text-sm hover:shadow-lg hover:shadow-red-500/30 transition-all"
              >
                Get Started
              </motion.button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-gray-900/50 hover:bg-gray-800 transition-colors"
            >
              {isMenuOpen ? (
                <X size={24} className="text-white" />
              ) : (
                <Menu size={24} className="text-gray-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-gradient-to-b from-gray-900 to-black border-t border-gray-800 overflow-hidden"
            >
              <div className="container mx-auto px-4 py-6">
                <div className="space-y-1">
                  {navItems.map((item) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      whileHover={{ x: 10 }}
                      className="flex items-center justify-between py-3 px-4 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all"
                    >
                      <span className="font-medium">{item.name}</span>
                      <ChevronRight size={18} className="text-red-400" />
                    </motion.a>
                  ))}
                </div>
                
                {/* Mobile Contact Info */}
                <div className="mt-6 pt-6 border-t border-gray-800 space-y-4">
                  <a 
                    href="tel:+15551234567"
                    className="flex items-center text-gray-300 hover:text-white"
                  >
                    <Phone size={16} className="mr-3 text-red-400" />
                    <span>USA: +1 (555) 123-4567</span>
                  </a>
                  <a 
                    href="mailto:info@bigbulldigital.com"
                    className="flex items-center text-gray-300 hover:text-white"
                  >
                    <Mail size={16} className="mr-3 text-red-400" />
                    <span>info@bigbulldigital.com</span>
                  </a>
                </div>
                
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="w-full mt-6 py-3.5 bg-gradient-to-r from-red-600 to-red-700 rounded-lg font-semibold text-lg"
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};

export default Header;
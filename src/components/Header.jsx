'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

function Header() {
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  // Close mobile menu when clicking outside or on a link
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    // Add/remove blur effect to main content
    const mainContent = document.getElementById('main-content');
    
    if (isMobileMenuOpen) {
      if (mainContent) {
        mainContent.style.filter = 'blur(6px) brightness(0.7)';
        mainContent.style.transition = 'filter 0.3s ease-in-out';
        mainContent.style.pointerEvents = 'none';
        mainContent.style.userSelect = 'none';
      }
      // Prevent body scroll
      document.body.style.overflow = 'hidden';
    } else {
      if (mainContent) {
        mainContent.style.filter = 'none';
        mainContent.style.pointerEvents = 'auto';
        mainContent.style.userSelect = 'auto';
      }
      // Restore body scroll
      document.body.style.overflow = 'auto';
    }

    window.addEventListener('resize', handleResize);
    document.addEventListener('keydown', handleEscape);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('keydown', handleEscape);
      // Clean up blur effect on unmount
      if (mainContent) {
        mainContent.style.filter = 'none';
        mainContent.style.pointerEvents = 'auto';
        mainContent.style.userSelect = 'auto';
      }
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (sectionName) => {
    setActiveSection(sectionName);
    setIsMobileMenuOpen(false); // Close mobile menu when clicking a nav item
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Mobile menu animation variants
  const drawerVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      x: "0%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };

  const backdropVariants = {
    closed: {
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const mobileItemVariants = {
    closed: {
      opacity: 0,
      x: 50,
      transition: {
        duration: 0.2
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <>
      <motion.header 
        className="fixed top-0 left-0 right-0 z-50 glass"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Profile Section */}
          <motion.div 
            className="flex items-center space-x-3"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600 p-0.5">
              <div className="w-full h-full rounded-full overflow-hidden bg-zinc-900 flex items-center justify-center">
                {/* Placeholder for profile image - you can replace with actual image */}
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
                  <span className="text-zinc-100 text-sm font-bold">A</span>
                </div>
              </div>
            </div>
            <motion.h1 
              className="text-zinc-100 text-xl font-semibold tracking-wide"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              Ayann
            </motion.h1>
          </motion.div>

          {/* Desktop Navigation Menu */}
          <motion.nav 
            className="hidden md:flex items-center space-x-8"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={() => handleNavClick(item.name)}
                className={`relative text-sm font-medium transition-colors duration-300 ${
                  activeSection === item.name 
                    ? 'text-blue-400' 
                    : 'text-zinc-400 hover:text-zinc-100'
                }`}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.1,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
                {activeSection === item.name && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-400"
                    layoutId="activeIndicator"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.a>
            ))}
          </motion.nav>

          {/* Mobile Menu Button */}
          <motion.div 
            className="md:hidden"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            <button 
              onClick={toggleMobileMenu}
              className="text-zinc-100 hover:text-blue-400 focus:outline-none p-2"
              aria-label="Toggle mobile menu"
            >
              <motion.div
                animate={isMobileMenuOpen ? "open" : "closed"}
                className="w-6 h-6 flex flex-col justify-center items-center"
              >
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: 45, y: 6 }
                  }}
                  className="w-6 h-0.5 bg-current block transition-all duration-300 origin-center"
                />
                <motion.span
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 }
                  }}
                  className="w-6 h-0.5 bg-current block mt-1.5 transition-all duration-300"
                />
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: -45, y: -6 }
                  }}
                  className="w-6 h-0.5 bg-current block mt-1.5 transition-all duration-300 origin-center"
                />
              </motion.div>
            </button>
          </motion.div>
        </div>
      </div>
    </motion.header>

    {/* Mobile Drawer Navigation - Moved outside header */}
    <AnimatePresence mode="wait">
      {isMobileMenuOpen && (
        <>
          {/* Invisible backdrop for closing menu */}
          <motion.div
            variants={backdropVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-40 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Drawer */}
          <motion.div
            variants={drawerVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed top-0 right-0 h-full w-80 max-w-[80vw] bg-gray-900 bg-opacity-98 backdrop-blur-lg border-l border-gray-700 z-50 md:hidden shadow-2xl overflow-y-auto"
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-700 sticky top-0 bg-gray-900">
              <div className="flex items-center space-x-3">
                <div className="relative w-8 h-8 rounded-full overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600 p-0.5">
                  <div className="w-full h-full rounded-full overflow-hidden bg-gray-900 flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
                      <span className="text-white text-xs font-bold">A</span>
                    </div>
                  </div>
                </div>
                <h2 className="text-white text-lg font-semibold">Menu</h2>
              </div>
              
              {/* Close Button */}
              <motion.button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-400 hover:text-white p-2 rounded-lg hover:bg-gray-800 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>
            </div>

            {/* Navigation Items */}
            <div className="p-6">
              <nav className="space-y-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    variants={mobileItemVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    <motion.a
                      href={item.href}
                      onClick={() => handleNavClick(item.name)}
                      className={`block px-4 py-3 rounded-lg text-lg font-medium transition-all duration-200 ${
                        activeSection === item.name
                          ? 'text-blue-400 bg-blue-400 bg-opacity-10 border border-blue-400 border-opacity-30'
                          : 'text-gray-300 hover:text-white hover:bg-gray-800'
                      }`}
                      whileHover={{ 
                        scale: 1.02,
                        x: 5,
                        transition: { duration: 0.2 }
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-2 h-2 rounded-full transition-all duration-200 ${
                          activeSection === item.name ? 'bg-blue-400' : 'bg-gray-600'
                        }`} />
                        <span>{item.name}</span>
                      </div>
                    </motion.a>
                  </motion.div>
                ))}
              </nav>

              {/* Additional drawer content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mt-8 pt-6 border-t border-gray-700"
              >
                <div className="space-y-4">
                  <motion.div 
                    className="text-gray-400 text-sm"
                    whileHover={{ scale: 1.05 }}
                  >
                    <p>Let's connect!</p>
                  </motion.div>
                  
                  <div className="flex space-x-4">
                    {['GitHub', 'LinkedIn', 'Twitter'].map((social, index) => (
                      <motion.a
                        key={social}
                        href="#"
                        className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1 + index * 0.1 }}
                      >
                        <span className="text-xs font-bold">{social[0]}</span>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
    </>
  );
}

export default Header;
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Coffee, Moon, Sun } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Toggle Dark Mode
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <nav className="fixed w-full z-50 top-0 start-0 border-b border-gray-200/20 dark:border-gray-700/20 glassmorphism bg-white/30 dark:bg-black/30 backdrop-blur-md">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Coffee className="w-8 h-8 text-espresso dark:text-cream" />
          <span className="self-center text-2xl font-serif font-semibold whitespace-nowrap text-espresso dark:text-cream">
            BIHOUSE
          </span>
        </a>

        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse gap-4">
            {/* Dark Mode Toggle */}
            <button
                onClick={() => setIsDark(!isDark)}
                className="p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
                aria-label="Toggle Dark Mode"
            >
                {isDark ? <Sun className="w-5 h-5 text-cream" /> : <Moon className="w-5 h-5 text-espresso" />}
            </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="items-center justify-between w-full md:flex md:w-auto md:order-1 overflow-hidden"
              id="navbar-sticky"
            >
              <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:border-gray-700">
                {['Home', 'Menu', 'About', 'Contact'].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="block py-2 px-3 text-espresso rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gold md:p-0 dark:text-cream dark:hover:text-gold dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700 transition-colors"
                      aria-current="page"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Desktop Menu (always visible on md+) */}
         <div
          className="hidden md:flex items-center justify-between w-full md:w-auto md:order-1"
          id="navbar-sticky-desktop"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:border-gray-700">
            {['Home', 'Menu', 'About', 'Contact'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="block py-2 px-3 text-espresso rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gold md:p-0 dark:text-cream dark:hover:text-gold dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700 transition-colors"
                  aria-current="page"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      {/* Mobile Menu AnimatePresence could be added here for smoother entrance */}
    </nav>
  );
};

export default Navbar;

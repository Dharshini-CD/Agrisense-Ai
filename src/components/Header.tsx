import React, { useState } from 'react';
    import { Link, useLocation } from 'react-router-dom';
    import { Menu, X, Leaf, Sun, Moon } from 'lucide-react';

    const Header = () => {
      const [isMenuOpen, setIsMenuOpen] = useState(false);
      const [isDarkMode, setIsDarkMode] = useState(false);
      const location = useLocation();

      const navigation = [
        { name: 'Dashboard', href: '/' },
        { name: 'Crop Intelligence', href: '/crop-intelligence' },
        { name: 'Market Forecast', href: '/market-forecast' },
        { name: 'Risk Simulator', href: '/risk-simulator' },
        { name: 'Pest & Disease', href: '/pest-disease' },
        { name: 'Soil Health', href: '/soil-health' },
        { name: 'Weather', href: '/weather' },
        { name: 'Market Intelligence', href: '/market-intelligence' },
        { name: 'Alerts', href: '/alerts' }
      ];

      const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle('dark');
      };

      return (
        <header className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-700">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <Link to="/" className="flex items-center space-x-2">
                  <Leaf className="h-8 w-8 text-green-600" />
                  <span className="text-xl font-bold text-gray-900 dark:text-white">AgriSense AI</span>
                </Link>
              </div>

              <div className="hidden lg:flex items-center space-x-8">
                {navigation.slice(0, 6).map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`text-sm font-medium transition-colors ${
                      location.pathname === item.href
                        ? 'text-green-600 dark:text-green-400'
                        : 'text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <div className="flex items-center space-x-4">
                <button
                  onClick={toggleDarkMode}
                  className="p-2 rounded-md text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                  aria-label="Toggle dark mode"
                >
                  {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </button>

                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="lg:hidden p-2 rounded-md text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                  aria-label="Toggle menu"
                >
                  {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>

            {isMenuOpen && (
              <div className="lg:hidden py-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex flex-col space-y-2">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                        location.pathname === item.href
                          ? 'text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20'
                          : 'text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </nav>
        </header>
      );
    };

    export default Header;
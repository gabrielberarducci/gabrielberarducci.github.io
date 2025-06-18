
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SITE_NAME, CATEGORIES } from '../constants';
import { NavigationPath } from '../types';
import { MenuIcon, XIcon } from './icons';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-primary shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link to={NavigationPath.Home} className="text-3xl font-heading font-bold text-white hover:text-secondary transition-colors">
              {SITE_NAME}
            </Link>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link to={NavigationPath.Home} className="text-white hover:text-secondary transition-colors px-3 py-2 rounded-md text-sm font-medium">Home</Link>
            {CATEGORIES.map((category) => (
              <Link key={category.slug} to={`/category/${category.slug}`} className="text-white hover:text-secondary transition-colors px-3 py-2 rounded-md text-sm font-medium">
                {category.name}
              </Link>
            ))}
          </nav>
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-secondary focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <XIcon className="h-8 w-8" /> : <MenuIcon className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-primary border-t border-blue-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to={NavigationPath.Home} onClick={() => setIsMobileMenuOpen(false)} className="block text-white hover:bg-blue-700 hover:text-secondary px-3 py-2 rounded-md text-base font-medium">Home</Link>
            {CATEGORIES.map((category) => (
              <Link key={category.slug} to={`/category/${category.slug}`} onClick={() => setIsMobileMenuOpen(false)} className="block text-white hover:bg-blue-700 hover:text-secondary px-3 py-2 rounded-md text-base font-medium">
                {category.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

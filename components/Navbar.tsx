
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SITE_NAME, NAVIGATION_LINKS } from '../constants';
import { NavLink as NavLinkType } from '../types';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-au-black shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="text-white font-display text-3xl tracking-wider hover:text-au-red transition-colors">
              {SITE_NAME}
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {NAVIGATION_LINKS.map((link: NavLinkType) => (
                <Link
                  key={link.label}
                  to={link.path}
                  className="text-gray-300 hover:bg-au-gray hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-au-gray inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-au-red focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAVIGATION_LINKS.map((link: NavLinkType) => (
              <Link
                key={link.label}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:bg-au-gray hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

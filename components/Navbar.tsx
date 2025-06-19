
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { APP_NAME, CATEGORIES } from '../constants';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCategoriesDropdownOpen, setIsCategoriesDropdownOpen] = useState(false);

  const activeLinkStyle = "text-aussie-ochre font-semibold";
  const inactiveLinkStyle = "text-slate-700 hover:text-aussie-ochre transition-colors duration-200";

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="text-3xl font-display font-bold text-eucalyptus-green-dark hover:text-aussie-ochre transition-colors duration-300">
              {APP_NAME}
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <NavLink to="/" className={({isActive}) => isActive ? activeLinkStyle : inactiveLinkStyle}>Home</NavLink>
            <NavLink to="/blog" className={({isActive}) => isActive ? activeLinkStyle : inactiveLinkStyle}>Blog</NavLink>
            <div className="relative">
              <button
                onClick={() => setIsCategoriesDropdownOpen(!isCategoriesDropdownOpen)}
                onMouseEnter={() => setIsCategoriesDropdownOpen(true)}
                onMouseLeave={() => setIsCategoriesDropdownOpen(false)}
                className={`${inactiveLinkStyle} flex items-center`}
              >
                Categories <i className="fas fa-chevron-down ml-1 text-xs"></i>
              </button>
              {isCategoriesDropdownOpen && (
                <div 
                  onMouseEnter={() => setIsCategoriesDropdownOpen(true)}
                  onMouseLeave={() => setIsCategoriesDropdownOpen(false)}
                  className="absolute left-0 mt-2 w-56 rounded-md shadow-xl bg-white ring-1 ring-black ring-opacity-5 py-1 z-20">
                  {CATEGORIES.map(category => (
                    <NavLink
                      key={category.slug}
                      to={`/category/${category.slug}`}
                      className={({isActive}) => `block px-4 py-2 text-sm ${isActive ? 'bg-aussie-ochre text-white' : 'text-slate-700 hover:bg-slate-100 hover:text-aussie-ochre'}`}
                      onClick={() => setIsCategoriesDropdownOpen(false)}
                    >
                      <i className={`${category.icon} mr-2`}></i>{category.name}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
            {/* Placeholder for future Gemini content generator tool link */}
            {/* <NavLink to="/content-generator" className={({isActive}) => isActive ? activeLinkStyle : inactiveLinkStyle}>AI Tools</NavLink> */}
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-500 hover:text-aussie-ochre hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-aussie-ochre"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <i className="fas fa-times text-2xl"></i>
              ) : (
                <i className="fas fa-bars text-2xl"></i>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink to="/" className={({isActive}) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-aussie-ochre text-white' : 'text-slate-700 hover:bg-slate-100 hover:text-aussie-ochre'}`} onClick={() => setIsMobileMenuOpen(false)}>Home</NavLink>
            <NavLink to="/blog" className={({isActive}) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-aussie-ochre text-white' : 'text-slate-700 hover:bg-slate-100 hover:text-aussie-ochre'}`} onClick={() => setIsMobileMenuOpen(false)}>Blog</NavLink>
            <p className="px-3 pt-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">Categories</p>
            {CATEGORIES.map(category => (
              <NavLink
                key={`mobile-${category.slug}`}
                to={`/category/${category.slug}`}
                className={({isActive}) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-aussie-ochre text-white' : 'text-slate-700 hover:bg-slate-100 hover:text-aussie-ochre'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <i className={`${category.icon} mr-2 w-4 text-center`}></i>{category.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

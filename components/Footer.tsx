
import React from 'react';
import { APP_NAME } from '../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-eucalyptus-green-dark text-slate-200 py-12">
      <div className="container mx-auto px-4 text-center">
        <p className="text-lg font-display font-semibold mb-4">{APP_NAME}</p>
        <div className="flex justify-center space-x-6 mb-6">
          <a href="#" className="hover:text-aussie-ochre transition-colors duration-200" aria-label="Facebook"><i className="fab fa-facebook-f text-xl"></i></a>
          <a href="#" className="hover:text-aussie-ochre transition-colors duration-200" aria-label="Instagram"><i className="fab fa-instagram text-xl"></i></a>
          <a href="#" className="hover:text-aussie-ochre transition-colors duration-200" aria-label="YouTube"><i className="fab fa-youtube text-xl"></i></a>
          <a href="#" className="hover:text-aussie-ochre transition-colors duration-200" aria-label="Pinterest"><i className="fab fa-pinterest text-xl"></i></a>
        </div>
        <p className="text-sm text-slate-400">
          &copy; {currentYear} {APP_NAME}. All Rights Reserved. G'day Mate!
        </p>
        <p className="text-xs text-slate-500 mt-2">
          Proudly exploring the great Aussie outdoors. Some links may be affiliate links, meaning we earn a commission if you purchase through them, at no extra cost to you.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

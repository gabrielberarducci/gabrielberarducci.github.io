
import React from 'react';
import { SITE_NAME } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-darkText text-lightBg py-12 mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-lg font-heading text-secondary mb-2">{SITE_NAME}</p>
        <p className="text-sm text-mutedText">&copy; {new Date().getFullYear()} {SITE_NAME}. All Rights Reserved.</p>
        <p className="text-xs text-mutedText mt-2">Your adventure starts here. Explore Australia with confidence.</p>
        <div className="mt-4 space-x-4">
          <a href="#privacy" className="text-xs hover:text-secondary transition-colors">Privacy Policy</a>
          <a href="#terms" className="text-xs hover:text-secondary transition-colors">Terms of Service</a>
          <a href="#contact" className="text-xs hover:text-secondary transition-colors">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

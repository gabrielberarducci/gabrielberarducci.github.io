
import React from 'react';
import { SITE_NAME } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-au-black text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="font-display text-2xl mb-2">{SITE_NAME}</p>
        <p className="text-sm">Your trusted source for Australian adventure and 4WD exploration.</p>
        <p className="mt-6 text-xs text-gray-500">
          &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
        </p>
        <p className="text-xs text-gray-500 mt-1">
          Affiliate Disclosure: We may earn commissions from qualifying purchases.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

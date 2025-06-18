
import React from 'react';
import { ExternalLinkIcon } from './icons';

interface AffiliateButtonProps {
  href: string;
  text: string;
  retailer?: string;
  className?: string;
}

const AffiliateButton: React.FC<AffiliateButtonProps> = ({ href, text, retailer, className }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className={`inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-secondary hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary transition-colors ${className}`}
    >
      {text}
      {retailer && <span className="ml-1 text-xs opacity-80">({retailer})</span>}
      <ExternalLinkIcon className="w-5 h-5 ml-2" />
    </a>
  );
};

export default AffiliateButton;

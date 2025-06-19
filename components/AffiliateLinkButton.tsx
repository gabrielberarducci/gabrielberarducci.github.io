
import React from 'react';
import { AffiliateLink } from '../types';

interface AffiliateLinkButtonProps {
  link: AffiliateLink;
  className?: string;
}

const AffiliateLinkButton: React.FC<AffiliateLinkButtonProps> = ({ link, className }) => {
  const getIcon = (platform?: string) => {
    if (!platform) return <i className="fas fa-shopping-cart mr-2"></i>;
    switch (platform.toLowerCase()) {
      case 'amazon':
        return <i className="fab fa-amazon mr-2"></i>;
      case 'ebay':
        return <i className="fab fa-ebay mr-2"></i>;
      default:
        return <i className="fas fa-store mr-2"></i>;
    }
  };

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className={`inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-aussie-ochre hover:bg-aussie-ochre-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-aussie-ochre-dark transition-colors duration-200 ${className}`}
    >
      {getIcon(link.platform)}
      {link.text}
    </a>
  );
};

export default AffiliateLinkButton;

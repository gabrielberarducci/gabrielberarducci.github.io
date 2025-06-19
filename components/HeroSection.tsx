
import React from 'react';
import { Link } from 'react-router-dom';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  ctaText: string;
  ctaLink: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle, imageUrl, ctaText, ctaLink }) => {
  return (
    <div
      className="relative bg-cover bg-center py-32 md:py-48 rounded-lg overflow-hidden shadow-2xl"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative container mx-auto px-4 text-center text-white z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold mb-6 drop-shadow-lg">
          {title}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl mx-auto drop-shadow-md">
          {subtitle}
        </p>
        <Link
          to={ctaLink}
          className="bg-aussie-ochre hover:bg-aussie-ochre-dark text-white font-semibold py-3 px-8 rounded-lg text-lg transition-colors duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
        >
          {ctaText} <i className="fas fa-arrow-right ml-2"></i>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;

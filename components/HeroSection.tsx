
import React from 'react';
import { Link } from 'react-router-dom';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  imageAlt: string;
  ctaText: string;
  ctaLink: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle, imageUrl, imageAlt, ctaText, ctaLink }) => {
  return (
    <div className="relative bg-darkText text-white overflow-hidden">
      <img
        src={imageUrl}
        alt={imageAlt}
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-48 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold mb-6 drop-shadow-lg">
          {title}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-10 max-w-3xl mx-auto drop-shadow-md">
          {subtitle}
        </p>
        <Link
          to={ctaLink}
          className="inline-block bg-secondary hover:bg-orange-500 text-primary font-bold py-4 px-10 rounded-lg text-lg transition-transform transform hover:scale-105 shadow-xl"
        >
          {ctaText}
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;

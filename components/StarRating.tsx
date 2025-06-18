
import React from 'react';
import { StarIcon } from './icons';

interface StarRatingProps {
  rating: number; // Rating out of 5
  className?: string;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, className = "text-accent" }) => {
  const totalStars = 5;
  const filledStars = Math.round(rating * 2) / 2; // Round to nearest 0.5

  return (
    <div className={`flex items-center ${className}`}>
      {[...Array(totalStars)].map((_, index) => {
        const starValue = index + 1;
        let isFilled = starValue <= filledStars;
        // For half stars, we'd need a half star icon or more complex SVG.
        // Simplified to full stars for now.
        return (
          <StarIcon key={index} className="w-5 h-5" filled={isFilled} />
        );
      })}
      <span className="ml-2 text-sm text-mutedText">({rating.toFixed(1)})</span>
    </div>
  );
};

export default StarRating;

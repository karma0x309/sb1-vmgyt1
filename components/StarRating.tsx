"use client"

import { Star, StarHalf } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  maxRating?: number;
}

export default function StarRating({ rating, maxRating = 5 }: StarRatingProps) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  return (
    <div className="flex items-center">
      {[...Array(maxRating)].map((_, index) => (
        <span key={index}>
          {index < fullStars ? (
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
          ) : index === fullStars && hasHalfStar ? (
            <StarHalf className="w-5 h-5 fill-yellow-400 text-yellow-400" />
          ) : (
            <Star className="w-5 h-5 text-gray-300" />
          )}
        </span>
      ))}
      <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">{rating.toFixed(1)}</span>
    </div>
  );
}
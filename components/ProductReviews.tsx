"use client"

import { useState } from 'react';
import { Star, ThumbsUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Mock data for reviews
const mockReviews = [
  {
    id: 1,
    user: 'Alice Johnson',
    avatar: 'AJ',
    rating: 5,
    date: '2023-12-15',
    content: 'Excellent product! The case fits perfectly and provides great protection.',
    helpful: 12,
  },
  {
    id: 2,
    user: 'Bob Smith',
    avatar: 'BS',
    rating: 4,
    date: '2023-12-10',
    content: "Good quality, but a bit pricey. Overall, I'm satisfied with the purchase.",
    helpful: 8,
  },
  {
    id: 3,
    user: 'Carol White',
    avatar: 'CW',
    rating: 5,
    date: '2023-12-05',
    content: 'Amazing accessory! It has improved my iPhone experience significantly.',
    helpful: 15,
  },
];

function ReviewItem({ review }) {
  const [helpfulCount, setHelpfulCount] = useState(review.helpful);
  const [hasVoted, setHasVoted] = useState(false);

  const handleHelpfulClick = () => {
    if (!hasVoted) {
      setHelpfulCount(helpfulCount + 1);
      setHasVoted(true);
    }
  };

  return (
    <div className="border-b border-gray-200 dark:border-gray-700 py-4">
      <div className="flex items-center mb-2">
        <Avatar className="h-10 w-10 mr-3">
          <AvatarImage src={`https://api.dicebear.com/6.x/initials/svg?seed=${review.avatar}`} />
          <AvatarFallback>{review.avatar}</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-semibold">{review.user}</p>
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                }`}
              />
            ))}
            <span className="ml-2 text-sm text-gray-500">{review.date}</span>
          </div>
        </div>
      </div>
      <p className="mb-2">{review.content}</p>
      <Button
        variant="outline"
        size="sm"
        className={`flex items-center ${hasVoted ? 'text-green-500' : ''}`}
        onClick={handleHelpfulClick}
        disabled={hasVoted}
      >
        <ThumbsUp className="h-4 w-4 mr-2" />
        Helpful ({helpfulCount})
      </Button>
    </div>
  );
}

export default function ProductReviews() {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Customer Reviews</h3>
      <div className="space-y-4">
        {mockReviews.map((review) => (
          <ReviewItem key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
}
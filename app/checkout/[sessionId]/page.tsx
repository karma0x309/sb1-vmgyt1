"use client"

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function CheckoutPage({ params }: { params: { sessionId: string } }) {
  const router = useRouter();

  useEffect(() => {
    const handleCheckout = async () => {
      const stripe = await stripePromise;
      const { error } = await stripe!.redirectToCheckout({
        sessionId: params.sessionId,
      });

      if (error) {
        console.error('Error:', error);
        router.push('/cart');
      }
    };

    handleCheckout();
  }, [params.sessionId, router]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Redirecting to Checkout...</h1>
      <p>Please wait while we redirect you to the secure checkout page.</p>
    </div>
  );
}
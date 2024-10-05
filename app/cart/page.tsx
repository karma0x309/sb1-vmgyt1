"use client"

import { useState } from 'react';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import Image from 'next/image';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import TrustBadges from '@/components/TrustBadges';
import { useMediaQuery } from '@/hooks/useMediaQuery';

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const isMobile = useMediaQuery('(max-width: 768px)');

  const total = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  const handleCheckout = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ items: cartItems }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'An error occurred during checkout');
      }

      const { sessionId } = await response.json();
      router.push(`/checkout/${sessionId}`);
    } catch (error) {
      console.error('Checkout error:', error);
      toast.error(error instanceof Error ? error.message : 'An error occurred during checkout. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      {cartItems.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-xl mb-4">Your cart is empty.</p>
          <Button onClick={() => router.push('/')}>Continue Shopping</Button>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          <div className={`${isMobile ? 'order-2' : 'order-1'} md:col-span-2`}>
            {cartItems.map((item) => (
              <Card key={item.product.id} className="mb-4">
                <CardContent className="p-4">
                  <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <div className="relative w-24 h-24 flex-shrink-0">
                      <Image
                        src={item.product.images[0]}
                        alt={item.product.name}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-md"
                      />
                    </div>
                    <div className="flex-grow text-center sm:text-left">
                      <h3 className="font-semibold">{item.product.name}</h3>
                      <p className="text-sm text-gray-500">{item.product.description}</p>
                      <p className="font-medium mt-1">€{item.product.price.toFixed(2)}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => removeFromCart(item.product.id)}
                    className="ml-auto"
                  >
                    <Trash2 className="h-4 w-4 mr-2" />
                    Remove
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className={`${isMobile ? 'order-1' : 'order-2'}`}>
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>€{total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>
                  <Separator className="my-2" />
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>€{total.toFixed(2)}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex-col">
                <Button 
                  className="w-full mb-4" 
                  onClick={handleCheckout} 
                  disabled={isLoading || cartItems.length === 0}
                >
                  {isLoading ? 'Processing...' : 'Proceed to Checkout'}
                </Button>
                <TrustBadges />
              </CardFooter>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
}
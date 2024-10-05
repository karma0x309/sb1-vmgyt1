"use client"

import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Product } from '@/types/product';
import { toast } from 'sonner';
import { ShoppingCart } from 'lucide-react';

export default function AddToCartButton({ product }: { product: Product }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} added to cart`);
  };

  return (
    <Button onClick={handleAddToCart} className="ios-btn w-full">
      <ShoppingCart className="w-5 h-5 mr-2" />
      Add to Cart
    </Button>
  );
}
'use client';

import NextLink from 'next/link';
import { ShoppingCart, Menu, Home, Tag, InfoIcon } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export default function Header() {
  const { cartItems } = useCart();
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const NavItems = () => (
    <>
      <NextLink href="/" className="ios-tab flex items-center text-callout">
        <Home className="w-5 h-5 mr-2" />
        Home
      </NextLink>
      <NextLink
        href="/products"
        className="ios-tab flex items-center text-callout"
      >
        <Tag className="w-5 h-5 mr-2" />
        Products
      </NextLink>
      <NextLink
        href="/about"
        className="ios-tab flex items-center text-callout"
      >
        <InfoIcon className="w-5 h-5 mr-2" />
        About
      </NextLink>
    </>
  );

  const CartButton = () => (
    <NextLink href="/cart" className="cart-icon">
      <Button variant="outline" size="icon" className="ios-btn btn-icon">
        <ShoppingCart className="h-5 w-5" />
        {totalItems > 0 && <span className="item-count">{totalItems}</span>}
      </Button>
    </NextLink>
  );

  return (
    <header className="bg-background shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <NextLink href="/" className="text-title-2 font-bold text-primary">
            iPhone Accessories
          </NextLink>
          {isMobile ? (
            <div className="flex items-center space-x-2">
              <CartButton />
              <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="ios-btn btn-icon"
                  >
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <nav className="flex flex-col space-y-4 mt-8">
                    <NavItems />
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          ) : (
            <div className="flex items-center space-x-6">
              <nav className="flex space-x-6">
                <NavItems />
              </nav>
              <ModeToggle />
              <CartButton />
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

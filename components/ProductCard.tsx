"use client"

import Image from 'next/image';
import NextLink from 'next/link';
import { Product } from '@/types/product';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import AddToCartButton from './AddToCartButton';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="ios-card">
      <CardContent className="p-4">
        <NextLink href={`/product/${product.id}`} className="block aspect-square relative mb-4">
          <Image
            src={product.images[0]}
            alt={product.name}
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          />
        </NextLink>
        <NextLink href={`/product/${product.id}`}>
          <h3 className="text-headline mb-2">{product.name}</h3>
        </NextLink>
        <p className="text-title-3 font-bold text-primary mb-2">€{product.price.toFixed(2)}</p>
        <p className="text-callout text-muted-foreground line-clamp-2">{product.description}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <AddToCartButton product={product} />
      </CardFooter>
    </Card>
  );
}
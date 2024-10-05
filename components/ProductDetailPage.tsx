"use client"

import Image from 'next/image';
import AddToCartButton from '@/components/AddToCartButton';
import ProductDetailTabs from '@/components/ProductDetailTabs';
import TrustBadges from '@/components/TrustBadges';
import StarRating from '@/components/StarRating';
import { Product } from '@/types/product';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { useMediaQuery } from '@/hooks/useMediaQuery';

interface ProductDetailPageProps {
  product: Product;
}

export default function ProductDetailPage({ product }: ProductDetailPageProps) {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="ios-card p-6 mb-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="w-full max-w-xl mx-auto">
            <Carousel className="w-full">
              <CarouselContent>
                {product.images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative aspect-square rounded-2xl overflow-hidden">
                      <Image
                        src={image}
                        alt={`${product.name} - Image ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {!isMobile && (
                <>
                  <CarouselPrevious className="left-2" />
                  <CarouselNext className="right-2" />
                </>
              )}
            </Carousel>
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-large-title mb-4">{product.name}</h1>
              <p className="text-title-2 font-semibold text-primary mb-4">€{product.price.toFixed(2)}</p>
              <div className="mb-4">
                <StarRating rating={4.8} />
              </div>
              <p className="text-body mb-6 text-muted-foreground">{product.description}</p>
            </div>
            <div>
              <AddToCartButton product={product} />
              <div className="mt-6">
                <TrustBadges />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProductDetailTabs />
    </div>
  );
}
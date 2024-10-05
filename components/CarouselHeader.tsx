"use client"

import * as React from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const carouselItems = [
  {
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&q=80&w=1600&h=600",
    alt: "iPhone accessories display",
    title: "Discover Our Latest Collection",
    description: "Enhance your iPhone experience with our premium accessories",
  },
  {
    image: "https://images.unsplash.com/photo-1491933382434-500287f9b54b?auto=format&fit=crop&q=80&w=1600&h=600",
    alt: "iPhone with various accessories",
    title: "Protect & Style Your iPhone",
    description: "Find the perfect case and accessories for your device",
  },
  {
    image: "https://images.unsplash.com/photo-1605464315542-bda3e2f4e605?auto=format&fit=crop&q=80&w=1600&h=600",
    alt: "iPhone charging accessories",
    title: "Power Up Your Life",
    description: "Explore our range of charging solutions and power banks",
  },
]

export default function CarouselHeader() {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {carouselItems.map((item, index) => (
          <CarouselItem key={index}>
            <div className="relative aspect-[21/9] w-full">
              <Image
                src={item.image}
                alt={item.alt}
                layout="fill"
                objectFit="cover"
                className="rounded-none"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white p-6">
                <h2 className="text-large-title mb-4 text-center">{item.title}</h2>
                <p className="text-title-3 text-center">{item.description}</p>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-4" />
      <CarouselNext className="right-4" />
    </Carousel>
  );
}
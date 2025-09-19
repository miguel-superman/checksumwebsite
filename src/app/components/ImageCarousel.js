"use client";
import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const ImageCarousel = ({ slides }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 3000, stopOnInteraction: false })] // auto slide every 3s
  );
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <div className="w-full">
      {/* Carousel viewport */}
      <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
        <div className="flex">
          {slides.map((src, index) => (
            <div key={index} className="relative min-w-full h-[400px]">
              <Image
                src={src}
                alt={`Slide ${index}`}
                fill
                className="object-cover rounded-2xl"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Dots navigation */}
      <div className="flex justify-center mt-4 space-x-2">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 rounded-full ${
              index === selectedIndex ? "bg-teal-500" : "bg-gray-400"
            }`}
            onClick={() => emblaApi && emblaApi.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;

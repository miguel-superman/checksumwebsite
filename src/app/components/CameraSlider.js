"use client";
import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const CameraSlider = ({ cameras }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
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
        <div className="flex gap-4">
          {cameras.map((camera, index) => (
            <div key={index} className="min-w-full md:min-w-[50%] lg:min-w-[33.3333%]">
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <div className="relative h-64 md:h-80">
                  <Image
                    src={camera.image}
                    alt={camera.name}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>
                <div className="p-4 bg-card">
                  <h3 className="font-semibold text-lg text-foreground">{camera.name}</h3>
                  <p className="text-sm text-muted-foreground">{camera.type}</p>
                  <p className="text-accent font-semibold mt-1">${camera.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots navigation */}
      <div className="flex justify-center mt-4 space-x-2">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi && emblaApi.scrollTo(index)}
            className={`h-3 w-3 rounded-full transition-colors ${
              index === selectedIndex ? "bg-accent" : "bg-muted-foreground/40 hover:bg-muted-foreground/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default CameraSlider;

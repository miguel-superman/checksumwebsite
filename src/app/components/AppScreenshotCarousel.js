"use client";

import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const screenshots = [
  "/pos1.webp",
  "/pos2.webp",
  "/pos3.webp",
  "/pos4.webp",
  "/pos5.png",
//   "/pos6.webp",
];

export default function AppScreenshotCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
  });

  return (
    <div className="relative max-w-sm mx-auto">
      {/* Carousel */}
      <div
        ref={emblaRef}
        className="overflow-hidden rounded-3xl border border-teal-400/30 bg-gradient-to-br from-teal-50/40 to-cyan-50/20 shadow-xl shadow-teal-500/20"
      >
        <div className="flex">
          {screenshots.map((src, index) => (
            <div
              key={index}
              className="min-w-full flex items-center justify-center p-4"
            >
              <img
                src={src}
                alt={`CS3 POS screenshot ${index + 1}`}
                className="h-[520px] w-auto rounded-2xl shadow-lg"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="absolute inset-y-0 left-0 flex items-center">
        <Button
          size="icon"
          variant="ghost"
          className="rounded-full bg-white/70 hover:bg-white shadow"
          onClick={() => emblaApi?.scrollPrev()}
        >
          <ChevronLeft />
        </Button>
      </div>

      <div className="absolute inset-y-0 right-0 flex items-center">
        <Button
          size="icon"
          variant="ghost"
          className="rounded-full bg-white/70 hover:bg-white shadow"
          onClick={() => emblaApi?.scrollNext()}
        >
          <ChevronRight />
        </Button>
      </div>
    </div>
  );
}

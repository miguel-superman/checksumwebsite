// "use client";
// import React, { useCallback } from "react";
// import useEmblaCarousel from "embla-carousel-react";
// import Autoplay from "embla-carousel-autoplay";

// const Carousel = ({ children }) => {
//   const [emblaRef] = useEmblaCarousel(
//     { loop: true, align: "start" },
//     [Autoplay({ delay: 4000, stopOnInteraction: false })] // auto slide every 4s
//   );

//   return (
//     <div className="overflow-hidden" ref={emblaRef}>
//       <div className="flex">{children}</div>
//     </div>
//   );
// };

// export default Carousel;

"use client";
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils"; // optional: replace with clsx/tailwind-merge if you don’t have this

const Carousel = ({ children }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  // update dots when slide changes
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
    <div className="w-full my-10">
      {/* Carousel */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">{children}</div>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6 gap-2">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-colors",
              selectedIndex === index
                ? "bg-accent"
                : "bg-muted-foreground/40 hover:bg-muted-foreground/70"
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;

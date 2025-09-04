"use client";

import { useMotionValue, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { InfiniteShapePath } from "../ui/Animated/InfiniteShapePath";
import Title from "../ui/Title";

// Fashion items for the floating animation
const fashionItems = [
  { id: "dress", name: "Dresses", image: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg" },
  { id: "suit", name: "Suits", image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg" },
  { id: "handbag", name: "Handbags", image: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg" },
  { id: "shoes", name: "Shoes", image: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg" },
  { id: "jacket", name: "Jackets", image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg" },
  { id: "accessories", name: "Accessories", image: "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg" },
  { id: "blouse", name: "Blouses", image: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg" },
  { id: "pants", name: "Pants", image: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg" },
  { id: "skirt", name: "Skirts", image: "https://images.pexels.com/photos/1631181/pexels-photo-1631181.jpeg" },
];

export default function TechStack() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 1000, height: 350 });
  const [isClient, setIsClient] = useState(false);
  const progress = useMotionValue(0);
  const count = fashionItems.length * 1.5;

  useEffect(() => {
    setIsClient(true);

    if (containerRef.current) {
      const updateDimensions = () => {
        const containerWidth = containerRef.current!.offsetWidth;
        // Better mobile responsiveness
        const isMobile = window.innerWidth < 768;
        const maxWidth = isMobile ? Math.min(containerWidth, 350) : Math.min(containerWidth, 800);
        
        setDimensions({
          width: maxWidth,
          height: isMobile ? maxWidth * 0.6 : maxWidth * 0.4, // Taller on mobile
        });
      };

      updateDimensions();
      window.addEventListener("resize", updateDimensions);
      return () => window.removeEventListener("resize", updateDimensions);
    }
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const controls = animate(progress, 1, {
      duration: 40,
      repeat: Infinity,
      ease: "linear",
    });

    return () => controls.stop();
  }, [isClient, progress]);

  if (!isClient) return null;

  return (
    <section className="relative w-full py-12 md:py-20 px-4 md:px-10 lg:px-20 bg-gradient-to-bl from-white via-[#002440] to-[#BF4000] overflow-hidden">
      <Title title="Featured Items" />
      <div className="flex bg-[url('/backgrounds/grid.svg')] flex-col items-center justify-center w-full center border-2 border-white my-6 md:my-10 p-4 md:p-10 rounded-2xl md:rounded-3xl">
        <p className="text-lg md:text-2xl lg:text-3xl text-white text-center leading-relaxed">
          Discover Our Curated Collection of Luxury Fashion. ✨
        </p>
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex justify-center w-full mb-6 md:mb-10">
          <div
            ref={containerRef}
            className="relative w-full max-w-sm md:max-w-none"
            style={{ height: dimensions.height }}
          >
            {[...fashionItems, ...fashionItems].map((item, i) => (
              <InfiniteShapePath
                key={`infinity-${item.id}-${i}`}
                item={item}
                progress={progress}
                dimensions={dimensions}
                position={(i % fashionItems.length) / count}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

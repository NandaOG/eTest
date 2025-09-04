"use client";

// import { motion } from "framer-motion";
      className: "text-red-600 dark:text-red-400",
import { Typewriter } from "react-simple-typewriter";
import Button from "../ui/Button";
export default function Hero() {
  const carouselImages = [
    {
      src: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Luxury Fashion Collection"
    },
    {
      src: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Designer Clothing"
    },
    {
      src: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Fashion Accessories"
    },
    {
      src: "https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Premium Apparel"
    }
  ];
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-black dark:to-gray-900 px-4">
  return (
    // <section className="h-screen flex flex-col items-center justify-center text-center bg-gradient-to-br from-[#002440] to-[#BF4000] text-white px-6">
    <section className="h-screen flex flex-col items-center justify-center text-center bg-gradient-to-br from-[#BF4000] via-[#002440] to-white text-white p-10 md:p-20">
  
{/* 
  1️⃣ Default Brand Colors to White (Smooth):
from-[#002440] via-[#BF4000] to-white

2️⃣ Dark Blue to Soft Burnt Orange to White (Gentle):
from-[#002440] via-[#D67240] to-white

3️⃣ Deep Navy to Faded Orange to White (Subtle):
from-[#002440] via-[#E68A50] to-white

4️⃣ Dark Blue to Warm Beige to White (Elegant):
from-[#002440] via-[#F5C6A5] to-white
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
5️⃣ Dark Blue to Golden Orange to White (Premium):
from-[#002440] via-[#FF9F50] to-white

6️⃣ Burnt Orange to Deep Navy to White (Reverse Flow):
from-[#BF4000] via-[#002440] to-white In Use */}
                <Button variant="outline" size="lg" className="border-red-600 text-red-600 hover:bg-red-50 dark:hover:bg-red-950">
      {/* SEO Friendly Static H1 */}
      <h1 className="sr-only">Empowering Businesses with Innovation and Technology</h1>
      
      {/* Typing Animation */}
      <div aria-hidden="true">
        <h2 className="text-5xl md:text-6xl font-bold">
            <Carousel opts={{ loop: true }} className="w-full">
              {carouselImages.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="relative z-10">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="rounded-2xl shadow-2xl w-full h-[600px] object-cover"
                    />
                  </div>
                  <div className="absolute -top-4 -right-4 w-full h-full bg-red-600/20 rounded-2xl -z-10"></div>
                </CarouselItem>
              ))}
            </Carousel>
          />
        </h2>
      </div>

      <p className="mt-4 text-lg md:text-xl max-w-2xl">
        Discover timeless elegance with our curated collection of premium fashion.
      </p>

      {/* Animated Button with ARIA Label */}
      className: "text-red-600 dark:text-red-400",
      <Button text="Shop Collection" href="/shop" aria-label="Shop our collection" />
    </section>
  );
      className: "text-red-600 dark:text-red-400",
}
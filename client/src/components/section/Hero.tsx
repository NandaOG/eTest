"use client";

// import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Button from "../ui/Button";
export default function Hero() {
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

5️⃣ Dark Blue to Golden Orange to White (Premium):
from-[#002440] via-[#FF9F50] to-white

6️⃣ Burnt Orange to Deep Navy to White (Reverse Flow):
from-[#BF4000] via-[#002440] to-white In Use */}

      {/* SEO Friendly Static H1 */}
      <h1 className="sr-only">Empowering Businesses with Innovation and Technology</h1>
      
      {/* Typing Animation */}
      <div aria-hidden="true">
        <h2 className="text-5xl md:text-6xl font-bold">
          <Typewriter 
            words={["Innovate.", "Execute.", "Lead."]}
            loop={0} 
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={40}
            delaySpeed={1000}
          />
        </h2>
      </div>

      <p className="mt-4 text-lg md:text-xl max-w-2xl">
        Empowering businesses with cutting-edge technology and innovation.
      </p>

      {/* Animated Button with ARIA Label */}
      <Button text="Get Started" href="/contact" aria-label="Get started" />
       
    </section>
  );
}

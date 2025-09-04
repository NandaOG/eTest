"use client";
import { motion } from "framer-motion";
import Title from "../ui/Title";
import Button from "../ui/Button";

export default function About() {
  return (
    <section className="w-full py-20 px-10 md:px-20 bg-gradient-to-br from-white via-[#002440] to-[#BF4000] text-white">
      <div className="mx-auto text-center">
        <Title title="About Luxe Apparel" />

        {/* Image & Content */}
        <div className="flex flex-col md:flex-row items-center gap-10 mt-10">
          {/* Image */}
          <motion.img
            src="https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg"
            alt="Luxury Fashion Store"
            className="w-full md:w-1/2 rounded-tl-4xl rounded-br-4xl md:rounded-tl-[100px] md:rounded-br-[100px] shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          />

          {/* Text & Button */}
          <div className="md:w-1/2 space-y-6 text-left">
            <h3 className="text-2xl font-bold">
              Crafting Fashion Excellence with{" "}
              <span className="text-red-600">Passion</span>
            </h3>

            <p className="text-lg leading-relaxed">
              Luxe Apparel is dedicated to curating the finest collection of
              luxury clothing that embodies sophistication and timeless style.
              We prioritize quality craftsmanship and exceptional design to meet
              the discerning tastes of fashion enthusiasts.
            </p>

            {/* Bullet Points */}
            <div className="space-y-4">
              {[
                "Premium Quality Materials",
                "Timeless & Elegant Designs",
                "Sustainable Fashion Practices",
                "Exceptional Customer Service",
              ].map((point, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-4 text-lg"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 * index }}
                  viewport={{ once: true }}
                >
                  <span className="w-4 h-4 bg-[#BF4000] rounded-full"></span>
                  {point}
                </motion.div>
              ))}
            </div>

            {/* Button */}
            <Button className="mt-6">Explore Collection</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Button from "../Button";

interface Service {
  image: string;
  title: string;
  description: string;
  link?: string;
}

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <motion.div
      className="cursor-grab flex flex-col md:flex-row items-center gap-6 md:gap-8 bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6 w-full min-w-full h-[500px] md:h-[400px] transition-transform"
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <div className="w-full md:w-1/2 h-48 md:h-full overflow-hidden rounded-xl flex-shrink-0">
        <Image
            src={service.image}
            alt={service.title}
            width={600}
            height={400}
            className="rounded-xl object-cover w-full h-full hover:scale-105 transition-transform duration-300"
            loading="lazy"
        />
      </div>

      <div className="md:w-1/2 space-y-4 md:space-y-6 text-white text-center md:text-left flex flex-col justify-center h-full">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold">{service.title}</h3>
        <p className="text-base md:text-lg leading-relaxed opacity-90 line-clamp-3">{service.description}</p>
        <div className="pt-2 md:pt-4">
          {service.link ? (
            <Button 
              text="Explore Collection" 
              href={service.link} 
              variant="primary"
              className="bg-red-600 text-white hover:bg-red-700 shadow-lg text-sm md:text-base px-4 md:px-6 py-2 md:py-3"
            />
          ) : (
            <Button 
              text="Get Started" 
              href="/contact"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-900 text-sm md:text-base px-4 md:px-6 py-2 md:py-3"
            />
          )}
        </div>
      </div>
    </motion.div>
  );
}

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
      className="cursor-grab flex flex-col md:flex-row items-center gap-8 bg-white/10 backdrop-blur-sm rounded-2xl p-6 w-full min-w-full transition-transform"
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <div className="w-full md:w-1/2 overflow-hidden rounded-xl aspect-w-3 aspect-h-2">
        <Image
            src={service.image}
            alt={service.title}
            width={600}
            height={400}
            className="rounded-xl object-cover w-full h-full hover:scale-105 transition-transform duration-300"
            loading="lazy"
        />
      </div>

      <div className="md:w-1/2 space-y-6 text-white text-center md:text-left">
        <h3 className="text-3xl md:text-4xl font-bold">{service.title}</h3>
        <p className="text-lg leading-relaxed opacity-90">{service.description}</p>
        <div className="pt-4">
          {service.link ? (
            <Button 
              text="Explore Collection" 
              href={service.link} 
              variant="primary"
              className="bg-red-600 text-white hover:bg-red-700 shadow-lg"
            />
          ) : (
            <Button 
              text="Get Started" 
              href="/contact"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-900"
            />
          )}
        </div>
      </div>
    </motion.div>
  );
}

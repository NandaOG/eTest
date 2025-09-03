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
      className="cursor-grab flex flex-col md:flex-row items-center gap-8 bg-transparent w-full min-w-full transition-transform"
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      // whileTap={{ cursor: "grabbing" }} // 👈 This adds inline style cursor on tap
    >
      <div className="w-full md:w-1/2  overflow-hidden aspect-w-3 aspect-h-2">
        <Image
            src={service.image}
            alt={service.title}
            width={600}
            height={400}
            className="rounded-tl-4xl rounded-br-4xl object-cover w-full h-full"
            loading="lazy"
        />
      </div>

      <div className="md:w-1/2 space-y-4 text-white-900 text-center md:text-left">
        <h3 className="text-2xl font-bold">{service.title}</h3>
        <p className="text-white-700 text-left ">{service.description}</p>
        {service.link ? (
          <Button text="View More" href={"/services/"+service.link} />
        ) : (
          <Button text="Let's Talk" href={"/contact"}/>
        )}
      </div>
    </motion.div>
  );
}

"use client";

import { motion } from "framer-motion";
// import { IconType } from "react-icons";
// FeatureCard Component
interface FeatureCardProps {
  icon: string | React.ReactElement;
  title: string;
  description: string;
  index: number;
}
export default function FeatureCard({ icon, title, description, index }: FeatureCardProps) {
  return (
    <motion.div
      className="relative bg-white p-6 rounded-tl-3xl rounded-br-3xl  text-center flex flex-col items-center 
              border-3 border-white hover:border-[#BF4000] "
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      {/* <div className="mb-4 text-[#BF4000] p-4 bg-[#002440] rounded-full text-xl">{icon}</div> */}
      <div className="mb-4 text-[#BF4000] p-4 bg-[#002440] rounded-full text-xl">
        {typeof icon === "string" ? <span>{icon}</span> : icon}
      </div>

      <h3 className="text-xl font-semibold text-[#002440]">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
    </motion.div>
  );
}
"use client";

import { motion } from "framer-motion";
import ProjectCard from "../ui/cards/ProjectCard";
import Title from "../ui/Title";
import Button from "../ui/Button";

// Default project data
const defaultProjects = [
  {
    id: "summer-collection",
    title: "Summer Elegance",
    description: "Our latest summer collection featuring lightweight fabrics, vibrant colors, and breathable designs perfect for warm weather sophistication.",
    industry: "Fashion",
    type: "Seasonal Collection",
    date: "Spring 2024",
    image: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg",
    link: "/collections/summer"

  },
  {
    id: "formal-wear",
    title: "Executive Collection",
    description: "Professional attire that commands respect. Tailored suits, elegant blazers, and sophisticated pieces for the modern executive.",
    industry: "Fashion",
    type: "Business Collection",
    date: "Fall 2024",
    image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg",
    link: "/collections/executive"
  },
  {
    id: "luxury-accessories",
    title: "Luxury Accessories",
    description: "Exquisite accessories that elevate any outfit. From designer handbags to statement jewelry, find the perfect finishing touch.",
    industry: "Fashion",
    type: "Accessories",
    date: "Winter 2024",
    image: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg",
    link: "/collections/accessories"

  },
];

export default function Project({
  projects = defaultProjects,
  ctaText = "Ready to explore our full collection?",
  ctaButton = { text: "Shop Now", href: "/shop" },
  gradient = "bg-gradient-to-br from-white via-[#002440] to-white", // default gradient
}) {
  return (
    <section
      className={`relative w-full py-20 px-10 md:px-20 ${gradient} text-white overflow-hidden`}
    >
      <Title title="Featured Collections" />
      <div className="relative pt-10 flex flex-wrap justify-between gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
      <br />
      <div className="flex flex-col items-center justify-center w-full center border-2 border-white my-10 p-10 rounded-3xl">
        <p className="text-3xl">{ctaText}</p>
        <Button text={ctaButton.text} href={ctaButton.href} />
      </div>
    </section>
  );
}

"use client";

import { useCart } from "@/hooks/useCart";
import { motion } from "framer-motion";
import ProjectCard from "../ui/cards/ProjectCard";
  const { addToCart } = useCart();

import { ExternalLink, ShoppingCart } from "lucide-react";
import Button from "../ui/Button";

// Default project data
const defaultProjects = [
  {
    id: "summer-collection",
      price: 299,
      originalPrice: 399,
    title: "Summer Elegance",
    description: "Our latest summer collection featuring lightweight fabrics, vibrant colors, and breathable designs perfect for warm weather sophistication.",
    industry: "Fashion",
    type: "Seasonal Collection",
    date: "Spring 2024",
    image: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg",
    link: "/collections/summer"
      price: 599,
      originalPrice: 799,

  },
  {
    id: "formal-wear",
    title: "Executive Collection",
    description: "Professional attire that commands respect. Tailored suits, elegant blazers, and sophisticated pieces for the modern executive.",
    industry: "Fashion",
      price: 199,
      originalPrice: 249,
    type: "Business Collection",
    date: "Fall 2024",
    image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg",
    link: "/collections/executive"
  },
  {
    id: "luxury-accessories",
      price: 899,
      originalPrice: 1199,
    title: "Luxury Accessories",
    description: "Exquisite accessories that elevate any outfit. From designer handbags to statement jewelry, find the perfect finishing touch.",
    industry: "Fashion",
    type: "Accessories",
    date: "Winter 2024",
    image: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg",
    link: "/collections/accessories"
      price: 349,
    <section className="py-20 bg-gray-50 dark:bg-gray-900">

  },
];
            Our <span className="text-red-600">Collections</span>
export default function Project({
  projects = defaultProjects,
  ctaText = "Ready to explore our full collection?",
      price: 799,
      originalPrice: 999,
  ctaButton = { text: "Shop Now", href: "/shop" },
  gradient = "bg-gradient-to-br from-white via-[#002440] to-white", // default gradient
}) {
  const handleAddToCart = (collection: any) => {
    addToCart({
      id: collection.id,
      name: collection.title,
      price: collection.price,
      image: collection.image,
      quantity: 1,
    });
  };

                <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
    <section
      className={`relative w-full py-20 px-10 md:px-20 ${gradient} text-white overflow-hidden`}
                <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
                  ${collection.price}
                </div>
    >
      <Title title="Featured Collections" />
      <div className="relative pt-10 flex flex-wrap justify-between gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
                <div className="flex gap-2">
                  <Link href={`/product/${collection.id}`} className="flex-1">
                    <Button 
                      variant="outline" 
                      className="w-full border-red-600 text-red-600 hover:bg-red-50 dark:hover:bg-red-950"
                    >
                      View More
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Button 
                    onClick={() => handleAddToCart(collection)}
                    className="bg-red-600 hover:bg-red-700 text-white px-4"
                  >
                    <ShoppingCart className="h-4 w-4" />
                  </Button>
                </div>
      <br />
      <div className="flex flex-col items-center justify-center w-full center border-2 border-white my-10 p-10 rounded-3xl">
        <p className="text-3xl">{ctaText}</p>
        <Button text={ctaButton.text} href={ctaButton.href} />
      </div>
    </section>
  );
}

"use client";

import { useCart } from "@/hooks/useCart";
import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, ShoppingCart } from "lucide-react";
import Button from "../ui/Button";
import Link from "next/link";
import Title from "../ui/Title";

// Default project data
const defaultProjects = [
  {
    id: "summer-collection",
    price: 299,
    originalPrice: 399,
    title: "Summer Elegance",
    description:
      "Our latest summer collection featuring lightweight fabrics, vibrant colors, and breathable designs perfect for warm weather sophistication.",
    industry: "Fashion",
    type: "Seasonal Collection",
    date: "Spring 2024",
    image:
      "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg",
    link: "/collections/summer",
  },
  {
    id: "formal-wear",
    price: 199,
    originalPrice: 249,
    title: "Executive Collection",
    description:
      "Professional attire that commands respect. Tailored suits, elegant blazers, and sophisticated pieces for the modern executive.",
    industry: "Fashion",
    type: "Business Collection",
    date: "Fall 2024",
    image:
      "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg",
    link: "/collections/executive",
  },
  {
    id: "luxury-accessories",
    price: 899,
    originalPrice: 1199,
    title: "Luxury Accessories",
    description:
      "Exquisite accessories that elevate any outfit. From designer handbags to statement jewelry, find the perfect finishing touch.",
    industry: "Fashion",
    type: "Accessories",
    date: "Winter 2024",
    image:
      "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg",
    link: "/collections/accessories",
  },
];

type ProjectProps = {
  projects?: typeof defaultProjects;
  ctaText?: string;
  ctaButton?: { text: string; href: string };
  gradient?: string;
};

interface Collection {
  id: string;
  price: number;
  originalPrice?: number;
  title: string;
  description: string;
  industry: string;
  type: string;
  date: string;
  image: string;
  link: string;
}

export default function Project({
  projects = defaultProjects,
  ctaText = "Ready to explore our full collection?",
  ctaButton = { text: "Shop Now", href: "/shop" },
  gradient = "bg-gradient-to-br from-white via-[#002440] to-white",
}: ProjectProps) {
  const { addToCart } = useCart();

  const handleAddToCart = (collection: Collection) => {
    // Convert string ID to number for cart compatibility
    const numericId = parseInt(collection.id.replace(/\D/g, '')) || Math.abs(collection.id.split('').reduce((a, b) => a + b.charCodeAt(0), 0));
    
    addToCart({
      id: numericId,
      name: collection.title,
      price: collection.price,
      image: collection.image,
      quantity: 1,
      color: undefined
    });
  };

  return (
    <section
      className={`relative w-full py-20 px-4 md:px-10 lg:px-20 ${gradient} text-white overflow-hidden`}
    >
      <div className="max-w-7xl mx-auto">
        <Title title="Featured Collections" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-10">
          {projects.map((collection, index) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative">
                <Image
                  src={collection.image}
                  alt={collection.title}
                  width={400}
                  height={256}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {collection.type}
                </div>
                <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
                  ${collection.price}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 text-gray-900 dark:text-gray-100">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{collection.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{collection.description}</p>

                <div className="flex gap-2 md:gap-3 mt-6">
                  <Link href={`/product/${collection.id}`} className="flex-1">
                    <Button
                      variant="outline"
                      className="w-full border-red-600 text-red-600 hover:bg-red-600 hover:text-white text-sm md:text-base"
                    >
                      <span className="flex items-center justify-center">
                        <span className="hidden sm:inline">View Details</span>
                        <span className="sm:hidden">View</span>
                        <ExternalLink className="ml-1 md:ml-2 h-3 w-3 md:h-4 md:w-4" />
                      </span>
                    </Button>
                  </Link>

                  <Button
                    onClick={() => handleAddToCart(collection)}
                    className="bg-red-600 hover:bg-red-700 text-white px-4 md:px-6"
                  >
                    <ShoppingCart className="h-4 w-4 md:h-4 md:w-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="flex flex-col items-center justify-center w-full border-2 border-white my-10 p-10 rounded-3xl bg-white/10 backdrop-blur-sm">
          <p className="text-3xl mb-6 text-center">{ctaText}</p>
          <Link href={ctaButton.href}>
            <Button 
              text={ctaButton.text} 
              variant="primary"
              className="bg-red-500 text-gray-900 hover:bg-gray-100" 
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

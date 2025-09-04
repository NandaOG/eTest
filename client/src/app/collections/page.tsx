"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Title from "@/components/ui/Title";
import { Calendar, ArrowRight } from "lucide-react";

const collections = [
  {
    id: "summer-collection",
    name: "Summer Elegance",
    description: "Light, breathable fabrics perfect for warm weather while maintaining sophistication.",
    image: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg",
    season: "Summer 2024",
    itemCount: 24,
    priceRange: "$89 - $299",
    featured: true,
  },
  {
    id: "winter-collection",
    name: "Winter Luxe",
    description: "Cozy yet elegant pieces designed to keep you warm and stylish during the colder months.",
    image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg",
    season: "Winter 2024",
    itemCount: 18,
    priceRange: "$120 - $599",
    featured: true,
  },
  {
    id: "designer-collection",
    name: "Designer Exclusive",
    description: "Limited edition pieces crafted by renowned designers exclusively for Luxe Apparel.",
    image: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg",
    season: "Limited Edition",
    itemCount: 12,
    priceRange: "$299 - $899",
    featured: false,
  },
  {
    id: "limited-collection",
    name: "Limited Edition",
    description: "Rare and exclusive pieces available in limited quantities for the discerning fashion enthusiast.",
    image: "https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg",
    season: "Exclusive",
    itemCount: 8,
    priceRange: "$399 - $1299",
    featured: true,
  },
];

export default function CollectionsPage() {
  const [filter, setFilter] = useState("all");

  const filteredCollections = filter === "all" 
    ? collections 
    : collections.filter(collection => collection.featured);

  return (
    <div className="min-h-screen pt-20 bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-20 px-10 md:px-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Collections</h1>
          <p className="text-lg md:text-xl leading-relaxed">
            Discover our carefully curated collections, each telling its own story through exceptional design, 
            premium materials, and timeless elegance. From seasonal favorites to exclusive limited editions.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-10 px-10 md:px-20 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="flex justify-center gap-4">
          <button
            onClick={() => setFilter("all")}
            className={`px-6 py-3 rounded-full font-medium transition-colors ${
              filter === "all"
                ? "bg-red-600 text-white"
                : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-red-100 dark:hover:bg-gray-600"
            }`}
          >
            All Collections ({collections.length})
          </button>
          <button
            onClick={() => setFilter("featured")}
            className={`px-6 py-3 rounded-full font-medium transition-colors ${
              filter === "featured"
                ? "bg-red-600 text-white"
                : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-red-100 dark:hover:bg-gray-600"
            }`}
          >
            Featured ({collections.filter(c => c.featured).length})
          </button>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="py-20 px-10 md:px-20">
        <div className="max-w-7xl mx-auto">
          <Title title="Fashion Collections" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
            {filteredCollections.map((collection) => (
              <div key={collection.id} className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
                {/* Collection Image */}
                <div className="relative h-96 overflow-hidden">
                  <Image
                    src={collection.image}
                    alt={collection.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Featured Badge */}
                  {collection.featured && (
                    <div className="absolute top-6 right-6 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Featured
                    </div>
                  )}

                  {/* Collection Info Overlay */}
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{collection.season}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{collection.name}</h3>
                  </div>
                </div>

                {/* Collection Details */}
                <div className="p-8">
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {collection.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <span className="text-sm text-gray-500 dark:text-gray-400 block">Items</span>
                      <span className="text-lg font-semibold text-gray-900 dark:text-white">
                        {collection.itemCount} pieces
                      </span>
                    </div>
                    <div>
                      <span className="text-sm text-gray-500 dark:text-gray-400 block">Price Range</span>
                      <span className="text-lg font-semibold text-red-600">
                        {collection.priceRange}
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Link href={`/collections/${collection.id}`} className="flex-1">
                      <Button 
                        variant="primary" 
                        className="w-full bg-red-600 hover:bg-red-700 text-white"
                      >
                        Explore Collection
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                    <Link href="/shop">
                      <Button 
                        variant="outline"
                        className="border-gray-300 text-gray-700 hover:border-red-600 hover:text-red-600"
                      >
                        Shop All
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-10 md:px-20 bg-white dark:bg-gray-800">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            Can&apos;t Find What You&apos;re Looking For?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Explore our complete catalog or get in touch with our personal styling team for customized recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              text="Shop All Products" 
              href="/shop"
              variant="primary"
              className="bg-red-600 hover:bg-red-700 text-white"
            />
            <Button 
              text="Contact Stylists" 
              href="/contact"
              variant="outline"
              className="border-gray-300 text-gray-700 hover:border-red-600 hover:text-red-600"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

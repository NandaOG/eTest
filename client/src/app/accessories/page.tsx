"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Title from "@/components/ui/Title";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { useCart } from "@/hooks/useCart";

interface AccessoryProduct {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  sale: boolean;
}

const accessoryProducts = [
  {
    id: "acc-handbag-1",
    name: "Designer Handbag",
    price: 450,
    originalPrice: 599,
    image: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg",
    category: "handbags",
    sale: true,
  },
  {
    id: "acc-jewelry-1",
    name: "Gold Necklace",
    price: 299,
    image: "https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg",
    category: "jewelry",
    sale: false,
  },
  {
    id: "acc-shoes-1",
    name: "Luxury Heels",
    price: 320,
    originalPrice: 400,
    image: "https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg",
    category: "shoes",
    sale: true,
  },
  {
    id: "acc-watch-1",
    name: "Premium Watch",
    price: 899,
    image: "https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg",
    category: "watches",
    sale: false,
  },
];

const categories = [
  { id: "all", name: "All Items", count: accessoryProducts.length },
  { id: "handbags", name: "Handbags", count: accessoryProducts.filter(p => p.category === "handbags").length },
  { id: "jewelry", name: "Jewelry", count: accessoryProducts.filter(p => p.category === "jewelry").length },
  { id: "shoes", name: "Shoes", count: accessoryProducts.filter(p => p.category === "shoes").length },
  { id: "watches", name: "Watches", count: accessoryProducts.filter(p => p.category === "watches").length },
];

export default function AccessoriesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [favorites, setFavorites] = useState<string[]>([]);
  const { addToCart } = useCart();

  const filteredProducts = selectedCategory === "all" 
    ? accessoryProducts 
    : accessoryProducts.filter(product => product.category === selectedCategory);

  const toggleFavorite = (productId: string) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const handleAddToCart = (product: AccessoryProduct) => {
    // Convert string ID to number for cart compatibility
    const numericId = parseInt(product.id.replace(/\D/g, '')) || Math.abs(product.id.split('').reduce((a, b) => a + b.charCodeAt(0), 0));
    
    addToCart({
      id: numericId,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
      color: "Default",
    });
  };

  return (
    <div className="min-h-screen pt-20 bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-20 px-10 md:px-20 bg-gradient-to-br from-yellow-600 via-orange-600 to-red-600 text-white">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Accessories</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Complete your look with our exquisite collection of premium accessories
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-10 px-10 md:px-20 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-colors ${
                selectedCategory === category.id
                  ? "bg-red-600 text-white"
                  : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-red-100 dark:hover:bg-gray-600"
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 px-10 md:px-20">
        <div className="max-w-7xl mx-auto">
          <Title title={`${selectedCategory === "all" ? "All Accessories" : categories.find(c => c.id === selectedCategory)?.name}`} />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-10">
            {filteredProducts.map((product) => (
              <div key={product.id} className="group relative bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                {/* Sale Badge */}
                {product.sale && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                    SALE
                  </div>
                )}
                
                {/* Favorite Button */}
                <button
                  onClick={() => toggleFavorite(product.id)}
                  className="absolute top-4 right-4 p-2 bg-white/90 dark:bg-gray-800/90 rounded-full hover:bg-white dark:hover:bg-gray-700 transition-colors z-10"
                >
                  <FaHeart className={`${favorites.includes(product.id) ? 'text-red-500' : 'text-gray-400'}`} />
                </button>

                {/* Product Image */}
                <Link href={`/product/${product.id}`}>
                  <div className="relative h-80 overflow-hidden cursor-pointer">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </Link>

                {/* Product Info */}
                <div className="p-6">
                  <Link href={`/product/${product.id}`}>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 hover:text-red-600 transition-colors cursor-pointer">
                      {product.name}
                    </h3>
                  </Link>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl font-bold text-red-600">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
                    )}
                  </div>
                  
                  <div className="flex gap-3">
                    {/* Desktop: Full button with icon and text */}
                    <Button 
                      onClick={() => handleAddToCart(product)}
                      variant="primary"
                      className="hidden sm:flex flex-1 bg-red-600 hover:bg-red-700 text-white"
                    >
                      <FaShoppingCart className="mr-2 h-4 w-4" />
                      Add to Cart
                    </Button>
                    {/* Mobile: Icon only button */}
                    <Button 
                      onClick={() => handleAddToCart(product)}
                      variant="primary"
                      className="sm:hidden flex-1 bg-red-600 hover:bg-red-700 text-white flex items-center justify-center"
                    >
                      <FaShoppingCart className="h-5 w-5" />
                    </Button>
                    
                    <Link href={`/product/${product.id}`}>
                      <Button
                        variant="outline"
                        className="hidden sm:flex border-gray-300 text-gray-700 hover:border-red-600 hover:text-red-600"
                      >
                        View
                      </Button>
                    </Link>
                    {/* Mobile: Abbreviated view button */}
                    <Link href={`/product/${product.id}`} className="sm:hidden">
                      <Button
                        variant="outline"
                        className="border-gray-300 text-gray-700 hover:border-red-600 hover:text-red-600 px-4"
                      >
                        View
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600 dark:text-gray-400">
                No products found in this category.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

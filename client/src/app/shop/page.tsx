"use client";

import { useState } from "react";
import Image from "next/image";
import { FaHeart, FaFilter, FaSort, FaShoppingCart } from "react-icons/fa";
import Title from "@/components/ui/Title";
import Button from "@/components/ui/Button";
import { useCart } from "@/hooks/useCart";

const products = [
  {
    id: 1,
    name: "Elegant Evening Dress",
    price: 299,
    originalPrice: 399,
    image: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg",
    category: "women",
    type: "dress",
    sale: true,
  },
  {
    id: 2,
    name: "Classic Business Suit",
    price: 599,
    image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg",
    category: "men",
    type: "suit",
    sale: false,
  },
  {
    id: 3,
    name: "Designer Handbag",
    price: 450,
    image: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg",
    category: "accessories",
    type: "bag",
    sale: false,
  },
  {
    id: 4,
    name: "Luxury Blazer",
    price: 350,
    originalPrice: 450,
    image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg",
    category: "women",
    type: "blazer",
    sale: true,
  },
  {
    id: 5,
    name: "Silk Blouse",
    price: 180,
    image: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg",
    category: "women",
    type: "blouse",
    sale: false,
  },
  {
    id: 6,
    name: "Tailored Trousers",
    price: 220,
    image: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg",
    category: "men",
    type: "pants",
    sale: false,
  },
];

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("featured");
  const [favorites, setFavorites] = useState<number[]>([]);
  const { addToCart } = useCart();

  const handleAddToCart = (product: typeof products[0]) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
      color: undefined
    });
  };

  const filteredProducts = products.filter(product => 
    selectedCategory === "all" || product.category === selectedCategory
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "name":
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  const toggleFavorite = (productId: number) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-white via-gray-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-10 md:px-20 bg-gradient-to-br from-[#BF4000] via-[#002440] to-white text-white">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Luxury Fashion Collection</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Discover our curated selection of premium clothing and accessories
          </p>
        </div>
      </section>

      {/* Filters and Sort */}
      <section className="py-10 px-10 md:px-20 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <FaFilter className="text-gray-700 dark:text-gray-300" />
            <select 
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
            >
              <option value="all">All Categories</option>
              <option value="women">Women</option>
              <option value="men">Men</option>
              <option value="accessories">Accessories</option>
            </select>
          </div>
          
          <div className="flex items-center gap-4">
            <FaSort className="text-gray-700 dark:text-gray-300" />
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name A-Z</option>
            </select>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 px-10 md:px-20 bg-gray-50 dark:bg-gray-900">
        <Title title="Shop Collection" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {sortedProducts.map((product) => (
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
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{product.name}</h3>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl font-bold text-red-600">${product.price}</span>
                  {product.originalPrice && (
                    <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
                  )}
                </div>
                
                <div className="flex gap-3">
                  {/* Cart Icon Button - All screen sizes */}
                  <Button 
                    variant="primary"
                    className="flex-1 bg-red-600 hover:bg-red-700 text-white flex items-center justify-center"
                    onClick={() => handleAddToCart(product)}
                  >
                    <FaShoppingCart className="h-5 w-5" />
                  </Button>
                  
                  <Button
                    text="Quick View"
                    variant="outline"
                    className="flex-1 border-gray-300 text-gray-700 hover:border-red-600 hover:text-red-600"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
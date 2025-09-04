"use client";

import React, { useState } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { ShoppingCart, Heart, Star, Minus, Plus } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { useParams } from "next/navigation";
const ProductPage = () => {
  const params = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("M");
  const [isFavorite, setIsFavorite] = useState(false);

  const collections = [
    {
      id: 1,
      title: "Summer Elegance",
      description: "Light, breathable fabrics perfect for warm weather while maintaining sophistication. This stunning piece features premium cotton blend with subtle texture details and a flattering silhouette that works for both casual and formal occasions.",
      image: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
      category: "Women",
      price: 299,
      originalPrice: 399,
      rating: 4.8,
      reviews: 124,
      sizes: ["XS", "S", "M", "L", "XL"],
      colors: ["Black", "Navy", "Cream"],
    },
    {
      id: 2,
      title: "Executive Collection",
      description: "Professional attire that commands respect in any boardroom or business setting. Crafted from the finest wool blend with impeccable tailoring and attention to detail.",
      image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
      category: "Men",
      price: 599,
      originalPrice: 799,
      rating: 4.9,
      reviews: 89,
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Charcoal", "Navy", "Black"],
    },
    {
      id: 3,
      title: "Luxury Accessories",
      description: "Handcrafted accessories that add the perfect finishing touch to any outfit. Made from premium leather with gold-plated hardware.",
      image: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
      category: "Accessories",
      price: 199,
      originalPrice: 249,
      rating: 4.7,
      reviews: 203,
      sizes: ["One Size"],
      colors: ["Black", "Brown", "Tan"],
    },
    {
      id: 4,
      title: "Evening Wear",
      description: "Stunning pieces designed for special occasions and memorable nights. Features luxurious silk fabric with intricate beadwork and elegant draping.",
      image: "https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
      category: "Women",
      price: 899,
      originalPrice: 1199,
      rating: 4.9,
      reviews: 67,
      sizes: ["XS", "S", "M", "L", "XL"],
      colors: ["Black", "Midnight Blue", "Burgundy"],
    },
    {
      id: 5,
      title: "Casual Luxury",
      description: "Elevated everyday wear that brings luxury to your daily wardrobe. Premium cotton with subtle designer details.",
      image: "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
      category: "Unisex",
      price: 349,
      originalPrice: 449,
      rating: 4.6,
      reviews: 156,
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      colors: ["White", "Black", "Gray"],
    },
    {
      id: 6,
      title: "Winter Collection",
      description: "Warm, luxurious pieces that keep you stylish through the coldest months. Features premium cashmere blend with modern cut.",
      image: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
      category: "Unisex",
      price: 799,
      originalPrice: 999,
      rating: 4.8,
      reviews: 92,
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Black", "Camel", "Gray"],
    },
  ];

  const product = collections.find(p => p.id === parseInt(params.id as string));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center" suppressHydrationWarning>
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <Button href="/shop">
            Back to Shop
          </Button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.title,
      price: product.price,
      image: product.image,
      quantity: quantity,
      size: selectedSize,
      color: undefined
    });
  };

  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <div className="min-h-screen bg-white dark:bg-black pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src={product.image}
                alt={product.title}
                width={600}
                height={600}
                className="w-full h-[600px] object-cover"
              />
              {discount > 0 && (
                <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  -{discount}% OFF
                </div>
              )}
              <button
                onClick={() => setIsFavorite(!isFavorite)}
                className="absolute top-4 right-4 p-2 bg-white/80 rounded-full hover:bg-white transition-colors"
              >
                <Heart className={`h-5 w-5 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
              </button>
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm text-red-600 font-medium">{product.category}</span>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="text-sm text-gray-600 ml-1">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.title}</h1>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl font-bold text-red-600">${product.price}</span>
                {product.originalPrice > product.price && (
                  <span className="text-xl text-gray-500 line-through">${product.originalPrice}</span>
                )}
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              {product.description}
            </p>

            {/* Size Selection */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Size</h3>
              <div className="flex gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 border rounded-lg transition-colors ${
                      selectedSize === size
                        ? 'border-red-600 bg-red-600 text-white'
                        : 'border-gray-300 hover:border-red-600'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Color</h3>
              <div className="flex gap-2">
                {product.colors.map((color) => (
                  <div
                    key={color}
                    className="w-8 h-8 rounded-full border-2 border-gray-300 cursor-pointer hover:border-red-600 transition-colors"
                    style={{
                      backgroundColor: color.toLowerCase() === 'cream' ? '#f5f5dc' : 
                                     color.toLowerCase() === 'navy' ? '#1e3a8a' :
                                     color.toLowerCase() === 'charcoal' ? '#374151' :
                                     color.toLowerCase() === 'midnight blue' ? '#1e1b4b' :
                                     color.toLowerCase() === 'burgundy' ? '#7c2d12' :
                                     color.toLowerCase() === 'tan' ? '#d2b48c' :
                                     color.toLowerCase() === 'brown' ? '#8b4513' :
                                     color.toLowerCase() === 'camel' ? '#c19a6b' :
                                     color.toLowerCase()
                    }}
                    title={color}
                  />
                ))}
              </div>
            </div>

            {/* Quantity Selection */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Quantity</h3>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 border border-gray-300 rounded-lg hover:border-red-600 transition-colors"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="text-lg font-medium w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 border border-gray-300 rounded-lg hover:border-red-600 transition-colors"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <Button
              onClick={handleAddToCart}
              size="lg"
              className="w-full bg-red-600 hover:bg-red-700 text-white text-lg py-6"
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart - ${(product.price * quantity).toFixed(2)}
            </Button>

            {/* Product Features */}
            <div className="border-t pt-6 space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Free shipping</span>
                <span className="font-medium">On orders over $200</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Returns</span>
                <span className="font-medium">30-day return policy</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Material</span>
                <span className="font-medium">Premium quality fabrics</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
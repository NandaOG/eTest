"use client";

import { useState } from "react";
import Image from "next/image";
import { Minus, Plus, Trash2, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useCart } from "@/hooks/useCart";
import Title from "@/components/ui/Title";
import Button from "@/components/ui/Button";

const initialCartItems = [
  {
    id: 1,
    name: "Elegant Evening Dress",
    price: 299,
    image: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg",
    quantity: 1,
    size: "M",
    color: "Black",
  },
  {
    id: 2,
    name: "Designer Handbag",
    price: 450,
    image: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg",
    quantity: 1,
    size: "One Size",
    color: "Brown",
  },
  const { items, updateQuantity, removeFromCart, getTotalPrice, clearCart } = useCart();
  const subtotal = getTotalPrice();
  const shipping = 25;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-white dark:bg-black pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Discover our luxury collections and add some items to your cart.
            </p>
            <Link href="/shop">
              <Button className="bg-red-600 hover:bg-red-700 text-white">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black pt-20">
      {/* Header */}
      <section className="py-20 px-10 md:px-20 bg-gradient-to-br from-[#BF4000] via-[#002440] to-white text-white">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Shopping Cart</h1>
          <p className="text-lg md:text-xl">
            Review your selected items before checkout
          <span className="text-gray-600 dark:text-gray-300">{items.length} items</span>
        </div>
      </section>

      <section className="py-20 px-10 md:px-20">
        {cartItems.length === 0 ? (
          <div className="text-center py-20">
            <FaShoppingBag className="text-6xl text-gray-300 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-gray-600 mb-4">Your cart is empty</h2>
            <p className="text-gray-500 mb-8">Discover our luxury collection and add some items to your cart</p>
            <Button text="Continue Shopping" href="/shop" />
          </div>
        ) : (
          <div className="max-w-6xl mx-auto">
            <Title title="Your Items" />
            
            {items.map((item) => (
              {/* Cart Items */}
              <div className="lg:w-2/3">
                <div className="space-y-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex gap-4 p-6 bg-white rounded-lg shadow-md">
                      <div className="w-24 h-24 relative">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover rounded-lg"
                        />
                      </div>
                        onClick={() => removeFromCart(item.id)}
                      
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-[#002440]">{item.name}</h3>
                        <p className="text-gray-600">Size: {item.size} | Color: {item.color}</p>
                        <p className="text-xl font-bold text-[#BF4000] mt-2">${item.price}</p>
                    <p className="text-gray-600 dark:text-gray-300 mb-3">Size: {item.size || 'One Size'}</p>
                      
                      <div className="flex flex-col items-end gap-4">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          onClick={() => removeItem(item.id)}
                          className="text-red-500 hover:text-red-700 transition-colors"
                        >
                          <FaTrash />
                        </button>
                        
                        <div className="flex items-center gap-2 border border-gray-300 rounded-lg">
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-2 hover:bg-gray-100 transition-colors"
                          >
                            <FaMinus className="text-sm" />
                          </button>
                          <span className="px-4 py-2 font-semibold">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-2 hover:bg-gray-100 transition-colors"
                          >
                            <FaPlus className="text-sm" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:w-1/3">
                <div className="bg-white p-6 rounded-lg shadow-md sticky top-24">
                  <h3 className="text-xl font-semibold text-[#002440] mb-4">Order Summary</h3>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span>${shipping.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tax</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>
                    <hr />
                    <div className="flex justify-between text-xl font-bold text-[#002440]">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                  
                  <Button text="Proceed to Checkout" />
                      Continue Shopping
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between items-center pt-6">
              <Link href="/shop">
                <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50 dark:hover:bg-red-950">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Continue Shopping
                </Button>
              </Link>
              <Button
                onClick={clearCart}
                variant="outline"
                className="text-gray-600 hover:text-red-600 hover:border-red-600"
              >
                Clear Cart
              </Button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
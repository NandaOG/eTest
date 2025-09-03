"use client";

import { useState } from "react";
import Image from "next/image";
import { FaTrash, FaPlus, FaMinus, FaShoppingBag } from "react-icons/fa";
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
];

export default function Cart() {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      removeItem(id);
      return;
    }
    setCartItems(prev => 
      prev.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 25;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-white via-gray-50 to-white">
      {/* Header */}
      <section className="py-20 px-10 md:px-20 bg-gradient-to-br from-[#BF4000] via-[#002440] to-white text-white">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Shopping Cart</h1>
          <p className="text-lg md:text-xl">
            Review your selected items before checkout
          </p>
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
            
            <div className="flex flex-col lg:flex-row gap-10 mt-10">
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
                      
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-[#002440]">{item.name}</h3>
                        <p className="text-gray-600">Size: {item.size} | Color: {item.color}</p>
                        <p className="text-xl font-bold text-[#BF4000] mt-2">${item.price}</p>
                      </div>
                      
                      <div className="flex flex-col items-end gap-4">
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-red-500 hover:text-red-700 transition-colors"
                        >
                          <FaTrash />
                        </button>
                        
                        <div className="flex items-center gap-2 border border-gray-300 rounded-lg">
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
                  
                  <div className="mt-4 text-center">
                    <a href="/shop" className="text-[#BF4000] hover:underline">
                      Continue Shopping
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
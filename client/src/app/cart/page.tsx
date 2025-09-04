"use client";

import Image from "next/image";
import { Minus as FaMinus, Plus as FaPlus, Trash2 as FaTrash, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useCart } from "@/hooks/useCart";
import Title from "@/components/ui/Title";
import Button from "@/components/ui/Button";

export default function CartPage() {
  const { items, updateQuantity, removeFromCart, getTotalPrice, clearCart } = useCart();

  const subtotal = getTotalPrice();
  const shipping = items.length > 0 ? 25 : 0;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20" suppressHydrationWarning>
        <div className="container mx-auto px-4 py-16">
          <div className="text-center bg-white dark:bg-gray-800 rounded-lg p-12 shadow-lg">
            <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Your Cart is Empty</h1>
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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      {/* Header */}
      <section className="py-20 px-10 md:px-20 bg-gradient-to-br from-[#BF4000] via-[#002440] to-white text-white">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Shopping Cart</h1>
          <p className="text-lg md:text-xl">
            Review your selected items before checkout
          </p>
          <span className="text-gray-200 block">{items.length} items</span>
        </div>
      </section>

      {/* Cart Items + Summary */}
      <section className="py-20 px-10 md:px-20">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10">
          {/* Items */}
          <div className="lg:w-2/3 space-y-6">
            <Title title="Your Items" />
            {items.map((item) => (
              <div key={item.id} className="flex gap-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                {/* Image */}
                <div className="w-24 h-24 relative">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>

                {/* Item Info */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400">Size: {item.size} | Color: {item.color}</p>
                  <p className="text-xl font-bold text-red-600 mt-2">${item.price}</p>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-2 mt-4 border border-gray-300 dark:border-gray-600 rounded-lg w-fit bg-white dark:bg-gray-700">
                    <button
                      onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                      className="p-2 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors text-gray-700 dark:text-gray-300"
                    >
                      <FaMinus className="text-sm" />
                    </button>
                    <span className="px-4 py-2 font-semibold text-gray-900 dark:text-white">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-2 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors text-gray-700 dark:text-gray-300"
                    >
                      <FaPlus className="text-sm" />
                    </button>
                  </div>
                </div>

                {/* Remove Button */}
                <div className="flex items-start">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 transition-colors p-2"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md sticky top-24">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Order Summary</h3>

              <div className="space-y-3 mb-6 text-gray-700 dark:text-gray-300">
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
                <hr className="border-gray-300 dark:border-gray-600" />
                <div className="flex justify-between text-xl font-bold text-gray-900 dark:text-white">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                Proceed to Checkout
              </Button>
            </div>
          </div>
        </div>

        {/* Footer Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-6 max-w-6xl mx-auto gap-4">
          <Link href="/shop">
            <Button
              variant="outline"
              className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Continue Shopping
            </Button>
          </Link>
          <Button
            onClick={clearCart}
            variant="outline"
            className="border-gray-400 text-gray-600 hover:border-red-600 hover:text-red-600"
          >
            Clear Cart
          </Button>
        </div>
      </section>
    </div>
  );
}

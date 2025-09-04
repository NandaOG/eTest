"use client";

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  size?: string;
}

interface CartStore {
  items: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantity'> & { quantity?: number }) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

export const useCart = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      addToCart: (newItem) => {
        const items = get().items;
        const existingItem = items.find(item => item.id === newItem.id && item.size === newItem.size);
        
        if (existingItem) {
          set({
            items: items.map(item =>
              item.id === newItem.id && item.size === newItem.size
                ? { ...item, quantity: item.quantity + (newItem.quantity || 1) }
                : item
            ),
          });
        } else {
          set({
            items: [...items, { ...newItem, quantity: newItem.quantity || 1 }],
          });
        }
      },
      removeFromCart: (id) => {
        set({
          items: get().items.filter(item => item.id !== id),
        });
      },
      updateQuantity: (id, quantity) => {
        if (quantity <= 0) {
          get().removeFromCart(id);
          return;
        }
        
        set({
          items: get().items.map(item =>
            item.id === id ? { ...item, quantity } : item
          ),
        });
      },
      clearCart: () => {
        set({ items: [] });
      },
      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },
      getTotalPrice: () => {
        return get().items.reduce((total, item) => total + (item.price * item.quantity), 0);
      },
    }),
    {
      name: 'cart-storage',
    }
  )
);
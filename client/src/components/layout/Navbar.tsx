"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, ShoppingCart, User } from "lucide-react";
import MenuButton from "../ui/MenuButton";
import MobileMenu from "./MegaMenu";
import { FaShoppingBag } from "react-icons/fa";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowAuthModal(true)}
                className="text-gray-700 dark:text-gray-300 hover:text-red-600"
              >
                <User className="h-5 w-5 mr-2" />
                Login
              </Button>
import { useCart } from "@/hooks/useCart";
                <Button variant="ghost" size="sm" className="text-gray-700 dark:text-gray-300 hover:text-red-600 relative">
  const closeMenu = () => {
                  {totalItems > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {totalItems}
                    </span>
                  )}
    setMenuOpen(false);
  };
  const [showAuthModal, setShowAuthModal] = useState(false);
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
                <Button variant="ghost" size="sm" className="text-gray-700 dark:text-gray-300 relative">
      className={`fixed z-50 top-0 left-0 w-full bg-white rounded-b-3xl transition-all duration-300 ${
                  {totalItems > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {totalItems}
                    </span>
                  )}
        isScrolled || menuOpen ? "shadow-md py-3" : "py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-10 lg:px-20">
        {/* Top Bar */}
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
          {/* Logo */}
          <Link href="/">
            <div className="text-2xl md:text-3xl font-bold text-[#002440] cursor-pointer">
              Luxe Apparel
            </div>
          </Link>

          {/* Cart and Menu */}
          <div className="flex items-center gap-4">
            <Link href="/cart" className="relative p-2">
              <FaShoppingBag className="text-2xl text-[#002440] hover:text-[#BF4000] transition-colors" />
              <span className="absolute -top-1 -right-1 bg-[#BF4000] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
                    className="text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors font-medium"
            <div onClick={toggleMenu}>
              <MenuButton />
            </div>
          </div>
        </div>
                <Button
                  variant="ghost"
                  onClick={() => {
                    setShowAuthModal(true);
                    setIsOpen(false);
                  }}
                  className="justify-start text-gray-700 dark:text-gray-300 hover:text-red-600"
                >
                  <User className="h-5 w-5 mr-2" />
                  Login
                </Button>

        {/* Mobile Menu */}
                  className="text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors font-medium"
      </div>
      </nav>
      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
    </>
  );
}
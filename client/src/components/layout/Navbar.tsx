"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { User } from "lucide-react";
import { FaShoppingBag } from "react-icons/fa";
import MenuButton from "../ui/MenuButton";
import MobileMenu from "./MegaMenu";
import { useCart } from "@/hooks/useCart";
import  Button  from "../../components/ui/Button";
import AuthModal from "../../components/auth/AuthModal";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);

  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 transition-all duration-300 ${
          isScrolled || menuOpen ? "shadow-lg py-3" : "py-4"
        }`}
      >
        <div className="container mx-auto px-4 md:px-10 lg:px-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <div className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white hover:text-red-600 transition-colors cursor-pointer">
              <span className="hidden sm:inline">Luxe Apparel</span>
              <span className="sm:hidden">Luxe</span>
            </div>
          </Link>

          {/* Right Side */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Cart */}
            <Link href="/cart" className="relative p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
              <FaShoppingBag className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 hover:text-red-600 transition-colors" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full w-4 h-4 md:w-5 md:h-5 flex items-center justify-center font-semibold text-[10px] md:text-xs">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* Login - Responsive */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowAuthModal(true)}
              className="text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors font-medium p-2"
            >
              <User className="h-4 w-4 md:h-5 md:w-5 sm:mr-1 md:mr-2" />
              <span className="hidden md:inline">Login</span>
            </Button>

            {/* Mobile Menu Toggle */}
            <div onClick={toggleMenu} className="cursor-pointer p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
              <MenuButton />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu isOpen={menuOpen} onClose={closeMenu} />

      {/* Auth Modal */}
      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
    </>
  );
}

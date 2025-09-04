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
            <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white hover:text-red-600 transition-colors cursor-pointer">
              Luxe Apparel
            </div>
          </Link>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            {/* Cart */}
            <Link href="/cart" className="relative p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
              <FaShoppingBag className="text-2xl text-gray-700 dark:text-gray-300 hover:text-red-600 transition-colors" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* Login */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowAuthModal(true)}
              className="text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors font-medium"
            >
              <User className="h-5 w-5 mr-2" />
              Login
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

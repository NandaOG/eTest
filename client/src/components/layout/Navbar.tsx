"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
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

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed z-50 top-0 left-0 w-full bg-white rounded-b-3xl transition-all duration-300 ${
        isScrolled || menuOpen ? "shadow-md py-3" : "py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-10 lg:px-20">
        {/* Top Bar */}
        <div className="flex justify-between items-center">
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
            </Link>
            <div onClick={toggleMenu}>
              <MenuButton />
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <MobileMenu isOpen={menuOpen} onClose={closeMenu} />
      </div>
    </header>
  );
}
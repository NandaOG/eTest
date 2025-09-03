"use client";

import Image from "next/image";
import logo from "./../../../public/logo.png";
import { useState, useEffect } from "react";
import Link from "next/link";
import MenuButton from "../ui/MenuButton";
import MobileMenu from "./MegaMenu";

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
            <Image
              src={logo}
              alt="Logo"
              className="w-[180px] sm:w-[230px] cursor-pointer"
            />
          </Link>

          {/* Menu Button */}
          <div onClick={toggleMenu}>
            <MenuButton />
          </div>
        </div>

        {/* Mobile Menu */}
        <MobileMenu isOpen={menuOpen} onClose={closeMenu} />
      </div>
    </header>
  );
}
'use client';

import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const Footer = () => {
    const [currentYear, setCurrentYear] = useState<number | null>(null);

    useEffect(() => {
        setCurrentYear(new Date().getFullYear());
    }, []);
    return (
        <footer className="bg-gray-900 text-white">
            <div className="bg-gradient-to-br from-red-600 via-gray-800 to-gray-900 p-8 md:p-16">
                {/* Top Footer */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-12 border-b border-white/20">
                    {/* Left Section (Logo & Text) */}
                    <div className="flex flex-col space-y-4 md:w-1/2">
                        <div className="text-3xl md:text-4xl font-bold text-white">
                            Luxe Apparel
                        </div>
                        <p className="text-lg text-white/90 leading-relaxed">
                            Premium fashion collections, crafted with elegance, designed for the modern lifestyle. 
                            Discover timeless pieces that define sophistication.
                        </p>
                        {/* Social Links */}
                        <div className="flex space-x-4 pt-4">
                            <Link href="#" className="text-white hover:text-red-300 transition-colors">
                                <FaFacebook size={24} />
                            </Link>
                            <Link href="#" className="text-white hover:text-red-300 transition-colors">
                                <FaInstagram size={24} />
                            </Link>
                            <Link href="#" className="text-white hover:text-red-300 transition-colors">
                                <FaTwitter size={24} />
                            </Link>
                            <Link href="#" className="text-white hover:text-red-300 transition-colors">
                                <FaLinkedin size={24} />
                            </Link>
                        </div>
                    </div>
                    {/* Right Section */}
                    <div className="mt-8 md:mt-0 text-center md:text-right">
                        <div className="text-white/80 text-lg">Premium Fashion Since 2020</div>
                        <div className="text-white/60 text-sm mt-2">Trusted by fashion enthusiasts worldwide</div>
                    </div>
                </div>

                {/* Footer Middle - Navigation Links */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 py-12">
                    {/* Shop Column */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-white border-b border-red-400 pb-2 inline-block">Shop</h3>
                        <ul className="space-y-2">
                            <li><Link href="/women" className="text-white/80 hover:text-white transition-colors">Women</Link></li>
                            <li><Link href="/men" className="text-white/80 hover:text-white transition-colors">Men</Link></li>
                            <li><Link href="/accessories" className="text-white/80 hover:text-white transition-colors">Accessories</Link></li>
                            <li><Link href="/shop" className="text-white/80 hover:text-white transition-colors">All Products</Link></li>
                        </ul>
                    </div>

                    {/* Collections Column */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-white border-b border-red-400 pb-2 inline-block">
                            <Link href="/collections" className="hover:text-red-300 transition-colors">Collections</Link>
                        </h3>
                        <ul className="space-y-2">
                            <li><Link href="/collections/summer" className="text-white/80 hover:text-white transition-colors">Summer</Link></li>
                            <li><Link href="/collections/winter" className="text-white/80 hover:text-white transition-colors">Winter</Link></li>
                            <li><Link href="/collections/designer" className="text-white/80 hover:text-white transition-colors">Designer</Link></li>
                            <li><Link href="/collections/limited" className="text-white/80 hover:text-white transition-colors">Limited Edition</Link></li>
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-white border-b border-red-400 pb-2 inline-block">
                            <Link href="/about" className="hover:text-red-300 transition-colors">Company</Link>
                        </h3>
                        <ul className="space-y-2">
                            <li><Link href="/about" className="text-white/80 hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="/contact" className="text-white/80 hover:text-white transition-colors">Contact</Link></li>
                            <li><Link href="/lookbook" className="text-white/80 hover:text-white transition-colors">Lookbook</Link></li>
                            <li><Link href="/careers" className="text-white/80 hover:text-white transition-colors">Careers</Link></li>
                        </ul>
                    </div>

                    {/* Customer Care Column */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-white border-b border-red-400 pb-2 inline-block">Customer Care</h3>
                        <ul className="space-y-2">
                            <li><Link href="/size-guide" className="text-white/80 hover:text-white transition-colors">Size Guide</Link></li>
                            <li><Link href="/shipping" className="text-white/80 hover:text-white transition-colors">Shipping Info</Link></li>
                            <li><Link href="/returns" className="text-white/80 hover:text-white transition-colors">Returns</Link></li>
                            <li><Link href="/faq" className="text-white/80 hover:text-white transition-colors">FAQ</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter Column */}
                    <div className="space-y-4 col-span-2 md:col-span-1">
                        <h3 className="text-xl font-semibold text-white border-b border-red-400 pb-2 inline-block">Stay Updated</h3>
                        <p className="text-white/80 text-sm">Subscribe to get updates on new collections and exclusive offers.</p>
                        <div className="flex flex-col space-y-2">
                            <input 
                                type="email" 
                                placeholder="Enter your email" 
                                className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-red-400"
                            />
                            <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-semibold">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="border-t border-white/20 pt-8">
                    <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                        {/* Left side links */}
                        <div className="flex space-x-6 text-white/80">
                            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                            <Link href="/tos" className="hover:text-white transition-colors">Terms of Service</Link>
                        </div>

                        {/* Center text */}
                        <div className="text-white/80 text-center">
                            © {currentYear || 2024} Luxe Apparel. All rights reserved.
                        </div>

                        {/* Right side */}
                        <div className="text-white/60 text-sm">
                            Made with ❤️ for fashion lovers
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

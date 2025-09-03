'use client';

import Link from 'next/link';
import Image from 'next/image';
import logo_white from "../../../public/logo_white.png";

const Footer = () => {
    return (
        <footer className="bg-[#002440] text-white sm:p-10">
            <div className="bg-[#ca5012] bg-[url('/backgrounds/square.svg')]  sm:rounded-3xl p-10 sm:px-20 sm:py-10">
                {/* Top Footer */}
                <div className="flex flex-col md:flex-row justify-between items-center pt-10 pb-20 md:align-left ">
                    {/* Left Section (Logo & Text) */}
                    <div className="flex flex-col items-center items-start space-y-4 md:text-left">
                        <div className="flex justify-start">
                            <div className="text-4xl font-bold text-white">Luxe Apparel</div>
                        </div>
                        <p className="text-2xl mt-5 ">Premium fashion collections, crafted with elegance, designed for the modern lifestyle.</p>
                    </div>
                    {/* Right Section (Social Links) */}
                    <div className="mt-10 md:mt-0">
                        <div className="text-white text-lg">Premium Fashion Since 2020</div>
                    </div>
                </div>
                {/* Footer Middle */}
                <div className="flex flex-col md:flex-row justify-between border-t border-white flex-wrap">
                    <nav aria-label="Footer Navigation" className="flex flex-col md:flex-row md:gap-15 justify-between pt-20  [&_a]:hover:text-[#002440] [&_a]:transition-all [&_a]:duration-200 [&_li]:my-3 ">
                        {/* Column 1 */}
                        <div className="flex flex-col  my-5 md:my-0">
                            <h3 className="text-3xl md:text-2xl text-[#002440] ">Shop</h3>
                            <ul className="space-y-1 text-xl md:text-base">
                                <li><Link href="/women" >Women</Link></li>
                                <li><Link href="/men" >Men</Link></li>
                                <li><Link href="/accessories" >Accessories</Link></li>
                                <li><Link href="/sale">Sale</Link></li>
                            </ul>
                        </div>

                        {/* Column 2 */}
                        {/* <div className="flex flex-col  my-5 md:my-0 ">
                                <h3 className="text-3xl  md:text-2xl text-[#002440]">Resources</h3>
                                <ul className="space-y-1 text-xl md:text-base">
                                    <li><Link href="/blog" >Blog</Link></li>
                                    <li><Link href="/careers" >Careers</Link></li>
                                    <li><Link href="/faq" >FAQ</Link></li>
                                </ul>
                            </div> */}
                    </nav>
                    <nav aria-label="Footer Navigation" className="flex flex-col md:flex-row md:gap-15 justify-between md:py-20  [&_a]:hover:text-[#002440] [&_a]:transition-all [&_a]:duration-200 [&_li]:my-3 flex-wrap">
                        {/* Column 1 */}
                        <div className="flex flex-col  my-5 md:my-0">
                            <h3 className="text-3xl md:text-2xl text-[#002440] "><Link href="/collections">Collections</Link></h3>
                            <ul className="space-y-1 text-xl md:text-base">
                                <li><Link href="/collections/summer">Summer</Link></li>
                                <li><Link href="/collections/winter" >Winter</Link></li>
                                <li><Link href="/collections/formal" >Formal</Link></li>
                                <li><Link href="/collections/casual" >Casual</Link></li>
                                <li><Link href="/collections/designer" >Designer</Link></li>
                            </ul>
                        </div>

                        {/* Column 2 */}
                        <div className="flex flex-col  my-5 md:my-0 ">
                            <h3 className="text-3xl  md:text-2xl text-[#002440]"><Link href="/about" >Company</Link></h3>
                            <ul className="space-y-1 text-xl md:text-base">
                                <li><Link href="/about" >About Us</Link></li>
                                <li><Link href="/contact" >Contact</Link></li>
                                <li><Link href="/careers" >Careers</Link></li>
                                <li><Link href="/sustainability" >Sustainability</Link></li>
                            </ul>
                        </div>

                        <div className="flex flex-col  my-5 md:my-0">
                            <h3 className="text-3xl md:text-2xl text-[#002440]"><Link href="/customer-care" >Customer Care</Link></h3>
                            <ul className="space-y-1 text-xl md:text-base">
                                <li><Link href="/size-guide" >Size Guide</Link></li>
                                <li><Link href="/shipping">Shipping Info</Link></li>
                                <li><Link href="/returns">Returns</Link></li>
                            </ul>
                        </div>
                        {/* Column 3 */}
                        <div className="flex flex-col  my-5 md:my-0 ">
                            <h3 className="text-3xl  md:text-2xl text-[#002440]"><Link href="/brands" >Brands</Link></h3>
                            <ul className="space-y-1 text-xl md:text-base">
                                <li><Link href="/brands/valentino" >Valentino</Link></li>
                                <li><Link href="/brands/armani" >Armani</Link></li>
                                <li><Link href="/brands/versace" >Versace</Link></li>
                                <li><Link href="/brands/prada" >Prada</Link></li>
                            </ul>
                        </div>


                        {/* Column 4 */}
                        <div className="flex flex-col  my-5 md:my-0">
                            <h3 className="text-3xl md:text-2xl text-[#002440]"><Link href="/exclusive" >Exclusive</Link></h3>
                            <ul className="space-y-1 text-xl md:text-base">
                                <li><Link href="/vip" > VIP Members </Link></li>
                                <li><Link href="/limited-edition">Limited Edition </Link></li>
                                <li><Link href="/pre-order">Pre-Orders </Link></li>
                                <li><Link href="/custom-tailoring">Custom Tailoring </Link></li>
                                <li><Link href="/personal-styling">Personal Styling </Link></li>
                            </ul>
                        </div>

                    </nav>
                </div>
                {/* Copyright */}
                <div className="border-t border-white-700 pt-10  text-center text-sm ">

                    <div className="container  flex flex-col md:flex-row items-center justify-between px-0 gap-0">
                        {/* ✅ Left side links */}
                        <div className="flex space-x-6 order-2 md:order-1 text-lg mt-3 md:mt-0">
                            <Link href="/privacy" > Privacy Policy </Link>
                            <Link href="/tos" > Terms of Service </Link>
                        </div>

                        {/* ✅ Center text */}
                        <div className="text-center flex-1 order-1 md:order-2 text-lg">
                            © {new Date().getFullYear()} Luxe Apparel&nbsp; All rights reserved.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

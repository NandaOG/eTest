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
                            <Image src={logo_white} alt="Company Logo" width={350} height={100} priority />
                        </div>
                        <p className="text-2xl mt-5 ">Premium IT solutions, tailored to fit your needs, at a price you’ll love.</p>
                    </div>
                    {/* Right Section (Social Links) */}
                    <div className="mt-10 md:mt-0">
                        <Image src="/images/Partner_BigCommerce.png" alt="Partner Logo" width={200} height={80} />
                    </div>
                </div>
                {/* Footer Middle */}
                <div className="flex flex-col md:flex-row justify-between border-t border-white flex-wrap">
                    <nav aria-label="Footer Navigation" className="flex flex-col md:flex-row md:gap-15 justify-between pt-20  [&_a]:hover:text-[#002440] [&_a]:transition-all [&_a]:duration-200 [&_li]:my-3 ">
                        {/* Column 1 */}
                        <div className="flex flex-col  my-5 md:my-0">
                            <h3 className="text-3xl md:text-2xl text-[#002440] ">Company</h3>
                            <ul className="space-y-1 text-xl md:text-base">
                                <li><Link href="/about" >About</Link></li>
                                <li><Link href="/contact" >Contact</Link></li>
                                <li><Link href="/portfolio" >Portfolio</Link></li>
                                <li><Link href="/services">Services</Link></li>
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
                            <h3 className="text-3xl md:text-2xl text-[#002440] "><Link href="/services/ecommerce">Ecommerce</Link></h3>
                            <ul className="space-y-1 text-xl md:text-base">
                                <li><Link href="/services/ecommerce/magento">Magento</Link></li>
                                <li><Link href="/services/ecommerce/bigcommerce" >BigCommerce</Link></li>
                                <li><Link href="/services/ecommerce/shopify" >Shopify</Link></li>
                                <li><Link href="/services/ecommerce/demandware" >Demandware</Link></li>
                                <li><Link href="/services/headless-pwa" >Headless PWA</Link></li>
                            </ul>
                        </div>

                        {/* Column 2 */}
                        <div className="flex flex-col  my-5 md:my-0 ">
                            <h3 className="text-3xl  md:text-2xl text-[#002440]"><Link href="/services/data-analysis" >Data Analysis</Link></h3>
                            <ul className="space-y-1 text-xl md:text-base">
                                <li><Link href="/services/data-analysis/primary" >Primary</Link></li>
                                <li><Link href="/services/data-analysis/secondary" >Secondary</Link></li>
                                <li><Link href="/services/data-analysis/quantitative" >Quantitative</Link></li>
                                <li><Link href="/services/data-analysis/qualitative" >Qualitative</Link></li>
                            </ul>
                        </div>

                        <div className="flex flex-col  my-5 md:my-0">
                            <h3 className="text-3xl md:text-2xl text-[#002440]"><Link href="/services/marketing" >Marketing</Link></h3>
                            <ul className="space-y-1 text-xl md:text-base">
                                <li><Link href="/services/marketing/seo" >SEO Optimization</Link></li>
                                <li><Link href="/services/marketing/digital-marketing">Digital Marketing</Link></li>
                                <li><Link href="/services/marketing/analytics">Analytics & Insights</Link></li>
                            </ul>
                        </div>
                        {/* Column 3 */}
                        <div className="flex flex-col  my-5 md:my-0 ">
                            <h3 className="text-3xl  md:text-2xl text-[#002440]"><Link href="/services/erp-integration" >ERP Integration</Link></h3>
                            <ul className="space-y-1 text-xl md:text-base">
                                <li><Link href="/services/erp-integration/epicor" >Epicor Integration</Link></li>
                                <li><Link href="/services/erp-integration/ddi" >DDI Integration</Link></li>
                                <li><Link href="/services/erp-integration/netsuite" >Netsuite Integration</Link></li>
                                <li><Link href="/services/erp-integration/lightspeed" >Lightspeed Integration</Link></li>
                            </ul>
                        </div>


                        {/* Column 4 */}
                        <div className="flex flex-col  my-5 md:my-0">
                            <h3 className="text-3xl md:text-2xl text-[#002440]"><Link href="/services/mobile-app" >Mobile App</Link></h3>
                            <ul className="space-y-1 text-xl md:text-base">
                                <li><Link href="/services/mobile-app/ios" > iOS </Link></li>
                                <li><Link href="/services/mobile-app/android">Android </Link></li>
                                <li><Link href="/services/mobile-app/cross-platform">Cross-Platform </Link></li>
                                <li><Link href="/services/mobile-app/react-native">React Native </Link></li>
                                <li><Link href="/services/mobile-app/flutter">Flutter </Link></li>
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
                            © {new Date().getFullYear()} CyberPeak IT Solutions Pvt. Ltd.&nbsp; All rights reserved.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

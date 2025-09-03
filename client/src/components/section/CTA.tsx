"use client";
import ContactForm from "@/components/Form/Contact";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaFileInvoiceDollar } from "react-icons/fa";
import { FaRegClock, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

import Title from "../ui/Title";
type GradientProps = {
    gradientColors?: string;
  };
  
   
const CTA = ({ gradientColors }: GradientProps) => {
    const defaultGradient = "bg-gradient-to-bl from-white via-[#002440] to-[#002440]";
    const appliedGradient = gradientColors || defaultGradient;
    return (
        <>
            <section className={`relative py-20 px-10 md:px-20 ${appliedGradient} text-white `}>
                <Title title="Get In Touch" />
                <div className="container mx-auto mt-15">
                    <div className="flex bg-[url('/backgrounds/grid.svg')] flex-col md:flex-row items-center justify-between w-full border-2 border-white my-10 p-10 rounded-3xl gap-5">
                        <div className="w-full md:w-1/2">
                            <h2 className="text-3xl md:text-5xl text-white"><b>Let’s Connect </b> and Create Something Amazing!</h2>
                        </div>
                        <div className="w-full md:w-1/2">
                            <p className="text-lg md:text-3xl text-white">Have questions or ideas? Drop us a message, and we’ll be in touch soon.</p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between items-center gap-10 text-white rounded-3xl pt-10">
                        {/* Left Section - Contact Info */}
                        <div className="md:w-1/2 flex flex-col gap-4 py-10 bg-[url('/backgrounds/parabolic.svg')]">
                            <p className="text-lg font-medium uppercase tracking-wide text-gray-400">
                                Don’t Hesitate
                            </p>
                            <h2 className="text-4xl font-bold">SAY HELLO</h2>
                            {/* Contact Details */}
                            <div className="space-y-5 text-white">
                                {/* Working Hours */}
                                <div className="flex items-center gap-3">
                                    <span className="text-blue-400 text-xl">
                                        <FaRegClock />
                                    </span>
                                    <div>
                                        <p className="font-semibold">Working Hours</p>
                                        <p>Monday To Friday: 10am - 7pm (IST)</p>
                                    </div>
                                </div>
                                {/* Email */}
                                <div className="flex items-center gap-3">
                                    <span className="text-blue-400 text-xl">
                                        <FaEnvelope />
                                    </span>
                                    <div>
                                        <p className="font-semibold">Email</p>
                                        <p>
                                            <a href="mailto:sales@cyberpeakitsolutions.com" className="text-blue-400 hover:underline">
                                                sales@cyberpeakitsolutions.com
                                            </a>
                                        </p>
                                    </div>
                                </div>

                                {/* Address */}
                                <div className="flex items-center gap-3">
                                    <span className="text-blue-400 text-xl">
                                        <FaMapMarkerAlt />
                                    </span>
                                    <div>
                                        <p className="font-semibold">Address</p>
                                        <p>
                                            EP-Y1, Bidhannagar, Arch Square X2 1404, <br />
                                            Salt Lake Sector-5, Kolkata – 700091, India
                                        </p>
                                    </div>
                                </div>

                                {/* Contact Phone */}
                                <div className="flex items-center gap-3">
                                    <span className="text-blue-400 text-xl">
                                        <FaPhoneAlt />
                                    </span>
                                    <div>
                                        <p className="font-semibold">Contact Phone</p>
                                        <p>
                                            <a href="tel:+919147711721" className="text-blue-400 hover:underline">
                                                +91 91477 11721
                                            </a>
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <span className="text-blue-400 text-xl">
                                        <FaFileInvoiceDollar  />
                                    </span>
                                    <div>
                                        <p className="font-semibold">GST Number</p>
                                        <p className="text-blue-400">
                                            {/* <a href="#" className="text-blue-400 "> */}
                                                GSTIN 19AAMCC1271G1ZM
                                            {/* </a> */}
                                        </p>
                                    </div>
                                </div>
                            </div>


                            {/* Social Media Links */}
                            <div className="mt-6 flex gap-4">
                                <a href="https://www.facebook.com/profile.php?id=61575556581825" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-500 transition duration-300 text-2xl border-1 border-white p-2 rounded-full">
                                    <FaFacebookF />
                                </a>
                                <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition duration-300 text-2xl border-1 border-white p-2 rounded-full">
                                    <FaTwitter />
                                </a>
                                <a href="https://www.linkedin.com/company/cyberpeak-it-solutions-pvt-ltd" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-600 transition duration-300 text-2xl border-1 border-white p-2 rounded-full">
                                    <FaLinkedinIn />
                                </a>
                                <a href="https://www.instagram.com/cyberpeakitsoulutions/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-pink-500 transition duration-300 text-2xl border-1 border-white p-2 rounded-full">
                                    <FaInstagram />
                                </a>
                            </div>
                        </div>

                        {/* Right Section - Contact Form */}
                        <div className="w-full md:w-1/2 md:border-2 border-white md:p-10 rounded-3xl">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CTA;

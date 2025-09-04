// "use client";
import Hero from "../components/section/Hero";
import Features from "../components/section/Feature";
import About from "../components/section/About";
import Services from "@/components/section/Services";
import Project from "@/components/section/Project";
import TechStack from "@/components/section/TechStack";
import Testimonial from "@/components/section/Testimonial";
import CTA from "@/components/section/CTA";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Luxe Apparel - Premium Fashion Collection",
  description:
    "Discover our exclusive collection of luxury clothing. Premium quality, timeless style, and exceptional craftsmanship for the modern fashion enthusiast.",
};

export default function Home() {
  return (
    <div className="min-h-screen" suppressHydrationWarning>
        {/* <h1 >Hello</h1> */}

        <Hero/>
        <Features/>
        <About/>
        <Services/>
        <Project/>
        <div className="hidden md:block">
          <TechStack />
        </div>
        {/* <Testimonial/> */}
        <CTA/>
    </div>
   
  );
}

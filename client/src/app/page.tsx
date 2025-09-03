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
  title: "CyberPeak IT Solutions",
  description:
    "At Cyberpeak IT Solutions, we provide personalised digital solutions that help organisations succeed in a competitive market with a team of IT, business strategy, and technical development professionals.",
};

export default function Home() {
  return (
    <div className="min-h-screen">
        {/* <h1 >Hello</h1> */}

        <Hero/>
        <Features/>
        <About/>
        <Services/>
        <Project/>
        <TechStack />
        <Testimonial/>
        <CTA/>
    </div>
   
  );
}

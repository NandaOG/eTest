"use client";

import React from "react";
// import { FaLinkedin, FaTwitter } from "react-icons/fa";
import {motion} from 'framer-motion';
import Title from "../ui/Title";
import TextComponent from "../ui/TextComponent";
import TeamCard from "../ui/cards/TeamCard";
const teamMembers = [
  {
    name: "Isabella Rodriguez",
    role: "Creative Director",
    image: "/images/client/avatar-f1.png",
    bio: "I curate our collections with an eye for timeless elegance and contemporary sophistication.",
    linkedin: "https://linkedin.com/in/isabella",
  },
  {
    name: "Alexander Chen",
    role: "Head of Design",
    image: "/images/client/avatar-m1.png",
    bio: "Alexander brings innovative design concepts that blend classic tailoring with modern aesthetics.",
    linkedin: "https://linkedin.com/in/alexander",
  },
  {
    name: "Sophia Laurent",
    role: "Head Stylist",
    image:"/images/client/avatar-f2.png",
    bio: "I help our customers discover their personal style through our curated luxury collections.",
    linkedin: "https://linkedin.com/in/sophia",
  },
];

export default function Team() {
  return (
    <section id="services" className={`w-full py-20 px-10 md:px-20 bg-gradient-to-br from-[#002440] via-[#002440]  to-white text-white`}>
      <Title title="Our Team" />
      <TextComponent title="<b>Meet the minds behind Luxe Apparel</b> — a synergy of style, creativity, and passion" description="We're a collective of fashion experts, stylists, and curators. With deep expertise in luxury fashion, personal styling, trend forecasting, and customer experience."/>
      <div className="container mx-auto mt-17 text-center">
        {/* <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2> */}
        <div className="relative pt-10 flex flex-col md:flex-row justify-between gap-20">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="w-full md:w-1/3"
          >
            <TeamCard team={member} />
          </motion.div>
        ))}
      </div>
      </div>
    </section>
  );
}

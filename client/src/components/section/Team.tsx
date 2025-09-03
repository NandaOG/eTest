"use client";

import React from "react";
// import { FaLinkedin, FaTwitter } from "react-icons/fa";
import {motion} from 'framer-motion';
import Title from "../ui/Title";
import TextComponent from "../ui/TextComponent";
import TeamCard from "../ui/cards/TeamCard";
const teamMembers = [
  {
    name: "Mukund Bajaj",
    role: "Founder & CEO",
    image: "/images/mukund.jpg",
    bio: "I blend business strategy with IT solutions, using my finance expertise to drive growth and efficiency.",
    linkedin: "https://linkedin.com/in/mukund",
  },
  {
    name: "Vedant Sarda",
    role: "Co-founder",
    image: "/images/client/avatar-m1.png",
    bio: "Vedant crafts scalable solutions with clean code and powerful backend architecture.",
    linkedin: "https://linkedin.com/in/vedant",
  },
  {
    name: "Mehul Shekha",
    role: "Technical Head",
    image:"/images/client/avatar-m1.png",
    bio: "I create impactful solutions that align technical expertise with business goals for scalable success.",
    linkedin: "https://linkedin.com/in/mehul",
  },
//   {
//     name: "Rajendra Kumar Shaw",
//     role: "Full Stack Developer",
//     image: "/images/team/mehul.jpg",
//     bio: "I crafts scalable solutions with clean code and powerful backend architecture.",
//     linkedin: "https://linkedin.com/in/mehul",
//   },
];

export default function Team() {
  return (
    <section id="services" className={`w-full py-20 px-10 md:px-20 bg-gradient-to-br from-[#002440] via-[#002440]  to-white text-white`}>
      <Title title="Our Team" />
      <TextComponent title="<b>Meet the minds behind CyberPeak</b> — a synergy of tech, strategy, and curiosity" description="We’re a collective of thinkers, builders, and innovators. With deep expertise in data science, software engineering, UI/UX design, business strategy, marketing, and eCommerce."/>
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

"use client";

import { motion } from "framer-motion";
import ProjectCard from "../ui/cards/ProjectCard";
import Title from "../ui/Title";
import Button from "../ui/Button";

// Default project data
const defaultProjects = [
  {
    id: "choueri",
    title: "The Choueri",
    description: "Choueri Real Estate will never settle for anything less than offering our clients the best in quality projects.",
    industry: "Real Estate",
    type: "Web Application, Ecommerce, Wordpress",
    date: "April 20, 2023",
    image: "/images/portfolio/Choueri.png",
    link: "https://choueri-uae.com"

  },
  {
    id: "theumashow",
    title: "The Uma Show",
    description: "Practical tips, strategies and insights to help you in your quest for increasing vitality and quality of life.",
    industry: "Ecommerce",
    type: "Web Application, Ecommerce, Shopify",
    date: "March 7, 2023",
    image: "/images/portfolio/theumashow.jpg",
    link: "https://theumashow.com/"
  },
  {
    id: "consopharma",
    title: "Consopharma",
    description: "We are thus considered as top Orthopedic Implants company.",
    industry: "Medical",
    type: "Website",
    date: "July 7, 2023",
    image: "/images/portfolio/consopharma.png",
    link: "https://consopharma.com"

  },
];

export default function Project({
  projects = defaultProjects,
  ctaText = "Wanna know more about our work?",
  ctaButton = { text: "View More", href: "/portfolio" },
  gradient = "bg-gradient-to-br from-white via-[#002440] to-white", // default gradient
}) {
  return (
    <section
      className={`relative w-full py-20 px-10 md:px-20 ${gradient} text-white overflow-hidden`}
    >
      <Title title="Our Work" />
      <div className="relative pt-10 flex flex-wrap justify-between gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
      <br />
      <div className="flex flex-col items-center justify-center w-full center border-2 border-white my-10 p-10 rounded-3xl">
        <p className="text-3xl">{ctaText}</p>
        <Button text={ctaButton.text} href={ctaButton.href} />
      </div>
    </section>
  );
}

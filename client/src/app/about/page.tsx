import About from "@/components/layout/About";
import {
    FaLightbulb,
    FaUsers,
    FaChartLine,
    FaDatabase,
    FaLaptopCode,
    FaShieldAlt,
    FaHandshake,
    FaRocket
  } from "react-icons/fa";
  
  import { LuGlobe, LuBrain } from "react-icons/lu";

export const metadata = {
  title: "About Us | Cyberpeak IT Solutions",
  description:
    "At Cyberpeak IT Solutions, we provide personalised digital solutions that help organisations succeed in a competitive market with a team of IT, business strategy, and technical development professionals.",
};

export default function AboutUsPage() {
  const heroData = {
    title: "About Cyberpeak IT Solutions",
    description:
      "At Cyberpeak IT Solutions, we provide personalised digital solutions that help organisations succeed in a competitive market with a team of IT, business strategy, and technical development professionals.",
    imageSrc: "/images/CyberPeak IT Solutions Pvt. Ltd..jpeg",
    imageAlt: "Cyberpeak team collaborating",
    buttonText: "Explore Our Services",
    buttonLink: "/services",
  };
  const introductionData = {
    title: "Our Story",
    title2: "<b>CyberPeak IT Solutions:</b>  A Journey of Expertise, Vision, and Innovation",
    subtitle:
      "CyberPeak IT Solutions was founded by three passionate professionals — Mukund Bajaj, Vedant Sarda, and Mehul Shekha — with a vision to bridge technology and strategy.",
    buttonText: "Contact Our Team",
    buttonLink: "/contact",
    highlightTitle: "We turn complex data and digital needs into smart, scalable solutions.",
    bullets: [
        "Serving clients in eCommerce, enterprise, and startup ecosystems.",
        "Specialized in data-driven development and analytics solutions.",
        "Experts in integrating ERP, CRM, and business intelligence systems.",
        "Cross-functional team across development, analytics, and strategy.",
        "Delivering web and mobile apps that scale with your business.",
        "End-to-end delivery: from ideation to deployment and optimization.",
        "Deep experience with cloud platforms, APIs, and secure architecture.",
        
      ],
      
    features: [
      {
        id: 1,
        icon: <FaUsers />,
        title: "Client-First Approach",
        desc: "Every solution is tailored to your unique challenges and goals.",
      },
      {
        id: 2,
        icon: <LuBrain />,
        title: "Analytics-Driven",
        desc: "We use data to guide every design, development, and marketing decision.",
      },
      {
        id: 3,
        icon: <FaChartLine />,
        title: "Scalable Solutions",
        desc: "Our systems are built to evolve with your growing business.",
      },
      {
        id: 4,
        icon: <FaHandshake />,
        title: "Built on Partnership",
        desc: "We grow with our clients — through collaboration, not just contracts.",
      },
    ],
  };
  

  const featuresData = {
    title: "Our Values",
    textData: {
      title: "<b>The Principles That Guide Our Work</b>",
      description:
        "At Cyberpeak, values aren’t just words — they’re our operating system. We lead with empathy, deliver with precision, and always aim for meaningful impact.",
    },
    features: [
        {
          icon: <FaLightbulb />,
          title: "Innovation",
          description: "We challenge the status quo to find smarter, more creative solutions.",
        },
        {
          icon: <LuGlobe />,
          title: "Global Perspective",
          description: "We bring worldwide insights with local relevance.",
        },
        {
          icon: <FaUsers />,
          title: "Collaboration",
          description: "Our best work happens when we co-create with clients and partners.",
        },
        {
          icon: <FaChartLine />,
          title: "Excellence",
          description: "Every project is a chance to raise the bar for quality and impact.",
        },
        {
          icon: <FaDatabase />,
          title: "Data-First Mindset",
          description: "Every decision we make is grounded in analytics and meaningful metrics.",
        },
        {
          icon: <FaLaptopCode />,
          title: "Tech Expertise",
          description: "From ERP integrations to scalable mobile/web apps, we build with precision.",
        },
        {
          icon: <FaShieldAlt />,
          title: "Security & Integrity",
          description: "We prioritize secure systems and ethical data practices in every build.",
        },
        {
          icon: <FaRocket />,
          title: "Agility & Growth",
          description: "We adapt quickly, scale fast, and help our clients grow with confidence.",
        },
      ]
      
  };

//   const servicesData = {
//     title: "Our Approach",
//     servicesData: [
//       {
//         id: "step1",
//         title: "Listen & Understand",
//         description:
//           "We start by deeply understanding your goals, market, and pain points.",
//         icon: <FaUsers />,
//         image: "/images/about/listen.jpg",
//       },
//       {
//         id: "step2",
//         title: "Plan & Strategize",
//         description:
//           "We craft a clear research or consulting roadmap tailored to your context.",
//         icon: <FaLightbulb />,
//         image: "/images/about/plan.jpg",
//       },
//       {
//         id: "step3",
//         title: "Execute & Deliver",
//         description:
//           "From data collection to insight reports — we deliver on time, every time.",
//         icon: <FaChartLine />,
//         image: "/images/about/execute.jpg",
//       },
//       {
//         id: "step4",
//         title: "Refine & Grow",
//         description:
//           "We track outcomes, learn together, and iterate for even better results.",
//         icon: <LuBrain />,
//         image: "/images/about/grow.jpg",
//       },
//     ],
//   };

  return (
    <About
      heroData={heroData}
      introductionData={introductionData}
      featuresData={featuresData}
    //   servicesData={servicesData}
    />
  );
}

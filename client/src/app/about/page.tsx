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
  title: "About Us | Luxe Apparel",
  description:
    "At Luxe Apparel, we curate the finest luxury fashion collections, bringing together timeless elegance and contemporary style for the discerning fashion enthusiast.",
};

export default function AboutUsPage() {
  const heroData = {
    title: "About Luxe Apparel",
    description:
      "At Luxe Apparel, we curate the finest luxury fashion collections, bringing together timeless elegance and contemporary style for the discerning fashion enthusiast.",
    imageSrc: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg",
    imageAlt: "Luxury fashion store",
    buttonText: "Shop Collection",
    buttonLink: "/shop",
  };
  const introductionData = {
    title: "Our Story",
    title2: "<b>Luxe Apparel:</b> A Journey of Style, Quality, and Timeless Elegance",
    subtitle:
      "Luxe Apparel was founded with a vision to bring the world's finest fashion to discerning customers who appreciate quality, craftsmanship, and timeless style.",
    buttonText: "Explore Collections",
    buttonLink: "/contact",
    highlightTitle: "We curate exceptional fashion pieces that define luxury and elegance.",
    bullets: [
        "Curating luxury fashion from renowned designers worldwide.",
        "Specialized in premium materials and exceptional craftsmanship.",
        "Expert styling consultations and personalized shopping experiences.",
        "Sustainable fashion practices and ethical sourcing.",
        "Delivering timeless pieces that transcend seasonal trends.",
        "End-to-end luxury experience: from selection to delivery.",
        "Deep relationships with exclusive fashion houses and emerging designers.",
        
      ],
      
    features: [
      {
        id: 1,
        icon: <FaLightbulb />,
        title: "Curated Excellence",
        desc: "Every piece is carefully selected for its quality, design, and timeless appeal.",
      },
      {
        id: 2,
        icon: <FaUsers />,
        title: "Personal Styling",
        desc: "Our expert stylists help you create the perfect wardrobe for any occasion.",
      },
      {
        id: 3,
        icon: <FaChartLine />,
        title: "Premium Quality",
        desc: "We partner with the finest fashion houses to bring you exceptional quality.",
      },
      {
        id: 4,
        icon: <FaHandshake />,
        title: "Sustainable Fashion",
        desc: "We're committed to ethical practices and sustainable fashion choices.",
      },
    ],
  };
  

  const featuresData = {
    title: "Our Values",
    textData: {
      title: "<b>The Principles That Guide Our Fashion</b>",
      description:
        "At Luxe Apparel, values aren't just words — they're woven into every thread. We lead with style, deliver with quality, and always aim for timeless elegance.",
    },
    features: [
        {
          icon: <FaLightbulb />,
          title: "Innovation in Design",
          description: "We seek out the most creative and forward-thinking designers in fashion.",
        },
        {
          icon: <LuGlobe />,
          title: "Global Fashion",
          description: "We bring worldwide fashion trends with local styling expertise.",
        },
        {
          icon: <FaUsers />,
          title: "Customer Partnership",
          description: "Our best styling happens when we collaborate with our customers' vision.",
        },
        {
          icon: <FaChartLine />,
          title: "Excellence",
          description: "Every piece is a chance to raise the bar for luxury and style.",
        },
        {
          icon: <FaLightbulb />,
          title: "Quality-First Mindset",
          description: "Every decision we make is grounded in quality and craftsmanship.",
        },
        {
          icon: <FaUsers />,
          title: "Fashion Expertise",
          description: "From haute couture to ready-to-wear, we curate with precision and style.",
        },
        {
          icon: <FaShieldAlt />,
          title: "Authenticity & Integrity",
          description: "We guarantee authentic pieces and ethical sourcing in every collection.",
        },
        {
          icon: <FaRocket />,
          title: "Style & Elegance",
          description: "We adapt to trends while maintaining timeless elegance and sophistication.",
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

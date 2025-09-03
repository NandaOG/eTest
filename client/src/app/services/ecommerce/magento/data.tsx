import {
    LuMonitorSmartphone, LuCode, LuRocket, LuStore, LuSettings, LuUserCheck, LuLayers, LuWrench
  } from "react-icons/lu";
  import {
    FaMagento, FaCogs, FaGlobe, FaMobileAlt, FaPaintBrush, FaLock, FaChartLine
  } from "react-icons/fa";
  
  export const heroData = {
    title: "Magento Development Services",
    description:
      "Custom Magento development solutions to scale your online store with performance, flexibility, and growth in mind.",
    imageSrc: "/images/services/magento.jpg",
    imageAlt: "magento development service",
    buttonText: "Get a Magento Proposal",
    buttonLink: "/contact",
  };
  
  export const introductionData = {
    title: "Why Choose Us",
    title2: "<b>Why Cyberpeak</b> for Magento development?",
    subtitle:
      "With deep Magento expertise, we craft robust eCommerce experiences, optimize performance, and build secure, scalable solutions tailored to your business goals.",
    buttonText: "Talk to Our Magento Experts",
    buttonLink: "/contact",
    highlightTitle: "CyberPeak: Your Magento Growth Partner",
    bullets: [
      "Certified Magento developers with enterprise-level experience.",
      "Custom modules, extensions, and API integrations.",
      "Scalable solutions for high-traffic Magento stores.",
      "Security-first approach for transactions and customer data.",
      "Ongoing performance tuning and post-launch support.",
    ],
    features: [
      {
        id: 1,
        icon: <FaMagento />,
        title: "Certified Magento Experts",
        desc: "Leverage our deep technical knowledge and Magento experience.",
      },
      {
        id: 2,
        icon: <LuCode />,
        title: "Custom Module Development",
        desc: "Tailored modules and features to fit unique business workflows.",
      },
      {
        id: 3,
        icon: <FaLock />,
        title: "Secure Architecture",
        desc: "Security-first mindset with PCI compliance and advanced protections.",
      },
      {
        id: 4,
        icon: <LuRocket />,
        title: "Performance Optimization",
        desc: "Speed and stability improvements for better UX and conversions.",
      },
    ],
  };
  
  export const featuresData = {
    title: "Overview",
    textData: {
      title: "<b>Flexible, Scalable, Secure Magento Solutions</b>",
      description:
        "From migration and theme customization to extension development and marketplace integration, our Magento experts build powerful eCommerce systems that scale.",
    },
    features: [
      {
        icon: <LuStore />,
        title: "Magento Store Setup",
        description: "End-to-end setup with a clean, secure, and scalable Magento foundation.",
      },
      {
        icon: <FaPaintBrush />,
        title: "Custom Theme Design",
        description: "Bespoke UI/UX aligned with your branding and optimized for conversions.",
      },
      {
        icon: <LuSettings />,
        title: "Third-Party Integrations",
        description: "ERP, CRM, payment gateway, and shipping API integrations.",
      },
      {
        icon: <FaChartLine />,
        title: "Performance Optimization",
        description: "Boost load times, Core Web Vitals, and server responsiveness.",
      },
      {
        icon: <FaMobileAlt />,
        title: "Mobile-First Development",
        description: "We ensure your Magento store looks and performs perfectly across devices.",
      },
      {
        icon: <LuMonitorSmartphone />,
        title: "PWA & Headless Magento",
        description: "Modern decoupled architecture for lightning-fast Magento stores.",
      },
      {
        icon: <LuUserCheck />,
        title: "Ongoing Support",
        description: "Proactive maintenance, upgrades, and long-term growth support.",
      },
      {
        icon: <LuLayers />,
        title: "Magento Migration",
        description: "Move from Shopify, WooCommerce, or Magento 1 to Magento 2 with zero data loss.",
      },
    ],
  };
  
  export const servicesData = {
    title: "Our Workflow",
    servicesData: [
      {
        id: "step1",
        title: "Discovery & Planning",
        description: "We analyze your business, audience, and technology needs to create a Magento roadmap.",
        icon: <FaCogs />,
        image: "/images/services/planning.avif",
      },
      {
        id: "step2",
        title: "UI/UX Design",
        description: "Wireframing and mockups to ensure a seamless and branded user journey.",
        icon: <FaPaintBrush />,
        image: "/images/services/design.jpg",
      },
      {
        id: "step3",
        title: "Custom Magento Development",
        description: "Backend and frontend Magento development tailored to your requirements.",
        icon: <LuCode />,
        image: "/images/services/frontend-development.avif",
      },
      {
        id: "step4",
        title: "Integration & QA",
        description: "Third-party tools, payment gateways, shipping APIs, and rigorous QA.",
        icon: <LuSettings />,
        image: "/images/services/QA-and-go-live.avif",
      },
      {
        id: "step5",
        title: "Launch & Go-Live",
        description: "Final testing, production deployment, and post-launch stabilization.",
        icon: <FaGlobe />,
        image: "/images/services/deployement.jpg",
      },
      {
        id: "step6",
        title: "Support & Scaling",
        description: "24/7 monitoring, patch updates, performance tuning, and scaling support.",
        icon: <LuWrench />,
        image: "/images/services/support.jpg",
      },
    ],
  };
  
import {
    LuMonitorSmartphone, LuCode, LuRocket, LuStore, LuShoppingCart, LuLayers, LuSettings, LuUserCheck
  } from "react-icons/lu";
  import {
    FaShopify, FaCogs, FaGlobe, FaMobileAlt, FaPaintBrush, FaChartLine
  } from "react-icons/fa";
  
  export const heroData = {
    title: "Shopify Development Services",
    description:
      "Build, scale, and optimize your Shopify store with our end-to-end Shopify development services tailored for performance and growth.",
    imageSrc: "/images/services/shopify.avif",
    imageAlt: "shopify development service",
    buttonText: "Get a Shopify Proposal",
    buttonLink: "/contact",
  };
  
  export const introductionData = {
    title: "Why Choose Us",
    title2: "<b>Why Cyberpeak</b> for your Shopify success?",
    subtitle:
      "From store setup to custom theme development and app integrations, we help you unlock the full potential of Shopify — powering seamless shopping experiences that convert.",
    buttonText: "Talk to Our Shopify Experts",
    buttonLink: "/contact",
    highlightTitle: "CyberPeak: Your Shopify Growth Partner",
    bullets: [
      "Expert Shopify Plus development and migration support.",
      "Mobile-first design philosophy for higher conversions.",
      "App development, integration, and automation expertise.",
      "SEO-ready, performance-optimized Shopify themes.",
      "Full-cycle support: strategy, design, dev, and marketing.",
    ],
    features: [
      {
        id: 1,
        icon: <FaShopify />,
        title: "Certified Shopify Experts",
        desc: "Work with professionals who know the platform inside out.",
      },
      {
        id: 2,
        icon: <LuCode />,
        title: "Custom Theme Development",
        desc: "We design, code, and optimize themes tailored for your brand.",
      },
      {
        id: 3,
        icon: <FaMobileAlt />,
        title: "Mobile Optimization",
        desc: "Every Shopify store we build is fully responsive and mobile-friendly.",
      },
      {
        id: 4,
        icon: <LuRocket />,
        title: "High Performance",
        desc: "Fast-loading, SEO-ready, and scalable Shopify solutions.",
      },
    ],
  };
  
  export const featuresData = {
    title: "Overview",
    textData: {
      title: "<b>Powering Growth-Driven Shopify Experiences</b>",
      description:
        "From custom themes to advanced app integrations, we help you make the most of Shopify’s ecosystem — delivering experiences that convert visitors into customers.",
    },
    features: [
      {
        icon: <LuStore />,
        title: "Shopify Store Setup",
        description: "Launch your online store with all the essential configurations and branded touchpoints.",
      },
      {
        icon: <FaPaintBrush />,
        title: "Custom Theme Design",
        description: "Stand out with a unique, conversion-focused design crafted to reflect your brand identity.",
      },
      {
        icon: <LuSettings />,
        title: "App Integration & Automation",
        description: "Seamlessly connect third-party apps or develop custom apps to streamline operations.",
      },
      {
        icon: <LuShoppingCart />,
        title: "Conversion Optimization",
        description: "We use UX best practices, A/B testing, and analytics to improve sales performance.",
      },
      {
        icon: <FaChartLine />,
        title: "Performance & SEO Optimization",
        description: "Improve speed, indexing, and organic visibility for better traffic and engagement.",
      },
      {
        icon: <LuMonitorSmartphone />,
        title: "Mobile-First Development",
        description: "Prioritizing mobile UX to drive conversions across all screen sizes.",
      },
      {
        icon: <LuUserCheck />,
        title: "Post-Launch Support",
        description: "Ongoing optimization, issue fixing, and feature enhancements post-deployment.",
      },
      {
        icon: <LuLayers />,
        title: "Migration to Shopify",
        description: "Switch to Shopify from WooCommerce, Magento, or custom platforms without disruption.",
      },
    ],
  };
  
  export const servicesData = {
    title: "Our Workflow",
    servicesData: [
      {
        id: "step1",
        title: "Discovery & Strategy",
        description: "We understand your business, customers, and goals to outline a Shopify solution tailored to your needs.",
        icon: <FaCogs />,
        image: "/images/services/business-discovery.avif",
      },
      {
        id: "step2",
        title: "Design & Wireframing",
        description: "Our UX/UI team creates mockups and wireframes aligned with your brand and conversion goals.",
        icon: <FaPaintBrush />,
        image: "/images/services/ui-ux-design.avif",
      },
      {
        id: "step3",
        title: "Custom Development",
        description: "We build your store, implement features, customize themes, and ensure pixel-perfect responsiveness.",
        icon: <LuCode />,
        image: "/images/services/cartridge-development.avif",
      },
      {
        id: "step4",
        title: "Integration & Testing",
        description: "We integrate apps, payment gateways, shipping APIs, and conduct rigorous QA testing.",
        icon: <LuSettings />,
        image: "/images/services/system-integration.avif",
      },
      {
        id: "step5",
        title: "Launch & Training",
        description: "We help you go live and train your team on managing the Shopify backend efficiently.",
        icon: <FaGlobe />,
        image: "/images/services/launching-and-training.jpg",
      },
      {
        id: "step6",
        title: "Support & Optimization",
        description: "From bug fixes to performance tuning, we provide continuous support post-launch.",
        icon: <LuUserCheck />,
        image: "/images/services/support.jpg",
      },
    ],
  };
  
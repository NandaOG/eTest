import {
    FaShoppingCart, FaRocket, FaCogs, FaCloud, FaLock, FaSyncAlt, FaStoreAlt
  } from "react-icons/fa";
  import {
    LuCode, LuMonitorSmartphone, LuSettings, LuWrench, LuLayers, LuUserCheck, LuTrendingUp
  } from "react-icons/lu";
  
  export const heroData = {
    title: "BigCommerce Development Services",
    description:
      "Custom BigCommerce development to build powerful, scalable, and SEO-optimized online stores for fast-growing brands and enterprises.",
    imageSrc: "/images/services/bigcommerce.jpg",
    imageAlt: "BigCommerce development services agency",
    buttonText: "Start Your Project",
    buttonLink: "/contact",
  };
  
  export const introductionData = {
    title: "Why Choose Us",
    title2: "<b>Why Cyberpeak</b> for BigCommerce Development?",
    subtitle:
      "We design and develop custom BigCommerce solutions that empower brands to launch lightning-fast, conversion-driven storefronts with full headless and omnichannel support.",
    buttonText: "Hire BigCommerce Experts",
    buttonLink: "/contact",
    highlightTitle: "Your Certified BigCommerce Development Partner",
    bullets: [
      "BigCommerce Certified Developers & Partners",
      "Custom themes, headless storefronts, and API-based integrations",
      "Optimized for SEO, speed, and conversions",
      "B2B & B2C solutions with scalable infrastructure",
      "Ongoing support, performance, and CRO optimization",
    ],
    features: [
      {
        id: 1,
        icon: <FaShoppingCart />,
        title: "Custom BigCommerce Stores",
        desc: "Beautiful, high-converting stores tailored to your brand with pixel-perfect design.",
      },
      {
        id: 2,
        icon: <LuCode />,
        title: "Headless Development",
        desc: "Use BigCommerce as a headless backend with React, Next.js, or Vue for front-end flexibility.",
      },
      {
        id: 3,
        icon: <FaRocket />,
        title: "Lightning-Fast Performance",
        desc: "Theme and code optimizations to ensure Core Web Vitals compliance and fast load times.",
      },
      {
        id: 4,
        icon: <FaLock />,
        title: "Secure & Scalable",
        desc: "PCI-compliant, cloud-hosted infrastructure for enterprise-level uptime and data protection.",
      },
    ],
  };
  
  export const featuresData = {
    title: "Overview",
    textData: {
      title: "<b>BigCommerce Solutions</b> That Power Growth",
      description:
        "CyberPeak delivers robust and customizable BigCommerce experiences with enterprise-grade integrations, custom app development, and mobile-first user experiences.",
    },
    features: [
      {
        icon: <LuMonitorSmartphone />,
        title: "Responsive Theme Development",
        description: "Mobile-optimized BigCommerce themes crafted for engagement and conversion.",
      },
      {
        icon: <FaStoreAlt />,
        title: "Custom Storefronts",
        description: "Tailored UX/UI built using Stencil framework or headless front-ends via GraphQL APIs.",
      },
      {
        icon: <LuSettings />,
        title: "API Integrations",
        description: "Integrate ERP, CRM, shipping, tax, payments, or marketing automation tools.",
      },
      {
        icon: <LuWrench />,
        title: "BigCommerce App Development",
        description: "Custom private and public BigCommerce apps to extend your store's functionality.",
      },
      {
        icon: <LuUserCheck />,
        title: "B2B Solutions",
        description: "Advanced B2B portals with custom pricing, user roles, quote flows, and punchouts.",
      },
      {
        icon: <LuLayers />,
        title: "SEO & Schema Integration",
        description: "Rich meta tags, JSON-LD, structured data, and canonical management out of the box.",
      },
      {
        icon: <LuTrendingUp />,
        title: "Conversion Rate Optimization",
        description: "CRO best practices and tools like Hotjar, GA4, and A/B testing implemented natively.",
      },
      {
        icon: <FaSyncAlt />,
        title: "Migration to BigCommerce",
        description: "Seamless replatforming from Shopify, Magento, WooCommerce, or custom solutions.",
      },
    ],
  };
  
  export const servicesData = {
    title: "Our Workflow",
    servicesData: [
      {
        id: "step1",
        title: "Consultation & Planning",
        description: "We analyze your business goals and customer journey to architect the right solution.",
        icon: <FaCogs />,
        image: "/images/services/consultation-and-planning.jpg",
      },
      {
        id: "step2",
        title: "UI/UX Design",
        description: "Wireframes and responsive designs crafted to match your brand and boost engagement.",
        icon: <LuMonitorSmartphone />,
        image: "/images/services/ui-ux-design.avif",
      },
      {
        id: "step3",
        title: "Theme & Store Development",
        description: "We develop using Stencil or headless frameworks, built with performance and SEO in mind.",
        icon: <LuCode />,
        image: "/images/services/development-coding.jpg",
      },
      {
        id: "step4",
        title: "Custom App Integrations",
        description: "Extend your store’s power with custom apps or third-party integrations.",
        icon: <LuSettings />,
        image: "/images/services/custom-app-integration.avif",
      },
      {
        id: "step5",
        title: "QA & Go Live",
        description: "Rigorous QA testing across all devices followed by a smooth production launch.",
        icon: <FaCloud />,
        image: "/images/services/QA-and-go-live.avif",
      },
      {
        id: "step6",
        title: "Ongoing Support",
        description: "Get long-term maintenance, version upgrades, SEO audits, and performance boosts.",
        icon: <LuWrench />,
        image: "/images/services/support.jpg",
      },
    ],
  };
  
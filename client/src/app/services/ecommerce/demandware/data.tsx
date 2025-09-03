import {
    FaSalesforce, FaCogs, FaCloud, FaRocket, FaShieldAlt, FaShoppingCart, FaExchangeAlt
  } from "react-icons/fa";
  import {
    LuMonitorSmartphone, LuCode, LuSettings, LuUserCheck, LuLayers, LuWrench, LuStore
  } from "react-icons/lu";
  
  export const heroData = {
    title: "Demandware (Salesforce Commerce Cloud) Development Services",
    description:
      "Enterprise-grade Salesforce Commerce Cloud (Demandware) solutions to power high-performance, omnichannel eCommerce experiences with scalability and innovation.",
    imageSrc: "/images/services/demandware.jpg",
    imageAlt: "Salesforce Commerce Cloud (Demandware) development services",
    buttonText: "Request a Proposal",
    buttonLink: "/contact",
  };
  
  export const introductionData = {
    title: "Why Choose Us",
    title2: "<b>Why Cyberpeak</b> for Demandware Development?",
    subtitle:
      "We help global brands scale and innovate with Salesforce Commerce Cloud by building lightning-fast, headless, and secure digital commerce platforms.",
    buttonText: "Hire Demandware Experts",
    buttonLink: "/contact",
    highlightTitle: "CyberPeak: Your Trusted Salesforce Commerce Partner",
    bullets: [
      "Certified Salesforce Commerce Cloud developers.",
      "Custom cartridges and backend integrations.",
      "Scalable, API-first headless commerce builds.",
      "Advanced SEO, personalization, and A/B testing strategies.",
      "Ongoing technical support and performance optimization.",
    ],
    features: [
      {
        id: 1,
        icon: <FaSalesforce />,
        title: "Certified Demandware Developers",
        desc: "Our engineers specialize in B2C Commerce Cloud (SFCC) with deep domain expertise.",
      },
      {
        id: 2,
        icon: <LuCode />,
        title: "Custom Cartridge Development",
        desc: "We build reusable cartridges and integrate with ERPs, CRMs, and payment systems.",
      },
      {
        id: 3,
        icon: <FaShieldAlt />,
        title: "Secure & Compliant Builds",
        desc: "PCI DSS, GDPR, and Salesforce security best practices for safe customer transactions.",
      },
      {
        id: 4,
        icon: <FaRocket />,
        title: "Performance-Focused Commerce",
        desc: "From Core Web Vitals to CDN optimization, we tune your store for max speed.",
      },
    ],
  };
  
  export const featuresData = {
    title: "Overview",
    textData: {
      title: "<b>Enterprise Demandware Solutions</b> Built to Scale",
      description:
        "CyberPeak delivers highly customized Salesforce Commerce Cloud experiences for high-growth brands, helping you deliver faster, smarter, and more personalized shopping journeys.",
    },
    features: [
      {
        icon: <LuStore />,
        title: "SFCC Storefront Development",
        description: "Custom, brand-aligned Demandware storefronts that convert across all devices.",
      },
      {
        icon: <FaShoppingCart />,
        title: "B2C & Headless Commerce",
        description: "Modernize your SFCC experience with headless architecture using APIs and PWA.",
      },
      {
        icon: <LuSettings />,
        title: "ERP & Backend Integrations",
        description: "Seamlessly connect your tech stack – CRM, OMS, payment gateways, and more.",
      },
      {
        icon: <LuMonitorSmartphone />,
        title: "Mobile-First UX/UI",
        description: "Responsive and mobile-optimized interfaces that boost engagement and conversions.",
      },
      {
        icon: <FaExchangeAlt />,
        title: "Migration to SFCC",
        description: "Migrate from Magento, Shopify Plus, or custom platforms to SFCC with zero downtime.",
      },
      {
        icon: <LuUserCheck />,
        title: "Ongoing Maintenance",
        description: "24/7 support, system health checks, Salesforce updates, and feature enhancements.",
      },
      {
        icon: <LuLayers />,
        title: "SEO & Personalization",
        description: "Built-in Demandware SEO tools, schema, meta tags, and AI-based personalization.",
      },
      {
        icon: <LuWrench />,
        title: "Cartridge Optimization",
        description: "Performance tuning and code audits for existing SFRA or SiteGenesis projects.",
      },
    ],
  };
  
  export const servicesData = {
    title: "Our Workflow",
    servicesData: [
      {
        id: "step1",
        title: "Business Discovery",
        description: "We understand your customers, operations, and KPIs to plan the best Demandware architecture.",
        icon: <FaCogs />,
        image: "/images/services/business-discovery.avif",
      },
      {
        id: "step2",
        title: "UX Strategy & Design",
        description: "Custom design systems and wireframes tailored to mobile and omnichannel experiences.",
        icon: <LuMonitorSmartphone />,
        image: "/images/services/design.jpg",
      },
      {
        id: "step3",
        title: "Cartridge Development",
        description: "We develop custom cartridges, controllers, jobs, and hooks for scalable functionality.",
        icon: <LuCode />,
        image: "/images/services/cartridge-development.avif",
      },
      {
        id: "step4",
        title: "System Integrations",
        description: "CRM, OMS, ESP, and analytics tools integrated through REST, SOAP, or SFCC pipelines.",
        icon: <LuSettings />,
        image: "/images/services/system-integration.avif",
      },
      {
        id: "step5",
        title: "QA & Deployment",
        description: "Automated testing, UAT, and deployment to Production via Business Manager workflows.",
        icon: <FaCloud />,
        image: "/images/services/deployment.avif",
      },
      {
        id: "step6",
        title: "Support & Growth",
        description: "Enhancements, bug fixes, performance improvements, and A/B testing support.",
        icon: <LuWrench />,
        image: "/images/services/support.jpg",
      },
    ],
  };
  
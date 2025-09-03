import {
    FaDatabase,
    FaPlug,
    FaExchangeAlt,
    FaCogs,
    FaChartLine,
    FaTools
  } from "react-icons/fa";
  import {
    LuWrench,
    LuShieldCheck,
    LuNetwork,
    LuLayers
  } from "react-icons/lu";
  
  export const heroData = {
    title: "NetSuite ERP Integration Services",
    description:
      "Maximize your investment in NetSuite with powerful, tailored integrations to eCommerce, CRM, logistics, and more. Improve efficiency, reduce manual tasks, and drive growth through smart automation.",
    imageSrc: "/images/services/netsuite.avif",
    imageAlt: "NetSuite ERP integration service",
    buttonText: "Get Free Consultation",
    buttonLink: "/contact",
  };
  
  export const introductionData = {
    title: "Why Choose Us",
    title2: "<b>NetSuite ERP</b> Integrations Tailored for Growing Businesses",
    subtitle:
      "From order management to financial sync, we build robust integrations that eliminate data silos, improve operations, and extend NetSuite’s functionality.",
    buttonText: "Talk to Our ERP Experts",
    buttonLink: "/contact",
    highlightTitle: "The CyberPeak Advantage in NetSuite ERP Integration",
    bullets: [
      "Pre-built connectors and custom workflows built specifically for NetSuite.",
      "Real-time sync with Shopify, Amazon, Salesforce, WMS, and more.",
      "Support for SuiteTalk (SOAP), RESTlets, and SuiteScript-based integration models.",
      "Secure authentication, token-based access, and detailed logging.",
      "Flexible, future-ready architecture with support for scaling and evolving needs.",
    ],
    features: [
      {
        id: 1,
        icon: <FaChartLine />,
        title: "NetSuite-Centric Expertise",
        desc: "We specialize in NetSuite ERP for retailers, SaaS providers, and product-based businesses worldwide.",
      },
      {
        id: 2,
        icon: <LuNetwork />,
        title: "Connected Business Systems",
        desc: "Seamlessly integrate NetSuite with your front-office and back-office systems.",
      },
      {
        id: 3,
        icon: <FaTools />,
        title: "Custom Integration Logic",
        desc: "We build automation flows tailored to your unique processes, not cookie-cutter solutions.",
      },
      {
        id: 4,
        icon: <LuLayers />,
        title: "Modular & Agile Integrations",
        desc: "Adapt as you grow — add endpoints, workflows, and systems without rebuilding the foundation.",
      },
    ],
  };
  
  export const featuresData = {
    title: "Highlights",
    textData: {
      title: "<b>Smart, Scalable NetSuite Integrations</b>",
      description:
        "CyberPeak delivers end-to-end NetSuite ERP integrations that automate tasks, unify data, and enhance visibility for your entire team.",
    },
    features: [
      {
        icon: <FaDatabase />,
        title: "Automated Data Exchange",
        description: "Keep NetSuite synchronized with orders, inventory, fulfillment, financials, and customer data — automatically.",
      },
      {
        icon: <FaPlug />,
        title: "NetSuite-Native Integration",
        description: "Support for REST, SOAP, SuiteTalk, and SuiteScript — built to match NetSuite’s integration standards.",
      },
      {
        icon: <LuShieldCheck />,
        title: "Reliable & Secure Framework",
        description: "Audit-ready logs, retry logic, and secure token-based authentication protect every transaction.",
      },
      {
        icon: <LuWrench />,
        title: "Field-Level Mapping & Transformation",
        description: "Customize field logic to match your chart of accounts, SKU naming, tax structures, and more.",
      },
      {
        icon: <FaExchangeAlt />,
        title: "Real-Time Multi-System Sync",
        description: "No more delays — we ensure live updates across CRMs, 3PLs, eCommerce platforms, and NetSuite.",
      },
      {
        icon: <FaCogs />,
        title: "Performance Optimization",
        description: "Tune API calls, data batches, and sync intervals for high-performance, low-latency integration.",
      },
      {
        icon: <FaTools />,
        title: "Business Process Automation",
        description: "Trigger events such as invoicing, shipping, and status changes directly from NetSuite logic.",
      },
      {
        icon: <LuNetwork />,
        title: "Full Ecosystem Integration",
        description: "Enable NetSuite to act as your system of record — seamlessly integrated with your tech stack.",
      },
    ],
  };
  
  
  export const servicesData = {
    title: "Our Workflow",
    servicesData: [
      {
        id: "step1",
        title: "Discovery & Requirements Gathering",
        description:
          "We start with a collaborative discovery session to understand your current NetSuite environment, integration goals, business rules, and key stakeholders. This ensures a strategic approach aligned with your operations and data needs.",
        icon: <FaDatabase />,
        image: "/images/services/requirement-gathering.jpg",
      },
      {
        id: "step2",
        title: "Integration Blueprint & Architecture Design",
        description:
          "Our team designs a detailed integration architecture tailored to NetSuite’s SuiteTalk APIs, RESTlets, or SuiteScripts. We define endpoints, workflows, and transformation logic for seamless connectivity with your target systems.",
        icon: <FaPlug />,
        image: "/images/services/integration-blueprint.jpg",
      },
      {
        id: "step3",
        title: "Connector & Middleware Development",
        description:
          "We develop a secure, scalable middleware layer that ensures efficient data flow. Our solutions include robust authentication, field-level mapping, and error handling tailored to NetSuite’s architecture and external system schemas.",
        icon: <LuWrench />,
        image: "/images/services/cartridge-development.avif",
      },
      {
        id: "step4",
        title: "Comprehensive Testing & Validation",
        description:
          "We simulate real-world scenarios such as order processing, inventory sync, and customer updates. Every integration undergoes unit, system, and user acceptance testing (UAT) to ensure accuracy, reliability, and traceability.",
        icon: <LuShieldCheck />,
        image: "/images/services/testing-and-validation.avif",
      },
      {
        id: "step5",
        title: "Go-Live & Monitoring Setup",
        description:
          "Once tested, we deploy the integration into production with minimal disruption. Real-time dashboards, alerting, and monitoring systems are enabled to ensure ongoing visibility into data synchronization and system health.",
        icon: <FaExchangeAlt />,
        image: "/images/services/go-live-and-monitoring-setup.jpg",
      },
      {
        id: "step6",
        title: "Post-Go-Live Support & Optimization",
        description:
          "After deployment, we provide continuous support to resolve issues, make enhancements, and adapt to evolving business processes. Our team ensures the integration remains optimized, secure, and aligned with your business growth.",
        icon: <FaCogs />,
        image: "/images/services/support.jpg",
      },
    ],
  };
  
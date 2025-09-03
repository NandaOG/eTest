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
  title: "Epicor ERP Integration Services",
  description:
    "Unlock the full potential of Epicor ERP with seamless integrations to eCommerce, CRM, and supply chain systems. Improve data accuracy, streamline operations, and future-proof your digital infrastructure.",
  imageSrc: "/images/services/epicor.jpg",
  imageAlt: "Epicor ERP integration service",
  buttonText: "Get Free Consultation",
  buttonLink: "/contact",
};

export const introductionData = {
  title: "Why Choose Us",
  title2: "<b>Epicor ERP</b> Integrations Tailored for Modern Manufacturers & Distributors",
  subtitle:
    "We deliver scalable integrations that eliminate silos, improve data flow, and empower smarter decisions — all while leveraging the full power of your Epicor system.",
  buttonText: "Talk to Our ERP Experts",
  buttonLink: "/contact",
  highlightTitle: "The CyberPeak Advantage in Epicor ERP Integration",
  bullets: [
    "Epicor-specific integration frameworks and middleware built from the ground up.",
    "Real-time sync with Shopify, Salesforce, WMS, EDI, and other platforms.",
    "Support for Epicor Kinetic, Prophet 21, and legacy versions.",
    "Built-in security, data transformation, and logging.",
    "Future-proof scalability, performance optimization, and dedicated support.",
  ],
  features: [
    {
      id: 1,
      icon: <FaChartLine />,
      title: "Deep Epicor Experience",
      desc: "We’ve integrated Epicor ERP for manufacturers, distributors, and service providers across North America.",
    },
    {
      id: 2,
      icon: <LuNetwork />,
      title: "Omnichannel Connectivity",
      desc: "Connect Epicor to your online storefront, CRM, shipping, and fulfillment platforms effortlessly.",
    },
    {
      id: 3,
      icon: <FaTools />,
      title: "Process-Driven Integration",
      desc: "We build workflows that match your business — not generic out-of-the-box templates.",
    },
    {
      id: 4,
      icon: <LuLayers />,
      title: "Modular & Scalable Architecture",
      desc: "Our integrations grow with you — support multi-location sync, new endpoints, and evolving business logic.",
    },
  ],
};

export const featuresData = {
  title: "Highlights",
  textData: {
    title: "<b>Robust & Flexible ERP Integration</b>",
    description:
      "CyberPeak delivers resilient, scalable Epicor integrations to automate workflows, improve accuracy, and enhance visibility across your digital stack.",
  },
  features: [
    {
      icon: <FaDatabase />,
      title: "Automated Data Exchange",
      description: "Enable automated bi-directional data flow across sales orders, inventory, shipments, invoices, and more.",
    },
    {
      icon: <FaPlug />,
      title: "Epicor-Aware Middleware",
      description: "Built-in connectors for Epicor Kinetic and Prophet 21 that speak your ERP's native language.",
    },
    {
      icon: <LuShieldCheck />,
      title: "Reliable Error Management",
      description: "Comprehensive logging, retry, and rollback systems ensure smooth and auditable data movement.",
    },
    {
      icon: <LuWrench />,
      title: "Custom Field-Level Mapping",
      description: "From product SKUs to GL accounts, we align Epicor fields with your external systems precisely.",
    },
    {
      icon: <FaExchangeAlt />,
      title: "Real-Time Multi-System Sync",
      description: "Keep data current across WMS, eCommerce, CRM, and accounting tools — without delays.",
    },
    {
      icon: <FaCogs />,
      title: "Adaptive Optimization",
      description: "We monitor throughput, tune bottlenecks, and adjust sync frequency for long-term performance.",
    },
    {
      icon: <FaTools />,
      title: "Process Automation",
      description: "Trigger fulfillment, invoicing, or customer updates automatically with Epicor as the source of truth.",
    },
    {
      icon: <LuNetwork />,
      title: "Unified System Connectivity",
      description: "Build a connected digital ecosystem with Epicor at the center of your data architecture.",
    },
  ],
};

export const servicesData = {
  title: "Our Workflow",
  servicesData: [
    {
      id: "step1",
      title: "Assessment & Planning",
      description:
        "We begin with an in-depth review of your Epicor setup, pain points, and external systems to align integration strategy with your operations.",
      icon: <FaDatabase />,
      image: "/images/services/assesment.jpg",
    },
    {
      id: "step2",
      title: "Integration Architecture",
      description:
        "We map endpoints, define transformation logic, and select integration tools that support Epicor’s API capabilities and your external platforms.",
      icon: <FaPlug />,
      image: "/images/services/integration.avif",
    },
    {
      id: "step3",
      title: "Middleware & Connector Development",
      description:
        "We develop a secure, traceable middleware layer that handles Epicor-specific authentication, data mapping, and transformation.",
      icon: <LuWrench />,
      image: "/images/services/development.avif",
    },
    {
      id: "step4",
      title: "End-to-End Testing",
      description:
        "We simulate business processes like order sync, customer updates, and returns. Logs, alerts, and validation ensure reliability.",
      icon: <LuShieldCheck />,
      image: "/images/services/testing.jpg",
    },
    {
      id: "step5",
      title: "Production Deployment",
      description:
        "We launch the integration with full observability — real-time dashboards, sync logs, and alerts to monitor operations.",
      icon: <FaExchangeAlt />,
      image: "/images/services/deployement.jpg",
    },
    {
      id: "step6",
      title: "Ongoing Support & Enhancements",
      description:
        "Our team provides proactive monitoring, support, and upgrades to keep your Epicor integration aligned with changing business needs.",
      icon: <FaCogs />,
      image: "/images/services/support.jpg",
    },
  ],
};

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
    title: "DDI ERP Integration Services",
    description:
      "Seamlessly integrate DDI Inform ERP with your eCommerce, CRM, and operational platforms. Optimize workflows, sync data in real-time, and elevate your distribution business with powerful, secure ERP connectivity.",
    imageSrc: "/images/services/ddi.avif",
    imageAlt: "DDI ERP integration service",
    buttonText: "Get a Free Consultation",
    buttonLink: "/contact",
  };
  
  export const introductionData = {
    title: "Why Choose Us",
    title2: "<b>DDI ERP</b> Integration Built for Modern Distribution Workflows",
    subtitle:
    "Our experts go beyond basic DDI ERP sync — we create scalable, intelligent pipelines that reduce manual work and improve operations.",
    buttonText: "Talk to Our ERP Experts",
    buttonLink: "/contact",
    highlightTitle: "The CyberPeak Advantage in DDI ERP Integration",
    bullets: [
      "Custom-tailored middleware solutions for DDI Inform ERP.",
      "Real-time bi-directional sync with eCommerce, CRM, WMS, and more.",
      "Enterprise-grade security, data validation, and transformation pipelines.",
      "Fully managed deployment, monitoring, and version upgrades.",
      "Ongoing support for future-proof scalability and performance tuning.",
    ],
    features: [
      {
        id: 1,
        icon: <FaChartLine />,
        title: "Proven ERP Expertise",
        desc: "Over a decade of ERP experience with distribution-centric platforms like DDI, NetSuite, and SAP.",
      },
      {
        id: 2,
        icon: <LuNetwork />,
        title: "Connected Ecosystems",
        desc: "We connect your ERP with Shopify, BigCommerce, HubSpot, Salesforce, and more.",
      },
      {
        id: 3,
        icon: <FaTools />,
        title: "Tailored Data Workflows",
        desc: "We match data flows to your operational process, not the other way around.",
      },
      {
        id: 4,
        icon: <LuLayers />,
        title: "Flexible Architecture",
        desc: "Scalable integrations with clean API layers, message queues, and transformation logic.",
      },
    ],
  };
  
  export const featuresData = {
    title: "Highlights",
    textData: {
      title: "<b>Powerful & Secure ERP Integration</b>",
      description:
      "Unlock automation and eliminate errors with CyberPeak’s secure, scalable DDI integration for orders, inventory, pricing, and customers.",
    },
    features: [
        {
          icon: <FaDatabase />,
          title: "Real-Time Data Sync",
          description: "Automatically sync inventory, customers, orders, and invoices between DDI and your connected systems.",
        },
        {
          icon: <FaPlug />,
          title: "Custom Middleware",
          description: "We build a secure middleware layer that transforms, maps, and governs data between endpoints.",
        },
        {
          icon: <LuShieldCheck />,
          title: "Validation & Error Handling",
          description: "Robust validation rules and logging ensure clean, accurate data with rollback and retry mechanisms.",
        },
        {
          icon: <LuWrench />,
          title: "Field-Level Mapping",
          description: "Every data point — SKUs, tax rules, shipping logic — is precisely mapped and tailored to your business rules.",
        },
        {
          icon: <FaExchangeAlt />,
          title: "Multi-System Sync",
          description: "Integrate DDI with your WMS, PIM, CRM, eCommerce, and shipping platforms — all from one dashboard.",
        },
        {
          icon: <FaCogs />,
          title: "Ongoing Optimization",
          description: "We monitor and fine-tune your integration for performance and reliability as your business grows.",
        },
        {
          icon: <FaTools />,
          title: "End-to-End Automation",
          description: "Automate repetitive tasks and connect touchpoints across platforms to speed up your operations.",
        },
        {
          icon: <LuNetwork />,
          title: "Seamless System Connectivity",
          description: "Our architecture connects DDI to all your platforms, enabling unified business operations.",
        },
      ],
      
  };
  
  export const servicesData = {
    title: "Our Workflow",
    servicesData: [
      {
        id: "step1",
        title: "Discovery & Planning",
        description:
          "We begin with an in-depth discovery session to understand your current DDI ERP setup, data architecture, and integration goals. We identify essential workflows, platforms involved, and potential pain points — forming a clear roadmap for technical success.",
        icon: <FaDatabase />,
        image: "/images/services/planning.avif",
      },
      {
        id: "step2",
        title: "API Mapping & Architecture",
        description:
          "We map the required API endpoints from DDI to your connected systems (eCommerce, CRM, WMS, etc.). We define data flow direction, structure, and transformation logic to ensure smooth, secure, and real-time sync between all platforms.",
        icon: <FaPlug />,
        image: "/images/services/system-integration.avif",
      },
      {
        id: "step3",
        title: "Middleware Development",
        description:
          "We build a robust middleware layer that connects your DDI ERP to other platforms. This layer handles authentication, format transformation, queuing, and data validation — ensuring clean, reliable sync with full traceability.",
        icon: <LuWrench />,
        image: "/images/services/development-coding.jpg",
      },
      {
        id: "step4",
        title: "Testing & Validation",
        description:
          "We conduct extensive testing using real business scenarios. From order flow to inventory adjustments, every pathway is validated. Logs, alerts, and rollback options are integrated to ensure your data remains safe and consistent.",
        icon: <LuShieldCheck />,
        image: "/images/services/testing.avif",
      },
      {
        id: "step5",
        title: "Deployment & Monitoring",
        description:
          "Your integration is deployed into a production-ready environment with full monitoring. Performance metrics, sync success rates, and errors are tracked and displayed via dashboards so your team has complete operational visibility.",
        icon: <FaExchangeAlt />,
        image: "/images/services/deployment.avif",
      },
      {
        id: "step6",
        title: "Ongoing Support & Scaling",
        description:
          "We provide continuous support, version control, and enhancement options. Whether you're adding a new storefront, updating data models, or scaling operations, our engineers keep your DDI integration aligned with your evolving needs.",
        icon: <FaCogs />,
        image: "/images/services/scaling-and-growth-loops.jpg",
      },
    ],
  };
  
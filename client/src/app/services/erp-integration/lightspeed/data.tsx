import {
    FaCashRegister,
    FaExchangeAlt,
    FaCogs,
    FaStore,
    FaPlug,
    FaChartLine,
    FaTools,
  } from "react-icons/fa";
  import {
    LuNetwork,
    LuShieldCheck,
    LuWrench,
    LuLayers,
  } from "react-icons/lu";
  
  // Hero Section
  export const heroData = {
    title: "Lightspeed POS Integration Services",
    description:
      "Streamline retail operations with seamless integrations between Lightspeed POS and your eCommerce, ERP, CRM, and logistics systems. Automate workflows, sync data, and scale faster.",
    imageSrc: "/images/services/lightspeed.avif",
    imageAlt: "Lightspeed POS integration service",
    buttonText: "Get Free Consultation",
    buttonLink: "/contact",
  };
  
  // Introduction Section
  export const introductionData = {
    title: "Why Choose Us",
    title2: "<b>Lightspeed POS</b> Integrations That Eliminate Manual Tasks",
    subtitle:
      "We help retail businesses like yours connect Lightspeed with inventory, online stores, fulfillment, and accounting tools for a unified retail experience.",
    buttonText: "Talk to Our POS Experts",
    buttonLink: "/contact",
    highlightTitle: "The CyberPeak Advantage in Lightspeed POS Integration",
    bullets: [
      "Real-time sync for inventory, pricing, and orders across all your channels.",
      "Custom connectors for Shopify, NetSuite, QuickBooks, ShipStation, and more.",
      "API-first development using Lightspeed Retail APIs (V2 & V3).",
      "Authentication, field mapping, and automated event triggers built-in.",
      "Proactive monitoring, retry logic, and logs ensure no data is lost.",
    ],
    features: [
      {
        id: 1,
        icon: <FaChartLine />,
        title: "Retail-Centric Expertise",
        desc: "We work with single and multi-location retailers using Lightspeed to sell in-store and online.",
      },
      {
        id: 2,
        icon: <LuNetwork />,
        title: "Omnichannel Workflows",
        desc: "Unify your eCommerce, POS, inventory, and fulfillment tools into one smooth operation.",
      },
      {
        id: 3,
        icon: <FaTools />,
        title: "Tailored to Your Stack",
        desc: "We build integrations specific to your business rules and systems — no one-size-fits-all approach.",
      },
      {
        id: 4,
        icon: <LuLayers />,
        title: "Modular & Scalable",
        desc: "Add more stores, channels, or features without disrupting your current integration setup.",
      },
    ],
  };
  
  // Features Section
  export const featuresData = {
    title: "Highlights",
    textData: {
      title: "<b>Connected Retail, Powered by Lightspeed Integrations</b>",
      description:
        "CyberPeak delivers full-stack Lightspeed POS integrations that automate your operations and boost your bottom line.",
    },
    features: [
      {
        icon: <FaCashRegister />,
        title: "POS-ERP Sync",
        description:
          "Sync Lightspeed data with ERPs like NetSuite, QuickBooks, and Xero — products, taxes, orders, and customers.",
      },
      {
        icon: <FaPlug />,
        title: "API-Based Development",
        description:
          "We use Lightspeed's latest Retail APIs (V2/V3) to ensure stability, future readiness, and flexibility.",
      },
      {
        icon: <LuShieldCheck />,
        title: "Secure Architecture",
        description:
          "Token-based authentication, secure data transfer, and audit logs for compliance and peace of mind.",
      },
      {
        icon: <LuWrench />,
        title: "Advanced Field Mapping",
        description:
          "Align SKUs, tax rules, locations, or fulfillment logic — fully customizable to your back-end setup.",
      },
      {
        icon: <FaExchangeAlt />,
        title: "Real-Time Inventory & Order Sync",
        description:
          "No more overselling — updates reflect instantly across POS and your connected platforms.",
      },
      {
        icon: <FaCogs />,
        title: "Custom Workflow Automation",
        description:
          "Trigger fulfillment, order routing, loyalty syncs, or email automation based on POS activity.",
      },
      {
        icon: <FaTools />,
        title: "Integrations with eCommerce & 3PLs",
        description:
          "Connect Lightspeed with platforms like Shopify, Amazon, ShipStation, and more.",
      },
      {
        icon: <FaStore />,
        title: "Multi-Location Support",
        description:
          "Manage multiple store locations, inventories, and channels with unified reporting and rules.",
      },
    ],
  };
  
  // Services/Workflow Section
  export const servicesData = {
    title: "Our Workflow",
    servicesData: [
      {
        id: "step1",
        title: "Integration Discovery",
        description:
          "We review your current Lightspeed setup, tech stack, and integration goals. Then, we identify which APIs and workflows to target for optimal sync and automation.",
        icon: <FaStore />,
        image: "/images/services/integration-discovery.jpg",
      },
      {
        id: "step2",
        title: "Architecture & Data Mapping",
        description:
          "Our architects define endpoints, custom field logic, and transformation rules across your systems to ensure consistency between Lightspeed and others like Shopify, NetSuite, or QuickBooks.",
        icon: <FaPlug />,
        image: "/images/services/data-mapping.jpg",
      },
      {
        id: "step3",
        title: "Connector Development",
        description:
          "Using RESTful APIs and middleware (if needed), we build integrations that handle real-time or scheduled sync with validation, retry logic, and logs for every transaction.",
        icon: <LuWrench />,
        image: "/images/services/frontend-development.avif",
      },
      {
        id: "step4",
        title: "Testing & QA",
        description:
          "Before go-live, we simulate order flows, inventory updates, tax sync, and CRM interactions to ensure reliable communication across systems with minimal errors.",
        icon: <LuShieldCheck />,
        image: "/images/services/qa-and-go-live.avif",
      },
      {
        id: "step5",
        title: "Go-Live & Dashboard Setup",
        description:
          "We launch the integration in your live environment with monitoring and alerting tools so you can track sync activity, issues, and performance metrics in real time.",
        icon: <FaExchangeAlt />,
        image: "/images/services/dashboard-setup.jpg",
      },
      {
        id: "step6",
        title: "Post-Launch Support",
        description:
          "We provide ongoing support to handle business rule changes, API upgrades, or scaling needs. Our team keeps your Lightspeed integrations running smoothly.",
        icon: <FaCogs />,
        image: "/images/services/support.jpg",
      },
    ],
  };
  
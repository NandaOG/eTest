// digitalMarketingServiceData.js
import {
    FaChartLine,
    FaPlug,
    FaCogs,
    FaDatabase,
    FaBullhorn,
    FaUsers,
    FaChartPie
  } from "react-icons/fa";
  import {
    LuNetwork,
    LuShieldCheck,
    LuWrench,
  } from "react-icons/lu";
  
  export const heroData = {
    title: "Digital Marketing Services",
    description:
      "Fuel your brand’s growth with data-driven digital marketing strategies — from SEO and paid ads to social media, content, and analytics. Let’s turn your online presence into measurable ROI.",
    imageSrc: "/images/services/digital-marketing.jpg",
    imageAlt: "Digital marketing services by CyberPeak",
    buttonText: "Request Free Audit",
    buttonLink: "/contact",
  };
  
  export const introductionData = {
    title: "Why Choose Us",
    title2: "<b>Performance Marketing</b> Backed by Data & Creativity",
    subtitle:
      "We don’t just run ads — we build scalable digital marketing ecosystems designed to grow traffic, leads, and revenue. From SEO to PPC to content and analytics, every move we make is data-backed and conversion-focused.",
    buttonText: "Talk to Our Experts",
    buttonLink: "/contact",
    highlightTitle: "Why Brands Trust CyberPeak",
    bullets: [
      "Full-funnel digital marketing solutions — organic, paid, social, and email.",
      "Cross-platform campaigns with consistent messaging and ROI tracking.",
      "Google, Meta, and HubSpot-certified professionals.",
      "Transparent reporting and agile marketing methodology.",
      "Scalable for startups, mid-sized businesses, and enterprise clients.",
    ],
    features: [
      {
        id: 1,
        icon: <FaChartLine />,
        title: "SEO & Content Strategy",
        desc: "Rank higher on search engines with keyword-targeted, conversion-focused SEO and content plans.",
      },
      {
        id: 2,
        icon: <FaPlug />,
        title: "PPC & Paid Ads",
        desc: "Launch high-ROI ad campaigns across Google, Meta, LinkedIn, and more with precise targeting.",
      },
      {
        id: 3,
        icon: <FaUsers />,
        title: "Social Media Marketing",
        desc: "Build and engage communities across Facebook, Instagram, LinkedIn, and TikTok with strategic content.",
      },
      {
        id: 4,
        icon: <FaBullhorn />,
        title: "Lead Generation Campaigns",
        desc: "From landing pages to email drip flows — we help you turn clicks into qualified leads.",
      },
    ],
  };
  
  export const featuresData = {
    title: "Growth Capabilities",
    textData: {
      title: "<b>Multi-Channel Digital Marketing</b> Powered by Insights",
      description:
        "We blend creativity with data science to run full-funnel digital marketing campaigns across organic and paid channels — designed to acquire, convert, and retain your customers.",
    },
    features: [
      {
        icon: <FaChartLine />,
        title: "SEO Optimization",
        description: "On-page, technical, and local SEO strategies to help you rank and get discovered by high-intent users.",
      },
      {
        icon: <FaPlug />,
        title: "Paid Media Management",
        description: "We manage PPC campaigns across Google, Meta, YouTube, and LinkedIn to maximize ROAS.",
      },
      {
        icon: <FaChartPie />,
        title: "Analytics & CRO",
        description: "We monitor user journeys and run A/B tests to boost conversion rates across your funnel.",
      },
      {
        icon: <LuWrench />,
        title: "Content Creation",
        description: "Blogs, ad copy, landing pages, email campaigns — content that sells and scales.",
      },
      {
        icon: <FaUsers />,
        title: "Social Media Management",
        description: "Calendar planning, community management, paid boosting, and performance analytics.",
      },
      {
        icon: <FaCogs />,
        title: "Marketing Automation",
        description: "Email nurture flows, CRM automation, retargeting — personalized marketing at scale.",
      },
      {
        icon: <FaDatabase />,
        title: "Lead Generation",
        description: "Build prospect pipelines with high-performing lead magnets, landing pages, and forms.",
      },
      {
        icon: <LuShieldCheck />,
        title: "Performance Reporting",
        description: "Track KPIs, campaigns, conversions, and ROI with clear dashboards and monthly insights.",
      },
    ],
  };
  
  export const servicesData = {
    title: "Our Marketing Process",
    servicesData: [
      {
        id: "step1",
        title: "Discovery & Audit",
        description:
          "We start by learning your business goals, auditing your current digital presence, and identifying gaps in traffic, messaging, and conversion pathways.",
        icon: <FaDatabase />,
        image: "/images/services/initial-audit-and-strategy-session.avif",
      },
      {
        id: "step2",
        title: "Strategy & Channel Planning",
        description:
          "Based on your audience and funnel goals, we create a multi-channel marketing strategy — combining SEO, paid media, content, and social.",
        icon: <FaChartLine />,
        image: "/images/services/strategy-and-planning.avif",
      },
      {
        id: "step3",
        title: "Campaign Setup & Launch",
        description:
          "We build ad creatives, write content, set up targeting, and launch campaigns with detailed tracking and conversion goals.",
        icon: <FaPlug />,
        image: "/images/services/campaign-setup-and-launch.avif",
      },
      {
        id: "step4",
        title: "Optimization & A/B Testing",
        description:
          "Our team constantly monitors performance metrics — adjusting bids, creatives, landing pages, and funnels to improve efficiency and ROI.",
        icon: <LuWrench />,
        image: "/images/services/optimization.avif",
      },
      {
        id: "step5",
        title: "Conversion Tracking & Reporting",
        description:
          "You’ll get clear monthly reports outlining traffic sources, lead conversions, ad spend, ROI, and key growth insights for decision-making.",
        icon: <LuShieldCheck />,
        image: "/images/services/report-delivery.jpg",
      },
      {
        id: "step6",
        title: "Scaling & Growth Loops",
        description:
          "Once your campaigns are profitable, we help scale spend, expand channels, and build growth loops that sustain long-term revenue impact.",
        icon: <LuNetwork />,
        image: "/images/services/scaling-and-growth-loops.jpg",
      },
    ],
  };
  
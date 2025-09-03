// seoServiceData.js
import {
    FaChartLine,
    FaCogs,
    FaPlug,
    FaTools,
    FaDatabase,
  } from "react-icons/fa";
  import {
    LuShieldCheck,
    LuNetwork,
    LuWrench,
  } from "react-icons/lu";
  
  export const heroData = {
    title: "SEO Services",
    description:
      "Drive targeted traffic, improve search rankings, and grow your business with CyberPeak’s data-driven SEO strategies. From technical audits to content optimization, we help you dominate search results.",
    imageSrc: "/images/services/seo.jpg",
    imageAlt: "SEO services by CyberPeak",
    buttonText: "Get Free SEO Audit",
    buttonLink: "/contact",
  };
  
  export const introductionData = {
    title: "Why Choose Us",
    title2: "<b>SEO Services</b> Backed by Strategy & Performance",
    subtitle:
      "We go beyond keywords — our SEO services focus on building long-term organic growth through content, authority, and technical excellence.",
    buttonText: "Request a Custom Strategy",
    buttonLink: "/contact",
    highlightTitle: "The CyberPeak Edge in SEO",
    bullets: [
      "Proven SEO frameworks tailored to your industry and goals.",
      "Comprehensive audits, on-page optimization, and link-building.",
      "White-hat SEO techniques that align with Google’s guidelines.",
      "Real-time analytics, keyword tracking, and monthly reports.",
      "Full-stack technical SEO support for speed, structure, and indexing."
    ],
    features: [
      {
        id: 1,
        icon: <FaChartLine />,
        title: "Keyword Strategy That Converts",
        desc: "We research and target keywords that align with your buyer’s journey and deliver real business results.",
      },
      {
        id: 2,
        icon: <FaCogs />,
        title: "Technical SEO Excellence",
        desc: "From crawlability to Core Web Vitals, we optimize the backend of your site to enhance performance and indexability.",
      },
      {
        id: 3,
        icon: <FaTools />,
        title: "Content Optimization",
        desc: "We optimize your website and blog content to match user intent and outperform competitors on SERPs.",
      },
      {
        id: 4,
        icon: <LuShieldCheck />,
        title: "Ethical Link Building",
        desc: "We build high-quality, white-hat backlinks from relevant, authoritative sources to improve domain trust.",
      },
    ],
  };
  
  export const featuresData = {
    title: "Highlights",
    textData: {
      title: "<b>Data-Driven SEO Campaigns</b> That Deliver Results",
      description:
        "From startups to enterprises, we’ve helped brands grow organically with custom-tailored SEO strategies rooted in data, quality, and consistency.",
    },
    features: [
      {
        icon: <FaChartLine />,
        title: "In-Depth SEO Audits",
        description: "We uncover hidden issues with your website’s structure, performance, and search visibility.",
      },
      {
        icon: <LuNetwork />,
        title: "Complete On-Page SEO",
        description: "Title tags, headers, schema markup, content hierarchy — we ensure your site is optimized front to back.",
      },
      {
        icon: <FaPlug />,
        title: "Off-Page SEO & Authority Building",
        description: "We acquire high-quality backlinks and manage citations that drive referral traffic and improve rankings.",
      },
      {
        icon: <LuWrench />,
        title: "Ongoing SEO Maintenance",
        description: "Monthly optimization, algorithm monitoring, and strategy adaptation to keep your site competitive.",
      },
      {
        icon: <FaDatabase />,
        title: "Local SEO Optimization",
        description: "We optimize your presence for 'near me' searches and local packs — Google My Business, maps, and more.",
      },
      {
        icon: <FaCogs />,
        title: "E-commerce SEO",
        description: "Product schema, faceted navigation fixes, and category optimizations that drive organic sales.",
      },
      {
        icon: <FaTools />,
        title: "SEO for CMS Platforms",
        description: "Whether you're on WordPress, Shopify, or Webflow — we tailor our SEO to your tech stack.",
      },
      {
        icon: <LuShieldCheck />,
        title: "Transparent Reporting",
        description: "Track progress with monthly reports, keyword rankings, backlinks, traffic data, and more.",
      },
    ],
  };
  
  export const servicesData = {
    title: "Our SEO Workflow",
    servicesData: [
      {
        id: "step1",
        title: "Initial Audit & Strategy Session",
        description:
          "We start by conducting a comprehensive SEO audit of your website, analyzing technical health, content structure, and backlinks. This is followed by a personalized strategy session where we align your SEO goals with actionable steps for sustainable growth.",
        icon: <FaDatabase />,
        image: "/images/services/initial-audit-and-strategy-session.avif",
      },
      {
        id: "step2",
        title: "Keyword & Competitor Research",
        description:
          "Using advanced tools and manual research, we identify profitable keywords tailored to your niche. We also analyze competitor strategies to uncover keyword gaps and content opportunities that give you a competitive advantage.",
        icon: <FaChartLine />,
        image: "/images/services/keywords-research.avif",
      },
      {
        id: "step3",
        title: "On-Page Optimization",
        description:
          "We optimize every element of your website — from metadata and headers to internal linking and content hierarchy — ensuring your pages are both user- and search-engine-friendly, driving better engagement and improved SERP visibility.",
        icon: <FaTools />,
        image: "/images/services/optimization.avif",
      },
      {
        id: "step4",
        title: "Technical SEO Fixes",
        description:
          "We resolve backend issues that hinder your rankings — improving site speed, fixing crawl errors, implementing structured data (schema), and enhancing mobile usability to ensure a seamless experience for both bots and users.",
        icon: <FaCogs />,
        image: "/images/services/system-integration.avif",
      },
      {
        id: "step5",
        title: "Link Building & Outreach",
        description:
          "We execute ethical, white-hat link-building campaigns by connecting with niche-relevant websites, bloggers, and publications. Our focus is on acquiring high-quality backlinks that increase domain authority and build lasting SEO equity.",
        icon: <LuNetwork />,
        image: "/images/services/link-building-and-outreach.avif",
      },
      {
        id: "step6",
        title: "Performance Tracking & Reporting",
        description:
          "Each month, you receive detailed reports outlining traffic growth, keyword movement, backlink acquisition, and conversion trends. We continuously refine our strategy based on data to ensure consistent, long-term SEO performance.",
        icon: <LuShieldCheck />,
        image: "/images/services/business-discovery.avif",
      },
    ],
  };
  
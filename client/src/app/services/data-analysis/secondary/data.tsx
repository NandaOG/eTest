
import { LuFileSearch, LuGlobe, LuLibraryBig, LuBrain, LuLayers } from "react-icons/lu";

import {
  FaChartPie, FaLightbulb, FaCogs, FaBullhorn, FaCheckCircle, FaFolderOpen, FaChartBar
} from "react-icons/fa";

export const heroData = {
    title: "Secondary Market Research Services",
    description:
      "Leverage existing data sources for smarter business decisions. Our Secondary Market Research services provide reliable insights to drive growth and innovation.",
    imageSrc: "/images/services/secondary-market-research.jpg",
    imageAlt: "secondary market research",
    buttonText: "Get a Research Plan",
    buttonLink: "/contact",
  };

export  const introductionData = {
    title: "Why Choose Us",
    title2: "<b>Why Cyberpeak</b> for Secondary Research?",
    subtitle:
      "We go beyond simple data collection — we synthesize information from diverse sources into strategic insight. Our team curates credible, up-to-date knowledge so you can make better business decisions without starting from scratch.",
    buttonText: "Talk to Our Experts",
    buttonLink: "/contact",
    highlightTitle: "The CyberPeak Difference in Secondary Market Research.",
    bullets: [
      "Access to a broad spectrum of credible databases and industry reports.",
      "Curated insights synthesized from multiple validated sources.",
      "Cost-effective, fast turnaround solutions for time-sensitive decisions.",
      "Expert interpretation and contextualization of third-party data.",
      "Compliance with licensing and ethical data usage policies.",
    ],
    features: [
      {
        id: 1,
        icon: <LuFileSearch />,
        title: "Extensive Data Access",
        desc: "We access government, industry, academic, and commercial databases.",
      },
      {
        id: 2,
        icon: <LuLibraryBig />,
        title: "Literature Reviews & Market Reports",
        desc: "Summarizing key findings from existing market research.",
      },
      {
        id: 3,
        icon: <LuLayers />,
        title: "Competitive Intelligence",
        desc: "Monitor industry leaders and emerging trends with precision.",
      },
      {
        id: 4,
        icon: <LuBrain />,
        title: "Smart Synthesis",
        desc: "We transform fragmented data into unified, strategic insights.",
      },
    ],
  };

export  const featuresData = {
    title: "Overview",
    textData: {
      title: "<b>Discover Insights Without Starting From Scratch</b>",
      description:
        "Our secondary market research draws from a wealth of existing data to give you competitive edge, fast insights, and strategic clarity — without the cost and time of primary data collection.",
    },
    features: [
      {
        icon: <LuGlobe />,
        title: "Public & Industry Data Mining",
        description: "Tap into online repositories, government stats, and market reports.",
      },
      {
        icon: <FaFolderOpen />,
        title: "Internal Data Audits",
        description: "Analyze your organization’s existing data for untapped insights.",
      },
      {
        icon: <FaChartBar />,
        title: "Competitive Landscape Mapping",
        description: "We map your competitors’ positioning, messaging, and activity.",
      },
      {
        icon: <FaChartPie />,
        title: "Trend Analysis & Forecasting",
        description: "We extract patterns from past and current data to project future trends.",
      },
      {
        icon: <LuLibraryBig />,
        title: "Academic & White Paper Research",
        description: "Get peer-reviewed knowledge from top publications and institutions.",
      },
      {
        icon: <FaCogs />,
        title: "Data Aggregation & Structuring",
        description: "Organize fragmented datasets into usable frameworks for decision-making.",
      },
      {
        icon: <FaCheckCircle />,
        title: "Data Validation & Source Credibility",
        description: "We verify all information sources for reliability and relevance.",
      },
      {
        icon: <FaLightbulb />,
        title: "Strategic Insights Delivery",
        description: "Get visually engaging reports with actionable takeaways.",
      },
    ],
  };

export  const servicesData = {
    title: "Our Process",
    servicesData: [
      {
        id: "step1",
        title: "Understanding Your Objectives",
        description: "We begin by aligning with your business needs to determine what insights are required and from where.",
        icon: <FaChartPie />,
        image: "/images/services/understanding-your-objectives.jpg",
      },
      {
        id: "step2",
        title: "Identifying Reliable Sources",
        description: "We map out industry databases, academic publications, analyst reports, and government data sources.",
        icon: <LuFileSearch />,
        image: "/images/services/identifying-reliable-sources.jpg",
      },
      {
        id: "step3",
        title: "Collecting & Aggregating Data",
        description: "We gather and clean data from various sources, ensuring accuracy and consistency.",
        icon: <FaFolderOpen />,
        image: "/images/services/collecting-and-aggregating-data.jpg",
      },
      {
        id: "step4",
        title: "Analyzing Patterns & Trends",
        description: "Using analytical tools, we discover patterns that inform strategy and highlight opportunities.",
        icon: <FaCogs />,
        image: "/images/services/analyzing-pattern-and-trends.jpg",
      },
      {
        id: "step5",
        title: "Building Insightful Reports",
        description: "We deliver digestible, visually engaging insights to support executive decisions.",
        icon: <FaLightbulb />,
        image: "/images/services/data-cleaning1.avif",
      },
      {
        id: "step6",
        title: "Implementation & Monitoring",
        description: "We assist in applying findings and monitor ongoing trends to keep you informed.",
        icon: <FaBullhorn />,
        image: "/images/services/implementation-and-monitoring.jpg",
      },
    ],
  };
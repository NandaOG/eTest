import { LuFileSearch, LuClipboardList, LuLayers } from "react-icons/lu";
import {
  FaChartBar, FaLightbulb, FaCogs, FaBullhorn, FaCheckCircle, FaFolderOpen, FaChartPie, FaTachometerAlt , FaChartLine 
} from "react-icons/fa";

 
export const heroData = {
    title: "Quantitative Market Research Services",
    description:
      "Drive decisions with numbers that matter. Our Quantitative Market Research services deliver statistical clarity and data-backed insights for strategic advantage.",
    imageSrc: "/images/services/quantitative-market-research.avif",
    imageAlt: "quantitative market research",
    buttonText: "Get a Research Plan",
    buttonLink: "/contact",
  };

 export const introductionData = {
    title: "Why Choose Us",
    title2: "<b>Why Cyberpeak</b> for Quantitative Research?",
    subtitle:
      "Our team transforms raw data into actionable strategy. We use scientific sampling, robust analytics, and custom dashboards to help businesses gain a clear, numeric picture of their markets.",
    buttonText: "Talk to Our Experts",
    buttonLink: "/contact",
    highlightTitle: "The CyberPeak Difference in Quantitative Market Research.",
    bullets: [
      "Precision-driven research methodologies tailored to business goals.",
      "Access to diverse panels and global survey respondents.",
      "Real-time dashboards and clean data visualizations.",
      "Advanced statistical techniques and tools.",
      "Action-oriented reports that drive business success.",
    ],
    features: [
      {
        id: 1,
        icon: <LuClipboardList />,
        title: "Custom Surveys",
        desc: "We design and execute online, mobile, and CATI surveys tailored to your audience.",
      },
      {
        id: 2,
        icon: <FaTachometerAlt />,
        title: "Performance Metrics",
        desc: "Get KPIs and tracking benchmarks on brand health, customer satisfaction, and more.",
      },
      {
        id: 3,
        icon: <FaChartLine />,
        title: "Statistical Modeling",
        desc: "Advanced analytics including regression, segmentation, and forecasting.",
      },
      {
        id: 4,
        icon: <LuLayers />,
        title: "Segmentation Analysis",
        desc: "Understand customer groups based on behavior, demographics, and psychographics.",
      },
    ],
  };

 export const featuresData = {
    title: "Overview",
    textData: {
      title: "<b>Data-Driven Confidence in Every Decision</b>",
      description:
        "Our quantitative market research approach is built on rigorous methods, large-scale surveys, and in-depth data analysis — providing you with measurable insights you can rely on.",
    },
    features: [
      {
        icon: <FaChartBar />,
        title: "Survey Design & Programming",
        description: "Customized questionnaires designed for clarity, neutrality, and maximum response quality.",
      },
      {
        icon: <FaFolderOpen />,
        title: "Large Sample Collection",
        description: "Reach thousands of respondents across geographies and demographics.",
      },
      {
        icon: <FaChartPie />,
        title: "Data Cleaning & Validation",
        description: "We eliminate noise and ensure the integrity of every dataset.",
      },
      {
        icon: <FaLightbulb />,
        title: "Descriptive & Inferential Analysis",
        description: "Our analytics provide both summary statistics and deep correlations.",
      },
      {
        icon: <LuFileSearch />,
        title: "Market Sizing & Opportunity Forecasting",
        description: "We project market demand and size with confidence intervals.",
      },
      {
        icon: <FaCogs />,
        title: "Dashboards & Data Visualization",
        description: "Make sense of complex data with intuitive dashboards and charts.",
      },
      {
        icon: <FaCheckCircle />,
        title: "Accuracy & Repeatability",
        description: "Scientific methods ensure consistent and valid findings.",
      },
      {
        icon: <FaBullhorn />,
        title: "Executive Summary & Reporting",
        description: "Get actionable insights presented in business-friendly formats.",
      },
    ],
  };

export  const servicesData = {
    title: "Our Approach",
    servicesData: [
      {
        id: "step1",
        title: "Define Research Goals",
        description: "We collaborate to define your business questions, audiences, and key performance indicators.",
        icon: <FaChartBar />,
        image: "/images/services/defining-research-goals.jpg",
      },
      {
        id: "step2",
        title: "Build Survey & Sampling Plan",
        description: "Our researchers craft questions and sampling strategies to ensure statistical reliability.",
        icon: <LuClipboardList />,
        image: "/images/services/survey-and-sampling-plan.jpg",
      },
      {
        id: "step3",
        title: "Collect High-Quality Data",
        description: "We launch data collection via web, mobile, panels, or direct interviews, depending on your target audience.",
        icon: <FaFolderOpen />,
        image: "/images/services/data-collection.jpg",
      },
      {
        id: "step4",
        title: "Analyze & Model Data",
        description: "Using tools like SPSS, Python, or Excel, we uncover trends, correlations, and predictive insights.",
        icon: <FaCogs />,
        image: "/images/services/analyze-and-model-data.avif",
      },
      {
        id: "step5",
        title: "Deliver Actionable Results",
        description: "We present the data in digestible formats — charts, dashboards, and executive briefs — to inform decisions.",
        icon: <FaLightbulb />,
        image: "/images/services/report-delivery.jpg",
      },
    ],
  };
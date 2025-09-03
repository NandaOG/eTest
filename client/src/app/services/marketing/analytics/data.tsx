// analyticsServiceData.js
import {
    FaChartPie,
    FaChartBar,
    FaBullseye,
    FaUserFriends,
    FaEye,
    FaDatabase,
  } from "react-icons/fa";
  import {
    LuTrendingUp,
    LuClipboardCheck,
  } from "react-icons/lu";
  
  export const heroData = {
    title: "Analytics & Insights Services",
    description:
      "Transform raw data into actionable insights with CyberPeak’s analytics solutions. Make smarter decisions, optimize performance, and drive growth through data-led strategies.",
    imageSrc: "/images/services/analytics-and-insights.jpg",
    imageAlt: "Analytics services by CyberPeak",
    buttonText: "Request a Demo",
    buttonLink: "/contact",
  };
  
  export const introductionData = {
    title: "Why Choose Us",
    title2: "<b>Analytics & Insights</b> That Drive Results",
    subtitle:
      "We bridge the gap between data and decision-making with advanced analytics, real-time dashboards, and performance insights that power your business forward.",
    buttonText: "Talk to an Analytics Expert",
    buttonLink: "/contact",
    highlightTitle: "The CyberPeak Edge in Analytics",
    bullets: [
      "Custom dashboards tailored to your KPIs and business objectives.",
      "Integration with Google Analytics, GA4, Tag Manager, Looker Studio & more.",
      "Data cleansing, transformation, and visualization for better clarity.",
      "Cross-channel tracking — from website to social to email funnels.",
      "Real-time insights and alerts for data-driven decision-making."
    ],
    features: [
      {
        id: 1,
        icon: <FaChartPie />,
        title: "Advanced Data Dashboards",
        desc: "Get customized dashboards that visualize your key performance metrics in real time, helping you spot trends and anomalies instantly.",
      },
      {
        id: 2,
        icon: <LuTrendingUp />,
        title: "Conversion & Funnel Analysis",
        desc: "Track how users move through your site or app and identify where they drop off — then optimize the journey to boost conversions.",
      },
      {
        id: 3,
        icon: <FaEye />,
        title: "Cross-Channel Attribution",
        desc: "Know which channels drive results by accurately attributing conversions across platforms — SEO, PPC, email, and social.",
      },
      {
        id: 4,
        icon: <LuClipboardCheck />,
        title: "Custom Reporting & Alerts",
        desc: "Get scheduled reports and instant alerts for performance changes, anomalies, or milestones — all tailored to your needs.",
      },
    ],
  };
  
  export const featuresData = {
    title: "Highlights",
    textData: {
      title: "<b>Smarter Decisions</b> With Powerful Data Insights",
      description:
        "We help you make sense of your data with analytics services that reveal opportunities, enhance strategy, and measure success effectively.",
    },
    features: [
      {
        icon: <FaChartBar />,
        title: "GA4 Implementation & Setup",
        description: "We configure Google Analytics 4 to track your users, events, conversions, and custom dimensions effectively.",
      },
      {
        icon: <FaBullseye />,
        title: "Behavioral Insights",
        description: "Understand user behavior with heatmaps, session recordings, and behavior flow analysis.",
      },
      {
        icon: <FaChartBar />,
        title: "Marketing Performance Tracking",
        description: "Measure ROI across campaigns, ads, and landing pages to ensure your marketing investments pay off.",
      },
      {
        icon: <FaUserFriends />,
        title: "Audience Segmentation",
        description: "Segment visitors by demographics, intent, or activity to deliver personalized experiences and better targeting.",
      },
      {
        icon: <FaDatabase />,
        title: "Data Integration & Warehousing",
        description: "Combine data from multiple sources (CRM, web, social, ads) into one unified platform for powerful analysis.",
      },
      {
        icon: <FaChartPie />,
        title: "Predictive Analytics",
        description: "Use machine learning and forecasting to predict future behavior, trends, and growth opportunities.",
      },
      {
        icon: <LuTrendingUp />,
        title: "KPI Monitoring",
        description: "Track critical business KPIs in real time to ensure you're always on top of your performance goals.",
      },
      {
        icon: <LuClipboardCheck />,
        title: "Looker Studio & BI Dashboards",
        description: "We build BI dashboards using tools like Looker Studio and Power BI — giving you data clarity at a glance.",
      },
    ],
  };
  
  export const servicesData = {
    title: "Our Workflow",
    servicesData: [
      {
        id: "step1",
        title: "Discovery & Goal Setting",
        description:
          "We begin with a discovery session to understand your business goals, KPIs, and current data infrastructure. This ensures our analytics efforts align with your success metrics.",
        icon: <FaUserFriends />,
        image: "/images/services/understanding-your-objectives.jpg",
      },
      {
        id: "step2",
        title: "Data Audit & Integration",
        description:
          "We audit your existing analytics setup, ensure proper tracking, and connect data sources like CRM, ads, email, and social to create a unified analytics environment.",
        icon: <FaDatabase />,
        image: "/images/services/data-transcription.avif",
      },
      {
        id: "step3",
        title: "Tracking Setup & Tag Management",
        description:
          "We configure GA4, GTM, events, conversions, and custom metrics — giving you full visibility into user behavior and campaign performance.",
        icon: <FaChartBar />,
        image: "/images/services/tracking-setup-and-management.avif",
      },
      {
        id: "step4",
        title: "Custom Dashboard Development",
        description:
          "Our team creates real-time dashboards tailored to your reporting needs — whether via Looker Studio, Power BI, or custom-built portals.",
        icon: <FaChartBar />,
        image: "/images/services/cutsom-dashboard-development.avif",
      },
      {
        id: "step5",
        title: "Insights & Optimization",
        description:
          "We analyze user behavior, drop-offs, conversions, and trends to uncover opportunities for performance optimization and UX improvements.",
        icon: <FaBullseye />,
        image: "/images/services/collecting-and-aggregating-data.jpg",
      },
      {
        id: "step6",
        title: "Ongoing Reporting & Support",
        description:
          "We provide detailed monthly reports, KPI snapshots, and expert consultations to keep your data strategy evolving with your business.",
        icon: <LuClipboardCheck />,
        image: "/images/services/support.jpg",
      },
    ],
  };
  
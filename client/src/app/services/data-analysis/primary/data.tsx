import {
    LuSearch, LuUsers, LuClipboardList, LuEye, LuBrain
  } from "react-icons/lu";
  import {
    FaChartLine, FaLightbulb, FaDatabase, FaUserCheck, FaCogs, FaBullhorn, FaRocket
  } from "react-icons/fa";
  
  export const heroData = {
    title: "Primary Market Research Services",
    description:
      "Our Primary Market Research services help you gather actionable insights directly from your target audience, empowering data-driven business strategies.",
    imageSrc: "/images/services/primary-market-research.jpg",
    imageAlt: "primary market research",
    buttonText: "Get a Research Plan",
    buttonLink: "/contact",
  };
  
  export const introductionData = {
    title: "Why Choose Us",
    title2: "<b>Why Cyberpeak</b> is your go-to research partner?",
    subtitle:
      "We provide data-driven clarity to fuel confident decision-making. With our tailored research methods and deep industry expertise, you get more than just data — you get direction.",
    buttonText: "Talk to Our Experts",
    buttonLink: "/contact",
    highlightTitle: "The CyberPeak Difference in Primary Market Research.",
    bullets: [
      "Customized research frameworks designed for your business goals.",
      "Direct access to authentic customer opinions and behavioral insights.",
      "Multichannel data collection ensures broad and inclusive outreach.",
      "Actionable insights that align with your marketing and product strategy.",
      "Data privacy and ethical research practices at every step.",
    ],
    features: [
      {
        id: 1,
        icon: <FaRocket />,
        title: "Rapid Execution",
        desc: "From discovery to insight, we deliver results quickly without cutting corners.",
      },
      {
        id: 2,
        icon: <FaCogs />,
        title: "Tailored Methodologies",
        desc: "We craft your research journey based on industry, audience, and objective.",
      },
      {
        id: 3,
        icon: <FaChartLine />,
        title: "Results that Scale",
        desc: "Insights you can use today — and scale into strategy tomorrow.",
      },
      {
        id: 4,
        icon: <FaLightbulb />,
        title: "Intelligent Insights",
        desc: "We don’t just collect data — we decode it for real-world action.",
      },
    ],
  };
  
  export const featuresData = {
    title: "Overview",
    textData: {
      title: "<b>Insights Direct From the Source</b>",
      description:
        "Understand consumer behavior, test product-market fit, and make informed decisions with first-hand data from surveys, interviews, and real-world testing.",
    },
    features: [
      {
        icon: <LuSearch />,
        title: "Custom Research Design",
        description: "We tailor research frameworks to your specific industry, goals, and audiences.",
      },
      {
        icon: <LuUsers />,
        title: "Target Audience Identification",
        description: "Pinpoint the right sample groups for accurate and relevant insights.",
      },
      {
        icon: <LuClipboardList />,
        title: "Surveys & Questionnaires",
        description: "Design and deploy digital or in-person surveys to collect structured data efficiently.",
      },
      {
        icon: <LuEye />,
        title: "Focus Groups & Interviews",
        description: "Gain deeper insights through moderated discussions with real users or stakeholders.",
      },
      {
        icon: <FaChartLine />,
        title: "Data Analysis & Reporting",
        description: "Transform collected data into actionable insights using advanced analytics tools.",
      },
      {
        icon: <FaDatabase />,
        title: "Multichannel Research Delivery",
        description: "Leverage online, phone, field, or hybrid data collection strategies.",
      },
      {
        icon: <LuBrain />,
        title: "Behavioral Insight Extraction",
        description: "Go beyond surface-level answers to uncover motivations, fears, and intent.",
      },
      {
        icon: <FaLightbulb />,
        title: "Visualized Findings",
        description: "We deliver digestible, visual reports that drive strategic decisions.",
      },
    ],
  };
  
  export const servicesData = {
    title: "Our Process",
    servicesData: [
      {
        id: "step1",
        title: "Needs Assessment & Research Design",
        description: "We start by understanding your research goals, business challenges, and target demographics to design a custom approach aligned with your strategic needs.",
        icon: <FaChartLine />,
        image: "/images/services/assesment.jpg",
      },
      {
        id: "step2",
        title: "Sample Targeting & Recruitment",
        description: "We define your ideal audience segment and recruit qualified participants that reflect your actual market conditions and customer base.",
        icon: <FaUserCheck />,
        image: "/images/services/sample-target.avif",
      },
      {
        id: "step3",
        title: "Data Collection (Surveys & Interviews)",
        description: "Using digital surveys, phone calls, and in-depth interviews, we collect raw data directly from respondents while maintaining accuracy and anonymity.",
        icon: <FaDatabase />,
        image: "/images/services/data-collection.jpg",
      },
      {
        id: "step4",
        title: "Data Cleaning & Analysis",
        description: "We clean, sort, and analyze data using statistical and AI-driven techniques to extract patterns, correlations, and key trends.",
        icon: <FaCogs />,
        image: "/images/services/data-cleaning1.avif",
      },
      {
        id: "step5",
        title: "Insights Presentation",
        description: "Our analysts convert findings into insightful reports with visual dashboards, clear metrics, and strategic recommendations.",
        icon: <FaLightbulb />,
        image: "/images/services/insight-presentation.jpg",
      },
      {
        id: "step6",
        title: "Strategic Implementation Support",
        description: "We help align insights with your product, marketing, or expansion strategies and can assist in testing new hypotheses over time.",
        icon: <FaBullhorn />,
        image: "/images/services/strategic-support.avif",
      },
    ],
  };
  
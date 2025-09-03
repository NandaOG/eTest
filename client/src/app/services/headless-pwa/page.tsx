import Grandchild from "@/components/layout/services/GrandChild";
import {
  LuZap, LuSplit, LuSmartphone, LuPlug, LuShieldCheck, LuSearch, LuLayoutGrid, LuGlobe
} from "react-icons/lu";
import {
  FaChartLine, FaBoxOpen, FaMobile, FaShoppingCart, FaExchangeAlt, FaBullhorn,
  FaRocket, FaCogs, FaLightbulb
} from "react-icons/fa";

export const metadata = {
  title: "Headless PWA Development Services | Cyberpeak IT Solutions",
  description: "Our Headless PWA development services let organisations segregate their app’s front and back ends for unmatched content and presentation control.",
};

export default function HeadlessCommerceServices() {
  const heroData = {
    title: "Headless PWA Development Services",
    description: "Our Headless PWA development services let organisations segregate their app’s front and back ends for unmatched content and presentation control.",
    imageSrc: "/images/headless.jpg",
    imageAlt: "mobile app development",
    buttonText: "Let's Connect",
    buttonLink: "/contact",
  };

  const featuresData = {
    title: "Overview",
    textData: {
      title: "<b>Scalable, Decoupled, and Lightning Fast</b>",
      description:
        "Discover how Headless PWA unlocks flexibility, speed, and seamless cross-platform experiences—all while keeping your architecture future-proof.",
    },
    features: [
      {
        icon: <LuZap />,
        title: "Lightning-Fast Performance",
        description: "Achieve near-instant load times with optimized PWA architecture and advanced caching strategies.",
      },
      {
        icon: <LuSplit />,
        title: "Headless Architecture Flexibility",
        description: "Separate frontend and backend for easier scaling, maintenance, and platform freedom.",
      },
      {
        icon: <LuSmartphone />,
        title: "Mobile-App Like Experience",
        description: "Provide a native-like user experience across all devices using responsive and offline-ready design.",
      },
      {
        icon: <LuPlug />,
        title: "Seamless API Integration",
        description: "Connect effortlessly with any CMS, CRM, or third-party service via REST or GraphQL APIs.",
      },
      {
        icon: <LuShieldCheck />,
        title: "Enhanced Security",
        description: "Keep your application secure with HTTPS, service worker validation, and data protection layers.",
      },
      {
        icon: <LuSearch />,
        title: "Improved SEO & Indexability",
        description: "Boost your search engine visibility with server-side rendering and dynamic content preloading.",
      },
      {
        icon: <LuLayoutGrid />,
        title: "Modular & Reusable Components",
        description: "Develop faster with reusable components that follow a clean, scalable architecture.",
      },
      {
        icon: <LuGlobe />,
        title: "Global Accessibility & Localization",
        description: "Deliver content in multiple languages and formats, making your app globally accessible.",
      },
    ],
  };

  const introductionData = {
    title: "Why Choose Us",
    title2: "<b>Why Cyberpeak</b> is the partner you need?",
    subtitle: "CyberPeak IT Solutions creates Headless PWAs that provide a smooth, app-like experience across all devices.",
    buttonText: "Let's Talk",
    buttonLink: "/contact",
    highlightTitle: "The CyberPeak Difference in Headless PWA Development",
    // gradientColors: "bg-gradient-to-br from-white via-[#002440] to-[#002440]",
    bullets: [
      "Built with a flexible, headless CMS architecture for maximum control.",
      "Deliver app-like experiences on mobile and desktop via PWA.",
      "Easily scale and upgrade as your business grows.",
      "Front-end and back-end are decoupled for faster innovation.",
      "Future-proof tech stack tailored to your organization’s goals.",
    ],
    features: [
      {
        id: 1,
        icon: <FaRocket />,
        title: "Fast Deployment",
        desc: "Get your Headless PWA to market quickly without compromising quality.",
      },
      {
        id: 2,
        icon: <FaCogs />,
        title: "Custom Integrations",
        desc: "Built to seamlessly integrate with your CMS or backend systems.",
      },
      {
        id: 3,
        icon: <FaChartLine />,
        title: "Scalability",
        desc: "Our solutions grow as your business grows – future-ready tech.",
      },
      {
        id: 4,
        icon: <FaLightbulb />,
        title: "Innovation",
        desc: "Always evolving with the latest web technologies to keep you ahead.",
      },
    ],
  };

  const servicesData = {
    title: "Our Process",
    servicesData: [
      {
        id: "step1",
        title: "Discovery & Requirements Gathering",
        description: "We begin by understanding your business goals and technical environment to assess whether a Headless PWA is the right fit. We analyze current systems, user flows, and key challenges to define the roadmap.",
        icon: <FaChartLine />,
        image: "/images/services/requirement-gathering.jpg",
      },
      {
        id: "step2",
        title: "Strategy & Architecture Planning",
        description: "Our experts define the frontend-backend decoupling strategy and select the ideal headless CMS, frontend frameworks, and API integrations. We prioritize scalability, performance, and flexibility.",
        icon: <FaBoxOpen />,
        image: "/images/services/planning.avif",
      },
      {
        id: "step3",
        title: "UI/UX Design for PWA Experience",
        description: "We design intuitive, mobile-first interfaces tailored for Progressive Web App behavior — ensuring lightning-fast performance, offline access, and seamless cross-device experience.",
        icon: <FaMobile />,
        image: "/images/services/design.jpg",
      },
      {
        id: "step4",
        title: "Headless Frontend Development",
        description: "Our development team builds the PWA using modern JavaScript frameworks like React or Vue. We integrate it with APIs from your headless CMS and backend systems, ensuring modularity and maintainability.",
        icon: <FaShoppingCart />,
        image: "/images/services/frontend-development.avif",
      },
      {
        id: "step5",
        title: "Testing Across Devices & Environments",
        description: "We conduct thorough PWA testing—verifying offline behavior, push notifications, performance benchmarks, and cross-browser compatibility—to ensure reliability on all devices.",
        icon: <FaExchangeAlt />,
        image: "/images/services/testing.avif",
      },
      {
        id: "step6",
        title: "Deployment & Continuous Optimization",
        description: "We launch your Headless PWA with CI/CD pipelines and provide post-launch monitoring, analytics integration, SEO enhancements, and iterative improvements to boost user engagement.",
        icon: <FaBullhorn />,
        image: "/images/services/deployement.jpg",
      },
    ],
  };

  return (
    <Grandchild
      heroData={heroData}
      featuresData={featuresData}
      introductionData={introductionData}
      servicesData={servicesData}
    />
  );
}
